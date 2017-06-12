<!--- JQuery includes --->


<cfparam name="url.pf" default="false">
<cfparam name="url.id" default="1">
<cfparam name="strStatute" default=""> 
<cfparam name="strText" default="">
<cfparam name="strTitle" default="">
<cfparam name="strSD" default="">

<cfquery name="getStatute" datasource="statutetable">

	SELECT "Statute Text" as statuteText, FullStatuteFK, OffenseTitle, Statute, SentenceDeterminant, Notes
	from tbl_Statutes
	WHERE ID=#URL.ID#
</cfquery>

<cfset fsid = getStatute.FullStatuteFK>
<cfset strSD=getStatute.SentenceDeterminant>

<cfset strStatute=getStatute.Statute>
<cfif FSID NEQ 1>
	<!--- full statute text is in the separate tlu_statute. We do a second query to get it. --->
	<cfquery name="getFullStatute" datasource="statutetable">
		Select * from tlu_FullStatute where FullStatuteKey=#fsid#
	</cfquery>
	<cfset strTitle = getFullStatute.FullStatuteBrief>
	<cfset strText = #replace(getFullStatute.FullStatuteText, "@0@", "<br/><br/>", "ALL")#>
	<cfset strText = #replace(strText, "@1@", "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "ALL")#>
	<cfset strText = #replace(strText, "@2@", "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;","ALL")#>

<cfelse>
	<!--- full statute text is in the tbl_statutes --->
	<cfset strTitle = getStatute.OffenseTitle>
	<cfset strText = #replace(getStatute.StatuteText, "@0@", "<br/><br/>", "ALL")#>
	<cfset strText = #replace(strText, "@1@", "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "ALL")#>
	<cfset strText = #replace(strText, "@2@", "<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;","ALL")#>
</cfif>

<!DOCTYPE HTML>


<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />



<head>

<link href="/_themes/icjia/css/icjia.css" rel="stylesheet" property="stylesheet">





<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js">

</script>

<style>
	body {
  font: 12px/1.5 Arial, sans-serif;
  background-color: #F9F9F9;
  color: #42423a;
}

.box {margin-left: 25px; margin-right: 15px; background-color: #F9F9F9;}
.uc {text-transform: uppercase}
.display-window {margin-left: 25px; margin-right: 25px; width: auto}
</style>
</head>

<body>
<!---<CFDUMP var="#getStatute#">--->

<div class="display-window">
	<div class="">
<cfoutput>
<h4 >#strStatute#</h4>
	<h4>
		#strTitle#
	</h4>
	
	
	<hr/>
	<h5 class="uc">Sentence determinant:</h5>
	<p class="box">
		#strSD#
	</p>
	<br/>
	
	<h5 class="uc">Full statute:</h5>
	<p class="box">
	#strText#
	</p>
	<br/>
	<br/>
	<hr/>
	<div class="disclaimer" style="margin-bottom: 10px;">
				<a href="http://www.icjia.state.il.us" target="_blank">
				<img border="0" src="/assets/img/small-icjia.jpg" alt="Illinois Criminal Justice Information Authority" style="float: left">
				</a>
			
			
			
			</div>

	
	
</cfoutput>
</div> 
</div>
</body>
</html>