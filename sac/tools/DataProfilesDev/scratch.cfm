

<html>
<head>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/modules/data.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>
<script src="JS/Dashboards.js"></script>
<style type="text/css">
table {
	font-family: verdana,arial,sans-serif;
	font-size:11px;
	color:#333333;
	border-width: 1px;
	border-color: #666666;
	border-collapse: collapse;
}
table th {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #666666;
	background-color: #dedede;
}
table td {
	border-width: 1px;
	padding: 8px;
	border-style: solid;
	border-color: #666666;
	background-color: #ffffff;
}
	
</style>

<cfset DashboardNumberPrep = #url.DashboardNumber#>
<cfset DashVar = 'Dash' & #DashboardNumberPrep# & '.cfm'>
<cfset SelectedICJIANumber = INT(#url.ICJIANumber#) />

<cfquery name="GetCircuit" datasource="RADBP">
	SELECT CircuitCook88, CountyName ,ShowCircuitText
	FROM dbo_Counties
	WHERE ICJIANumber=<cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	;
</cfquery>


<!---Generate Geography Name to be used in title and other sections--->
<cfset CircuitNumber=INT(#GetCircuit.CircuitCook88#)>

<cfif #url.ICJIANumber# GTE 1 AND #url.ICJIANumber# LTE 102>
	<cfif #DashboardNumberPrep# GT 20>
	<cfset GeographyName = #GetCircuit.CountyName# & ' County'>
	<cfelse>
	<cfset GeographyName = 'the ' & #GetCircuit.ShowCircuitText#>
	</cfif>
</cfif>
<cfif #url.ICJIANumber# EQ 999>
	<cfset GeographyName = #GetCircuit.CountyName#>
</cfif>
<cfif #url.ICJIANumber# GTE 1001 AND #url.ICJIANumber# LTE 1088>
	<cfset GeographyName = 'the ' & #GetCircuit.CountyName#>
</cfif>
 


<!---Main query, QoQ will be performed on this--->
<cfquery name="WTP" datasource="RADBP">  
	SELECT *
    FROM Qry_WebTablePivot
	WHERE CircuitCook88 = #CircuitNumber#
	;	
</cfquery>

<cfquery name="MinMaxYears" datasource="RADBP">
	SELECT DataGroupNumber, MinYear, MaxYear
    FROM dbo_MinMaxYearsToShow
	WHERE DataGroupNumber =<cfqueryparam value="#url.DashboardNumber#" cfsqltype="CF_SQL_INTEGER" />;	
</cfquery>
<cfquery name = "CountyCount" datasource="RADBP">
	SELECT GeographyID, NumCounties
	FROM Qry_CountOfCountiesInCircuit
	WHERE GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />;	
</cfquery>
<cfinclude template=#DashVar#>



<title>ICJIA Criminal Justice Data Profiles</title>

</head>







<body>
	



<cfinclude template="DashPopTables.cfm">
</body>

</html>