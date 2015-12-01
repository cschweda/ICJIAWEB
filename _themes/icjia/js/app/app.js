/* --------------------------------- Rollover Dropdown menus ------------------------------------*/
/* -- */

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

	// $('.news-item').show();

	$('.expander-news').readmore({
		speed: 175,
		collapsedHeight: 91,
		moreLink: '<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down" style="font-size: 10px; margin-bottom: .36em"></i></span></a>',
		lessLink: '<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',
		afterToggle: function() {
			progressBarInit();

		}

	});

	$('.expander').readmore({
		speed: 175,
		collapsedHeight: 91,
		moreLink: '<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down"></i></span></a>',
		lessLink: '<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',
		afterToggle: function() {
			progressBarInit();
		}
	});

	$('.expander-bio').readmore({
		speed: 175,
		collapsedHeight: 148,
		moreLink: '<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down"></i></span></a>',
		lessLink: '<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',
		afterToggle: function() {
			progressBarInit();
		}
	});

	$('.expander-sm').readmore({
		speed: 175,
		collapsedHeight: 56,
		moreLink: '<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down"></i></span></a>',
		lessLink: '<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',
		afterToggle: function() {
			progressBarInit();
		}
	});

	$('.expander-lg').readmore({
		speed: 175,
		collapsedHeight: 148,
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



/* activate scrollspy menu */
// var $body = $(document.body);
// var navHeight = $('.navbar').outerHeight(true) + 10;
//
// $body.scrollspy({
// 	target: '#leftColumn',
// 	offset: navHeight
// });

/* smooth scrolling sections */
/*$('a[href*=#]:not([href=#])').click(function() {*/

//$('a.page-scroll').click(function() {
// if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
// 		'') && location.hostname == this.hostname) {
// 	var target = $(this.hash);
// 	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 	if (target.length) {
// 		$('html,body').animate({
// 			scrollTop: target.offset().top - 50
// 		}, 1000);
// 		return false;
// 	}
// }

//});

$(document).ready(function() {
	$('.scroll').click(function(e) {
		e.preventDefault();
		$(this).removeClass('active');
		var $a_href = $(this).attr('href');
		var $trimmed = $a_href.substring(1);
		//alert($trimmed);
		$.scrollTo(document.getElementById($trimmed), 600, {
			offset: -90
		});
		return false;


	});
});


/* --------------------------------- Affix: Navbar ------------------------------------*/



// Affixed
$(document).ready(function() {



	$("#nav").on('affixed.bs.affix', function() {
		$('#nav').addClass('outline', 1000);
		$('#logo').removeClass('logo-spacer', 1000);
	});

	// Not affixed
	$("#nav").on('affixed-top.bs.affix', function() {
		$('#nav').removeClass('outline', 1000);
		$('#logo').addClass('logo-spacer', 1000);
		//$('#logo').hide();
	});
});

$('.scrollclass').click(function() {
	$('body').scrollTo($(this).data('target'), {
		duration: 1200,
		offset: -90
	});
});


/* activate sidebar */
// $('#sidebar-photo').affix({
// 	offset: {
// 		top: 385
// 	}
// });
//
// /* activate sidebar */
// $('#sidebar-no-photo').affix({
// 	offset: {
// 		top: 55
//
// 	}
// });

/* --------------------------------- Social media ------------------------------------*/


// function fbs_click(u, t) {
// 	//u = location.href;
// 	//t = document.title;
// 	console.log('facebook url: ' + u);
// 	console.log('facebook title: ' + t);
// 	window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) +
// 		'&t=' + encodeURIComponent(t), 'sharer',
// 		'toolbar=0,status=0,width=626,height=436');
// 	return false;
// }
//
// function twitter_click(t, u) {
//
// 	window.open('http://twitter.com/share?text=' + encodeURIComponent(t) +
// 		'&url=' +
// 		encodeURIComponent(u),
// 		'sharer',
// 		'toolbar=0,status=0,width=626,height=436');
// 	return false;
//
// }

//var u = 'http://www.icjia.org';


// jQuery.urlShortener({
// 	longUrl: u,
// 	success: function(shortUrl) {
// 		console.log(shortUrl);
// 		window.open('http://twitter.com/share?text=' + encodeURIComponent(t) +
// 			'&url=' +
// 			encodeURIComponent(shortUrl),
// 			'sharer',
// 			'toolbar=0,status=0,width=626,height=436');
// 		return false;
//
// 	},
// 	error: function(err) {
// 		console.log(JSON.stringify(err));
// 		window.open('http://twitter.com/share?text=' + encodeURIComponent(t) +
// 			'&url=' +
// 			encodeURIComponent(u),
// 			'sharer',
// 			'toolbar=0,status=0,width=626,height=436');
// 		return false;
//
//
// 	}
// });



/* --------------------------------- Detect IE ------------------------------------*/



/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
// function detectIE() {
// 	var ua = window.navigator.userAgent;
//
// 	var msie = ua.indexOf('MSIE ');
// 	if (msie > 0) {
// 		// IE 10 or older => return version number
// 		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
// 	}
//
// 	var trident = ua.indexOf('Trident/');
// 	if (trident > 0) {
// 		// IE 11 => return version number
// 		var rv = ua.indexOf('rv:');
// 		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
// 	}
//
// 	var edge = ua.indexOf('Edge/');
// 	if (edge > 0) {
// 		// IE 12 => return version number
// 		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
// 	}
//
// 	// other browser
// 	return false;
// }


/* --------------------------------- Tab collapse ------------------------------------*/

// https://github.com/flatlogic/bootstrap-tabcollapse
// $('#article-tabs').tabCollapse();
// $(document).on("shown.bs.collapse shown.bs.tab",
// 	".panel-collapse, a[data-toggle='tab']",
// 	function(e) {
// 		progressBarInit();
// 	});



/*

Bootstrap 3 tab click solution: http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload

*/

// Javascript to enable link to tab
// Javascript to enable link to tab
/* http://stackoverflow.com/questions/7862233/twitter-bootstrap-tabs-go-to-specific-tab-on-page-reload-or-hyperlink

 */
var hash = document.location.hash;
console.log('hash: ' + hash);
var prefix = "tab_";

if (hash) {
	hash = hash.replace(prefix, '');
	var hashPieces = hash.split('?');
	activeTab = $('.nav-tabs a[href=' + hashPieces[0] + ']');
	console.log(hashPieces[0]);
	activeTab && activeTab.tab('show');


} else {

	console.log('No hash');
	activeTab = $('.nav-tabs a:first');
	activeTab && activeTab.tab('show');

}

// Change hash for page-reload
$('.nav-tabs a').on('shown', function(e) {
	window.location.hash = e.target.hash.replace("#", "#" + prefix);


});

// Force page to reload when hash change
$(window).on('hashchange', function() {
	window.location.reload(true);
});



// $('.nav-tabs a').click(function(e) {
//
// 	window.location.hash = this.hash;
//
// });



// $('.bxslider').show().bxSlider({
// 	minSlides: 3,
// 	preloadImages: 'all',
// 	maxSlides: 10,
// 	slideWidth: 275,
// 	slideMargin: 5,
// 	controls: true,
// 	pager: false,
// 	nextSelector: '#slider-next',
// 	prevSelector: '#slider-prev',
// 	nextText: '<i class="fa fa-arrow-circle-right fa-2x"></i>',
// 	prevText: '<i class="fa fa-arrow-circle-left fa-2x"></i>'
// });



//// Ajax tabs

//http://www.leaseweblabs.com/2013/12/loading-remote-data-bootstrap-tabs
//http://leaseweb.github.io/bootstrap-tabs-demo//

var $ = jQuery;
/**
 *
 * Bootstrap remote data tabs plugin
 *
 * Author: Stephen Hoogendijk (TheCodeAssassin)
 *
 * Licensed under the GPLV2 license.
 *
 * @returns {{hasLoadingMask: boolean, load: Function, _executeRemoteCall: Function}}
 * @constructor
 */
var RemoteTabs = function() {
	var obj = {
		hasLoadingMask: false,

		/**
		 *
		 * @param tabEvent
		 * @param hasLoadingMask
		 */
		load: function(tabEvent, hasLoadingMask) {

			var me = this;

			me.hasLoadingMask = !!hasLoadingMask;

			// enable all remote data tabs
			$('[data-toggle=tab]').each(function(k, tab) {
				var tabObj = $(tab),
					tabDiv,
					tabData,
					tabCallback,
					url,
					simulateDelay;

				// check if the tab has a data-url property
				if (tabObj.is('[data-tab-url]')) {
					url = tabObj.attr('data-tab-url');
					tabDiv = $(tabObj.attr('href'));
					tabData = tabObj.attr('data-tab-json') || [];
					tabCallback = tabObj.attr('data-tab-callback') || null;
					simulateDelay = tabObj.attr('data-tab-delay') || null;

					if (tabData.length > 0) {
						try {
							tabData = $.parseJSON(tabData);
						} catch (exc) {
							console.log('Invalid json passed to data-tab-json');
							console.log(exc);
						}

					}

					tabObj.on(tabEvent, function(e) {

						if (!tabObj.hasClass("loaded") || tabObj.is(
								'[data-tab-always-refresh]')) {

							if (me.hasLoadingMask) {
								tabDiv.mask('Loading...');
							}

							// delay the json call if it has been given a value
							if (simulateDelay) {
								clearTimeout(window.timer);
								window.timer = setTimeout(function() {
									me._executeRemoteCall(url, tabData, tabCallback, tabObj,
										tabDiv);
								}, simulateDelay);
							} else {
								me._executeRemoteCall(url, tabData, tabCallback, tabObj, tabDiv);
							}


						}

					});

				}
			});
		},

		/**
		 * Execute the remote call
		 * @param url
		 * @param customData
		 * @param callbackFn
		 * @param trigger
		 * @param tabContainer
		 * @private
		 */
		_executeRemoteCall: function(url, customData, callbackFn, trigger,
			tabContainer) {
			var me = this;


			$.ajax({
				url: url,
				data: customData || [],
				success: function(data) {
					if (me.hasLoadingMask) {
						tabContainer.unmask();
					}
					if (data) {
						if (typeof window[callbackFn] == 'function') {
							window[callbackFn].call(null, data, trigger, tabContainer,
								customData);
						}
						if (!trigger.hasClass("loaded")) {
							trigger.addClass("loaded");
						}
						tabContainer.html(data);
					}
				},
				fail: function(data) {
					if (me.hasLoadingMask) {
						tabContainer.unmask();
					}
				}
			});
		}
	};
	var hasLoadingMask = (jQuery().mask ? true : false),
		bootstrapVersion2 = (jQuery().typeahead ? true : false);

	// hook the event based on the version of bootstrap
	var event = (bootstrapVersion2 ? 'show' : 'show.bs.tab');
	obj.load(event, hasLoadingMask);

	return obj;
};

var remoteTabsPluginLoaded = new RemoteTabs();


$('[id*="fnref"]').click(function(e) {
	e.preventDefault();
	var $a_href = $(this).attr('href');
	var $trimmed = $a_href.substring(1);
	//alert($trimmed);
	$.scrollTo(document.getElementById($trimmed), 200, {
		offset: -90
	});
	return false;

	//$('[id*="fnref"]')
});


$('.reversefootnote').click(function(e) {
	e.preventDefault();
	var $a_href = $(this).attr('href');
	var $trimmed = $a_href.substring(1);
	//alert($trimmed);
	$.scrollTo(document.getElementById($trimmed), 200, {
		offset: -80
	});
	return false;

	//$('[id*="fnref"]')
});


$(document).ready(function() {
	$('.hide-toc').click(function(e) {
		console.log('Hide toc');
		$('.bs-sidebar').fadeOut();
		$('#progressBar').fadeOut();
		//progressBarInit();

	});

	$('.show-toc').click(function(e) {
		console.log('Show toc');
		$('.bs-sidebar').fadeIn();
		$('#progressBar').fadeIn();
		//progressBarInit();


	});

	var $container = $('#keyword-grid');

	$container.isotope({
		itemSelector: '.keyword-single',
		layoutMode: 'fitRows'
	});

	$('.filter-group').on('click', 'a', function() {
		var filterValue = $(this).attr('data-target');
		//alert(filterValue);
		$container.isotope({
			filter: filterValue
		});
	});



});



$('.open-image').click(function(e) {
	e.preventDefault();
	$(this).ekkoLightbox();
});



$(function() {
	$('#nav-wrapper').height($("#nav").height());

	$('#nav.icjia-main').affix({
		offset: {
			top: $('#nav').offset().top
		}
	});
});



/* -------------------- Back to top fade in / social sidebar fade in -------------------------*/

$(document).ready(function() {


	$('body').prepend(
		'<a href="javascript:void(0);" class="back-to-top" style="display: none">Back to Top</a>'
	);

	var amountScrolled = 550;

	var socialbar = 120;

	$(window).scroll(function() {
		if ($(window).scrollTop() > amountScrolled) {
			$('a.back-to-top').fadeIn('fast');
		} else {
			$('a.back-to-top').fadeOut('fast');
		}

		if ($(window).scrollTop() > socialbar) {
			$('.prepbootstrap-sharing-container').fadeIn('slow');
		} else {
			$('.prepbootstrap-sharing-container').fadeOut('slow');
		}

	});

	$('a.back-to-top').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 1200);
		return false;
	});



	var daysToShowNewLabelforNews = 10;
	var daysToShowNewLabelforArticles = 45;
	var newLabel =
		'<span style="font-weight: 700; background: #fe8869; color: #fff; border: 0px solid #ccc; padding: 4px; font-family: Lato, sans-serif">NEW</span>&nbsp;&nbsp;';

	$('.addNewLabel[data-postDate]').each(function() {
		var $postDate = moment($(this).attr('data-postDate'));
		var $postType = $(this).attr('data-postType');
		var diffInDays = moment().diff($postDate, 'days');

		if ($postType == 'news') {
			if (diffInDays <= daysToShowNewLabelforNews) {
				$(this).prepend(newLabel);
			}
		}

		if ($postType == 'article') {
			if (diffInDays <= daysToShowNewLabelforArticles) {
				$(this).prepend(newLabel);
			}
		}

	});



});


/* Markdown footnotes: BigfootJS: http://www.bigfootjs.com/ */

$.bigfoot({

		// leave original footnotes intact
		actionOriginalFN: 'ignore'
	}

);
