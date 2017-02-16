'use strict';

/* --------------------------------- Rollover Dropdown menus ------------------------------------*/


// jQuery(document).ready(function() {
//   $(".dropdown").hover(
//     function() {
//       $('.dropdown-menu', this).slideDown("fast");
//     },
//     function() {
//       $('.dropdown-menu', this).slideUp("fast");
//     });
// });


jQuery(document).ready(function() {

	$('.expander').readmore({
		speed: 175,
		collapsedHeight: 106,
		moreLink: '<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down"></i></span></a>',
		lessLink: '<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',
		afterToggle: function() {
			progressBarInit();
		}
	});

	$(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});

	$('#adjust-font').click(function() {
		var direction = '+';
		var curSize = parseInt($('.article-content').css('font-size'));
		var maxSize = 28;
		var minSize = 22;

		if (curSize > maxSize) {

			curSize = minSize;
			direction = '+';
		}

		if (curSize < minSize - 1) {

			curSize = maxSize;
			direction = '-';

		}

		if (direction === '+') {
			curSize = curSize + 1;
		}

		if (direction === '-') {
			curSize = curSize - 1;
		}



		console.log('Current font size: ' + curSize);
		console.log('Current direction: ' + direction);

		$('.article-content').css('font-size', curSize);
		// Re-calculate the progress bar for the page
		progressBarInit();

	});



});


/* --------------------------------- Affix: Sidebar // Smooth scrolling ------------------------------------*/



/* activate sidebar */
$('#sidebar-photo').affix({
	offset: {
		top: 485
	}
});

/* activate sidebar */
$('#sidebar-no-photo').affix({
	offset: {
		top: 55
	}
});

/* activate scrollspy menu */
var $body = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});

/* smooth scrolling sections */
/*$('a[href*=#]:not([href=#])').click(function() {*/

$('a.page-scroll').click(function() {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
			'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - 50
			}, 1000);
			return false;
		}
	}
});


/* --------------------------------- Affix: Navbar ------------------------------------*/



$(function() {
	$('#nav-wrapper').height($("#nav").height());

	$('#nav').affix({
		offset: {
			top: $('#nav').offset().top
		}
	});
});

// Affixed
$(document).ready(function() {

	$("#nav").on('affixed.bs.affix', function() {
		$('#nav').addClass('outline', 1000);
		$('#logo').removeClass('logo-spacer', 1000);
	});

	// Not affixed
	$("#nav").on('affixed-top.bs.affix', function() {
		$('#nav').removeClass('outline', 1000);
		$('#logo').addClass('logo-spacer', 1000)
			//$('#logo').hide();
	});
});



/* --------------------------------- Social media ------------------------------------*/


function fbs_click(u, t) {
	//u = location.href;
	//t = document.title;
	console.log('facebook url: ' + u);
	console.log('facebook title: ' + t);
	window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) +
		'&t=' + encodeURIComponent(t), 'sharer',
		'toolbar=0,status=0,width=626,height=436');
	return false;
}

function twitter_click(t) {

	window.open('http://twitter.com/share?text=' + encodeURIComponent(t),
		'sharer',
		'toolbar=0,status=0,width=626,height=436');
	return false;
}



/* --------------------------------- Detect IE ------------------------------------*/



/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// IE 12 => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}


/* --------------------------------- Tab collapse ------------------------------------*/

// https://github.com/flatlogic/bootstrap-tabcollapse
$('#article-tabs').tabCollapse();
$(document).on("shown.bs.collapse shown.bs.tab",
	".panel-collapse, a[data-toggle='tab']",
	function(e) {
		progressBarInit();
	});
;$(function() {
	$('#wtrs-container1').highcharts({
		chart: {
			type: 'column'
		},
		title: {
			text: 'Criminal justice statistics here'
		},
		xAxis: {
			categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
		},
		credits: {
			enabled: false
		},
		series: [{
			name: 'John',
			data: [5, 3, 4, 7, 2]
		}, {
			name: 'Jane',
			data: [2, -2, -3, 2, 1]
		}, {
			name: 'Joe',
			data: [3, 4, 4, -2, 5]
		}]
	});
});



$(function() {
	$('#wtrs-container2').highcharts({
		chart: {
			type: 'scatter',
			zoomType: 'xy'
		},
		title: {
			text: 'Criminal justice statistics'
		},
		subtitle: {
			text: 'Source: CJ Dispatch'
		},
		xAxis: {
			title: {
				enabled: true,
				text: 'Lorem ipsum'
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: 'Ipsum lorem'
			}
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			verticalAlign: 'top',
			x: 100,
			y: 70,
			floating: true,
			backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
				'#FFFFFF',
			borderWidth: 1
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 5,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				},
				tooltip: {
					headerFormat: '<b>{series.name}</b><br>',
					pointFormat: '{point.x} cm, {point.y} kg'
				}
			}
		},
		series: [{
			name: 'Female',
			color: 'rgba(223, 83, 83, .5)',
			data: [
				[161.2, 51.6],
				[167.5, 59.0],
				[159.5, 49.2],
				[157.0, 63.0],
				[155.8, 53.6],
				[170.0, 59.0],
				[159.1, 47.6],
				[166.0, 69.8],
				[176.2, 66.8],
				[160.2, 75.2],
				[172.5, 55.2],
				[170.9, 54.2],
				[172.9, 62.5],
				[153.4, 42.0],
				[160.0, 50.0],
				[147.2, 49.8],
				[168.2, 49.2],
				[175.0, 73.2],
				[157.0, 47.8],
				[167.6, 68.8],
				[159.5, 50.6],
				[175.0, 82.5],
				[166.8, 57.2],
				[176.5, 87.8],
				[170.2, 72.8],
				[174.0, 54.5],
				[173.0, 59.8],
				[179.9, 67.3],
				[170.5, 67.8],
				[160.0, 47.0],
				[154.4, 46.2],
				[162.0, 55.0],
				[176.5, 83.0],
				[160.0, 54.4],
				[152.0, 45.8],
				[162.1, 53.6],
				[170.0, 73.2],
				[160.2, 52.1],
				[161.3, 67.9],
				[166.4, 56.6],
				[168.9, 62.3],
				[163.8, 58.5],
				[167.6, 54.5],
				[160.0, 50.2],
				[161.3, 60.3],
				[167.6, 58.3],
				[165.1, 56.2],
				[160.0, 50.2],
				[170.0, 72.9],
				[157.5, 59.8],
				[167.6, 61.0],
				[160.7, 69.1],
				[163.2, 55.9],
				[152.4, 46.5],
				[157.5, 54.3],
				[168.3, 54.8],
				[180.3, 60.7],
				[165.5, 60.0],
				[165.0, 62.0],
				[164.5, 60.3],
				[156.0, 52.7],
				[160.0, 74.3],
				[163.0, 62.0],
				[165.7, 73.1],
				[161.0, 80.0],
				[162.0, 54.7],
				[166.0, 53.2],
				[174.0, 75.7],
				[172.7, 61.1],
				[167.6, 55.7],
				[151.1, 48.7],
				[164.5, 52.3],
				[163.5, 50.0],
				[152.0, 59.3],
				[169.0, 62.5],
				[164.0, 55.7],
				[161.2, 54.8],
				[155.0, 45.9],
				[170.0, 70.6],
				[176.2, 67.2],
				[170.0, 69.4],
				[162.5, 58.2],
				[170.3, 64.8],
				[164.1, 71.6],
				[169.5, 52.8],
				[163.2, 59.8],
				[154.5, 49.0],
				[159.8, 50.0],
				[173.2, 69.2],
				[170.0, 55.9],
				[161.4, 63.4],
				[169.0, 58.2],
				[166.2, 58.6],
				[159.4, 45.7],
				[162.5, 52.2],
				[159.0, 48.6],
				[162.8, 57.8],
				[159.0, 55.6],
				[179.8, 66.8],
				[162.9, 59.4],
				[161.0, 53.6],
				[151.1, 73.2],
				[168.2, 53.4],
				[168.9, 69.0],
				[173.2, 58.4],
				[171.8, 56.2],
				[178.0, 70.6],
				[164.3, 59.8],
				[163.0, 72.0],
				[168.5, 65.2],
				[166.8, 56.6],
				[172.7, 105.2],
				[163.5, 51.8],
				[169.4, 63.4],
				[167.8, 59.0],
				[159.5, 47.6],
				[167.6, 63.0],
				[161.2, 55.2],
				[160.0, 45.0],
				[163.2, 54.0],
				[162.2, 50.2],
				[161.3, 60.2],
				[149.5, 44.8],
				[157.5, 58.8],
				[163.2, 56.4],
				[172.7, 62.0],
				[155.0, 49.2],
				[156.5, 67.2],
				[164.0, 53.8],
				[160.9, 54.4],
				[162.8, 58.0],
				[167.0, 59.8],
				[160.0, 54.8],
				[160.0, 43.2],
				[168.9, 60.5],
				[158.2, 46.4],
				[156.0, 64.4],
				[160.0, 48.8],
				[167.1, 62.2],
				[158.0, 55.5],
				[167.6, 57.8],
				[156.0, 54.6],
				[162.1, 59.2],
				[173.4, 52.7],
				[159.8, 53.2],
				[170.5, 64.5],
				[159.2, 51.8],
				[157.5, 56.0],
				[161.3, 63.6],
				[162.6, 63.2],
				[160.0, 59.5],
				[168.9, 56.8],
				[165.1, 64.1],
				[162.6, 50.0],
				[165.1, 72.3],
				[166.4, 55.0],
				[160.0, 55.9],
				[152.4, 60.4],
				[170.2, 69.1],
				[162.6, 84.5],
				[170.2, 55.9],
				[158.8, 55.5],
				[172.7, 69.5],
				[167.6, 76.4],
				[162.6, 61.4],
				[167.6, 65.9],
				[156.2, 58.6],
				[175.2, 66.8],
				[172.1, 56.6],
				[162.6, 58.6],
				[160.0, 55.9],
				[165.1, 59.1],
				[182.9, 81.8],
				[166.4, 70.7],
				[165.1, 56.8],
				[177.8, 60.0],
				[165.1, 58.2],
				[175.3, 72.7],
				[154.9, 54.1],
				[158.8, 49.1],
				[172.7, 75.9],
				[168.9, 55.0],
				[161.3, 57.3],
				[167.6, 55.0],
				[165.1, 65.5],
				[175.3, 65.5],
				[157.5, 48.6],
				[163.8, 58.6],
				[167.6, 63.6],
				[165.1, 55.2],
				[165.1, 62.7],
				[168.9, 56.6],
				[162.6, 53.9],
				[164.5, 63.2],
				[176.5, 73.6],
				[168.9, 62.0],
				[175.3, 63.6],
				[159.4, 53.2],
				[160.0, 53.4],
				[170.2, 55.0],
				[162.6, 70.5],
				[167.6, 54.5],
				[162.6, 54.5],
				[160.7, 55.9],
				[160.0, 59.0],
				[157.5, 63.6],
				[162.6, 54.5],
				[152.4, 47.3],
				[170.2, 67.7],
				[165.1, 80.9],
				[172.7, 70.5],
				[165.1, 60.9],
				[170.2, 63.6],
				[170.2, 54.5],
				[170.2, 59.1],
				[161.3, 70.5],
				[167.6, 52.7],
				[167.6, 62.7],
				[165.1, 86.3],
				[162.6, 66.4],
				[152.4, 67.3],
				[168.9, 63.0],
				[170.2, 73.6],
				[175.2, 62.3],
				[175.2, 57.7],
				[160.0, 55.4],
				[165.1, 104.1],
				[174.0, 55.5],
				[170.2, 77.3],
				[160.0, 80.5],
				[167.6, 64.5],
				[167.6, 72.3],
				[167.6, 61.4],
				[154.9, 58.2],
				[162.6, 81.8],
				[175.3, 63.6],
				[171.4, 53.4],
				[157.5, 54.5],
				[165.1, 53.6],
				[160.0, 60.0],
				[174.0, 73.6],
				[162.6, 61.4],
				[174.0, 55.5],
				[162.6, 63.6],
				[161.3, 60.9],
				[156.2, 60.0],
				[149.9, 46.8],
				[169.5, 57.3],
				[160.0, 64.1],
				[175.3, 63.6],
				[169.5, 67.3],
				[160.0, 75.5],
				[172.7, 68.2],
				[162.6, 61.4],
				[157.5, 76.8],
				[176.5, 71.8],
				[164.4, 55.5],
				[160.7, 48.6],
				[174.0, 66.4],
				[163.8, 67.3]
			]

		}, {
			name: 'Male',
			color: 'rgba(119, 152, 191, .5)',
			data: [
				[174.0, 65.6],
				[175.3, 71.8],
				[193.5, 80.7],
				[186.5, 72.6],
				[187.2, 78.8],
				[181.5, 74.8],
				[184.0, 86.4],
				[184.5, 78.4],
				[175.0, 62.0],
				[184.0, 81.6],
				[180.0, 76.6],
				[177.8, 83.6],
				[192.0, 90.0],
				[176.0, 74.6],
				[174.0, 71.0],
				[184.0, 79.6],
				[192.7, 93.8],
				[171.5, 70.0],
				[173.0, 72.4],
				[176.0, 85.9],
				[176.0, 78.8],
				[180.5, 77.8],
				[172.7, 66.2],
				[176.0, 86.4],
				[173.5, 81.8],
				[178.0, 89.6],
				[180.3, 82.8],
				[180.3, 76.4],
				[164.5, 63.2],
				[173.0, 60.9],
				[183.5, 74.8],
				[175.5, 70.0],
				[188.0, 72.4],
				[189.2, 84.1],
				[172.8, 69.1],
				[170.0, 59.5],
				[182.0, 67.2],
				[170.0, 61.3],
				[177.8, 68.6],
				[184.2, 80.1],
				[186.7, 87.8],
				[171.4, 84.7],
				[172.7, 73.4],
				[175.3, 72.1],
				[180.3, 82.6],
				[182.9, 88.7],
				[188.0, 84.1],
				[177.2, 94.1],
				[172.1, 74.9],
				[167.0, 59.1],
				[169.5, 75.6],
				[174.0, 86.2],
				[172.7, 75.3],
				[182.2, 87.1],
				[164.1, 55.2],
				[163.0, 57.0],
				[171.5, 61.4],
				[184.2, 76.8],
				[174.0, 86.8],
				[174.0, 72.2],
				[177.0, 71.6],
				[186.0, 84.8],
				[167.0, 68.2],
				[171.8, 66.1],
				[182.0, 72.0],
				[167.0, 64.6],
				[177.8, 74.8],
				[164.5, 70.0],
				[192.0, 101.6],
				[175.5, 63.2],
				[171.2, 79.1],
				[181.6, 78.9],
				[167.4, 67.7],
				[181.1, 66.0],
				[177.0, 68.2],
				[174.5, 63.9],
				[177.5, 72.0],
				[170.5, 56.8],
				[182.4, 74.5],
				[197.1, 90.9],
				[180.1, 93.0],
				[175.5, 80.9],
				[180.6, 72.7],
				[184.4, 68.0],
				[175.5, 70.9],
				[180.6, 72.5],
				[177.0, 72.5],
				[177.1, 83.4],
				[181.6, 75.5],
				[176.5, 73.0],
				[175.0, 70.2],
				[174.0, 73.4],
				[165.1, 70.5],
				[177.0, 68.9],
				[192.0, 102.3],
				[176.5, 68.4],
				[169.4, 65.9],
				[182.1, 75.7],
				[179.8, 84.5],
				[175.3, 87.7],
				[184.9, 86.4],
				[177.3, 73.2],
				[167.4, 53.9],
				[178.1, 72.0],
				[168.9, 55.5],
				[157.2, 58.4],
				[180.3, 83.2],
				[170.2, 72.7],
				[177.8, 64.1],
				[172.7, 72.3],
				[165.1, 65.0],
				[186.7, 86.4],
				[165.1, 65.0],
				[174.0, 88.6],
				[175.3, 84.1],
				[185.4, 66.8],
				[177.8, 75.5],
				[180.3, 93.2],
				[180.3, 82.7],
				[177.8, 58.0],
				[177.8, 79.5],
				[177.8, 78.6],
				[177.8, 71.8],
				[177.8, 116.4],
				[163.8, 72.2],
				[188.0, 83.6],
				[198.1, 85.5],
				[175.3, 90.9],
				[166.4, 85.9],
				[190.5, 89.1],
				[166.4, 75.0],
				[177.8, 77.7],
				[179.7, 86.4],
				[172.7, 90.9],
				[190.5, 73.6],
				[185.4, 76.4],
				[168.9, 69.1],
				[167.6, 84.5],
				[175.3, 64.5],
				[170.2, 69.1],
				[190.5, 108.6],
				[177.8, 86.4],
				[190.5, 80.9],
				[177.8, 87.7],
				[184.2, 94.5],
				[176.5, 80.2],
				[177.8, 72.0],
				[180.3, 71.4],
				[171.4, 72.7],
				[172.7, 84.1],
				[172.7, 76.8],
				[177.8, 63.6],
				[177.8, 80.9],
				[182.9, 80.9],
				[170.2, 85.5],
				[167.6, 68.6],
				[175.3, 67.7],
				[165.1, 66.4],
				[185.4, 102.3],
				[181.6, 70.5],
				[172.7, 95.9],
				[190.5, 84.1],
				[179.1, 87.3],
				[175.3, 71.8],
				[170.2, 65.9],
				[193.0, 95.9],
				[171.4, 91.4],
				[177.8, 81.8],
				[177.8, 96.8],
				[167.6, 69.1],
				[167.6, 82.7],
				[180.3, 75.5],
				[182.9, 79.5],
				[176.5, 73.6],
				[186.7, 91.8],
				[188.0, 84.1],
				[188.0, 85.9],
				[177.8, 81.8],
				[174.0, 82.5],
				[177.8, 80.5],
				[171.4, 70.0],
				[185.4, 81.8],
				[185.4, 84.1],
				[188.0, 90.5],
				[188.0, 91.4],
				[182.9, 89.1],
				[176.5, 85.0],
				[175.3, 69.1],
				[175.3, 73.6],
				[188.0, 80.5],
				[188.0, 82.7],
				[175.3, 86.4],
				[170.5, 67.7],
				[179.1, 92.7],
				[177.8, 93.6],
				[175.3, 70.9],
				[182.9, 75.0],
				[170.8, 93.2],
				[188.0, 93.2],
				[180.3, 77.7],
				[177.8, 61.4],
				[185.4, 94.1],
				[168.9, 75.0],
				[185.4, 83.6],
				[180.3, 85.5],
				[174.0, 73.9],
				[167.6, 66.8],
				[182.9, 87.3],
				[160.0, 72.3],
				[180.3, 88.6],
				[167.6, 75.5],
				[186.7, 101.4],
				[175.3, 91.1],
				[175.3, 67.3],
				[175.9, 77.7],
				[175.3, 81.8],
				[179.1, 75.5],
				[181.6, 84.5],
				[177.8, 76.6],
				[182.9, 85.0],
				[177.8, 102.5],
				[184.2, 77.3],
				[179.1, 71.8],
				[176.5, 87.9],
				[188.0, 94.3],
				[174.0, 70.9],
				[167.6, 64.5],
				[170.2, 77.3],
				[167.6, 72.3],
				[188.0, 87.3],
				[174.0, 80.0],
				[176.5, 82.3],
				[180.3, 73.6],
				[167.6, 74.1],
				[188.0, 85.9],
				[180.3, 73.2],
				[167.6, 76.3],
				[183.0, 65.9],
				[183.0, 90.9],
				[179.1, 89.1],
				[170.2, 62.3],
				[177.8, 82.7],
				[179.1, 79.1],
				[190.5, 98.2],
				[177.8, 84.1],
				[180.3, 83.2],
				[180.3, 83.2]
			]
		}]
	});
});
;"use strict";function fbs_click(a,b){return console.log("facebook url: "+a),console.log("facebook title: "+b),window.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(a)+"&t="+encodeURIComponent(b),"sharer","toolbar=0,status=0,width=626,height=436"),!1}function twitter_click(a){return window.open("http://twitter.com/share?text="+encodeURIComponent(a),"sharer","toolbar=0,status=0,width=626,height=436"),!1}function detectIE(){var a=window.navigator.userAgent,b=a.indexOf("MSIE ");if(b>0)return parseInt(a.substring(b+5,a.indexOf(".",b)),10);var c=a.indexOf("Trident/");if(c>0){var d=a.indexOf("rv:");return parseInt(a.substring(d+3,a.indexOf(".",d)),10)}var e=a.indexOf("Edge/");return e>0?parseInt(a.substring(e+5,a.indexOf(".",e)),10):!1}function progressBarInit(){var a=function(){return $(document).height()-$(window).height()},b=function(){return $(window).scrollTop()};if("max"in document.createElement("progress")){var c=$("progress");c.attr({max:a()}),$(document).on("scroll",function(){c.attr({value:b()})}),$(window).resize(function(){c.attr({max:a(),value:b()})})}else{var d,e,c=$(".progress-bar"),f=a(),g=function(){return d=b(),e=d/f*100,e+="%"},h=function(){c.css({width:g()})};$(document).on("scroll",h),$(window).on("resize",function(){f=a(),h()})}}function parseParams(a){var b,c=/([^&=]+)=?([^&]*)/g,d=function(a){return decodeURIComponent(a.replace(/\+/g," "))},e={};if(a)for("?"===a.substr(0,1)&&(a=a.substr(1));b=c.exec(a);){var f=d(b[1]),g=d(b[2]);void 0!==e[f]?($.isArray(e[f])||(e[f]=[e[f]]),e[f].push(g)):e[f]=g}return e}function emailInputTemplate(a,b){return'<div id="email-div" class="form-group has-'+(b?"error":"success")+' has-feedback">                <label class="control-label">Email Address</label>                <input class="form-control" name="email" ic-replace-target="true"                       ic-post-to="/contact/email" ic-transition="none" ic-target="#email-div" value="'+a+'">'+(b?'<span class="help-block text-error">'+b+"</span>":"")+"</div>"}jQuery(document).ready(function(){$(".expander").readmore({speed:175,collapsedHeight:106,moreLink:'<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down"></i></span></a>',lessLink:'<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',afterToggle:function(){progressBarInit()}}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$("#adjust-font").click(function(){var a="+",b=parseInt($(".article-content").css("font-size")),c=28,d=22;b>c&&(b=d,a="+"),d-1>b&&(b=c,a="-"),"+"===a&&(b+=1),"-"===a&&(b-=1),console.log("Current font size: "+b),console.log("Current direction: "+a),$(".article-content").css("font-size",b),progressBarInit()})}),$("#sidebar-photo").affix({offset:{top:485}}),$("#sidebar-no-photo").affix({offset:{top:55}});var $body=$(document.body),navHeight=$(".navbar").outerHeight(!0)+10;$body.scrollspy({target:"#leftCol",offset:navHeight}),$("a.page-scroll").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top-50},1e3),!1}}),$(function(){$("#nav-wrapper").height($("#nav").height()),$("#nav").affix({offset:{top:$("#nav").offset().top}})}),$(document).ready(function(){$("#nav").on("affixed.bs.affix",function(){$("#nav").addClass("outline",1e3),$("#logo").removeClass("logo-spacer",1e3)}),$("#nav").on("affixed-top.bs.affix",function(){$("#nav").removeClass("outline",1e3),$("#logo").addClass("logo-spacer",1e3)})}),$("#article-tabs").tabCollapse(),$(document).on("shown.bs.collapse shown.bs.tab",".panel-collapse, a[data-toggle='tab']",function(a){progressBarInit()}),$(function(){$("#wtrs-container1").highcharts({chart:{type:"column"},title:{text:"Criminal justice statistics here"},xAxis:{categories:["Apples","Oranges","Pears","Grapes","Bananas"]},credits:{enabled:!1},series:[{name:"John",data:[5,3,4,7,2]},{name:"Jane",data:[2,-2,-3,2,1]},{name:"Joe",data:[3,4,4,-2,5]}]})}),$(function(){$("#wtrs-container2").highcharts({chart:{type:"scatter",zoomType:"xy"},title:{text:"Criminal justice statistics"},subtitle:{text:"Source: CJ Dispatch"},xAxis:{title:{enabled:!0,text:"Lorem ipsum"},startOnTick:!0,endOnTick:!0,showLastLabel:!0},yAxis:{title:{text:"Ipsum lorem"}},legend:{layout:"vertical",align:"left",verticalAlign:"top",x:100,y:70,floating:!0,backgroundColor:Highcharts.theme&&Highcharts.theme.legendBackgroundColor||"#FFFFFF",borderWidth:1},plotOptions:{scatter:{marker:{radius:5,states:{hover:{enabled:!0,lineColor:"rgb(100,100,100)"}}},states:{hover:{marker:{enabled:!1}}},tooltip:{headerFormat:"<b>{series.name}</b><br>",pointFormat:"{point.x} cm, {point.y} kg"}}},series:[{name:"Female",color:"rgba(223, 83, 83, .5)",data:[[161.2,51.6],[167.5,59],[159.5,49.2],[157,63],[155.8,53.6],[170,59],[159.1,47.6],[166,69.8],[176.2,66.8],[160.2,75.2],[172.5,55.2],[170.9,54.2],[172.9,62.5],[153.4,42],[160,50],[147.2,49.8],[168.2,49.2],[175,73.2],[157,47.8],[167.6,68.8],[159.5,50.6],[175,82.5],[166.8,57.2],[176.5,87.8],[170.2,72.8],[174,54.5],[173,59.8],[179.9,67.3],[170.5,67.8],[160,47],[154.4,46.2],[162,55],[176.5,83],[160,54.4],[152,45.8],[162.1,53.6],[170,73.2],[160.2,52.1],[161.3,67.9],[166.4,56.6],[168.9,62.3],[163.8,58.5],[167.6,54.5],[160,50.2],[161.3,60.3],[167.6,58.3],[165.1,56.2],[160,50.2],[170,72.9],[157.5,59.8],[167.6,61],[160.7,69.1],[163.2,55.9],[152.4,46.5],[157.5,54.3],[168.3,54.8],[180.3,60.7],[165.5,60],[165,62],[164.5,60.3],[156,52.7],[160,74.3],[163,62],[165.7,73.1],[161,80],[162,54.7],[166,53.2],[174,75.7],[172.7,61.1],[167.6,55.7],[151.1,48.7],[164.5,52.3],[163.5,50],[152,59.3],[169,62.5],[164,55.7],[161.2,54.8],[155,45.9],[170,70.6],[176.2,67.2],[170,69.4],[162.5,58.2],[170.3,64.8],[164.1,71.6],[169.5,52.8],[163.2,59.8],[154.5,49],[159.8,50],[173.2,69.2],[170,55.9],[161.4,63.4],[169,58.2],[166.2,58.6],[159.4,45.7],[162.5,52.2],[159,48.6],[162.8,57.8],[159,55.6],[179.8,66.8],[162.9,59.4],[161,53.6],[151.1,73.2],[168.2,53.4],[168.9,69],[173.2,58.4],[171.8,56.2],[178,70.6],[164.3,59.8],[163,72],[168.5,65.2],[166.8,56.6],[172.7,105.2],[163.5,51.8],[169.4,63.4],[167.8,59],[159.5,47.6],[167.6,63],[161.2,55.2],[160,45],[163.2,54],[162.2,50.2],[161.3,60.2],[149.5,44.8],[157.5,58.8],[163.2,56.4],[172.7,62],[155,49.2],[156.5,67.2],[164,53.8],[160.9,54.4],[162.8,58],[167,59.8],[160,54.8],[160,43.2],[168.9,60.5],[158.2,46.4],[156,64.4],[160,48.8],[167.1,62.2],[158,55.5],[167.6,57.8],[156,54.6],[162.1,59.2],[173.4,52.7],[159.8,53.2],[170.5,64.5],[159.2,51.8],[157.5,56],[161.3,63.6],[162.6,63.2],[160,59.5],[168.9,56.8],[165.1,64.1],[162.6,50],[165.1,72.3],[166.4,55],[160,55.9],[152.4,60.4],[170.2,69.1],[162.6,84.5],[170.2,55.9],[158.8,55.5],[172.7,69.5],[167.6,76.4],[162.6,61.4],[167.6,65.9],[156.2,58.6],[175.2,66.8],[172.1,56.6],[162.6,58.6],[160,55.9],[165.1,59.1],[182.9,81.8],[166.4,70.7],[165.1,56.8],[177.8,60],[165.1,58.2],[175.3,72.7],[154.9,54.1],[158.8,49.1],[172.7,75.9],[168.9,55],[161.3,57.3],[167.6,55],[165.1,65.5],[175.3,65.5],[157.5,48.6],[163.8,58.6],[167.6,63.6],[165.1,55.2],[165.1,62.7],[168.9,56.6],[162.6,53.9],[164.5,63.2],[176.5,73.6],[168.9,62],[175.3,63.6],[159.4,53.2],[160,53.4],[170.2,55],[162.6,70.5],[167.6,54.5],[162.6,54.5],[160.7,55.9],[160,59],[157.5,63.6],[162.6,54.5],[152.4,47.3],[170.2,67.7],[165.1,80.9],[172.7,70.5],[165.1,60.9],[170.2,63.6],[170.2,54.5],[170.2,59.1],[161.3,70.5],[167.6,52.7],[167.6,62.7],[165.1,86.3],[162.6,66.4],[152.4,67.3],[168.9,63],[170.2,73.6],[175.2,62.3],[175.2,57.7],[160,55.4],[165.1,104.1],[174,55.5],[170.2,77.3],[160,80.5],[167.6,64.5],[167.6,72.3],[167.6,61.4],[154.9,58.2],[162.6,81.8],[175.3,63.6],[171.4,53.4],[157.5,54.5],[165.1,53.6],[160,60],[174,73.6],[162.6,61.4],[174,55.5],[162.6,63.6],[161.3,60.9],[156.2,60],[149.9,46.8],[169.5,57.3],[160,64.1],[175.3,63.6],[169.5,67.3],[160,75.5],[172.7,68.2],[162.6,61.4],[157.5,76.8],[176.5,71.8],[164.4,55.5],[160.7,48.6],[174,66.4],[163.8,67.3]]},{name:"Male",color:"rgba(119, 152, 191, .5)",data:[[174,65.6],[175.3,71.8],[193.5,80.7],[186.5,72.6],[187.2,78.8],[181.5,74.8],[184,86.4],[184.5,78.4],[175,62],[184,81.6],[180,76.6],[177.8,83.6],[192,90],[176,74.6],[174,71],[184,79.6],[192.7,93.8],[171.5,70],[173,72.4],[176,85.9],[176,78.8],[180.5,77.8],[172.7,66.2],[176,86.4],[173.5,81.8],[178,89.6],[180.3,82.8],[180.3,76.4],[164.5,63.2],[173,60.9],[183.5,74.8],[175.5,70],[188,72.4],[189.2,84.1],[172.8,69.1],[170,59.5],[182,67.2],[170,61.3],[177.8,68.6],[184.2,80.1],[186.7,87.8],[171.4,84.7],[172.7,73.4],[175.3,72.1],[180.3,82.6],[182.9,88.7],[188,84.1],[177.2,94.1],[172.1,74.9],[167,59.1],[169.5,75.6],[174,86.2],[172.7,75.3],[182.2,87.1],[164.1,55.2],[163,57],[171.5,61.4],[184.2,76.8],[174,86.8],[174,72.2],[177,71.6],[186,84.8],[167,68.2],[171.8,66.1],[182,72],[167,64.6],[177.8,74.8],[164.5,70],[192,101.6],[175.5,63.2],[171.2,79.1],[181.6,78.9],[167.4,67.7],[181.1,66],[177,68.2],[174.5,63.9],[177.5,72],[170.5,56.8],[182.4,74.5],[197.1,90.9],[180.1,93],[175.5,80.9],[180.6,72.7],[184.4,68],[175.5,70.9],[180.6,72.5],[177,72.5],[177.1,83.4],[181.6,75.5],[176.5,73],[175,70.2],[174,73.4],[165.1,70.5],[177,68.9],[192,102.3],[176.5,68.4],[169.4,65.9],[182.1,75.7],[179.8,84.5],[175.3,87.7],[184.9,86.4],[177.3,73.2],[167.4,53.9],[178.1,72],[168.9,55.5],[157.2,58.4],[180.3,83.2],[170.2,72.7],[177.8,64.1],[172.7,72.3],[165.1,65],[186.7,86.4],[165.1,65],[174,88.6],[175.3,84.1],[185.4,66.8],[177.8,75.5],[180.3,93.2],[180.3,82.7],[177.8,58],[177.8,79.5],[177.8,78.6],[177.8,71.8],[177.8,116.4],[163.8,72.2],[188,83.6],[198.1,85.5],[175.3,90.9],[166.4,85.9],[190.5,89.1],[166.4,75],[177.8,77.7],[179.7,86.4],[172.7,90.9],[190.5,73.6],[185.4,76.4],[168.9,69.1],[167.6,84.5],[175.3,64.5],[170.2,69.1],[190.5,108.6],[177.8,86.4],[190.5,80.9],[177.8,87.7],[184.2,94.5],[176.5,80.2],[177.8,72],[180.3,71.4],[171.4,72.7],[172.7,84.1],[172.7,76.8],[177.8,63.6],[177.8,80.9],[182.9,80.9],[170.2,85.5],[167.6,68.6],[175.3,67.7],[165.1,66.4],[185.4,102.3],[181.6,70.5],[172.7,95.9],[190.5,84.1],[179.1,87.3],[175.3,71.8],[170.2,65.9],[193,95.9],[171.4,91.4],[177.8,81.8],[177.8,96.8],[167.6,69.1],[167.6,82.7],[180.3,75.5],[182.9,79.5],[176.5,73.6],[186.7,91.8],[188,84.1],[188,85.9],[177.8,81.8],[174,82.5],[177.8,80.5],[171.4,70],[185.4,81.8],[185.4,84.1],[188,90.5],[188,91.4],[182.9,89.1],[176.5,85],[175.3,69.1],[175.3,73.6],[188,80.5],[188,82.7],[175.3,86.4],[170.5,67.7],[179.1,92.7],[177.8,93.6],[175.3,70.9],[182.9,75],[170.8,93.2],[188,93.2],[180.3,77.7],[177.8,61.4],[185.4,94.1],[168.9,75],[185.4,83.6],[180.3,85.5],[174,73.9],[167.6,66.8],[182.9,87.3],[160,72.3],[180.3,88.6],[167.6,75.5],[186.7,101.4],[175.3,91.1],[175.3,67.3],[175.9,77.7],[175.3,81.8],[179.1,75.5],[181.6,84.5],[177.8,76.6],[182.9,85],[177.8,102.5],[184.2,77.3],[179.1,71.8],[176.5,87.9],[188,94.3],[174,70.9],[167.6,64.5],[170.2,77.3],[167.6,72.3],[188,87.3],[174,80],[176.5,82.3],[180.3,73.6],[167.6,74.1],[188,85.9],[180.3,73.2],[167.6,76.3],[183,65.9],[183,90.9],[179.1,89.1],[170.2,62.3],[177.8,82.7],[179.1,79.1],[190.5,98.2],[177.8,84.1],[180.3,83.2],[180.3,83.2]]}]})}),$(document).ready(function(){progressBarInit()}),$(document).ready(function(){$("#flat").addClass("active"),$("#progressBar").addClass("flat"),$("#flat").on("click",function(){$("#progressBar").removeClass().addClass("flat"),$("a").removeClass(),$(this).addClass("active"),$(this).preventDefault()}),$("#single").on("click",function(){$("#progressBar").removeClass().addClass("single"),$("a").removeClass(),$(this).addClass("active"),$(this).preventDefault()}),$("#multiple").on("click",function(){$("#progressBar").removeClass().addClass("multiple"),$("a").removeClass(),$(this).addClass("active"),$(this).preventDefault()}),$("#semantic").on("click",function(){$("#progressBar").removeClass().addClass("semantic"),$("a").removeClass(),$(this).addClass("active"),$(this).preventDefault(),alert("hello")}),$(document).on("scroll",function(){maxAttr=$("#progressBar").attr("max"),valueAttr=$("#progressBar").attr("value"),percentage=valueAttr/maxAttr*100})}),$.mockjax({url:"/contact",response:function(a){this.responseText="<div>The form was successfully submitted. Thank you!</div>"}}),$.mockjax({url:"/contact/email",responseTime:250,response:function(a){var b=parseParams(a.data),c=b.email;/\S+@\S+\.\S+/.test(c)?this.responseText=emailInputTemplate(c,null):this.responseText=emailInputTemplate(c,"Please enter a valid email address")}});
//# sourceMappingURL=icjia.js.map;$(document).ready(function() {


	progressBarInit();



});


$(document).ready(function() {

	$('#flat').addClass("active");
	$('#progressBar').addClass('flat');

	$('#flat').on('click', function() {
		$('#progressBar').removeClass().addClass('flat');
		$('a').removeClass();
		$(this).addClass('active');
		$(this).preventDefault();
	});

	$('#single').on('click', function() {
		$('#progressBar').removeClass().addClass('single');
		$('a').removeClass();
		$(this).addClass('active');
		$(this).preventDefault();
	});

	$('#multiple').on('click', function() {
		$('#progressBar').removeClass().addClass('multiple');
		$('a').removeClass();
		$(this).addClass('active');
		$(this).preventDefault();
	});

	$('#semantic').on('click', function() {
		$('#progressBar').removeClass().addClass('semantic');
		$('a').removeClass();
		$(this).addClass('active');
		$(this).preventDefault();
		alert('hello');
	});

	$(document).on('scroll', function() {

		maxAttr = $('#progressBar').attr('max');
		valueAttr = $('#progressBar').attr('value');
		percentage = (valueAttr / maxAttr) * 100;

		// if (percentage < 49) {
		// 	document.styleSheets[0].addRule('.semantic', 'color: red');
		// 	document.styleSheets[0].addRule(
		// 		'.semantic::-webkit-progress-value',
		// 		'background-color: red');
		// 	document.styleSheets[0].addRule('.semantic::-moz-progress-bar',
		// 		'background-color: red');
		// } else if (percentage < 98) {
		// 	document.styleSheets[0].addRule('.semantic', 'color: orange');
		// 	document.styleSheets[0].addRule(
		// 		'.semantic::-webkit-progress-value',
		// 		'background-color: orange');
		// 	document.styleSheets[0].addRule('.semantic::-moz-progress-bar',
		// 		'background-color: orange');
		// } else {
		// 	document.styleSheets[0].addRule('.semantic', 'color: green');
		// 	document.styleSheets[0].addRule(
		// 		'.semantic::-webkit-progress-value',
		// 		'background-color: green');
		// 	document.styleSheets[0].addRule('.semantic::-moz-progress-bar',
		// 		'background-color: green');
		// }
	});

});


/*
Function to initialize the progress bar.
This is called if elements on the page are expanded (e.g., the bios on the 'Commission' page)
*/


function progressBarInit() {
	var getMax = function() {
		return $(document).height() - $(window).height();
	}

	var getValue = function() {
		return $(window).scrollTop();
	}

	if ('max' in document.createElement('progress')) {
		// Browser supports progress element
		var progressBar = $('progress');

		// Set the Max attr for the first time
		progressBar.attr({
			max: getMax()
		});

		$(document).on('scroll', function() {
			// On scroll only Value attr needs to be calculated
			progressBar.attr({
				value: getValue()
			});
		});

		$(window).resize(function() {
			// On resize, both Max/Value attr needs to be calculated
			progressBar.attr({
				max: getMax(),
				value: getValue()
			});
		});
	} else {
		var progressBar = $('.progress-bar'),
			max = getMax(),
			value, width;

		var getWidth = function() {
			// Calculate width in percentage
			value = getValue();
			width = (value / max) * 100;
			width = width + '%';
			return width;
		}

		var setWidth = function() {
			progressBar.css({
				width: getWidth()
			});
		}

		$(document).on('scroll', setWidth);
		$(window).on('resize', function() {
			// Need to reset the Max attr
			max = getMax();
			setWidth();
		});
	}
}
;// Taken from https://gist.github.com/kares/956897


function parseParams(str) {
	var re = /([^&=]+)=?([^&]*)/g;
	var decode = function(str) {
		return decodeURIComponent(str.replace(/\+/g, ' '));
	};
	var params = {},
		e;
	if (str) {
		if (str.substr(0, 1) === '?') {
			str = str.substr(1);
		}
		while (e = re.exec(str)) {
			var k = decode(e[1]);
			var v = decode(e[2]);
			if (params[k] !== undefined) {
				if (!$.isArray(params[k])) {
					params[k] = [params[k]];
				}
				params[k].push(v);
			} else {
				params[k] = v;
			}
		}
	}
	return params;
}

//========================================================================
// Mock Server-Side HTTP End Point
//========================================================================
$.mockjax({
	url: "/contact",
	response: function(settings) {
		this.responseText =
			'<div>The form was successfully submitted. Thank you!</div>'
	}
});

$.mockjax({
	url: "/contact/email",
	responseTime: 250,
	response: function(settings) {
		var params = parseParams(settings.data);
		var email = params['email'];
		if (!/\S+@\S+\.\S+/.test(email)) {
			this.responseText = emailInputTemplate(email,
				"Please enter a valid email address");
		} else {
			this.responseText = emailInputTemplate(email, null);
		}
	}
});

//========================================================================
// Mock Server-Side Templates
//========================================================================



function emailInputTemplate(val, errorMsg) {
	return '<div id="email-div" class="form-group has-' + (errorMsg ? 'error' :
			'success') +
		' has-feedback"> \
               <label class="control-label">Email Address</label> \
               <input class="form-control" name="email" ic-replace-target="true" \
                      ic-post-to="/contact/email" ic-transition="none" ic-target="#email-div" value="' +
		val + '">' +
		(errorMsg ? '<span class="help-block text-error">' + errorMsg + '</span>' :
			"") +
		'</div>';
}
