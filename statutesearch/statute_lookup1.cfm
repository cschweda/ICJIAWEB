<cfsetting showdebugoutput="no" enablecfoutputonly="yes">
<cfparam name="url.term" default="" />
<cfquery name="qry_GetWords" datasource="statutetable">
<cfset returnArray = ArrayNew(1) />


SELECT wording
FROM tbl_WordsinDB
where wording like '%#url.term#%'
order by wording
</cfquery>


<cfloop query="qry_GetWords">
    <cfset wordStruct = StructNew() />
    <cfset wordStruct["wording"] = wording />
    

    <cfset ArrayAppend(returnArray,wordStruct) />
</cfloop>

<cfoutput>
#serializeJSON(returnArray)#
</cfoutput>