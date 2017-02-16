<CFSET boolFirstButton=true>
<cfparam name="URL.term" default="" type="string" >
<cfparam name="URL.tab" default="0" type="integer" >

<!--- Remove all other tags from variable --->

<CFSET term = REReplace(term, "<[^>]*>", "", "All")>

<!--- Remove any SQL commands from URL variables --->
<CFSET term=REReplaceNoCase(term,'DROP','','ALL')>
<CFSET term=REReplaceNoCase(term,'SCRIPT','','ALL')>
<CFSET term=REReplaceNoCase(term,'CNTRL','','ALL')>
<CFSET term=REReplaceNoCase(term,'SELECT','','ALL')>
<CFSET term=REReplaceNoCase(term,'DELETE','','ALL')>
<CFSET term=REReplaceNoCase(term,'ALTER','','ALL')>
<CFSET term=REReplaceNoCase(term,'WHERE','','ALL')>
<CFSET term=REReplaceNoCase(term,'[*]*','','ALL')>
<CFSET term=REReplaceNoCase(term,'[;]*','','ALL')>





<cfquery name="qrySynonyms" datasource="statutetable">


SELECT  wording as word, `use instead` as synonyms FROM tbl_WordsinDB WHERE Wording='#term#'


</cfquery>






<CFIF qrySynonyms.RecordCount gt 0 and len(qrySynonyms.synonyms) gt 0>

<span class="synonymButtons" style="font-size: 11px; font-weight: bold; background: #fff; padding: 5px; border: 0px dotted #bbb"> 
<cfloop list="#qrySynonyms.synonyms#" index="i" delimiters=",">
  <cfoutput>
   <!---<button style="vertical-align: middle;" value="#trim(i)#"><cfif boolFirstButton>Did you mean <cfset boolFirstButton=false></cfif>#trim(i)#?</button> --->
   <cfif boolFirstButton>Did you mean <cfset boolFirstButton=false><cfelse>&nbsp;Or</cfif>
   "<a href="##" class="synonym-anchor" style="color: ##22356a">#trim(i)#</a>"?
   
 </cfoutput>
</cfloop>
<!---<CFOUTPUT>Tab: #tab#</CFOUTPUT>--->
</span>



<!---
<script> 
	$(function() {
		$( "button", ".synonymButtons" ).button();
		
		$( "button", ".synonymButtons" ).click(function() { 
			 //alert($(this).attr("value"));
			// strNewTerm = $(this).attr("value");
			 //$('#txtSearchTerm').val(strNewTerm);
			 
			  $( "button", ".synonymButtons" ).blur();
			 
			//FIX for IE since it doesn't properly grab the value
			// See: http://stackoverflow.com/questions/487056/retrieve-button-value-with-jquery
			if ($.browser.msie) {
				$('#synonymDisplay').html('&nbsp;')
				var label = $(this).text();
				$(this).text('');
				var strNewTerm = $(this).val();
				$(this).text(label);
				$('#txtSearchTerm').val(strNewTerm);
			} else {
				
				//otherwise, the standard way
				$('#synonymDisplay').html('&nbsp;');
				strNewTerm = $(this).attr("value");
			 	$('#txtSearchTerm').val(strNewTerm);
			}
			 
		});
	});
</script> 
--->

<script> 
	$(function() {
		
		
				$('a.synonym-anchor').click(function(){
			
						var strNewTerm = '"' + $(this).text() + '"';
						
						if ($.browser.msie) {
							$('#synonymDisplay').html('')
							var label = $(this).text();
							$(this).text('');
							//var strNewTerm = $(this).val();
							//alert(strNewTerm)
							$(this).text(label);
							<CFIF tab eq 0>
								$('#txtSearchTerm').val(strNewTerm);
							<CFELSE>
								$('#txtSearchTerm_adv').val(strNewTerm);
							</CFIF>
							
						} else {
				
							//otherwise, the standard way
							$('#synonymDisplay').html('');
							//var strNewTerm = $(this).text();
							//alert(strNewTerm)
			 				<CFIF tab eq 0>
								$('#txtSearchTerm').val(strNewTerm);
							<CFELSE>
								$('#txtSearchTerm_adv').val(strNewTerm);
							</CFIF>
			}
						
						
						
						$('#txtSearchTerm').focus();
						return false;
				});
		
		
		});
</script>



</CFIF>