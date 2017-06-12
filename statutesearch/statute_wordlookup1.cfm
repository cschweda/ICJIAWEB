<cfif isDefined('form.submit')>
	<cfdump var="#form#">
<cfelse>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<title>Auto Complete - jQuery</title>
<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1/themes/redmond/jquery-ui.css">	

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script>
	

 
	<script type="text/javascript">
		$(document).ready(function() {
			$("#state").autocomplete(
				"autocomplete_lookup2.cfm",
				{
					minChars:2,
					delay:200,
					
					matchContains:1,
					cacheLength:10,
					selectOnly:1
				}
			);

		});
	</script>
</head>
<body>
<h2>jQuery : Auto Complete</h2>
<h3>State Lookup</h3>
<p>Example data: 'olo' > Colorado, 'alif' > California</p>
<form name="sForm" id="sForm" action="" method="post">
<fieldset  style="width:100px;">
<legend>State:</legend>
<input type="text" name="state" id="state" /><Br /><br />
<input type="submit" value="submit" name="submit" />
</fieldset>
</form>
</body>
</html>
</cfif>