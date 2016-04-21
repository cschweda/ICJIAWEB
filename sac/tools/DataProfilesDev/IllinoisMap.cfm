
<div>

<div id="IllinoisCountyMap"></div>

<script>






<!---
$("#map-container-2").insertFusionCharts({
					type: "maps/illinois",
					width: "500",
					height: "750",
					dataFormat: "XMLURL",
					dataSource: "ifvcc.xml",
					loadMessage: "Loading Illinois circuit data. Please wait.",
					events: {
								"entityRollover": function(evt, data) {
										circuit=data.value / 10;


										suffix = ordinal_suffix_of(circuit);
										if (circuit == '500') {
											label = 'Cook County | Cook';
										} else {
											label = data.label + ' County ' + ' | ' + suffix + ' Circuit';
											// label = suffix + ' Circuit';
										}



										$('#foobar').html(label);

								},

								"entityClick": function(evt, data) {
										circuit=data.value / 10;
										displayURL='/ifvcc/councils/' + padToThree(circuit);
										console.log(data.value);
										//console.log('Circuit ' + circuit + ' Padded: ' + padToThree(circuit));
										$('#circuit-info').html('<div style="text-align: center;"><h5>Loading circuit information ...&nbsp;&nbsp;<i class="fa fa-spinner fa-spin"></i></h5></div>');
										$('#circuit-info').load(displayURL);
										$('.display-panel').show();
										$('#map-instructions').hide();
										console.log(displayURL)

								},
						}
			});

--->
</script>