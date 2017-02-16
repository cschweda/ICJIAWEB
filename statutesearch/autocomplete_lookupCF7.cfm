<cfsilent>


<cfsetting showDebugOutput=false>
<cfsetting enablecfoutputonly="true">
<cfprocessingdirective suppresswhitespace="true">


<cfsetting showdebugoutput="no" enablecfoutputonly="yes">
<cfparam name="url.term" default="" />
<cfset returnArray = ArrayNew(1) />



<cfquery name="qry_GetWords" datasource="statutetable" cachedwithin="#createtimespan(0,0,0,0)#">



SELECT wording
FROM tbl_WordsinDB
where wording like '%#url.term#%'
order by wording
</cfquery>
<CFSET i=qry_GetWords.RecordCount-qry_GetWords.RecordCount+1>
<CFSET iCommaStarted=false>
<!--- create the JSON response --->
<cfsavecontent variable="variables.sOutput">
	<CFOUTPUT>[</CFOUTPUT>
	<cfoutput query="qry_GetWords">{"value":"#wording#","id":"#i#"}<CFSET i=i+1><CFIF i LTE qry_getWords.RecordCount>,</CFIF></cfoutput>
	<CFOUTPUT>]</CFOUTPUT>
</cfsavecontent>
</cfprocessingdirective>
</cfsilent>
<cfoutput>#variables.sOutput#</cfoutput>