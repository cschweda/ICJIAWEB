<cfsetting showdebugoutput="no" enablecfoutputonly="yes">
<cfparam name="url.term" default="" />
<cfset returnArray = ArrayNew(1) />



<cfquery name="qry_GetWords" datasource="statutetable" cachedwithin="#createtimespan(0,0,0,5)#">



SELECT wording
FROM tbl_WordsinDB
where wording like '%#url.term#%'
order by wording
</cfquery>

<cfset i=1>
<cfloop query="qry_GetWords">
    <cfset wordStruct = StructNew() />
    <cfset wordStruct["id"] = javacast("int", i) />
	<cfset wordStruct["value"] = wording />
    
	<cfset i=i+1>
    <cfset ArrayAppend(returnArray,wordStruct) />
</cfloop>

<cfoutput>
#serializeJSON(returnArray)#
</cfoutput>