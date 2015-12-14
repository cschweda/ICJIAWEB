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


	/* Add 'new' label to front page news items and articles. Added 12/01/2015. Uses moment.js date library  */
	var daysToShowNewLabelforNews = 5;
	var daysToShowUpdatedLabelforNews = 5;
	var daysToShowNewLabelforArticles = 15;
	var newLabel =
		'<span style="font-weight: 700; background: #fe8869; color: #fff; border: 0px solid #ccc; padding: 4px; font-family: Lato, sans-serif">NEW</span>&nbsp;&nbsp;';

	var updateLabel =
		'<span style="font-weight: 700; background: #af3535; color: #fff; border: 0px solid #ccc; padding: 4px; font-family: Lato, sans-serif">UPDATED</span>&nbsp;&nbsp;';

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


	$('.addUpdateLabel[data-postDate]').each(function() {
		var $postDate = moment($(this).attr('data-postDate'));
		var diffInDays = moment().diff($postDate, 'days');


		if (diffInDays <= daysToShowUpdatedLabelforNews) {
			$(this).prepend(updateLabel);
		}



	});



});


/* Markdown footnotes: BigfootJS: http://www.bigfootjs.com/ */

$.bigfoot({

		// leave original footnotes intact
		actionOriginalFN: 'ignore'
	}

);
;/*!
 * jQuery plug-in to turn bootstrap tabbed navigation into responsive tabbed navigation
 * Original author: @stephen_thomas
 * Plugin Boilerplate: http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/
 * Additional Boilerplate: http://f6design.com/journal/2012/05/06/a-jquery-plugin-boilerplate/
 * Comments from boilerplate sources retained
 * Licensed under the MIT license

 https://github.com/sathomas/responsive-tabs
 */


// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;
(function($, window, document, undefined) {

	// undefined is used here as the undefined global
	// variable in ECMAScript 3 and is mutable (i.e. it can
	// be changed by someone else). undefined isn't really
	// being passed in so we can ensure that its value is
	// truly undefined. In ES5, undefined can no longer be
	// modified.

	// window and document are passed through as local
	// variables rather than as globals, because this (slightly)
	// quickens the resolution process and can be more
	// efficiently minified (especially when both are
	// regularly referenced in your plugin).


	// From http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
	//
	// Strict Mode is a new feature in ECMAScript 5 that allows you to
	// place a program, or a function, in a "strict" operating context.
	// This strict context prevents certain actions from being taken
	// and throws more exceptions (generally providing the user with
	// more information and a tapered-down coding experience).
	//
	// Since ECMAScript 5 is backwards-compatible with ECMAScript 3,
	// all of the "features" that were in ECMAScript 3 that were
	// "deprecated" are just disabled (or throw errors) in strict
	// mode, instead.
	//
	// Strict mode helps out in a couple ways:
	//
	//  *  It catches some common coding bloopers, throwing exceptions.
	//  *  It prevents, or throws errors, when relatively "unsafe"
	//     actions are taken (such as gaining access to the global object).
	//  *  It disables features that are confusing or poorly thought out.

	"use strict";

	var pluginName = 'resptabs';

	// The plug-in itself is implemented as an object. Here's the
	// constructor function

	function Plugin(element, options) {

		// Members
		var el = element, // DOM version of element
			$el = $(element), // jQuery version of element
			windowSize; // last measured window size

		// Extend default options with those supplied by user.
		options = $.extend({}, $.fn[pluginName].defaults, options);

		// Slide the tab itself (not the content)
		function slideTab($tabEl, inOrOut, leftOrRight) {

			// grab the current values for styles we might change
			var oldStyles = {
					"margin-left": $tabEl.css('margin-left'),
					"opacity": $tabEl.css('opacity'),
					"position": $tabEl.css('position')
				},
				startAnimation = {},
				endAnimation = {};

			// if the tab is going away, absolute position it so the
			// replacement tab will appear in its place
			if (inOrOut === 'out') {
				$tabEl.css('position', 'absolute');
				// define where the animation should end
				endAnimation["opacity"] = 0;
				endAnimation["margin-left"] = $(window).width();
				if (leftOrRight === 'left') {
					endAnimation["margin-left"] *= -1;
				}

				// if the tab is coming into view, position it where it can
				// start its animation and set it up to fade in
			} else if (inOrOut === 'in') {
				startAnimation["opacity"] = 0;
				startAnimation["margin-left"] = $(window).width();
				if (leftOrRight === 'left') {
					startAnimation["margin-left"] *= -1;
				}
				$tabEl.css(startAnimation);
				// ensure the tab will be visible as it moves in
				$tabEl.show();
				// end up with the modified styles restored
				endAnimation["opacity"] = oldStyles["opacity"];
				endAnimation["margin-left"] = oldStyles["margin-left"];
			}

			// do the animation
			$tabEl.animate(
				endAnimation,
				options.slideTime,
				function() {

					// if the tab has gone away, hide it in the conventional
					// way and restore the properties that we animated
					if (inOrOut === 'out') {
						$tabEl.hide();
						$tabEl.css(oldStyles);
					}
				}
			);
		}

		// Set the small screen (responsive) style for tabbable naviation.
		function setSmallStyle() {

			$(".nav-tabs > li", $el).css("text-align", "center");
			$(".nav-tabs > li:not(.active)", $el).hide();
			$("<a class='right tab-control'>&rsaquo;</a>").appendTo($(
					".nav-tabs li:not(:last-child)", $el))
				.each(function(i) {
					var thisLi = $(this).parents("ul").first().children("li:nth-child(" + (i +
							1) + ")"),
						thisTab = $(thisLi).children("a[href]"),
						nextLi = $(this).parents("ul").first().children("li:nth-child(" + (i +
							2) + ")"),
						nextTab = $(nextLi).children("a[href]");
					$(this).click(function() {
						slideTab(thisLi, "out", "left");
						slideTab(nextLi, "in", "right");
						$(nextTab).tab('show');
					});
				});
			$("<a class='left tab-control'>&lsaquo;</a>").prependTo($(
					".nav-tabs li:not(:first-child)", $el))
				.each(function(i) {
					var thisLi = $(this).parents("ul").first().children("li:nth-child(" + (i +
							2) + ")"),
						thisTab = $(thisLi).children("a[href]"),
						prevLi = $(this).parents("ul").first().children("li:nth-child(" + (i +
							1) + ")"),
						prevTab = $(prevLi).children("a[href]");
					$(this).click(function() {
						slideTab(thisLi, "out", "right");
						slideTab(prevLi, "in", "left");
						$(prevTab).tab('show');
					});
				});
			$(".nav-tabs li:first-child", $el).prepend(
				"<span class='left tab-control-spacer'> </span>");
			$(".nav-tabs li:last-child", $el).append(
				"<span class='right tab-control-spacer'> </span>");
		}

		// Set the large screen version of tabbable navigation;
		// this is just the bootstrap default, so all we need to do is
		// to undo any potential changes we made for a small screen
		// style.

		function setLargeStyle() {

			$(".nav-tabs > li", $el).css("text-align", "left");
			$(".nav-tabs > li:not(.active)", $el).show();
			$(".tab-control", $el).remove();
			$(".tab-control-spacer", $el).remove();

		}

		function windowResized() {

			// Although this isn't strictly necessary, let's monitor the
			// window size so we can detect when it crosses the threshold
			// that triggers re-styling. Not likely a big deal for actual
			// users, but we include the functionality for the geeks that
			// like to look at responsive web sites and mess around with
			// browser window widths.
			//
			// We're not bothering with debouncing the window resize
			// event since we only care when a breakpoint is crossed.
			// Ignoring the other resizes effectively serves as a
			// debouncer.

			var newWidth = window.innerWidth;
			if ((windowSize > options.maxSmallWidth) &&
				(newWidth <= options.maxSmallWidth)) {

				setSmallStyle();

			} else if ((windowSize <= options.maxSmallWidth) &&
				(newWidth > options.maxSmallWidth)) {

				setLargeStyle();

			}
			windowSize = newWidth;
		}

		// Initialize plugin.
		function init() {
			// keep track of the window size so we can tell when it crosses a breakpoint
			windowSize = $('body').width();

			// default is large window styling; adjust if appropriate
			if (windowSize <= options.maxSmallWidth) {
				setSmallStyle();
			}

			// track window size changes to look for breakpoints
			$(window).on('resize', windowResized);

			hook('onInit');

		}

		// Get/set a plugin option.
		// Get usage: $('#el').responsive-tabs('option', 'key');
		// Set usage: $('#el').responsive-tabs('option', 'key', value);

		function option(key, val) {
			if (val) {
				options[key] = val;
			} else {
				return options[key];
			}
		}

		// Destroy plugin.
		// Usage: $('#el').responsive-tabs('destroy');

		function destroy() {
			// Clean up by removing the event handlers we've added
			$(window).off('resize', windowResized);

			// restore styles and DOM
			setLargeStyle();

			// Iterate over each matching element.
			$el.each(function() {
				var el = this,
					$el = $(this);

				hook('onDestroy');

				// Remove Plugin instance from the element.
				$el.removeData('plugin_' + pluginName);
			});
		}

		// Callback hooks.
		// Usage: In the defaults object specify a callback function:
		// hookName: function() {}
		// Then somewhere in the plugin trigger the callback:
		// hook('hookName');

		function hook(hookName) {
			if (options[hookName] !== undefined) {
				// Call the user defined function.
				// Scope is set to the jQuery element we are operating on.
				options[hookName].call(el);
			}
		}

		// Initialize the plugin instance.
		init();

		// Expose methods of Plugin we wish to be public.
		return {
			option: option,
			destroy: destroy
		};
	}

	// Build the plugin here

	$.fn[pluginName] = function(options) {

		// If the first parameter is a string, treat this as a call to
		// a public method. The first parameter is the method name and
		// following parameters are arguments for the method.

		if (typeof arguments[0] === 'string') {
			var methodName = arguments[0];
			var args = Array.prototype.slice.call(arguments, 1);
			var returnVal;
			this.each(function() {
				// Check that the element has a plugin instance, and that
				// the requested public method exists.
				if ($.data(this, 'plugin_' + pluginName) &&
					typeof $.data(this, 'plugin_' + pluginName)[methodName] === 'function'
				) {
					// Call the method of the Plugin instance, and Pass it
					// the supplied arguments.
					returnVal = $.data(this, 'plugin_' + pluginName)[methodName].apply(
						this, args);
				} else {
					throw new Error('Method ' + methodName + ' does not exist on jQuery.' +
						pluginName);
				}
			});
			if (returnVal !== undefined) {
				// If the method returned a value, return the value.
				return returnVal;
			} else {
				// Otherwise, returning 'this' preserves chainability.
				return this;
			}

			// If the first parameter is an object (options), or was omitted,
			// instantiate a new instance of the plugin.

		} else if (typeof options === "object" || !options) {

			return this.each(function() {
				// Only allow the plugin to be instantiated once.
				if (!$.data(this, 'plugin_' + pluginName)) {
					// Pass options to Plugin constructor, and store Plugin
					// instance in the elements jQuery data object.
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
				}
			});
		}
	};

	// Default plugin options.
	// Options can be overwritten when initializing plugin, by
	// passing an object literal, or after initialization:
	// $('#el').responsive-tabs('option', 'key', value);
	$.fn[pluginName].defaults = {
		maxSmallWidth: 767, // biggest screen size for which we use "small" configuration
		slideTime: 500, // milliseconds to slide from one tab to another
		onInit: function() {},
		onDestroy: function() {}
	};

})(jQuery, window, document);
