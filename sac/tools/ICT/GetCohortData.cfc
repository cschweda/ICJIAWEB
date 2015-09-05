<cfcomponent hint="Outputs the CF JSON based on the cohort" output="false">

	<cffunction 	name="GetCJdata" access="remote" returnformat="json" output="false">
		<cfargument name="cohort" required="true" type="numeric">
		<cfargument name="CountyFIPS" required="true" type="numeric">
		<cfargument name="AdmitType" required="true" type="numeric">
		<cfargument name="CJType" required="true" type="string">
		<cfargument name="OutTypePeriod" required="true" type="numeric">
		<cfargument name="GroupFilter" required="true" type="string">

		<cfquery name="OutputData" datasource="IdocIspTool">
			SELECT A.CountyFIPS
			, A.Cohort
			, A.AdmType
			, A.AdmExtGroup
			, A.RecCat
			, A.GroupFilter
			, A.FilterValue
			, A.EventCat
			, A.EventCatIndic
			, A.AvgNumPriorIncar
			, A.TotMatchSID
			, A.PctMatchSID
			, A.AvgNumPrison
			, A.AvgNumArrests
			, A.AvgNumConv
			, A.AvgNumProb
			, A.TotAnyPrison
			, A.TotAnyArrests
			, A.TotAnyConv
			, A.TotAnyProb
			, A.TotEvents
			, A.TotPriorIncarBase
			, A.CSS_ID_Prep
			FROM dbo_Ctbl_IDOC_ISP_AccessTable AS A
			WHERE A.CountyFIPS = <cfqueryparam value="#arguments.CountyFIPS#" cfsqltype="CF_SQL_INTEGER" />
			AND (A.RecCat=1 OR A.RecCat = <cfqueryparam value="#arguments.OutTypePeriod#" cfsqltype="CF_SQL_TINYINT" />)
			AND A.AdmExtGroup = <cfqueryparam value="#arguments.CJType#" cfsqltype="CF_SQL_CHAR(1)" />
			AND IIF(RecCat<>1,A.GroupFilter=<cfqueryparam value="#arguments.GroupFilter#" cfsqltype="cf_sql_varchar(25)" />,RecCat=1)
			AND A.AdmType = <cfqueryparam value="#arguments.AdmitType#" cfsqltype="CF_SQL_TINYINT" />
			AND A.Cohort = <cfqueryparam value="#arguments.cohort#" cfsqltype="CF_SQL_INTEGER" />
		</cfquery> 


		<cfset CohortData="#SerializeJSON(OutputData,true)#">
		<cfreturn CohortData />
	</cffunction>

</cfcomponent>