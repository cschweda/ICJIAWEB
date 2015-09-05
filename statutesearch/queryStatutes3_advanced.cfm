

<cfparam name="URL.txtSearchTerm_adv" default="" type="string" >

<cfparam name="URL.cboSentences" default="0" type="integer">
<cfparam name="URL.cboTIS" default="0" type="integer">

<cfparam name="URL.ckSentenceCS" default="false" type="boolean">
<cfparam name="URL.ckSentenceFine" default="false" type="boolean">
<cfparam name="URL.ckSentence1Year" default="false" type="boolean">
<cfparam name="URL.ckSentenceOverOneYear" default="false" type="boolean">


<cfparam name="URL.ckRegSexOffender" default="false" type="boolean">
<cfparam name="URL.MethRegRequired" default="false" type="boolean">
<cfparam name="URL.ckRegArson" default="false" type="boolean">
<cfparam name="URL.ckRegViolentVsChildren" default="false" type="boolean">

<cfparam name="URL.ckRegMeth" default="false" type="boolean">
<cfparam name="URL.ckMandIDOC" default="false" type="boolean">
<cfparam name="URL.ckTranAdultCourt" default="false" type="boolean">



<!--- Offense class defaults --->

<cfparam name="URL.ckMurder" default="false" type="boolean">
<cfparam name="URL.ckClassA" default="false" type="boolean">
<cfparam name="URL.ckPetty" default="false" type="boolean">

<cfparam name="URL.ckClassX" default="false" type="boolean">
<cfparam name="URL.ckClassB" default="false" type="boolean">
<cfparam name="URL.ckBusiness" default="false" type="boolean">

<cfparam name="URL.ckClass1" default="false" type="boolean">
<cfparam name="URL.ckClassC" default="false" type="boolean">
<cfparam name="URL.ckEquipment" default="false" type="boolean">

<cfparam name="URL.ckClass2" default="false" type="boolean">
<cfparam name="URL.ckTraffic" default="false" type="boolean">

<cfparam name="URL.ckClass3" default="false" type="boolean">
<cfparam name="URL.ckClass4" default="false" type="boolean">


<cfparam name="URL.ckDebug" default="true" type="boolean">


<!--- strip quotation marks --->

<CFSET temp=REReplace(txtSearchTerm_adv,chr(34),"","all")>
<CFSET txtSearchTerm_adv=temp>


<!---
<CFOUTPUT>#txtSearchTerm_adv#</CFOUTPUT>--->

<cfif ckMurder or ckClassA or ckPetty or ckClassX or ckClassB or ckBusiness or ckClass1 or ckClassC or ckEquipment or ckClass2 or ckTraffic or ckClass3 or ckClass4>
	<cfset ckUseOffenseClass=TRUE>
	<cfset iOffenseClassesChecked=1>
<cfelse>
	<cfset ckUseOffenseClass=FALSE>
	<cfset iOffenseClassesChecked=0>
</CFIF>



<!--- End Offense class defaults --->











<CFSET strSQL="SELECT s.ID, s.Code, s.statute, s.section, s.OffenseTitle, s.SentenceDeterminant, s.FullStatuteFK, s.PenaltySubsection, s.OfnsClass, s.SentenceRangeText, s.MandatoryMinimums, s.MandatoryIncarceration, s.SubsequentOffns, s.Notes, s.DisplayMe, s.TruthinSentencingText
FROM  (((((((((tbl_Statutes as S ">
<CFSET iAndStarted = 0>
<CFSET iSubAndStarted=0>
<CFSET iOrStarted=0>
<CFSET iCommaStarted=0>
<CFSET iParenCount=9>


<!--- Dummy

<cfset iOffenseClassesChecked =1>
<cfset ckMurder=True>
<cfset ckUseOffenseClass=true>
--->

<CFIF ckSentenceCS or ckSentenceFine or ckSentence1Year or ckSentenceOverOneYear>
	<CFSET strSQL = strSQL & " INNER JOIN tlu_MandatoryMinimum as MM ON ">
	<CFSET strSQL = strSQL & " MM.MandatoryMinimums = s.MandatoryMinimums) ">
	<CFSET iParenCount = iParenCount - 1>

</CFIF>

<cfif iOffenseClassesChecked eq 1>
        <cfset strSQL = strSQL & " INNER JOIN tlu_OffenseClasses as oc on s.OfnsClass = oc.OfnsClass) ">
        <cfset strSQL = strSQL & " INNER JOIN tlu_OffClassChoices As ocChoices ON oc.OffChoiceCode = ocChoices.OffclassKey) ">
        <CFSET iParenCount = iParenCount - 2>
 </CFIF>



 <!--- TIS --->
<cfif cboTIS GT 0>
    <CFSET strSQL = strSQL & "INNER JOIN tlu_TIS as tis on s.TruthInSentencingText = tis.TruthInSentencing) ">
    <CFSET iParenCount = iParenCount - 1>
</CFIF>






<CFSCRIPT>
     loop_ct=0;
     Do
     {
          strSQL = strSQL & ")";
          iParenCount = iParenCount - 1;
     }
     While (loop_ct LT iParenCount);
</CFSCRIPT>






<CFIF ckSentenceCS or ckSentenceFine or ckSentence1Year or ckSentenceOverOneYear>
	<CFSET iOrStarted = 0>

	<CFIF ckSentence1Year>
		<CFSET strSQL = strSQL & "  WHERE (mm.sentencelt1yr = TRUE ">
		<CFSET iOrStarted = 1>
		<CFSET iAndStarted = 1>
	</CFIF>

	<CFIF ckSentenceCS>
		<cfif iAndStarted eq 1>
            <CFSET strSQL = strSQL & " and ">
        <cfelse>
           	<CFSET strSQL = strSQL & " WHERE (">
           	<CFSET iAndStarted = 1>
         </cfIf>
        <CFSET strSQL = strSQL & " mm.CommunityService = TRUE ">
        <CFSET iAndStarted = 1>
	</CFIF>

	<CFIf ckSentenceFine>
        <cfif iAndStarted eq 1>
            <cfset strSQL = strSQL & " and ">
        <cfelse>
           <cfset strSQL = strSQL & " WHERE(">
           <cfset iAndStarted = 1>
       </CFIF>
        <CFSET strSQL = strSQL & " mm.SentenceFine = TRUE ">
        <cfset iAndStarted = 1>
    </CFIF>


	<cfif ckSentenceOverOneYear>
        <cfif iAndStarted eq 1>
            <cfset strSQL = strSQL & " and ">
        <cfelse>
            <cfset strSQL = strSQL & " WHERE(">
            <cfset iAndStarted = 1>
        </cfif>
        <cfset strSQL = strSQL & " mm.SentenceGT1Yr = TRUE ">
        <cfset iAndStarted = 1>
    </cfif>

    <CFIF iAndStarted eq 1>
        <CFSET strSQL = strSQL & ")">
    </cfif>

</CFIF>


<CFIF Len(txtSearchTerm_adv) GT 2>
    <cfif iAndStarted eq 1>
        <CFSET strSQL = strSQL & " AND ">
    <cfelse>
    	<cfset strSql = strSql & " WHERE ">
        <cfset iAndStarted = 1>
    </cfif>

    <cfset strSQL = strSQL & " ( s.offensetitle LIKE '%" & txtSearchTerm_adv & "%' ">
    <cfset strSQL = strSQL & "  OR s.SentenceDeterminant LIKE '%" & txtSearchTerm_adv & "%' )">

</cfif>






<cfif cboSentences gt 0>


<cfswitch expression="#cboSentences#">

			<cfcase value="1">
				<cfIf iAndStarted eq 1>
                    <cfset strSQL = strSQL & " AND ">
                <cfelse>
                	<cfset strSQL = strSQL & " WHERE ">
                   <cfset iAndStarted = 1>
                </cfif>
                <cfset strSQL = strSQL & " s.imprisonmentApplies > 0 and s.maxMonths < 12 ">
			</cfcase>


			<cfcase value="2">
				<cfIf iAndStarted eq 1>
                    <cfset strSQL = strSQL & " AND ">
                <cfelse>
                	<cfset strSQL = strSQL & " WHERE ">
                   <cfset iAndStarted = 1>
                </cfif>
                <cfset strSQL = strSQL & " s.imprisonmentApplies > 0 and s.maxMonths < 7 ">
			</cfcase>

			<cfcase value="3">
				<cfIf iAndStarted eq 1>
                    <cfset strSQL = strSQL & " AND ">
                <cfelse>
                	<cfset strSQL = strSQL & " WHERE ">
                   <cfset iAndStarted = 1>
                </cfif>
                <cfset strSQL = strSQL & " s.imprisonmentApplies > 0 and s.maxMonths < 2 ">
			</cfcase>


			<cfcase value="4">
				<cfIf iAndStarted eq 1>
                    <cfset strSQL = strSQL & " AND ">
                <cfelse>
                	<cfset strSQL = strSQL & " WHERE ">
                   <cfset iAndStarted = 1>
                </cfif>
                <cfset strSQL = strSQL & " s.imprisonmentApplies > 0 and s.maxMonths < 37 ">
			</cfcase>


			<cfcase value="5">
				<cfIf iAndStarted eq 1>
                    <cfset strSQL = strSQL & " AND ">
                <cfelse>
                	<cfset strSQL = strSQL & " WHERE ">
                   <cfset iAndStarted = 1>
                </cfif>
                <cfset strSQL = strSQL & " s.imprisonmentApplies > 0 and s.maxMonths < 61 ">
			</cfcase>


			<cfcase value="6">
				<cfIf iAndStarted eq 1>
                    <cfset strSQL = strSQL & " AND ">
                <cfelse>
                	<cfset strSQL = strSQL & " WHERE ">
                   <cfset iAndStarted = 1>
                </cfif>
                <cfset strSQL = strSQL & " s.imprisonmentApplies > 0 and s.maxMonths < 181 ">
			</cfcase>


			<cfcase value="7">
				<cfIf iAndStarted eq 1>
                    <cfset strSQL = strSQL & " AND ">
                <cfelse>
                	<cfset strSQL = strSQL & " WHERE ">
                   <cfset iAndStarted = 1>
                </cfif>
                <cfset strSQL = strSQL & " s.imprisonmentApplies > 0 and s.maxMonths < 361 ">
			</cfcase>


			<cfcase value="8">
				<cfIf iAndStarted eq 1>
                    <cfset strSQL = strSQL & " AND ">
                <cfelse>
                	<cfset strSQL = strSQL & " WHERE ">
                   <cfset iAndStarted = 1>
                </cfif>
                <cfset strSQL = strSQL & " s.imprisonmentApplies > 0 and s.maxMonths = 4000 ">
			</cfcase>


			<cfcase value="9">
				<cfIf iAndStarted eq 1>
                    <cfset strSQL = strSQL & " AND ">
                <cfelse>
                	<cfset strSQL = strSQL & " WHERE ">
                   <cfset iAndStarted = 1>
                </cfif>
                <cfset strSQL = strSQL & " s.imprisonmentApplies > 0 and s.maxMonths = 8000 ">
			</cfcase>




</cfswitch>


</cfif>





<cfif cboTIS gt 0>



				<cfIf iAndStarted eq 1>
                    <cfset strSQL = strSQL & " AND ">
                <cfelse>
                	<cfset strSQL = strSQL & " WHERE ">
                   <cfset iAndStarted = 1>
                </cfif>
                <cfset strSQL = strSQL & " tis.truthID = " & #cboTIS#>



</cfif>








	<CFIF ckRegArson>
        <cfIf iAndStarted eq 1>
            <cfset strSQL = strSQL & " AND ">
        <cfElse>
        	<cfset strSQL = strSQL & " WHERE ">
            <cfset iAndStarted = 1>
        </cfif>
        <cfset strSQL = strSQL & " s.ArsonRegRequired = TRUE ">
    </cfif>




	<CFIF ckRegMeth>
        <cfIf iAndStarted eq 1>
            <cfset strSQL = strSQL & " AND ">
        <cfElse>
        	<cfset strSQL = strSQL & " WHERE ">
            <cfset iAndStarted = 1>
        </cfif>
        <cfset strSQL = strSQL & " s.MethRegRequired = TRUE ">
    </cfif>


	<CFIF ckRegSexOffender>
        <cfIf iAndStarted eq 1>
            <cfset strSQL = strSQL & " AND ">
        <cfElse>
        	<cfset strSQL = strSQL & " WHERE ">
            <cfset iAndStarted = 1>
        </cfif>
        <cfset strSQL = strSQL & " s.SexOffenderRegRequired = TRUE ">
    </cfif>

	<CFIF ckRegViolentVsChildren>
        <cfIf iAndStarted eq 1>
            <cfset strSQL = strSQL & " AND ">
        <cfElse>
        	<cfset strSQL = strSQL & " WHERE ">
            <cfset iAndStarted = 1>
        </cfif>
        <cfset strSQL = strSQL & " s.ViolentOffenderYouthRegRequired = TRUE ">
    </cfif>


	<CFIF ckTranAdultCourt>
        <cfIf iAndStarted eq 1>
            <cfset strSQL = strSQL & " AND ">
        <cfElse>
        	<cfset strSQL = strSQL & " WHERE ">
            <cfset iAndStarted = 1>
        </cfif>
        <cfset strSQL = strSQL & " s.TransferJuvToAdultCourt = TRUE ">
    </cfif>

	<CFIF ckMandIDOC>
        <cfIf iAndStarted eq 1>
            <cfset strSQL = strSQL & " AND ">
        <cfElse>
        	<cfset strSQL = strSQL & " WHERE ">
            <cfset iAndStarted = 1>
        </cfif>
        <cfset strSQL = strSQL & " s.MandatoryIDOC = TRUE ">
    </cfif>






<!--- Is an offense class checked? --->
<cfif ckUseOffenseClass>




	<cfset iCommaStarted=0>
	<cfset sOffenseList="(">

	<cfif ckMurder>
        <cfset sOffenseList = sOffenseList & "1">
        <cfset iCommaStarted = 1>
    </cfif>

	<cfif ckClassX>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "2">

    </cfif>

	<cfif ckClass1>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "3">

    </cfif>


	<cfif ckClass2>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "4">

    </cfif>

	<cfif ckClass3>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "5">

    </cfif>


	<cfif ckClass4>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "6">

    </cfif>


	<cfif ckClassA>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "10">

    </cfif>

	<cfif ckClassB>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "11">

    </cfif>

	<cfif ckClassC>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "12">

    </cfif>


	<cfif ckPetty>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "15">

    </cfif>

	<cfif ckBusiness>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "16">

    </cfif>


	<cfif ckEquipment>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "17">

    </cfif>

	<cfif ckTraffic>
		<cfif iCommaStarted eq 1>
			<cfset sOffenseList=sOffenseList & ",">
		<cfelse>
			<cfset iCommaStarted=1>
		</cfif>
        <cfset sOffenseList = sOffenseList & "18">

    </cfif>







	<cfif iCommaStarted eq 1>
		<cfif iAndStarted eq 1>
			<cfset strSQL=strSQL & " AND ">
		<cfelse>
			<cfset strSQL=strSQL & " WHERE ">
			<cfset iAndStarted=1>
		</cfif>
		<cfset strSQL=strSQL & " ocChoices.offclasskey in " & sOffenseList & ")">
	</cfif>


</cfif>







<CFTRY>


<CFQUERY name="qryStatute" datasource="statutetable">

#preserveSingleQuotes(strSQL)#


</CFQUERY>


<CFCATCH>

SQL String (ERROR!): <br/>

<CFOUTPUT>#strSQL#</CFOUTPUT>

</CFCATCH>

</CFTRY>





<!--- log statute queries --->

<CFOUTPUT>

<!---
<CFTRY>
		<CFQUERY name="qryInsert" datasource="#APPLICATION.DBNAME#">

			INSERT INTO statuteQueries (qrySQL, qryDate, qryIP)
			VALUES ('#strSQL#',#createODBCDateTIme(now())#,'#CGI.REMOTE_ADDR#')

		</CFQUERY>




<CFCATCH>

	Query logging error. Query not logged. <br/>

</CFCATCH>

</CFTRY>
--->

</CFOUTPUT>


<!---
<cfif ckDebug>
<div class="SQLbox" style="width: 99%; padding: 5px; border: 1px solid #ccc; background: #eee">

<h3>Query String:</h3>
<CFOUTPUT>#CGI.QUERY_STRING#</CFOUTPUT>
<br/><br/>
<h3>SQL String:</h3>
<CFOUTPUT>#strSQL#</CFOUTPUT>
<br/><br/>


<br/>
</div>

<div class="SQLbox" style="width: 99%; padding: 5px; border: 1px solid #ccc; background: #eee">

<h3>Output:</h3>

</div>




</cfif>--->



<br/>





<CFIF qryStatute.recordcount gt 0>








<h5>Show/hide columns:</h5>
<div id="colToggles" style="background: #ddd; width: 930px; font-size: 11px; border: 1px solid #bbb; padding: 2px; padding-top: 5px; margin-bottom: 20px;">

	<div id="toggleBoxes" >
	<input type="checkbox" id="codeToggle" style="vertical-align: middle;" checked /><label for="codeToggle" class="toggleLabel">Code</label>

	<input type="checkbox" id="titleToggle" style="vertical-align: middle;" checked /><label class="toggleLabel" for="titleToggle">Title  </label>
	<input type="checkbox" id="sdToggle" style="vertical-align: middle;" checked /><label class="toggleLabel" for="sdToggle">Sentence Determinant</label>
	<input type="checkbox" id="ocToggle" style="vertical-align: middle;" checked /><label class="toggleLabel" for="ocToggle">Offense Class  </label>
	<input type="checkbox" id="jsToggle" style="vertical-align: middle;" checked /><label class="toggleLabel" for="jsToggle">Jail sentence and fine</label>
	<input type="checkbox" id="mmToggle" style="vertical-align: middle;" checked /><label class="toggleLabel" for="mmToggle">Mandatory Minimums</label>
	<input type="checkbox" id="tisToggle" style="vertical-align: middle;" checked /><label class="toggleLabel" for="tisToggle">Truth in Sentencing</label>



	<input type="checkbox" id="notesToggle" style="vertical-align: middle;" checked /><label for="notesToggle" class="toggleLabel">Notes</label>
	</div>
</div>























			<div id="demo">
<table cellpadding="0" style="width: 100%; " cellspacing="0" border="0" class="display" id="advancedTable">



							<thead>



								<tr >
									<th style="width: 15%">Code</td>
									<th style="width: 20%">Title</td>
									<th style="width: 10%">Sentence&#10;<br/>Determinant</td>
									<!---<th style="width: 50px">Penalty&#10;Subsection</td>--->
									<th style="width: 5%">Offense&#10;Class</td>
									<th style="width: 5%">Jail sentence and fine, if imposed</td>
									<th style="width: 10%">Mandatory&#10;<br/>Minimums</td>
									<th style="width: 5%">Truth in&#10;<br/>Sentencing</td>
									<th style="width: 30%">Notes&nbsp;</td>







								</tr>
							</thead>
							<tbody>

							<tr>




							<CFOUTPUT query="qryStatute">




								<td >





								<Cfif len(code) GT 0>
									<!---<a href="##">#trim(statute)#</a>--->
										<CFSET displayID="queryStatutes-display2.cfm?id=" & ID>
									<a href="#displayID#" target="_blank"class="fbox-modal-large" title="#trim(statute)#">#trim(statute)#</a>
								<cfelse>
									&nbsp;
								</cfif>
								</td>

								<td>

								<Cfif len(OffenseTitle) GT 0>
									#trim(OffenseTitle)#
								<cfelse>
									&nbsp;
								</cfif>

								</td>


								<td style="vertical-align:middle">
									<Cfif len(SentenceDeterminant) GT 0>
									#trim(SentenceDeterminant)#
								<cfelse>
									&nbsp;
								</cfif>


								</td>

								<!---<td style="text-align: center; vertical-align:middle">

									<Cfif len(PenaltySubsection) GT 0>
									#Trim(PenaltySubsection)#
								<cfelse>
									&nbsp;
								</cfif>

								</td>--->

								<td style="text-align: center; vertical-align:middle">

								<Cfif len(OfnsClass) GT 0>
									#Trim(OfnsClass)#
								<cfelse>
									&nbsp;
								</cfif>


								</td>

								<td style="vertical-align:middle">
									<Cfif len(SentenceRangeText) GT 0>
									#Trim(SentenceRangeText)#
								<cfelse>
									&nbsp;
								</cfif>


								</td>

								<td style="vertical-align:middle; ">
									<Cfif len(MandatoryMinimums) GT 0>
									#Trim(MandatoryMinimums)#
								<cfelse>
									&nbsp;
								</cfif>


								</td>


								<td style="vertical-align:middle; ">
									<Cfif len(TruthInSentencingText) GT 0>
									#Trim(TruthInSentencingText)#
								<cfelse>
									&nbsp;
								</cfif>


								</td>

								<td style="vertical-align:middle; width: 200px ">
									<Cfif len(notes) GT 0>
									#Trim(notes)#
								<cfelse>
									&nbsp;
								</cfif>


								</td>










							</tr>
							</CFOUTPUT>
							</tbody>




</table>
<div style="clear:both"></div>





</div>

<!---
<div style="clear: both">
<input id="clearAndReset" type="button" value="Clear and Reset" />
</div>--->


<CFELSE>
<b>No matching records found.</b>


</cfif>




<script>


$('#advancedTable').dataTable( {
		"aLengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],

		"sPaginationType": "full_numbers",

		"oLanguage": {
			"sSearch": "Filter results:"
		},

		"bJQueryUI": true,

		"sDom": 'T<"clear"><"H"lfr>t<"F"ip>',

		"bRetrieve":true,

		"bDeferRender": true,

		"oTableTools": {
			"sSwfPath": "./swf/copy_cvs_xls_pdf.swf",
			"aButtons": [ "copy", "print", "pdf" ]
		},
		"aoColumns": [
		{ "sWidth": "185px" },
		{ "sWidth": "120px" },
		{ "sWidth": "94px", "bSortable": false },
		{ "sWidth": "45px" },
		{ "sWidth": "45px", "bSortable": false },
		{ "sWidth": "94px", "bSortable": false },
		{ "sWidth": "45px", "bSortable": false },
		{ "sWidth": "270px", "bSortable": false }

	]






	} );



		$('#clearAndReset').click(function() {
               location.reload();
            });


			 function fnShowHide( iCol )
			{
				/* Get the DataTables object again - this is not a recreation, just a get of the object */
				var oTable = $('#advancedTable').dataTable();

				var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
				oTable.fnSetColumnVis( iCol, bVis ? false : true );
			}


	$(":checkbox").click(function(){

	var id = $(this).attr('id');

	switch (id)
		{
		case 'codeToggle':
		  fnShowHide(0);
		  break;
		case 'titleToggle':
		  fnShowHide(1);
		  break;
		 case 'sdToggle':
		  fnShowHide(2);
		  break;

		  case 'ocToggle':
		  fnShowHide(3);
		  break;

		  case 'jsToggle':
		  fnShowHide(4);
		  break;

		  case 'mmToggle':
		  fnShowHide(5);
		  break;

		  case 'tisToggle':
		  fnShowHide(6);
		  break;



		  case 'notesToggle':
		  fnShowHide(7);
		  break;

		}


})





</script>
