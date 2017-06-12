

<CFIF isDefined("url.txtSearchTerm")>
	<CFSET txtSearchTerm=url.txtSearchTerm>
<CFELSE>
	<CFSET txtSearchTerm="abuse">
</CFIF>


<CFSET txtSearchTerm=#Replace(txtSearchTerm, "and", "AND")#>
<CFSET txtSearchTerm=#Replace(txtSearchTerm, "not", "NOT")#>















<CFSEARCH collection="statutes"
		  name="getResults"
		  criteria="#txtSearchTerm#">
		    
		   <!--- <CFDUMP var="#getResults#">
			<CFABORT>--->


<!---<CFOUTPUT>#txtSearchTerm# -- #getResults.RecordCount#</CFOUTPUT>


<CFDUMP var="#getResults#">--->


<br/>


<CFIF getResults.RecordCount GT 0>
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

<table cellpadding="0" style="width: 940px" cellspacing="0" border="0" class="display" id="basicTable"> 
		<thead> 
			<tr>
			<!---<th>ID</th>--->
			<th >Code</th>
			<th >Title</th>
			
			
			<th >Sentence Determinant</th>
			<th >Offense Class</th>
			
			
			<th >Jail sentence and fine, if imposed</th>
			<th >Mandatory Minimums</th>
			<th >Truth in Sentencing</th>
			
			<th >Notes</th>
			</tr>
		</thead>
		<tbody>
<CFoutput query="getResults">
	
	
	
	
	
	
	<CFSET strTitle=title>
	<CFSET strNotes=custom3>
	<CFSET strSentenceDeterminant=custom2>
	
	<CFset strList1 = ListToArray(custom1,"*")>
	<CFset strList2 = ListToArray(custom4,"*")>
	
	
			<tr>
				
				<!---<td>#key#</td>--->
				
				<td>
						<CFTRY>
							<CFSET displayID="forms/queryStatutes-display2.cfm?id=" & KEY>
							<a href="#displayID#" class="fbox-modal-large" title="#trim(strList1[1])#">#strList1[1]#</a>
							<CFCATCH>ERROR!</CFCATCH>
						</CFTRY>
				</td>
				
				
				<td>#title#</td>
				
				<td>#custom2#</td>
				
				
				
				<td><CFTRY>#strList1[2]#<CFCATCH>ERROR!</CFCATCH></CFTRY></td>
				
				
				
				<td><CFTRY>#strList1[3]#<CFCATCH>ERROR!</CFCATCH></CFTRY></td>
				
				<td><CFTRY>#strList2[1]#<CFCATCH>ERROR!</CFCATCH></CFTRY></td>
				<td><CFTRY>#strList2[2]#<CFCATCH>ERROR!</CFCATCH></CFTRY></td>
				
				
				<td>#custom3#</td>
				
				
				
			</tr>
	
	
	
	
	
	
	
</CFOUTPUT>
</tbody>
</table>


<CFELSE>
<b>No matching records found.</b>


</cfif>

<script>


//$( "#colToggles" ).buttonset();
				
$('#basicTable').dataTable( {
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
			"sSwfPath": "swf/copy_cvs_xls_pdf.swf",
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
	
	/* 
	 * 
	 * "bJQueryUI": true,

		"sDom": '<"H"lfr>t<"F"ip>',

	*/
			   
		$('#clearAndReset').click(function() {
               location.reload();
            });	
			
			 
			 function fnShowHide( iCol )
			{
				/* Get the DataTables object again - this is not a recreation, just a get of the object */
				var oTable = $('#basicTable').dataTable();
				
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


