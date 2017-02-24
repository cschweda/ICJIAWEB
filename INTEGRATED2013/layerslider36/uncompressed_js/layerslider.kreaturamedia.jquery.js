(function($) {

	$.fn.layerSlider = function( options ){

		// Initializing

		if( (typeof(options)).match('object|undefined') ){
			return this.each(function(i){
				new layerSlider(this, options);
			});
		}else{
			if( options == 'data' ){
				var lsData = $(this).data('LayerSlider').g;
				if( lsData ){
					return lsData;
				}
			}else{
				return this.each(function(i){

					// Control functions: prev, next, start, stop & change

					var lsData = $(this).data('LayerSlider');
					if( lsData ){
						if( !lsData.g.isAnimating ){
							if( typeof(options) == 'number' ){
								if( options > 0 && options < lsData.g.layersNum + 1 && options != lsData.g.curLayerIndex ){
									lsData.change(options);
								}						
							}else{
								switch(options){
									case 'prev':
										lsData.o.cbPrev();
										lsData.prev('clicked');
										break;
									case 'next':
										lsData.o.cbNext();
										lsData.next('clicked');
										break;
									case 'start':
										if( !lsData.g.autoSlideshow ){
											lsData.o.cbStart();
											lsData.g.originalAutoSlideshow = true;
											lsData.start();
										}							
										break;
									case 'debug':
										lsData.d.show();
										break;
								}
							}
						}
						if( ( lsData.g.autoSlideshow || ( !lsData.g.autoSlideshow && lsData.g.originalAutoSlideshow ) ) && options == 'stop' ){
							lsData.o.cbStop();
							lsData.g.originalAutoSlideshow = false;
							lsData.g.curLayer.find('iframe[src*="www.youtu"], iframe[src*="player.vimeo"]').each(function(){
								
								// Clearing videoTimeouts

								clearTimeout( $(this).data( 'videoTimer') );
							});
							
							lsData.stop();
						}
					}
				});				
			}
		}
	};

	// LayerSlider methods

	var layerSlider = function(el, options) {

		var ls = this;
		ls.$el = $(el).addClass('ls-container');
		ls.$el.data('LayerSlider', ls);

		ls.load = function(){

			// Setting options (user settings) and global (not modificable) parameters
			
			ls.o = $.extend({},layerSlider.options, options);
			ls.g = $.extend({},layerSlider.global);

			// NEW IMPROVEMENT v3.6 forbid to call the init code more than once on the same element

			if( !ls.g.initialized ){

				ls.g.initialized = true;

				// Added debug mode v3.5

				ls.debug();			

				if( $('html').find('meta[content*="WordPress"]').length ){
					ls.g.wpVersion = $('html').find('meta[content*="WordPress"]').attr('content').split('WordPress')[1];
				}

				if( $('html').find('script[src*="layerslider"]').length ){
					if( $('html').find('script[src*="layerslider"]').attr('src').indexOf('?') != -1 ){
						ls.g.lswpVersion = $('html').find('script[src*="layerslider"]').attr('src').split('?')[1].split('=')[1];					
					}
				}

				ls.d.aT('LayerSlider controls');
				ls.d.aU('<a href="#">prev</a> | <a href="#">next</a> | <a href="#">start</a> | <a href="#">stop</a> | <a href="#">force stop</a>');
				ls.d.history.find('a').each(function(){
					$(this).click(function(e){
						e.preventDefault();
						if( $(this).text() == 'force stop' ){
							$(el).find('*').stop(true,false);
							$(el).layerSlider('stop');
						}else{
							$(el).layerSlider($(this).text());
						}
					});					
				});

				ls.d.aT('LayerSlider version information');
				ls.d.aU('JS version: <strong>' + ls.g.version + '</strong>');			
				if(ls.g.lswpVersion){
					ls.d.aL('WP version: <strong>' + ls.g.lswpVersion + '</strong>');
				}
				if(ls.g.wpVersion){
					ls.d.aL('WordPress version: <strong>' + ls.g.wpVersion + '</strong>');
				}

				ls.d.aL('jQuery version: <strong>' + $().jquery + '</strong>');

				if( $(el).attr('id') ){

					ls.d.aT('LayerSlider container');
					ls.d.aU('#'+$(el).attr('id'));
				}
								

				ls.d.aT('Init code');
				ls.d.aeU();

				for( var prop in ls.o ){
					ls.d.aL(prop+': <strong>' + ls.o[prop] + '</strong>');
				}

				// NEW LOAD METHOD v3.5

				if( !ls.o.skin || ls.o.skin == '' || !ls.o.skinsPath || ls.o.skinsPath == '' ){

					ls.d.aT('Loading without skin. Possibilities: mistyped skin and / or skinsPath.');

					ls.init();
				}else{

					ls.d.aT('Trying to load with skin: '+ls.o.skin, true);

					// Applying skin

					$(el).addClass('ls-'+ls.o.skin);

					var skinStyle = ls.o.skinsPath+ls.o.skin+'/skin.css';

					cssContainer = $('head');

					if( !$('head').length ){
						cssContainer = $('body');
					}

					if( $('link[href="'+skinStyle+'"]').length ){

						ls.d.aU('Skin "'+ls.o.skin+'" is already loaded.');

						curSkin = $('link[href="'+skinStyle+'"]');
						
					}else{
						if (document.createStyleSheet){
							document.createStyleSheet(skinStyle);
							var curSkin = $('link[href="'+skinStyle+'"]');
						}else{
							var curSkin = $('<link rel="stylesheet" href="'+skinStyle+'" type="text/css" />').appendTo( cssContainer );					
						}						
					}

					// curSkin.load(); function for most of the browsers.

					curSkin.load(function(){

						if( !ls.g.loaded ){

							ls.d.aU('curSkin.load(); fired');

							ls.g.loaded = true;
							ls.init();
						}
					});

					// $(window).load(); function for older webkit ( < v536 ).

					$(window).load(function(){

						if( !ls.g.loaded ){

							ls.d.aU('$(window).load(); fired');

							ls.g.loaded = true;
							ls.init();
						}
					});

					// Fallback: if $(window).load(); not fired in 2 secs after $(document).ready(),
					// curSkin.load(); not fired at all or the name of the skin and / or the skinsPath
					// mistyped, we must call the init function manually.

					setTimeout( function(){

						if( !ls.g.loaded ){

							ls.d.aT('Fallback mode: Neither curSkin.load(); or $(window).load(); were fired');

							ls.g.loaded = true;
							ls.init();
						}					
					}, 2000);
				}
			}
		};
		
		ls.init = function(){
			
			ls.d.aT('FUNCTION ls.init();');
			ls.d.aeU();
			
			// NEW FEATURE v1.7 making the slider responsive

			ls.g.sliderWidth = function(){
				return $(el).width();
			}
			
			ls.g.sliderHeight = function(){
				return $(el).height();
			}

			// REPLACED FEATURE v2.0 If there is only ONE layer, instead of duplicating it, turning off slideshow and loops, hiding all controls, etc.
			
			if( $(el).find('.ls-layer').length == 1 ){
				ls.o.autoStart = false;
				ls.o.navPrevNext = false;
				ls.o.navStartStop = false;
				ls.o.navButtons	 = false;
				ls.o.loops = 0;
				ls.o.forceLoopNum = false;
				ls.o.autoPauseSlideshow	= true;
				ls.o.firstLayer = 1;
				ls.o.thumbnailNavigation = 'disabled';
			}

			ls.d.aL('Number of layers found: <strong>' + $(el).find('.ls-layer').length + '</strong>');

			// NEW FEATURE v3.0 added "normal" responsive mode with image and font resizing
			// NEW FEATURE v3.5 responsiveUnder

			if( ls.o.width ){
				ls.g.sliderOriginalWidthRU = ls.g.sliderOriginalWidth = '' + ls.o.width;
			}else{
				ls.g.sliderOriginalWidthRU = ls.g.sliderOriginalWidth = $(el)[0].style.width;
			}

			ls.d.aL('sliderOriginalWidth: <strong>' + ls.g.sliderOriginalWidth + '</strong>');
			
			if( ls.o.height ){
				ls.g.sliderOriginalHeight = '' + ls.o.height;
			}else{
				ls.g.sliderOriginalHeight = $(el)[0].style.height;
			}
			
			ls.d.aL('sliderOriginalHeight: <strong>' + ls.g.sliderOriginalHeight + '</strong>');

			if( ls.g.sliderOriginalWidth.indexOf('%') == -1 && ls.g.sliderOriginalWidth.indexOf('px') == -1 ){
				ls.g.sliderOriginalWidth += 'px';
			}

			if( ls.g.sliderOriginalHeight.indexOf('%') == -1 && ls.g.sliderOriginalHeight.indexOf('px') == -1 ){
				ls.g.sliderOriginalHeight += 'px';
			}

			if( ls.o.responsive && ls.g.sliderOriginalWidth.indexOf('px') != -1 && ls.g.sliderOriginalHeight.indexOf('px') != -1 ){
				ls.g.responsiveMode = true;
			}else{
				ls.g.responsiveMode = false;
			}
			
			// IMPROVEMENT v3.0 preventing WordPress to wrap your sublayers in <code> or <p> elements	
			
			$(el).find('*[class*="ls-s"], *[class*="ls-bg"]').each(function(){
				if( !$(this).parent().hasClass('ls-layer') ){
					$(this).insertBefore( $(this).parent() );
				}
			});
			
			$(el).find('.ls-layer').each(function(){
				$(this).children(':not([class*="ls-"])').each(function(){
					$(this).remove();					
				});
			});

			// Storing unique settings of layers and sublayers into object.data

			ls.d.aT('LayerSlider Content');

			$(el).find('.ls-layer, *[class*="ls-s"]').each(function(){

				if( $(this).hasClass('ls-layer') ){
					ls.d.aU('<strong>LAYER ' + ( $(this).index() + 1 ) + '</strong>');
					ls.d.aUU();
					ls.d.aL('<strong>LAYER ' + ( $(this).index() + 1 ) + ' properties:</strong><br><br>');
				}else{
					ls.d.aU('&nbsp;&nbsp;&nbsp;&nbsp;Sublayer ' + ( $(this).index() + 1 ));
					ls.d.aF($(this));
					ls.d.aUU();
					ls.d.aL('<strong>SUBLAYER ' + ( $(this).index() + 1 ) + ' properties:</strong><br><br>');
					ls.d.aL('type: <strong>' + $(this).prev().prop('tagName')+'</strong>');
					ls.d.aL('class: <strong>'+$(this).attr('class')+'</strong>');
				}

				if( $(this).attr('rel') || $(this).attr('style') ){
					if( $(this).attr('rel') ){
						var params = $(this).attr('rel').toLowerCase().split(';');
					}else{
						var params = $(this).attr('style').toLowerCase().split(';');						
					}
					for(x=0;x<params.length;x++){
						param = params[x].split(':');

						if( param[0].indexOf('easing') != -1 ){
							param[1] = ls.ieEasing( param[1] );
						}

						var p2 = '';
						if( param[2] ){
							p2 = ':'+$.trim(param[2]);
						}

						if( param[0] != ' ' && param[0] != '' ){
							$(this).data( $.trim(param[0]), $.trim(param[1]) + p2 );

							ls.d.aL( $.trim(param[0]) + ': <strong>' + $.trim(param[1]) + p2 + '</strong>' );							
						}
					}
				}

				// NEW FEATURE v1.7 and v3.0 making the slider responsive - we have to use style.left instead of jQuery's .css('left') function!

				var sl = $(this);
				
				sl.data( 'originalLeft', sl[0].style.left );
				sl.data( 'originalTop', sl[0].style.top );
				
				if( $(this).is('a') && $(this).children().length > 0 ){
					sl = $(this).children();
				}

				sl.data( 'originalWidth', sl.width() );
				sl.data( 'originalHeight', sl.height() );

				sl.data( 'originalPaddingLeft', sl.css('padding-left') );
				sl.data( 'originalPaddingRight', sl.css('padding-right') );
				sl.data( 'originalPaddingTop', sl.css('padding-top') );
				sl.data( 'originalPaddingBottom', sl.css('padding-bottom') );

				if( sl.css('border-left-width').indexOf('px') == -1 ){
					sl.data( 'originalBorderLeft', sl[0].style.borderLeftWidth );
				}else{
					sl.data( 'originalBorderLeft', sl.css('border-left-width') );					
				}
				if( sl.css('border-right-width').indexOf('px') == -1 ){
					sl.data( 'originalBorderRight', sl[0].style.borderRightWidth );
				}else{
					sl.data( 'originalBorderRight', sl.css('border-right-width') );
				}
				if( sl.css('border-top-width').indexOf('px') == -1 ){
					sl.data( 'originalBorderTop', sl[0].style.borderTopWidth );				
				}else{
					sl.data( 'originalBorderTop', sl.css('border-top-width') );
				}
				if( sl.css('border-bottom-width').indexOf('px') == -1 ){
					sl.data( 'originalBorderBottom', sl[0].style.borderBottomWidth );				
				}else{
					sl.data( 'originalBorderBottom', sl.css('border-bottom-width') );
				}

				sl.data( 'originalFontSize', sl.css('font-size') );
				sl.data( 'originalLineHeight', sl.css('line-height') );				
			});

			// CHANGED FEATURE v3.5 url- / deep linking layers

			if( document.location.hash ){
				for( var dl = 0; dl < $(el).find('.ls-layer').length; dl++ ){
					if( $(el).find('.ls-layer').eq(dl).data('deeplink') == document.location.hash.split('#')[1] ){
						ls.o.firstLayer = dl+1;
					}
				}
			}

			// NEW FEATURE v2.0 linkTo

			$(el).find('*[class*="ls-linkto-"]').each(function(){
				var lClasses = $(this).attr('class').split(' ');
				for( var ll=0; ll<lClasses.length; ll++ ){
					if( lClasses[ll].indexOf('ls-linkto-') != -1 ){
						var linkTo = parseInt( lClasses[ll].split('ls-linkto-')[1] );
						$(this).css({
							cursor: 'pointer'
						}).click(function(e){
							e.preventDefault();
							$(el).layerSlider( linkTo );
						});
					}
				}
			});

			// Setting variables

			ls.g.layersNum = $(el).find('.ls-layer').length;

			// NEW FEATURE v3.5 randomSlideshow
			
			if( ls.o.randomSlideshow && ls.g.layersNum > 2 ){
				ls.o.firstLayer == 'random';
				ls.o.twoWaySlideshow = false;
			}else{
				ls.o.randomSlideshow = false;
			}

			// NEW FEATURE v3.0 random firstLayer

			if( ls.o.firstLayer == 'random' ){
				ls.o.firstLayer = Math.floor(Math.random() * ls.g.layersNum+1);
			}

			ls.o.firstLayer = ls.o.firstLayer < ls.g.layersNum + 1 ? ls.o.firstLayer : 1;
			ls.o.firstLayer = ls.o.firstLayer < 1 ? 1 : ls.o.firstLayer;
			
			// NEW FEATURE v2.0 loops
			
			ls.g.nextLoop = 1;
			
			if( ls.o.animateFirstLayer ){
				ls.g.nextLoop = 0;
			}
			
			// NEW FEATURE v2.0 videoPreview

			// Youtube videos
			
			$(el).find('iframe[src*="www.youtu"]').each(function(){
				if( $(this).parent('[class*="ls-s"]') ){

					var iframe = $(this);

					// Getting thumbnail
					
					$.getJSON('http://gdata.youtube.com/feeds/api/videos/' + $(this).attr('src').split('embed/')[1].split('?')[0] + '?v=2&alt=json&callback=?', function(data) {

						iframe.data( 'videoDuration', parseInt(data['entry']['media$group']['yt$duration']['seconds']) * 1000 );
					});
					
					var vpContainer = $('<div>').addClass('ls-vpcontainer').appendTo( $(this).parent() );

					$('<img>').appendTo( vpContainer ).addClass('ls-videopreview').attr('src', 'http://img.youtube.com/vi/' + $(this).attr('src').split('embed/')[1].split('?')[0] + '/' + ls.o.youtubePreview );
					$('<div>').appendTo( vpContainer ).addClass('ls-playvideo');

					$(this).parent().css({
						width : $(this).width(),
						height : $(this).height()
					}).click(function(){

						ls.g.isAnimating = true;

						if( ls.g.paused ){
							if( ls.o.autoPauseSlideshow != false ){
								ls.g.paused = false;								
							}
							ls.g.originalAutoSlideshow = true;
						}else{
							ls.g.originalAutoSlideshow = ls.g.autoSlideshow;
						}

						if( ls.o.autoPauseSlideshow != false ){
							ls.stop();
						}

						ls.g.pausedByVideo = true;

						$(this).find('iframe').attr('src', $(this).find('iframe').data('videoSrc') );
						$(this).find('.ls-vpcontainer').delay(ls.g.v.d).fadeOut(ls.g.v.fo, function(){							
							if( ls.o.autoPauseSlideshow == 'auto' && ls.g.originalAutoSlideshow == true ){
								var videoTimer = setTimeout(function() {
										ls.start();
								}, iframe.data( 'videoDuration') - ls.g.v.d );
								iframe.data( 'videoTimer', videoTimer );
							}
							ls.g.isAnimating = false;
						});
					});

					var sep = '&';
					
					if( $(this).attr('src').indexOf('?') == -1 ){
						sep = '?';
					}

					$(this).data( 'videoSrc', $(this).attr('src') + sep + 'autoplay=1' );
					$(this).data( 'originalWidth', $(this).attr('width') );
					$(this).data( 'originalHeight', $(this).attr('height') );
					$(this).attr('src','');
				}
			});

			// Vimeo videos

			$(el).find('iframe[src*="player.vimeo"]').each(function(){
				if( $(this).parent('[class*="ls-s"]') ){

					var iframe = $(this);

					// Getting thumbnail

					var vpContainer = $('<div>').addClass('ls-vpcontainer').appendTo( $(this).parent() );

					$.getJSON('http://vimeo.com/api/v2/video/'+ ( $(this).attr('src').split('video/')[1].split('?')[0] ) +'.json?callback=?', function(data){

						$('<img>').appendTo( vpContainer ).addClass('ls-videopreview').attr('src', data[0]['thumbnail_large'] );						
						iframe.data( 'videoDuration', parseInt( data[0]['duration'] ) * 1000 );
						$('<div>').appendTo( vpContainer ).addClass('ls-playvideo');						
					});


					$(this).parent().css({
						width : $(this).width(),
						height : $(this).height()
					}).click(function(){

						ls.g.isAnimating = true;

						if( ls.g.paused ){
							if( ls.o.autoPauseSlideshow != false ){
								ls.g.paused = false;								
							}
							ls.g.originalAutoSlideshow = true;
						}else{
							ls.g.originalAutoSlideshow = ls.g.autoSlideshow;
						}

						if( ls.o.autoPauseSlideshow != false ){
							ls.stop();
						}

						ls.g.pausedByVideo = true;

						$(this).find('iframe').attr('src', $(this).find('iframe').data('videoSrc') );
						$(this).find('.ls-vpcontainer').delay(ls.g.v.d).fadeOut(ls.g.v.fo, function(){
							if( ls.o.autoPauseSlideshow == 'auto' && ls.g.originalAutoSlideshow == true ){
								var videoTimer = setTimeout(function() {
										ls.start();
								}, iframe.data( 'videoDuration') - ls.g.v.d );
								iframe.data( 'videoTimer', videoTimer );
							}
							ls.g.isAnimating = false;
						});
					});

					var sep = '&';
					
					if( $(this).attr('src').indexOf('?') == -1 ){
						sep = '?';
					}

					$(this).data( 'videoSrc', $(this).attr('src') + sep + 'autoplay=1' );
					$(this).data( 'originalWidth', $(this).attr('width') );
					$(this).data( 'originalHeight', $(this).attr('height') );
					$(this).attr('src','');
				}
			});

			// NEW FEATURE v1.7 animating first layer
			
			if( ls.o.animateFirstLayer ){
				ls.o.firstLayer = ls.o.firstLayer - 1 == 0 ? ls.g.layersNum : ls.o.firstLayer-1;
			}

			ls.g.curLayerIndex = ls.o.firstLayer;
			ls.g.curLayer = $(el).find('.ls-layer:eq('+(ls.g.curLayerIndex-1)+')');			

			// Moving all layers to .ls-inner container

			$(el).find('.ls-layer').wrapAll('<div class="ls-inner"></div>');

			// Adding styles

			if( $(el).css('position') == 'static' ){
				$(el).css('position','relative');
			}

			$(el).find('.ls-inner').css({
				backgroundColor : ls.o.globalBGColor
			});
			
			if( ls.o.globalBGImage ){
				$(el).find('.ls-inner').css({
					backgroundImage : 'url('+ls.o.globalBGImage+')'
				});
			}

			// Creating navigation

			if( ls.o.navPrevNext ){

				$('<a class="ls-nav-prev" href="#" />').click(function(e){
					e.preventDefault();
					$(el).layerSlider('prev');
				}).appendTo($(el));

				$('<a class="ls-nav-next" href="#" />').click(function(e){
					e.preventDefault();
					$(el).layerSlider('next');
				}).appendTo($(el));
				
				if( ls.o.hoverPrevNext ){
					$(el).find('.ls-nav-prev, .ls-nav-next').css({
						display: 'none'
					});
					
					$(el).hover(
						function(){
							$(el).find('.ls-nav-prev, .ls-nav-next').stop(true,true).fadeIn(300);							
						},
						function(){
							$(el).find('.ls-nav-prev, .ls-nav-next').stop(true,true).fadeOut(300);							
						}						
					);
				}
			}

			// Creating bottom navigation

			if( ls.o.navStartStop || ls.o.navButtons ){
				
				var bottomNav = $('<div class="ls-bottom-nav-wrapper" />').appendTo( $(el) );
				
				if( ls.o.thumbnailNavigation == 'always' ){
					bottomNav.addClass('ls-above-thumbnails');
				}

				if( ls.o.navButtons && ls.o.thumbnailNavigation != 'always' ){

					$('<span class="ls-bottom-slidebuttons" />').appendTo( $(el).find('.ls-bottom-nav-wrapper') );

					// NEW FEATURE v3.5 thumbnailNavigation ('hover')

					if( ls.o.thumbnailNavigation == 'hover' ){

						var thumbs = $('<div class="ls-thumbnail-hover"><div class="ls-thumbnail-hover-inner"><div class="ls-thumbnail-hover-bg"></div><div class="ls-thumbnail-hover-img"><img></div><span></span></div></div>').appendTo( $(el).find('.ls-bottom-slidebuttons') );
					}

					for(x=1;x<ls.g.layersNum+1;x++){

						var btn = $('<a href="#" />').appendTo( $(el).find('.ls-bottom-slidebuttons') ).click(function(e){
							e.preventDefault();
							$(el).layerSlider( ($(this).index() + 1) );
						});
						
						// NEW FEATURE v3.5 thumbnailNavigation ('hover')

						if( ls.o.thumbnailNavigation == 'hover' ){
							
							$(el).find('.ls-thumbnail-hover, .ls-thumbnail-hover-img').css({
								width : ls.o.tnWidth,
								height : ls.o.tnHeight								
							});
							
							var th = $(el).find('.ls-thumbnail-hover');

							var ti = th.find('img').css({
								height : ls.o.tnHeight
							});

							var thi = $(el).find('.ls-thumbnail-hover-inner').css({
								visibility : 'hidden',
								display: 'block'
							});

							btn.hover(
								function(){

									var hoverLayer = $(el).find('.ls-layer').eq( $(this).index() );

									if( hoverLayer.find('.ls-tn').length ){
										var tnSrc = hoverLayer.find('.ls-tn').attr('src');
									}else if( hoverLayer.find('.ls-videopreview').length ){
										var tnSrc = hoverLayer.find('.ls-videopreview').attr('src');
									}else if( hoverLayer.find('.ls-bg').length ){
										var tnSrc = hoverLayer.find('.ls-bg').attr('src');
									}else{
										var tnSrc = ls.o.skinsPath+ls.o.skin+'/nothumb.png';
									}

									$(el).find('.ls-thumbnail-hover-img').css({
										left: parseInt( th.css('padding-left') ),
										top: parseInt( th.css('padding-top') )
									});

									ti.load(function(){

										if( $(this).width() == 0 ){
											ti.css({
												position: 'relative',
												margin: '0 auto',
												left: 'auto'
											});
										}else{
											ti.css({
												position: 'absolute',
												marginLeft : - $(this).width() / 2,
												left: '50%'
											});
										}			
									}).attr( 'src', tnSrc );

									th.css({
										display: 'block'
									}).stop().animate({
										left: $(this).position().left + ( $(this).width() - th.outerWidth() ) / 2
									}, 250, 'easeInOutQuad');

									thi.css({
										display : 'none',
										visibility : 'visible'
									}).stop().fadeIn(250);
								},
								function(){
									thi.stop().fadeOut(250, function(){
										th.css({
											visibility : 'hidden',
											display: 'block'
										});
									});
								}
							);
						}						
					}

					if( ls.o.thumbnailNavigation == 'hover' ){

						thumbs.appendTo( $(el).find('.ls-bottom-slidebuttons') );
					}

					$(el).find('.ls-bottom-slidebuttons a:eq('+(ls.o.firstLayer-1)+')').addClass('ls-nav-active');
				}

				if( ls.o.navStartStop ){
					
					var buttonStart = $('<a class="ls-nav-start" href="#" />').click(function(e){
						e.preventDefault();
						$(el).layerSlider('start');
					}).prependTo( $(el).find('.ls-bottom-nav-wrapper') );

					var buttonStop = $('<a class="ls-nav-stop" href="#" />').click(function(e){
						e.preventDefault();
						$(el).layerSlider('stop');
					}).appendTo( $(el).find('.ls-bottom-nav-wrapper') );
					
				}else if( ls.o.thumbnailNavigation != 'always' ){

					$('<span class="ls-nav-sides ls-nav-sideleft" />').prependTo( $(el).find('.ls-bottom-nav-wrapper') );
					$('<span class="ls-nav-sides ls-nav-sideright" />').appendTo( $(el).find('.ls-bottom-nav-wrapper') );						
				}
				
				if( ls.o.hoverBottomNav && ls.o.thumbnailNavigation != 'always' ){
					
					bottomNav.css({
						display: 'none'
					});
					
					$(el).hover(
						function(){
							bottomNav.stop(true,true).fadeIn(300);							
						},
						function(){
							bottomNav.stop(true,true).fadeOut(300);							
						}						
					)
				}
			}

			// NEW FEATURE v3x.5 thumbnailNavigation ('always')

			if( ls.o.thumbnailNavigation == 'always' ){

				var thumbsWrapper = $('<div class="ls-thumbnail-wrapper"></div>').appendTo( $(el) );
				var thumbs = $('<div class="ls-thumbnail"><div class="ls-thumbnail-inner"><div class="ls-thumbnail-slide-container"><div class="ls-thumbnail-slide"></div></div></div></div>').appendTo( thumbsWrapper );
			
				ls.g.thumbnails = $(el).find('.ls-thumbnail-slide-container').hover(
					function(){
						$(this).addClass('ls-thumbnail-slide-hover');
					},
					function(){
						$(this).removeClass('ls-thumbnail-slide-hover');
						ls.scrollThumb();
					}
				).mousemove(function(e){

					var mL = parseInt(e.pageX - $(this).offset().left ) / $(this).width() * ( $(this).width() - $(this).find('.ls-thumbnail-slide').width() );
					$(this).find('.ls-thumbnail-slide').stop().css({
						marginLeft : mL
					});
				});
				
				$(el).find('.ls-layer').each(function(){
					
					var tempIndex = $(this).index() + 1;

					if( $(this).find('.ls-tn').length ){
						var tnSrc = $(this).find('.ls-tn').attr('src');
					}else if( $(this).find('.ls-videopreview').length ){
						var tnSrc = $(this).find('.ls-videopreview').attr('src');
					}else if( $(this).find('.ls-bg').length ){
						var tnSrc = $(this).find('.ls-bg').attr('src');
					}

					if( tnSrc ){
						var thumb = $('<a href="#" class="ls-thumb-' + tempIndex + '"><img src="'+tnSrc+'"></a>');
					}else{
						var thumb = $('<a href="#" class="ls-nothumb ls-thumb-' + tempIndex + '"><img src="'+ls.o.skinsPath+ls.o.skin+'/nothumb.png"></a>');
					}	

					thumb.hover(
						function(){
							$(this).children().stop().fadeTo(300,ls.o.tnActiveOpacity/100);
						},
						function(){
							if( !$(this).children().hasClass('ls-thumb-active') ){
								$(this).children().stop().fadeTo(300,ls.o.tnInactiveOpacity/100);										
							}
						}								
					).appendTo( $(el).find('.ls-thumbnail-slide') ).click(function(e){
						e.preventDefault();
						$(el).layerSlider( tempIndex );
					});
				});
				
				if( buttonStart && buttonStop ){
					var lsBottomBelowTN = $('<div class="ls-bottom-nav-wrapper ls-below-thumbnails"></div>').appendTo( $(el) );
					buttonStart.clone().click(function(e){
						e.preventDefault();
						$(el).layerSlider('start');
					}).appendTo( lsBottomBelowTN );
					buttonStop.clone().click(function(e){
						e.preventDefault();
						$(el).layerSlider('stop');
					}).appendTo( lsBottomBelowTN );
				}				

				if( ls.o.hoverBottomNav ){
					
					thumbsWrapper.css({
						visibility: 'hidden'
					});

					if( lsBottomBelowTN ){						
						var bottomWrapper = lsBottomBelowTN.css('display') == 'block' ? lsBottomBelowTN : $(el).find('.ls-above-thumbnails');

						bottomWrapper.css({
							display: 'none'
						});
					}
					
					$(el).hover(
						function(){
							thumbsWrapper.css({
								visibility: 'visible',
								display: 'none'
							}).stop(true,false).fadeIn(300);
							if( bottomWrapper ){
								bottomWrapper.stop(true,true).fadeIn(300);								
							}
						},
						function(){
							thumbsWrapper.stop(true,true).fadeOut(300, function(){
								$(this).css({
									visibility: 'hidden',
									display: 'block'
								});
							});
							if( bottomWrapper ){
								bottomWrapper.stop(true,true).fadeOut(300);
							}
						}						
					)
				}
			}

			// Adding shadow wrapper
			
			var shadow = $('<div class="ls-shadow"></div>').appendTo( $(el) );
			shadow.data('originalHeight', shadow.height() );

			// Appending skin shadow if shadow wrapper has display: 'block' style property
			// 150ms delay needed because of caching bugs

			shadowTimer = 150;

			setTimeout(function(){
				if( $(el).find('.ls-shadow').css('display') == 'block' ){
					$('<img />').attr('src',ls.o.skinsPath+ls.o.skin+'/shadow.png').appendTo( $(el).find('.ls-shadow') );
				}
			}, shadowTimer);

			// Adding keyboard navigation if turned on and if number of layers > 1

			if( ls.o.keybNav && $(el).find('.ls-layer').length > 1 ){
				
				$('body').bind('keydown',function(e){ 
					if( !ls.g.isAnimating ){
						if( e.which == 37 ){
							ls.o.cbPrev(ls.g);							
							ls.prev('clicked');
						}else if( e.which == 39 ){
							ls.o.cbNext(ls.g);							
							ls.next('clicked');
						}
					}
				});
			}

			// Adding touch-control navigation if number of layers > 1
			
			if('ontouchstart' in window && $(el).find('.ls-layer').length > 1 && ls.o.touchNav ){

			   $(el).bind('touchstart', function( e ) {
					var t = e.touches ? e.touches : e.originalEvent.touches;
					if( t.length == 1 ){
						ls.g.touchStartX = ls.g.touchEndX = t[0].clientX;
					}
			    });

			   $(el).bind('touchmove', function( e ) {
					var t = e.touches ? e.touches : e.originalEvent.touches;
					if( t.length == 1 ){
						ls.g.touchEndX = t[0].clientX;
					}
					if( Math.abs( ls.g.touchStartX - ls.g.touchEndX ) > 45 ){
						e.preventDefault();							
					}
			    });

				$(el).bind('touchend',function( e ){
					if( Math.abs( ls.g.touchStartX - ls.g.touchEndX ) > 45 ){
						if( ls.g.touchStartX - ls.g.touchEndX > 0 ){
							ls.o.cbNext(ls.g);
							$(el).layerSlider('next');
						}else{
							ls.o.cbPrev(ls.g);
							$(el).layerSlider('prev');
						}
					}
				});
			}
			
			// Feature: pauseOnHover (if number of layers > 1)
			
			if( ls.o.pauseOnHover == true && $(el).find('.ls-layer').length > 1 ){
				
				// BUGFIX v1.6 stop was not working because of pause on hover

				$(el).find('.ls-inner').hover(
					function(){

						// Calling cbPause callback function

						ls.o.cbPause(ls.g);
						if( ls.g.autoSlideshow ){
							ls.g.paused = true;
							ls.stop();
						}
					},
					function(){
						if( ls.g.paused == true ){
							ls.start();
							ls.g.paused = false;
						}						
					}
				);
			}

			ls.resizeSlider();

			// NEW FEATURE v1.7 added yourLogo
			
			if( ls.o.yourLogo ){
				ls.g.yourLogo = $('<img>').addClass('ls-yourlogo').appendTo($(el)).attr('style', ls.o.yourLogoStyle ).css({
					visibility: 'hidden',
					display: 'bock'
				}).load(function(){

					// NEW FEATURE v3.0 added responsive yourLogo

					var logoTimeout = 0;
					
					if( !ls.g.yourLogo ){
						logoTimeout = 1000;
					}
					
					setTimeout( function(){
						
						ls.g.yourLogo.data( 'originalWidth', ls.g.yourLogo.width() );
						ls.g.yourLogo.data( 'originalHeight', ls.g.yourLogo.height() );
						if( ls.g.yourLogo.css('left') != 'auto' ){
							ls.g.yourLogo.data( 'originalLeft', ls.g.yourLogo[0].style.left );
						}					
						if( ls.g.yourLogo.css('right') != 'auto' ){
							ls.g.yourLogo.data( 'originalRight', ls.g.yourLogo[0].style.right );
						}
						if( ls.g.yourLogo.css('top') != 'auto' ){
							ls.g.yourLogo.data( 'originalTop', ls.g.yourLogo[0].style.top );
						}
						if( ls.g.yourLogo.css('bottom') != 'auto' ){					
							ls.g.yourLogo.data( 'originalBottom', ls.g.yourLogo[0].style.bottom );
						}

						// NEW FEATURES v1.8 added yourLogoLink & yourLogoTarget

						if( ls.o.yourLogoLink != false ){
							$('<a>').appendTo($(el)).attr( 'href', ls.o.yourLogoLink ).attr('target', ls.o.yourLogoTarget ).css({
								textDecoration : 'none',
								outline : 'none'
							}).append( ls.g.yourLogo );
						}

						ls.g.yourLogo.css({
							display: 'none',
							visibility: 'visible'
						});

						ls.resizeYourLogo();
						
					}, logoTimeout );

				}).attr( 'src', ls.o.yourLogo );
			}

			// NEW FEATURE v1.7 added window resize function for make responsive layout better

			$(window).resize(function() {
				ls.makeResponsive( ls.g.curLayer, function(){return;});
				if( ls.g.yourLogo ){
					ls.resizeYourLogo();					
				}
			});

			ls.g.showSlider = true;

			// NEW FEATURE v1.7 animating first layer

			if( ls.o.animateFirstLayer == true ){
				if( ls.o.autoStart ){
					ls.g.autoSlideshow = true;
					$(el).find('.ls-nav-start').addClass('ls-nav-start-active');
				}else{
					$(el).find('.ls-nav-stop').addClass('ls-nav-stop-active');
				}
				ls.next();

			}else{
				ls.imgPreload(ls.g.curLayer,function(){
					ls.g.curLayer.fadeIn(1000, function(){

						$(this).addClass('ls-active');

						// NEW FEATURE v2.0 autoPlayVideos

						if( ls.o.autoPlayVideos ){
							$(this).delay( $(this).data('delayin') + 25 ).queue(function(){
								$(this).find('.ls-videopreview').click();
								$(this).dequeue();
							});							
						}

						// NEW FEATURE v3.0 showUntil sublayers

						ls.g.curLayer.find(' > *[class*="ls-s"]').each(function(){

							if( $(this).data('showuntil') > 0 ){

								ls.sublayerShowUntil( $(this) );
							}
						});
					});

					ls.changeThumb(ls.g.curLayerIndex)

					// If autoStart is true

					if( ls.o.autoStart ){
						ls.start();
					}else{
						$(el).find('.ls-nav-stop').addClass('ls-nav-stop-active');							
					}
				});
			}

			// NEW FEATURE v1.7 added cbInit function

			ls.o.cbInit($(el));				
		};

		ls.start = function(){

			if( ls.g.autoSlideshow ){
				if( ls.g.prevNext == 'prev' && ls.o.twoWaySlideshow ){
					ls.prev();
				}else{
					ls.next();
				}
			}else{
				ls.g.autoSlideshow = true;
				ls.timer();
			}

			$(el).find('.ls-nav-start').addClass('ls-nav-start-active');
			$(el).find('.ls-nav-stop').removeClass('ls-nav-stop-active');
		};
		
		ls.timer = function(){

			var delaytime = $(el).find('.ls-active').data('slidedelay') ? parseInt( $(el).find('.ls-active').data('slidedelay') ) : ls.o.slideDelay;

			// BUGFIX v3.0 delaytime did not work on first layer if animateFirstLayer was set to off
			// BUGFIX v3.5 delaytime did not work on all layers in standalone version after bugfix 3.0 :)
			
			if( !ls.o.animateFirstLayer && !$(el).find('.ls-active').data('slidedelay') ){
				var tempD = $(el).find('.ls-layer:eq('+(ls.o.firstLayer-1)+')').data('slidedelay');
				delaytime = tempD ? tempD : ls.o.slideDelay;
			}

			clearTimeout( ls.g.slideTimer );
			ls.g.slideTimer = window.setTimeout(function(){
				ls.start();
			}, delaytime );
		};

		ls.stop = function(){

			if( !ls.g.paused && !ls.g.originalAutoSlideshow ){
				$(el).find('.ls-nav-stop').addClass('ls-nav-stop-active');
				$(el).find('.ls-nav-start').removeClass('ls-nav-start-active');
			}
			clearTimeout( ls.g.slideTimer );
			ls.g.autoSlideshow = false;
		};

		// Because of an ie7 bug, we have to check & format the strings correctly

		ls.ieEasing = function( e ){

			// BUGFIX v1.6 and v1.8 some type of animations didn't work properly

			if( $.trim(e.toLowerCase()) == 'swing' || $.trim(e.toLowerCase()) == 'linear'){
				return e.toLowerCase();
			}else{
				return e.replace('easeinout','easeInOut').replace('easein','easeIn').replace('easeout','easeOut').replace('quad','Quad').replace('quart','Quart').replace('cubic','Cubic').replace('quint','Quint').replace('sine','Sine').replace('expo','Expo').replace('circ','Circ').replace('elastic','Elastic').replace('back','Back').replace('bounce','Bounce');				
			}
		};

		// Calculating prev layer

		ls.prev = function(clicked){

			// NEW FEATURE v2.0 loops

			if( ls.g.curLayerIndex < 2 ){
				ls.g.nextLoop += 1;
			}

			if( ( ls.g.nextLoop > ls.o.loops ) && ( ls.o.loops > 0 ) && !clicked ){
				ls.g.nextLoop = 0;
				ls.stop();
				if( ls.o.forceLoopNum == false ){
					ls.o.loops = 0;						
				}
			}else{
				var prev = ls.g.curLayerIndex < 2 ? ls.g.layersNum : ls.g.curLayerIndex - 1;
				ls.g.prevNext = 'prev';
				ls.change(prev,ls.g.prevNext);
			}
		};

		// Calculating next layer

		ls.next = function(clicked){

			// NEW FEATURE v2.0 loops

			if( !ls.o.randomSlideshow ){
				
				if( !(ls.g.curLayerIndex < ls.g.layersNum) ){
					ls.g.nextLoop += 1;
				}

				if( ( ls.g.nextLoop > ls.o.loops ) && ( ls.o.loops > 0 ) && !clicked ){

					ls.g.nextLoop = 0;
					ls.stop();
					if( ls.o.forceLoopNum == false ){
						ls.o.loops = 0;						
					}
				}else{

					var next = ls.g.curLayerIndex < ls.g.layersNum ? ls.g.curLayerIndex + 1 : 1;
					ls.g.prevNext = 'next';
					ls.change(next,ls.g.prevNext);
				}
			}else if( !clicked ){

				// NEW FEATURE v3.5 randomSlideshow

				var next = ls.g.curLayerIndex;

				var calcRand = function(){
					
					next = Math.floor(Math.random() * ls.g.layersNum) + 1;

					if( next == ls.g.curLayerIndex ){

						calcRand();
					}else{
						ls.g.prevNext = 'next';
						ls.change(next,ls.g.prevNext);						
					}
				}
				
				calcRand();
			}else if( clicked ){
				
				var next = ls.g.curLayerIndex < ls.g.layersNum ? ls.g.curLayerIndex + 1 : 1;
				ls.g.prevNext = 'next';
				ls.change(next,ls.g.prevNext);
			}

		};

		ls.change = function(num,prevnext){

			// NEW FEATURE v2.0 videoPreview & autoPlayVideos

			if( ls.g.pausedByVideo == true ){

				ls.g.pausedByVideo = false;
				ls.g.autoSlideshow = ls.g.originalAutoSlideshow;
				
				ls.g.curLayer.find('iframe[src*="www.youtu"], iframe[src*="player.vimeo"]').each(function(){

					$(this).parent().find('.ls-vpcontainer').fadeIn(ls.g.v.fi,function(){
						$(this).parent().find('iframe').attr('src','');						
					});
				});
			}
			
			$(el).find('iframe[src*="www.youtu"], iframe[src*="player.vimeo"]').each(function(){
				
				// Clearing videoTimeouts
				
				clearTimeout( $(this).data( 'videoTimer') );
			});

			clearTimeout( ls.g.slideTimer );
			ls.g.nextLayerIndex = num;
			ls.g.nextLayer = $(el).find('.ls-layer:eq('+(ls.g.nextLayerIndex-1)+')');

			// BUGFIX v1.6 fixed wrong directions of animations if navigating by slidebuttons

			if( !prevnext ){

				if( ls.g.curLayerIndex < ls.g.nextLayerIndex ){
					ls.g.prevNext = 'next';
				}else{
					ls.g.prevNext = 'prev';
				}				
			}

			// Added timeOut to wait for the fade animation of videoPreview image...

			var timeOut = 0;
			
			if( $(el).find('iframe[src*="www.youtu"], iframe[src*="player.vimeo"]').length > 0 ){
				timeOut = ls.g.v.fi;
			}

			setTimeout(function() {
				ls.imgPreload(ls.g.nextLayer,function(){
					ls.animate();
				});
			}, timeOut );
		};
		
		// Preloading images

		ls.imgPreload = function(layer,callback){

			if( ls.o.imgPreload ){				
				var preImages = [];
				var preloaded = 0;

				// NEW FEATURE v1.8 Prealoading background images of layers
				
				if( layer.css('background-image') != 'none' && layer.css('background-image').indexOf('url') != -1 ){
					var bgi = layer.css('background-image');
					bgi = bgi.match(/url\((.*)\)/)[1].replace(/"/gi, '');
					preImages.push(bgi);
				}
				
				// Images inside layers

				layer.find('img').each(function(){
					preImages.push($(this).attr('src'));
				});

				// Background images inside layers

				layer.find('*').each(function(){
					
					// BUGFIX v1.7 fixed preload bug with sublayers with gradient backgrounds

					if( $(this).css('background-image') != 'none' && $(this).css('background-image').indexOf('url') != -1 ){
						var bgi = $(this).css('background-image');
						bgi = bgi.match(/url\((.*)\)/)[1].replace(/"/gi, '');
						preImages.push(bgi);
					}
				});

				// BUGFIX v1.7 if there are no images in a layer, calling the callback function

				if(preImages.length == 0){
					ls.makeResponsive(layer, callback);
				}else{
					for(x=0;x<preImages.length;x++){
						$('<img>').load(function(){
							if( ++preloaded == preImages.length ){
								ls.makeResponsive(layer, callback);
							}
						}).attr('src',preImages[x]);
					}					
				}
			}else{
				ls.makeResponsive(layer, callback);
			}
		};
		
		// NEW FEATURE v1.7 making the slider responsive

		ls.makeResponsive = function(layer, callback, bugfix){

			// BUGFIX v2.0 Fading out in fullWidth mode
			
			if( !bugfix ){
				layer.css({
					visibility: 'hidden',
					display: 'block'
				});
			}

			ls.resizeSlider();

			if( ls.o.thumbnailNavigation == 'always' ){
				ls.resizeThumb();				
			}
			
			for(var _sl=0;_sl < layer.children().length;_sl++){

				var sl = layer.children(':eq('+_sl+')');

				// positioning

				var ol = sl.data('originalLeft') ? sl.data('originalLeft') : '0';
				var ot = sl.data('originalTop') ? sl.data('originalTop') : '0';
				
				if( sl.is('a') && sl.children().length > 0 ){
					sl = sl.children();
				}

				var ow = sl.data('originalWidth') ? parseInt( sl.data('originalWidth') ) * ls.g.ratio : 'auto';
				var oh = sl.data('originalHeight') ? parseInt( sl.data('originalHeight') ) * ls.g.ratio : 'auto';
	
				// padding

				var opl = sl.data('originalPaddingLeft') ? parseInt( sl.data('originalPaddingLeft') ) * ls.g.ratio : 0;
				var opr = sl.data('originalPaddingRight') ? parseInt( sl.data('originalPaddingRight') ) * ls.g.ratio : 0;
				var opt = sl.data('originalPaddingTop') ? parseInt( sl.data('originalPaddingTop') ) * ls.g.ratio : 0;
				var opb = sl.data('originalPaddingBottom') ? parseInt( sl.data('originalPaddingBottom') ) * ls.g.ratio : 0;

				// border
				
				var obl = sl.data('originalBorderLeft') ? parseInt( sl.data('originalBorderLeft') ) * ls.g.ratio : 0;
				var obr = sl.data('originalBorderRight') ? parseInt( sl.data('originalBorderRight') ) * ls.g.ratio : 0;
				var obt = sl.data('originalBorderTop') ? parseInt( sl.data('originalBorderTop') ) * ls.g.ratio : 0;
				var obb = sl.data('originalBorderBottom') ? parseInt( sl.data('originalBorderBottom') ) * ls.g.ratio : 0;

				// font

				var ofs = sl.data('originalFontSize');
				var olh = sl.data('originalLineHeight');

				// NEW FEATURE v3.0 added "normal" responsive mode with image and font resizing
				// NEW FEATURE v3.5 added responsiveUnder

				if( ls.g.responsiveMode || ls.o.responsiveUnder > 0 ){

					if( sl.is('img') ){
						sl.css({
							width : 'auto',
							height : 'auto'
						});

						ow = sl.width();
						oh = sl.height();

						sl.css({
							width : sl.width() * ls.g.ratio,
							height : sl.height() * ls.g.ratio
						});
					}
					
					if( !sl.is('img') ){
						sl.css({
							width : ow,
							height : oh,
							'font-size' : parseInt(ofs) * ls.g.ratio +'px',
							'line-height' : parseInt(olh) * ls.g.ratio + 'px'
						});
					}
					
					if( sl.is('div') && sl.find('iframe').data('videoSrc') ){
						
						var videoIframe = sl.find('iframe');
						videoIframe.attr('width', parseInt( videoIframe.data('originalWidth') ) * ls.g.ratio ).attr('height', parseInt( videoIframe.data('originalHeight') ) * ls.g.ratio );
						
						sl.css({
							width : parseInt( videoIframe.data('originalWidth') ) * ls.g.ratio,
							height : parseInt( videoIframe.data('originalHeight') ) * ls.g.ratio
						});
					}

					sl.css({
						padding : opt + 'px ' + opr + 'px ' + opb + 'px ' + opl + 'px ',
						borderLeftWidth : obl + 'px',
						borderRightWidth : obr + 'px',
						borderTopWidth : obt + 'px',
						borderBottomWidth : obb + 'px'						
					});
				}

				// If it is NOT a bg sublayer

				if( !sl.hasClass('ls-bg') ){

					var sl2 = sl;

					if( sl.parent().is('a') ){
						sl = sl.parent();
					}
								
					// NEW FEATURE v3.5 sublayerContainer

					var slC = ls.o.sublayerContainer > 0 ? ( ls.g.sliderWidth() - ls.o.sublayerContainer ) / 2 : 0;
					slC = slC < 0 ? 0 : slC;

					// (RE)positioning sublayer (left property)

					if( ol.indexOf('%') != -1 ){
						sl.css({
							left : ls.g.sliderWidth() / 100 * parseInt(ol) - sl2.width() / 2 - opl - obl
						});
					}else if( slC > 0 || ls.g.responsiveMode || ls.o.responsiveUnder > 0 ){
						sl.css({
							left : slC + parseInt(ol) * ls.g.ratio
						});
					}	

					// (RE)positioning sublayer (top property)

					if( ot.indexOf('%') != -1 ){
						sl.css({
							top : ls.g.sliderHeight() / 100 * parseInt(ot) - sl2.height() / 2 - opt - obt
						});
					}else if( ls.g.responsiveMode || ls.o.responsiveUnder > 0 ){
						sl.css({
							top : parseInt(ot) * ls.g.ratio
						});
					}
				}else{

					sl.css({
						width : 'auto',
						height : 'auto'
					});

					ow = sl.width();
					oh = sl.height();

					sl.css({
						width : ow * ls.g.ratio,
						height : oh * ls.g.ratio,
						marginLeft : - ( ow * ls.g.ratio / 2 )+'px',
						marginTop : - ( oh * ls.g.ratio / 2 )+'px'
					});					
				}
			}

			// BUGFIX v2.0 Fading out in fullWidth mode

			if( !bugfix ){
				layer.css({
					display: 'none',
					visibility: 'visible'
				});
			}

			// Resizing shadow if present
			
			$(el).find('.ls-shadow').css({
				height: $(el).find('.ls-shadow').data('originalHeight') * ls.g.ratio
			});

			callback();

			$(this).dequeue();
		};
		
		// NEW FEATURE v3.0 added responsive yourLogo

		ls.resizeYourLogo = function(){

			ls.g.yourLogo.css({
				width : ls.g.yourLogo.data( 'originalWidth' ) * ls.g.ratio,
				height : ls.g.yourLogo.data( 'originalHeight' ) * ls.g.ratio
			}).fadeIn(300);

			var oL = oR = oT = oB = 'auto';

			if( ls.g.yourLogo.data( 'originalLeft' ) && ls.g.yourLogo.data( 'originalLeft' ).indexOf('%') != -1 ){
				oL = ls.g.sliderWidth() / 100 * parseInt( ls.g.yourLogo.data( 'originalLeft' ) ) - ls.g.yourLogo.width() / 2 + parseInt( $(el).css('padding-left') );
			}else{
				oL = parseInt( ls.g.yourLogo.data( 'originalLeft' ) ) * ls.g.ratio;
			}

			if( ls.g.yourLogo.data( 'originalRight' ) && ls.g.yourLogo.data( 'originalRight' ).indexOf('%') != -1 ){
				oR = ls.g.sliderWidth() / 100 * parseInt( ls.g.yourLogo.data( 'originalRight' ) ) - ls.g.yourLogo.width() / 2 + parseInt( $(el).css('padding-right') );
			}else{
				oR = parseInt( ls.g.yourLogo.data( 'originalRight' ) ) * ls.g.ratio;
			}

			if( ls.g.yourLogo.data( 'originalTop' ) && ls.g.yourLogo.data( 'originalTop' ).indexOf('%') != -1 ){
				oT = ls.g.sliderHeight() / 100 * parseInt( ls.g.yourLogo.data( 'originalTop' ) ) - ls.g.yourLogo.height() / 2 + parseInt( $(el).css('padding-top') );
			}else{
				oT = parseInt( ls.g.yourLogo.data( 'originalTop' ) ) * ls.g.ratio;
			}

			if( ls.g.yourLogo.data( 'originalBottom' ) && ls.g.yourLogo.data( 'originalBottom' ).indexOf('%') != -1 ){
				oB = ls.g.sliderHeight() / 100 * parseInt( ls.g.yourLogo.data( 'originalBottom' ) ) - ls.g.yourLogo.height() / 2 + parseInt( $(el).css('padding-bottom') );
			}else{
				oB = parseInt( ls.g.yourLogo.data( 'originalBottom' ) ) * ls.g.ratio;
			}

			ls.g.yourLogo.css({
				left : oL,
				right : oR,
				top : oT,
				bottom : oB
			});
		};

		// NEW FEATURE v3.5 thumbnailNavigation ('always')

		// Resizing thumbnails

		ls.resizeThumb = function(){

			$(el).find('.ls-thumbnail-slide a').css({
				width : parseInt( ls.o.tnWidth * ls.g.ratio ),
				height : parseInt( ls.o.tnHeight * ls.g.ratio )
			});

			$(el).find('.ls-thumbnail-slide a:last').css({
				margin: 0
			});

			$(el).find('.ls-thumbnail-slide').css({
				height : parseInt( ls.o.tnHeight * ls.g.ratio )
			});
			
			var tn = $(el).find('.ls-thumbnail');

			var originalWidth = ls.o.tnContainerWidth.indexOf('%') == -1 ? parseInt( ls.o.tnContainerWidth ) : parseInt( parseInt( ls.g.sliderOriginalWidth ) / 100 * parseInt( ls.o.tnContainerWidth ) );

			tn.css({
				width : originalWidth * Math.floor( ls.g.ratio * 100 ) / 100
			});

			if( tn.width() > $(el).find('.ls-thumbnail-slide').width() ){
				tn.css({
					width : $(el).find('.ls-thumbnail-slide').width()
				});
			}
		};
		
		// Changing thumbnails
		
		ls.changeThumb = function(index){
			
			var curIndex = index ? index : ls.g.nextLayerIndex;

			$(el).find('.ls-thumbnail-slide a:not(.ls-thumb-'+curIndex+')').children().each(function(){
				$(this).removeClass('ls-thumb-active').stop().fadeTo(750,ls.o.tnInactiveOpacity/100);
			});
			
			$(el).find('.ls-thumbnail-slide a.ls-thumb-'+curIndex).children().addClass('ls-thumb-active').stop().fadeTo(750,ls.o.tnActiveOpacity/100);
		};

		// Scrolling thumbnails

		ls.scrollThumb = function(){
			
			if( !$(el).find('.ls-thumbnail-slide-container').hasClass('ls-thumbnail-slide-hover') ){				
				var curThumb = $(el).find('.ls-thumb-active').length ? $(el).find('.ls-thumb-active').parent() : false;
				if( curThumb ){
					var thumbCenter = curThumb.position().left + curThumb.width() / 2;
					var mL = $(el).find('.ls-thumbnail-slide-container').width() / 2 - thumbCenter;
					mL = mL > 0 ? 0 : mL;
					mL = mL < $(el).find('.ls-thumbnail-slide-container').width() - $(el).find('.ls-thumbnail-slide').width() ? $(el).find('.ls-thumbnail-slide-container').width() - $(el).find('.ls-thumbnail-slide').width() : mL;
					$(el).find('.ls-thumbnail-slide').animate({
						marginLeft : mL
					}, 600, 'easeInOutQuad');				
				}
			}
		};

		// Resizing the slider

		ls.resizeSlider = function(){

			if( ls.g.showSlider ){
				$(el).css({
					visibility : 'visible'
				});				
			}

			if( ls.o.responsiveUnder > 0 ){
				
				if( $(window).width() < ls.o.responsiveUnder ){
					ls.g.responsiveMode = true;
					ls.g.sliderOriginalWidth = ls.o.responsiveUnder + 'px';
				}else{
					ls.g.responsiveMode = false;
					ls.g.sliderOriginalWidth = ls.g.sliderOriginalWidthRU;
					ls.g.ratio = 1;
				}
			}
		
			// NEW FEATURE v3.0 added "normal" responsive mode with image and font resizing

			if( ls.g.responsiveMode ){
				
				var parent = $(el).parent();

				$(el).css({
					width : parent.width() - parseInt(parent.css('padding-left')) - parseInt(parent.css('padding-right')) - parseInt($(el).css('padding-left')) - parseInt($(el).css('padding-right'))
				});
				
				ls.g.ratio = $(el).width() / parseInt( ls.g.sliderOriginalWidth );

				$(el).css({
					height : ls.g.ratio * parseInt( ls.g.sliderOriginalHeight )
				});
			}else{
				ls.g.ratio = 1;
				$(el).css({
					width : ls.g.sliderOriginalWidth,
					height : ls.g.sliderOriginalHeight
				});
			}
			
			// WP fullWidth mode (originally forceResponsive mode)
			
			if( $(el).closest('.ls-wp-fullwidth-container').length ){

				$(el).closest('.ls-wp-fullwidth-helper').css({
					height : $(el).outerHeight(true)
				});

				$(el).closest('.ls-wp-fullwidth-container').css({
					height : $(el).outerHeight(true)
				});

				$(el).closest('.ls-wp-fullwidth-helper').css({
					width : $(window).width(),
					left : - $(el).closest('.ls-wp-fullwidth-container').offset().left
				});

				if( ls.g.sliderOriginalWidth.indexOf('%') != -1 ){

					var percentWidth = parseInt( ls.g.sliderOriginalWidth );
					var newWidth = $('body').width() / 100 * percentWidth - ( $(el).outerWidth() - $(el).width() );
					$(el).width( newWidth );
				}
			}

			$(el).find('.ls-inner').css({
				width : ls.g.sliderWidth(),
				height : ls.g.sliderHeight()
			});

			// BUGFIX v2.0 fixed width problem if firstLayer is not 1

			if( ls.g.curLayer && ls.g.nextLayer ){

				ls.g.curLayer.css({
					width : ls.g.sliderWidth(),
					height : ls.g.sliderHeight()
				});

				ls.g.nextLayer.css({
					width : ls.g.sliderWidth(),
					height : ls.g.sliderHeight()
				});

			}else{

				$(el).find('.ls-layer').css({
					width : ls.g.sliderWidth(),
					height : ls.g.sliderHeight()
				});
			}
		};
		
		// Animating layers and sublayers

		ls.animate = function(){

			var stopLayer = ls.g.curLayer;

			// Calling cbAnimStart callback function

			ls.o.cbAnimStart(ls.g);

			// Changing variables

			ls.g.isAnimating = true;
			
			// NEW FEATURE v3.5 thumbnailNavigation ('always')

			if( ls.o.thumbnailNavigation == 'always' ){
				
				// ChangeThumb

				ls.changeThumb();

				// ScrollThumb

				ls.scrollThumb();
			}

			// Adding .ls-animating class to next layer
			
			ls.g.nextLayer.addClass('ls-animating');

			// Setting position and styling of current and next layers

			var curLayerLeft = curLayerRight = curLayerTop = curLayerBottom = nextLayerLeft = nextLayerRight = nextLayerTop = nextLayerBottom = layerMarginLeft = layerMarginRight = layerMarginTop = layerMarginBottom = 'auto';
			var curLayerWidth = nextLayerWidth = ls.g.sliderWidth();
			var curLayerHeight = nextLayerHeight = ls.g.sliderHeight();

			// Calculating direction

			var prevOrNext = ls.g.prevNext == 'prev' ? ls.g.curLayer : ls.g.nextLayer;
			var chooseDirection = prevOrNext.data('slidedirection') ? prevOrNext.data('slidedirection') : ls.o.slideDirection;

			// Setting the direction of sliding

			var slideDirection = ls.g.slideDirections[ls.g.prevNext][chooseDirection];

			if( slideDirection == 'left' || slideDirection == 'right' ){
				curLayerWidth = curLayerTop = nextLayerWidth = nextLayerTop = 0;
				layerMarginTop = 0;				
			}
			if( slideDirection == 'top' || slideDirection == 'bottom' ){
				curLayerHeight = curLayerLeft = nextLayerHeight = nextLayerLeft = 0;
				layerMarginLeft = 0;
			}

			switch(slideDirection){
				case 'left':
					curLayerRight = nextLayerLeft = 0;
					layerMarginLeft = -ls.g.sliderWidth();
					break;
				case 'right':
					curLayerLeft = nextLayerRight = 0;
					layerMarginLeft = ls.g.sliderWidth();
					break;
				case 'top':
					curLayerBottom = nextLayerTop = 0;
					layerMarginTop = -ls.g.sliderHeight();
					break;
				case 'bottom':
					curLayerTop = nextLayerBottom = 0;
					layerMarginTop = ls.g.sliderHeight();
					break;
			}

			// Setting start positions and styles of layers

			ls.g.curLayer.css({
				left : curLayerLeft,
				right : curLayerRight,
				top : curLayerTop,
				bottom : curLayerBottom			
			});
			ls.g.nextLayer.css({
				width : nextLayerWidth,
				height : nextLayerHeight,
				left : nextLayerLeft,
				right : nextLayerRight,
				top : nextLayerTop,
				bottom : nextLayerBottom
			});

			// BUGFIX v3.5 there is no need to animate 'current' layer if the following conditions are true
			//			   this is fixing the sublayer animation direction bug

			if( ls.o.animateFirstLayer && ls.g.layersNum == 1 ){
				var curDelay = 0;
			}else{
				
				// Animating current layer

				// BUGFIX v1.6 fixed some wrong parameters of current layer
				// BUGFIX v1.7 fixed using of delayout of current layer

				var curDelay = ls.g.curLayer.data('delayout') ? parseInt(ls.g.curLayer.data('delayout')) : ls.o.delayOut;
				var curTime = ls.g.curLayer.data('durationout') ? parseInt(ls.g.curLayer.data('durationout')) : ls.o.durationOut;
				var curEasing = ls.g.curLayer.data('easingout') ? ls.g.curLayer.data('easingout') : ls.o.easingOut;

				// BUGFIX v1.6 added an additional delaytime to current layer to fix the '1px gap' bug
				// BUGFIX v3.0 modified from curTime / 80 to curTime / 15

				ls.g.curLayer.delay( curDelay + curTime / 15).animate({
					width : curLayerWidth,
					height : curLayerHeight
				}, curTime, curEasing,function(){

					// Stopping current sublayer animations if needed (they are not visible at this point).

					stopLayer.find(' > *[class*="ls-s"]').stop(true,true);
					
					// Setting current layer

					ls.g.curLayer = ls.g.nextLayer;
					ls.g.curLayerIndex = ls.g.nextLayerIndex;

					// Changing some css classes

					$(el).find('.ls-layer').removeClass('ls-active');
					$(el).find('.ls-layer:eq(' + ( ls.g.curLayerIndex - 1 ) + ')').addClass('ls-active').removeClass('ls-animating');
					$(el).find('.ls-bottom-slidebuttons a').removeClass('ls-nav-active');
					$(el).find('.ls-bottom-slidebuttons a:eq('+( ls.g.curLayerIndex - 1 )+')').addClass('ls-nav-active');

					// Changing variables

					ls.g.isAnimating = false;

					// Calling cbAnimStop callback function

					ls.o.cbAnimStop(ls.g);

					// Setting timer if needed

					if( ls.g.autoSlideshow ){
						ls.timer();
					}	
				});

				// Animating sublayers of current layer

				ls.g.curLayer.find(' > *[class*="ls-s"]').each(function(){

					var curSubSlideDir = $(this).data('slidedirection') ? $(this).data('slidedirection') : slideDirection;
					var lml, lmt;

					switch(curSubSlideDir){
						case 'left':
							lml = -ls.g.sliderWidth();
							lmt = 0;
							break;
						case 'right':
							lml = ls.g.sliderWidth();
							lmt = 0;
							break;
						case 'top':
							lmt = -ls.g.sliderHeight();
							lml = 0;
							break;
						case 'bottom':
							lmt = ls.g.sliderHeight();
							lml = 0;
							break;
					}

					// NEW FEATURE v1.6 added slideoutdirection to sublayers

					var curSubSlideOutDir = $(this).data('slideoutdirection') ? $(this).data('slideoutdirection') : false;

					switch(curSubSlideOutDir){
						case 'left':
							lml = ls.g.sliderWidth();
							lmt = 0;
							break;
						case 'right':
							lml = -ls.g.sliderWidth();
							lmt = 0;
							break;
						case 'top':
							lmt = ls.g.sliderHeight();
							lml = 0;
							break;
						case 'bottom':
							lmt = -ls.g.sliderHeight();
							lml = 0;
							break;
					}

					var curSubParMod = ls.g.curLayer.data('parallaxout') ? parseInt(ls.g.curLayer.data('parallaxout')) : ls.o.parallaxOut;
					var curSubPar = parseInt( $(this).attr('class').split('ls-s')[1] ) * curSubParMod;

					var curSubDelay = $(this).data('delayout') ? parseInt($(this).data('delayout')) : ls.o.delayOut;
					var curSubTime = $(this).data('durationout') ? parseInt($(this).data('durationout')) : ls.o.durationOut;
					var curSubEasing = $(this).data('easingout') ? $(this).data('easingout') : ls.o.easingOut;

					// NEW FEATURE v1.6 added fading feature to sublayers

					if( curSubSlideOutDir == 'fade' || ( !curSubSlideOutDir && curSubSlideDir == 'fade' )){

						$(this).delay( curSubDelay ).fadeOut(curSubTime, curSubEasing);					
					}else{

						$(this).stop().delay( curSubDelay ).animate({
							marginLeft : -lml * curSubPar,
							marginTop : -lmt * curSubPar
						}, curSubTime, curSubEasing);
					}
				});	
			}

			// Animating next layer

				// Replacing global parameters with unique if need

				var nextDelay = ls.g.nextLayer.data('delayin') ? parseInt(ls.g.nextLayer.data('delayin')) : ls.o.delayIn;
				var nextTime = ls.g.nextLayer.data('durationin') ? parseInt(ls.g.nextLayer.data('durationin')) : ls.o.durationIn;
				var nextEasing = ls.g.nextLayer.data('easingin') ? ls.g.nextLayer.data('easingin') : ls.o.easingIn;

				ls.g.nextLayer.delay( curDelay + nextDelay ).animate({
					width : ls.g.sliderWidth(),
					height : ls.g.sliderHeight()
				}, nextTime, nextEasing);

			// Animating sublayers of next layer

			ls.g.nextLayer.find(' > *[class*="ls-s"]').each(function(){

				// Replacing global parameters with unique if need

				var nextSubSlideDir = $(this).data('slidedirection') ? $(this).data('slidedirection') : slideDirection;
				var lml, lmt;

				switch(nextSubSlideDir){
					case 'left':
						lml = -ls.g.sliderWidth();
						lmt = 0;
						break;
					case 'right':
						lml = ls.g.sliderWidth();
						lmt = 0;
						break;
					case 'top':
						lmt = -ls.g.sliderHeight();
						lml = 0;
						break;
					case 'bottom':
						lmt = ls.g.sliderHeight();
						lml = 0;
						break;
					case 'fade':
						lmt = 0;
						lml = 0;
						break;
				}

				var nextSubParMod = ls.g.nextLayer.data('parallaxin') ? parseInt(ls.g.nextLayer.data('parallaxin')) : ls.o.parallaxIn;
				var nextSubPar = parseInt( $(this).attr('class').split('ls-s')[1] ) * nextSubParMod;

				var nextSubDelay = $(this).data('delayin') ? parseInt($(this).data('delayin')) : ls.o.delayIn;
				var nextSubTime = $(this).data('durationin') ? parseInt($(this).data('durationin')) : ls.o.durationIn;
				var nextSubEasing = $(this).data('easingin') ? $(this).data('easingin') : ls.o.easingIn;

				// NEW FEATURE v1.6 added fading feature to sublayers

				if( nextSubSlideDir == 'fade' ){
					
					$(this).css({
						display: 'none',
						marginLeft : 0,
						marginTop : 0
					}).delay( curDelay + nextSubDelay ).fadeIn(nextSubTime, nextSubEasing, function(){
						
						// NEW FEATURE v2.0 autoPlayVideos

						if( ls.o.autoPlayVideos == true ){

							$(this).find('.ls-videopreview').click();
						}					

						// NEW FEATURE v3.0 showUntil sublayers
						
						if( $(this).data('showuntil') > 0 ){

							ls.sublayerShowUntil( $(this) );
						}								
					});
				}else{

					// BUGFIX v1.7 added display : block to sublayers that don't fade

					$(this).css({
						marginLeft : lml * nextSubPar,
						marginTop : lmt * nextSubPar,
						display : 'block'
					}).stop().delay( curDelay + nextSubDelay ).animate({
						marginLeft : 0,
						marginTop : 0
					}, nextSubTime, nextSubEasing, function(){
						
						// NEW FEATURE v2.0 autoPlayVideos

						if( ls.o.autoPlayVideos == true ){

							$(this).find('.ls-videopreview').click();
						}					

						// NEW FEATURE v3.0 showUntil sublayers
						
						if( $(this).data('showuntil') > 0 ){

							ls.sublayerShowUntil( $(this) );
						}								
					});
				}
			});
		};

		ls.sublayerShowUntil = function( sublayer ){
			
			var prevOrNext = ls.g.curLayer;

			if( ls.g.prevNext != 'prev' && ls.g.nextLayer ){
				prevOrNext = ls.g.nextLayer;
			}

			var chooseDirection = prevOrNext.data('slidedirection') ? prevOrNext.data('slidedirection') : ls.o.slideDirection;

			// Setting the direction of sliding

			var slideDirection = ls.g.slideDirections[ls.g.prevNext][chooseDirection];

			var curSubSlideDir = sublayer.data('slidedirection') ? sublayer.data('slidedirection') : slideDirection;
			var lml, lmt;

			switch(curSubSlideDir){
				case 'left':
					lml = -ls.g.sliderWidth();
					lmt = 0;
					break;
				case 'right':
					lml = ls.g.sliderWidth();
					lmt = 0;
					break;
				case 'top':
					lmt = -ls.g.sliderHeight();
					lml = 0;
					break;
				case 'bottom':
					lmt = ls.g.sliderHeight();
					lml = 0;
					break;
			}

			var curSubSlideOutDir = sublayer.data('slideoutdirection') ? sublayer.data('slideoutdirection') : false;

			switch(curSubSlideOutDir){
				case 'left':
					lml = ls.g.sliderWidth();
					lmt = 0;
					break;
				case 'right':
					lml = -ls.g.sliderWidth();
					lmt = 0;
					break;
				case 'top':
					lmt = ls.g.sliderHeight();
					lml = 0;
					break;
				case 'bottom':
					lmt = -ls.g.sliderHeight();
					lml = 0;
					break;
			}

			var curSubParMod = ls.g.curLayer.data('parallaxout') ? parseInt(ls.g.curLayer.data('parallaxout')) : ls.o.parallaxOut;
			var curSubPar = parseInt( sublayer.attr('class').split('ls-s')[1] ) * curSubParMod;
			
			var curSubDelay = parseInt( sublayer.data('showuntil') );

			var curSubTime = sublayer.data('durationout') ? parseInt(sublayer.data('durationout')) : ls.o.durationOut;
			var curSubEasing = sublayer.data('easingout') ? sublayer.data('easingout') : ls.o.easingOut;

			if( curSubSlideOutDir == 'fade' || ( !curSubSlideOutDir && curSubSlideDir == 'fade' )){
				sublayer.delay( curSubDelay ).fadeOut(curSubTime, curSubEasing);					
			}else{
				
				sublayer.delay( curSubDelay ).animate({
					marginLeft : -lml * curSubPar,
					marginTop : -lmt * curSubPar
				}, curSubTime, curSubEasing);
			}
		};

		// v3.6 Improved Debug Mode

		ls.debug = function(){
			
			ls.d = {				
				history : $('<div>'),
				// adds a H1 (title)
				aT : function(content){
					$('<h1>'+content+'</h1>').appendTo( ls.d.history );
				},
				// adds an empty UL
				aeU : function(){
					$('<ul>').appendTo( ls.d.history );
				},
				// adds an UL with a LI
				aU : function(content){
					$('<ul><li>'+content+'</li></ul>').appendTo( ls.d.history );
				},
				// adds a LI into the last UL
				aL : function(content){
					$('<li>'+content+'</li>').appendTo( ls.d.history.find('ul:last') );
				},
				// adds an UL into the last LI of the last UL
				aUU : function(content){
					$('<ul>').appendTo( ls.d.history.find('ul:last li:last') );
				},
				// adds a Function to the first LI inside the last UL
				aF : function(elem){
					ls.d.history.find('ul:last li:last').hover(
						function(){
							elem.css({
								border: '2px solid red',
								marginTop : parseInt( elem.css('margin-top') ) - 2,
								marginLeft : parseInt( elem.css('margin-left') ) - 2
							});
						},
						function(){
							elem.css({
								border: '0px',
								marginTop : parseInt( elem.css('margin-top') ) + 2,
								marginLeft : parseInt( elem.css('margin-left') ) + 2
							});
						}
					);
				},
				show : function(){
					if( !$('body').find('.ls-debug-console').length ){
						var dc = $('<div>').addClass('ls-debug-console').css({
							position: 'fixed',
							zIndex: '10000000000',
							top: '10px',
							right: '10px',
							width: '300px',
							padding: '20px',
							background: 'black',
							'border-radius': '10px',
							height: $(window).height() - 60,
							opacity: 0,
							marginRight: 150
						}).appendTo( $('body') ).animate({
							marginRight: 0,
							opacity: .9
						}, 600, 'easeInOutQuad').click(function(e){
							if(e.shiftKey && e.altKey){
								$(this).animate({
									marginRight: 150,
									opacity: 0
								}, 600, 'easeInOutQuad', function(){
									$(this).remove();
								});
							}							
						});
						var ds = $('<div>').css({
							width: '100%',
							height: '100%',
							overflow: 'auto'
						}).appendTo( dc );
						var dd = $('<div>').css({
							width: '100%'
						}).appendTo( ds ).append( ls.d.history );						
					}
				},
				hide : function(){
					$('body').find('.ls-debug-console').remove();
				}
			};
			
			$(el).click(function(e){
				if(e.shiftKey && e.altKey){
					ls.d.show();
				}
			});
		};

		// initializing
		ls.load();
	};

	layerSlider.global = {
		
		// Global parameters (Do not change these settings!)

		version				: '3.6',
		
		paused				: false,
		pausedByVideo		: false,
		autoSlideshow		: false,
		isAnimating			: false,
		layersNum			: null,
		prevNext			: 'next',
		slideTimer			: null,
		sliderWidth			: null,
		sliderHeight		: null,
		slideDirections		: {
								prev : {
									left	: 'right',
									right	: 'left',
									top		: 'bottom',
									bottom	: 'top'
								},
								next : {
									left	: 'left',
									right	: 'right',
									top		: 'top',
									bottom	: 'bottom'
								}
							},

		// Default delay time, fadeout and fadein durations of videoPreview images

		v					: {
								d	: 500,
								fo	: 750,
								fi	: 500	
							}
	};

	layerSlider.options = {
		
		// User settings (can be modified)
		
		autoStart			: true,						// If true, slideshow will automatically start after loading the page.
		firstLayer			: 1,						// LayerSlider will begin with this layer. Use the word 'random' to start with a random layer.
		twoWaySlideshow		: true, 					// If true, slideshow will go backwards if you click the prev button.
		keybNav				: true,						// Keyboard navigation. You can navigate with the left and right arrow keys.
		imgPreload			: true,						// Image preload. Preloads all images and background-images of the next layer.
		navPrevNext			: true,						// If false, Prev and Next buttons will be invisible.
		navStartStop		: true,						// If false, Start and Stop buttons will be invisible.
		navButtons			: true,						// If false, slide buttons will be invisible.
		skin				: 'glass',					// You can change the skin of the Slider, use 'noskin' to hide skin and buttons. (Pre-defined skins are: 'deafultskin', 'lightskin', 'darkskin', 'glass' and 'minimal'.)
		skinsPath			: '/layerslider/skins/',	// You can change the default path of the skins folder. Note, that you must use the slash at the end of the path.
		pauseOnHover		: true,						// SlideShow will pause when mouse pointer is over LayerSlider.

		// NEW FEATURES v1.6 optional globalBGColor & globalBGImage

		globalBGColor		: 'transparent',			// Background color of LayerSlider. You can use all CSS methods, like hexa colors, rgb(r,g,b) method, color names, etc. Note, that background sublayers are covering the background.
		globalBGImage		: false,					// Background image of LayerSlider. This will be a fixed background image of LayerSlider by default. Note, that background sublayers are covering the global background image.

		// NEW FEATURES v1.7 animateFirstLayer, yourLogo & yourLogoStyle

		animateFirstLayer	: true,						// If true, first layer will animate (slide in) instead of fading
		yourLogo			: false,					// This is a fixed image that will be shown above of LayerSlider container. For example if you want to display your own logo, etc. You have to add the correct path to your image file.
		yourLogoStyle		: 'left: -10px; top: -10px;', // You can style your logo. You are allowed to use any CSS properties, for example add left and top properties to place the image inside the LayerSlider container anywhere you want.

		// NEW FEATURES v1.8 yourLogoLink & yourLogoTarget
		
		yourLogoLink		: false,					// You can add a link to your logo. Set false is you want to display only an image without a link.
		yourLogoTarget		: '_blank',					// If '_blank', the clicked url will open in a new window.

		// NEW FEATURES v2.0 touchNav, loops, forceLoopNum, autoPlayVideos, autoPauseSlideshow & youtubePreview
		
		touchNav			: true,						// Touch-control (on mobile devices)
		loops				: 0,						// Number of loops if autoStart set true (0 means infinite!)
		forceLoopNum		: true,						// If true, the slider will always stop at the given number of loops even if the user restarts the slideshow
		autoPlayVideos		: true,						// If true, slider will autoplay youtube / vimeo videos - you can use it with autoPauseSlideshow
		autoPauseSlideshow	: 'auto',					// 'auto', true or false. 'auto' means, if autoPlayVideos is set to true, slideshow will stop UNTIL the video is playing and after that it continues. True means slideshow will stop and it won't continue after video is played.
		youtubePreview		: 'maxresdefault.jpg',		// Default thumbnail picture of YouTube videos. Can be 'maxresdefault.jpg', 'hqdefault.jpg', 'mqdefault.jpg' or 'default.jpg'. Note, that 'maxresdefault.jpg' os not available to all (not HD) videos.

		// NEW FEATURE v3.0 responsive
		
		responsive			: true,						// Responsive mode with smart-resizing feature

		// NEW FEATURES v3.5 responsiveUnder, randomSlideshow, sublayerContainer, thumbnailMode

		randomSlideshow		: false,					// If true, LayerSlider will change to a random layer instead of changing to the next / prev layer. Note that 'loops' feature won't work with randomSlideshow!
		responsiveUnder		: 0,						// You can force the slider to change automatically into responsive mode but only if the slider width is smaller than responsiveUnder pixels. It can be used if you need a full-width slider with fixed height but you also need it to be responsive if the browser is smaller... Important! If you enter a value higher than 0, the normal responsive mode will be switched off automatically!
		sublayerContainer	: 0,						// This feature is needed if you are using a full-width slider and you need that your sublayers forced to positioning inside a centered custom width container. Just specify the width of this container in pixels! Note, that this feature is working only with pixel-positioned sublayers, but of course if you add left: 50% position to a sublayer it will be positioned horizontally to the center, as before!
		thumbnailNavigation	: 'hover',					// Thumbnail navigation mode. Can be 'disabled', 'hover', 'always'. Note, that 'hover' setting needs navButtons true!
		tnWidth				: 100,						// Width of the thumbnails (in pixels).
		tnHeight			: 60,						// Height of the thumbnails (in pixels).
		tnContainerWidth	: '60%',					// Default width of the thumbnail container.
		tnActiveOpacity		: 35,						// Opacity of the active thumbnail (0-100).
		tnInactiveOpacity	: 100,						// Opacity of the active thumbnail (0-100).
		hoverPrevNext		: true,						// If true, the prev and next buttons will be shown only if you move your mouse over the slider.
		hoverBottomNav		: false,					// If true, the bottom navigation controls (with also thumbnails) will be shown only if you move your mouse over the slider.

		// LayerSlider API callback functions

		cbInit				: function(element){},		// Calling when LayerSlider loads, returns the LayerSlider jQuery object of the LayerSlider container HTML element.
		cbStart				: function(data){},			// Calling when you click the slideshow start button, returns the LayerSlider Data object.
		cbStop				: function(data){},			// Calling when click the slideshow stop / pause button, returns the LayerSlider Data object.
		cbPause				: function(data){},			// Calling when slideshow pauses (if pauseOnHover is true), returns the LayerSlider Data object.
		cbAnimStart			: function(data){},			// Calling when animation starts, returns the LayerSlider Data object.
		cbAnimStop			: function(data){},			// Calling when the animation of current layer ends, but the sublayers of this layer still may be animating, returns the LayerSlider Data object.
		cbPrev				: function(data){},			// Calling when you click the previous button (or if you use keyboard or touch navigation), returns the LayerSlider Data object.
		cbNext				: function(data){},			// Calling when you click the next button (or if you use keyboard or touch navigation), returns the LayerSlider Data object.

		// The following global settings can be override separately by each layers and / or sublayers local settings (see the documentation for more information).
		
		slideDirection		: 'right',					// Slide direction. New layers will sliding FROM(!) this direction.
		slideDelay			: 4000,						// Time before the next slide will be loading.
		parallaxIn			: .45,						// Modifies the parallax-effect of the slide-in animation.
		parallaxOut			: .45,						// Modifies the parallax-effect of the slide-out animation.
		durationIn			: 1500,						// Duration of the slide-in animation.
		durationOut			: 1500,						// Duration of the slide-out animation.
		easingIn			: 'easeInOutQuint',			// Easing (type of transition) of the slide-in animation.
		easingOut			: 'easeInOutQuint',			// Easing (type of transition) of the slide-out animation.
		delayIn				: 0,						// Delay time of the slide-in animation.
		delayOut			: 0							// Delay time of the slide-out animation.
	};

})(jQuery);