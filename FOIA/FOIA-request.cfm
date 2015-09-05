<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>ICJIA: Freedom of Information Act Request</title>
		
		<link rel="stylesheet" type="text/css" href="css/foia-text.css" media="screen" />
		
		<link rel="stylesheet" type="text/css" href="css/foia-layout.css" media="screen" />
		<script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
		
		<!---
		<link type="text/css" href="js/jquery-ui/themes/base/ui.all.css" rel="stylesheet" />
	
	
	
	<script type="text/javascript" src="js/jquery-ui/ui/ui.core.js"></script>
	<script type="text/javascript" src="js/jquery-ui/ui/ui.datepicker.js"></script>--->
		
		
		
		
		
		<script language="javascript" type="text/javascript">
<!--
function imposeMaxLength(Object, MaxLen)
{
  return (Object.value.length <= MaxLen);
}
-->
</script>
		
		
		
		
		<!---
		
		<script type="text/javascript">
	$(function() {
		$('#start-date').datepicker({
			changeMonth: true,
			changeYear: true,
			yearRange: '1980:2010'
		});
		
		$('#end-date').datepicker({
			changeMonth: true,
			changeYear: true,
			yearRange: '1980:2010'
		});
		
		

		
		
	});
	</script>
	
	--->


<!---
<script>
$(document).ready(function(){

/**
 * Character Counter for inputs and text areas
 */
$('.word_count').each(function(){
	// get current number of characters
	var length = $(this).val().length;
	// get current number of words
	//var length = $(this).val().split(/\b[\s,\.-:;]*/).length;
	// update characters
	$(this).parent().find('.counter').html( length + ' characters');
	// bind on key up event
	$(this).keyup(function(){
		// get new length of characters
		var new_length = $(this).val().length;
		// get new length of words
		//var new_length = $(this).val().split(/\b[\s,\.-:;]*/).length;
		// update
		$(this).parent().find('.counter').html( new_length + ' characters');
	});
});

});

</script>
--->
		
	</head>
	<body>
	
	
	<CFIF not isDefined("postback")>
		<CFSET postback=false>
	</CFIF>
	
	
	<CFIF postback>
	
	<h2>Illinois Criminal Justice Information Authority FOIA Request</h2>
	
	<p>Your request has been submitted. Please allow five business days for a response.</p>
	
	<p>&nbsp;</p>
	
	<CFINSERT datasource="FOIABASE" TABLENAME="REQUESTS">
	
	
	<CFMAIL to="cja.foia@illinois.gov"
			from="cja.foia@illinois.gov"
			subject="[ICJIA] FOIA Request">ICJIA FOIA Request info:#chr(10)##chr(10)#
	<CFOUTPUT><cfloop index="FField" list="#Form.Fieldnames#"><CFIF FFIELD NEQ 'postback' and FFIELD NEQ 'submitfoia'>#FFIELD# - #Evaluate("#FFIELD#")##chr(10)#<CFELSE>#chr(10)#</cfif></cfloop></CFOUTPUT></CFMAIL>
	
	<CFELSE>
	
	<div class="block" id="forms">
	
						<h2>Illinois Criminal Justice Information Authority FOIA Request</h2>
						<p>Please use this form to submit your FOIA request for information from the Illinois Criminal Justice Information Authority. All fields that are asterisk-indicated (<span class="required">**</span>) are required.</p>
						
						<p><strong>PLEASE NOTE: Criminal histories and court records cannot be requested through FOIA. See the Frequently Asked Questions on the Authority's FOIA Page for information on how to obtain these documents.</strong></p>
						<cfform method="post" action="foia-request.cfm">
							
							<fieldset>
								<legend>Personal Information</legend>
								<p>
									<label><span class="required">** </span>First Name: </label>
									<cfinput type="text" name="firstname" required="yes" message="Please enter your first name." value="" />

								</p>
								<p>
									<label><span class="required">** </span>Last Name: </label>
									<cfinput type="text" name="lastname" required="yes" message="Please enter your last name." value="" />
								</p>
								
								
								
								<p>
									<label>Organization Type: </label>
									<cfselect name="organizationtype">
										<option value="">Select Organization Type...</option>
										<option value="elected-official">Elected Official </option>
										<option value="gorvernmental-agency">Governmental Agency </option>
										<option value="individual">Individual </option>
										<option value="legal-consultant">Legal Consultant </option>
										<option value="news-media">News Media </option>
										<option value="public-interest-nfp">Public Interest/Not-for-Profit </option>
										<option value="technical-consultant-contractor">Technical Consultant/Contractor </option>
										<option value="other">Other </option>
										
									</cfselect>
								
								
								<p>
									<label><span class="required">** </span>Address: </label>
									<cfinput type="text" required="yes" message="Please enter your address." name="address1" value="" />

								</p>
								<p>
									<label>Address 2: </label>
									<cfinput type="text" name="address2" value="" />
								</p>
								<p>
									<label><span class="required">** </span>City: </label>
									<cfinput type="text" name="city" required="yes" message="Please enter your city." value="" />

								</p>
								
								<p>
									<label>County: </label>
									<cfinput type="text" name="county" value="" />

								</p>
								
								
								<p>
									<label>State/Province: </label>
									<select name="StateProvince">
										<option value="">Select State/Province...</option>
										<option value="AL">Alabama </option>
										<option value="AK">Alaska </option>

										<option value="AB">Alberta </option>
										<option value="AZ">Arizona </option>
										<option value="AR">Arkansas </option>
										<option value="BC">British Columbia </option>
										<option value="CA">California </option>
										<option value="CO">Colorado </option>

										<option value="CT">Connecticut </option>
										<option value="DE">Delaware </option>
										<option value="DC">District of Columbia </option>
										<option value="FL">Florida </option>
										<option value="GA">Georgia </option>
										<option value="HI">Hawaii </option>

										<option value="ID">Idaho </option>
										<option value="IL">Illinois </option>
										<option value="IN">Indiana </option>
										<option value="IA">Iowa </option>
										<option value="KS">Kansas </option>
										<option value="KY">Kentucky </option>

										<option value="LA">Louisiana </option>
										<option value="ME">Maine </option>
										<option value="MB">Manitoba </option>
										<option value="MD">Maryland </option>
										<option value="MA">Massachusetts </option>
										<option value="MI">Michigan </option>

										<option value="MN">Minnesota </option>
										<option value="MS">Mississippi </option>
										<option value="MO">Missouri </option>
										<option value="MT">Montana </option>
										<option value="NE">Nebraska </option>
										<option value="NV">Nevada </option>

										<option value="NB">New Brunswick </option>
										<option value="NH">New Hampshire </option>
										<option value="NJ">New Jersey </option>
										<option value="NM">New Mexico </option>
										<option value="NY">New York </option>
										<option value="NF">Newfoundland </option>

										<option value="NC">North Carolina </option>
										<option value="ND">North Dakota </option>
										<option value="NT">Northwest Territories </option>
										<option value="NS">Nova Scotia </option>
										<option value="OH">Ohio </option>
										<option value="OK">Oklahoma </option>

										<option value="ON">Ontario </option>
										<option value="OR">Oregon </option>
										<option value="PA">Pennsylvania </option>
										<option value="PE">Prince Edward Island </option>
										<option value="PR">Puerto Rico </option>
										<option value="QC">Quebec </option>

										<option value="RI">Rhode Island </option>
										<option value="SK">Saskatchewan </option>
										<option value="SC">South Carolina </option>
										<option value="SD">South Dakota </option>
										<option value="TN">Tennessee </option>
										<option value="TX">Texas </option>

										<option value="UT">Utah </option>
										<option value="VT">Vermont </option>
										<option value="VA">Virginia </option>
										<option value="WA">Washington </option>
										<option value="WV">West Virginia </option>
										<option value="WI">Wisconsin </option>

										<option value="WY">Wyoming </option>
										<option value="YT">Yukon </option>
									</select>
								</p>
								
								<p>
									<label><span class="required">** </span>Zip/Postal Code: </label>

									<cfinput type="text" name="zipcode" required="yes" message="Please enter your zip/postal code." value="" />
								</p>
								<p>
									<label><span class="required">** </span>Phone Number (please include area code): </label>
									<cfinput type="text" name="phone" required="yes" message="Please enter your phone number." value="" />
								</p>
								<p>
									<label>Email Address: </label>

									<cfinput type="text" name="email" value="" />
								</p>
								
							</fieldset>
							
							<fieldset>
								<legend>Fee Justification</legend>
								<p>
									In accordance with <a target="IL" onClick="window.open(this.href, 'IL', 'height=640,width=800,scrollbars=yes,resizable'); return true;" href="http://www.ilga.gov/commission/jcar/admincode/002/002018280F06030R.html" >2 Ill. Admin. Code 1828.603</a>, fees for public records may be reduced or waived if determined by the Agency to be in the public interest. 
									If applicable, please provide a brief justification below. 
								</p>
							
								
								<cftextarea class="feejustification" name="feejustification" message="Please limit your fee justification to 10,000 characters or less." wrap="virtual" rows="5" cols="50" validate="maxlength" validateAt="onBlur" maxlength="10000">
								</cftextarea>
							</fieldset>
							
							
							<fieldset>
								<legend>Request Details</legend>
								
								<!---
								<p>Please supply date (mm/dd/yyyy) specific information if applicable for your request.</p>
								
								
								<p>
									<label>Start Date: </label>
</p>
									<cfinput type="text" validate="date" name="start-date" style="width: 150px; float:left;" id="start-date" value="" />
								
								
								<div style="clear: both;">&nbsp;</div>
								<p>
									<label>End Date: </label>
</p>
									<cfinput type="text" validate="date" style="width: 150px; float:left;" name="end-date"  id="end-date" value="" />
								
								<div style="clear: both;">&nbsp;</div>
								--->
								
								<p> 	 What information would you like to obtain?
								
									</p>
								
								
								<cftextarea class="word_count" name="foiadetails" message="Please limit your FOIA request to 10000 characters or less." wrap="virtual" rows="5" cols="50" validate="maxlength" validateAt="onBlur" maxlength="10000"></cftextarea>
								
								
								<br/>
							<span class="counter"></span>
							</fieldset>
							
							<input type="hidden" name="postback" value="TRUE">
				 			 <input type="hidden" name="IP" value="<CFOUTPUT>#CGI.REMOTE_ADDR#</CFOUTPUT>">
				 			 <input type="hidden" name="DATESUBMITTED" value="<CFOUTPUT>#Now()#</CFOUTPUT>">
							
							<cfinput type="submit" name="submitfoia" value="Submit FOIA request" class="register-button" />
						</cfform>
						
						

						
					</div>
				

	</CFIF>
	
	
	</body>
</html>