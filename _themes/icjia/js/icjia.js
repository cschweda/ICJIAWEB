jQuery(document).ready(function(){$(".expander-news").readmore({speed:175,collapsedHeight:91,moreLink:'<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down" style="font-size: 10px; margin-bottom: .36em"></i></span></a>',lessLink:'<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',afterToggle:function(){progressBarInit()}}),$(".expander").readmore({speed:175,collapsedHeight:91,moreLink:'<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down"></i></span></a>',lessLink:'<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',afterToggle:function(){progressBarInit()}}),$(".expander-bio").readmore({speed:175,collapsedHeight:148,moreLink:'<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down"></i></span></a>',lessLink:'<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',afterToggle:function(){progressBarInit()}}),$(".expander-sm").readmore({speed:175,collapsedHeight:56,moreLink:'<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down"></i></span></a>',lessLink:'<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',afterToggle:function(){progressBarInit()}}),$(".expander-lg").readmore({speed:175,collapsedHeight:148,moreLink:'<a href="#"><span class="expand-style">More&nbsp;&nbsp;<i class="fa fa-angle-double-down"></i></span></a>',lessLink:'<a href="#"><span class="expand-style"><i class="fa fa-angle-double-up"></i>&nbsp;&nbsp;</span></a>',afterToggle:function(){progressBarInit()}}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$("#adjust-font").click(function(){var a="+",b=parseInt($(".article-content").css("font-size")),c=28,d=22;b>c&&(b=d,a="+"),d-1>b&&(b=c,a="-"),"+"===a&&(b+=1),"-"===a&&(b-=1),$(".article-content").css("font-size",b),progressBarInit()})}),$(document).ready(function(){$(".scroll").click(function(a){a.preventDefault(),$(this).removeClass("active");var b=$(this).attr("href"),c=b.substring(1);return $.scrollTo(document.getElementById(c),600,{offset:-90}),!1})}),$(document).ready(function(){$("#nav").on("affixed.bs.affix",function(){$("#nav").addClass("outline",1e3),$("#logo").removeClass("logo-spacer",1e3)}),$("#nav").on("affixed-top.bs.affix",function(){$("#nav").removeClass("outline",1e3),$("#logo").addClass("logo-spacer",1e3)})}),$(".scrollclass").click(function(){$("body").scrollTo($(this).data("target"),{duration:1200,offset:-90})});var hash=document.location.hash,prefix="tab_";if(hash){hash=hash.replace(prefix,"");var hashPieces=hash.split("?");activeTab=$(".nav-tabs a[href="+hashPieces[0]+"]"),activeTab&&activeTab.tab("show")}else activeTab=$(".nav-tabs a:first"),activeTab&&activeTab.tab("show");$(".nav-tabs a").on("shown",function(a){window.location.hash=a.target.hash.replace("#","#"+prefix)}),$(window).on("hashchange",function(){window.location.reload(!0)});var $=jQuery,RemoteTabs=function(){var a={hasLoadingMask:!1,load:function(a,b){var c=this;c.hasLoadingMask=!!b,$("[data-toggle=tab]").each(function(b,d){var e,f,g,h,i,j=$(d);if(j.is("[data-tab-url]")){if(h=j.attr("data-tab-url"),e=$(j.attr("href")),f=j.attr("data-tab-json")||[],g=j.attr("data-tab-callback")||null,i=j.attr("data-tab-delay")||null,f.length>0)try{f=$.parseJSON(f)}catch(k){}j.on(a,function(a){(!j.hasClass("loaded")||j.is("[data-tab-always-refresh]"))&&(c.hasLoadingMask&&e.mask("Loading..."),i?(clearTimeout(window.timer),window.timer=setTimeout(function(){c._executeRemoteCall(h,f,g,j,e)},i)):c._executeRemoteCall(h,f,g,j,e))})}})},_executeRemoteCall:function(a,b,c,d,e){var f=this;$.ajax({url:a,data:b||[],success:function(a){f.hasLoadingMask&&e.unmask(),a&&("function"==typeof window[c]&&window[c].call(null,a,d,e,b),d.hasClass("loaded")||d.addClass("loaded"),e.html(a))},fail:function(a){f.hasLoadingMask&&e.unmask()}})}},b=jQuery().mask?!0:!1,c=jQuery().typeahead?!0:!1,d=c?"show":"show.bs.tab";return a.load(d,b),a},remoteTabsPluginLoaded=new RemoteTabs;$('[id*="fnref"]').click(function(a){a.preventDefault();var b=$(this).attr("href"),c=b.substring(1);return $.scrollTo(document.getElementById(c),200,{offset:-90}),!1}),$(".reversefootnote").click(function(a){a.preventDefault();var b=$(this).attr("href"),c=b.substring(1);return $.scrollTo(document.getElementById(c),200,{offset:-80}),!1}),$(document).ready(function(){$(".hide-toc").click(function(a){$(".bs-sidebar").fadeOut(),$("#progressBar").fadeOut()}),$(".show-toc").click(function(a){$(".bs-sidebar").fadeIn(),$("#progressBar").fadeIn()});var a=$("#keyword-grid");a.isotope({itemSelector:".keyword-single",layoutMode:"fitRows"}),$(".filter-group").on("click","a",function(){var b=$(this).attr("data-target");a.isotope({filter:b})})}),$(".open-image").click(function(a){a.preventDefault(),$(this).ekkoLightbox()}),$(function(){$("#nav-wrapper").height($("#nav").height()),$("#nav.icjia-main").affix({offset:{top:$("#nav").offset().top}})}),$(document).ready(function(){$("body").prepend('<a href="javascript:void(0);" class="back-to-top" style="display: none">Back to Top</a>');var a=550,b=120;$(window).scroll(function(){$(window).scrollTop()>a?$("a.back-to-top").fadeIn("fast"):$("a.back-to-top").fadeOut("fast"),$(window).scrollTop()>b?$(".prepbootstrap-sharing-container").fadeIn("slow"):$(".prepbootstrap-sharing-container").fadeOut("slow")}),$("a.back-to-top").click(function(){return $("body, html").animate({scrollTop:0},1200),!1})}),function(a,b,c,d){"use strict";function e(c,e){function g(c,d,f){var g={"margin-left":c.css("margin-left"),opacity:c.css("opacity"),position:c.css("position")},h={},i={};"out"===d?(c.css("position","absolute"),i.opacity=0,i["margin-left"]=a(b).width(),"left"===f&&(i["margin-left"]*=-1)):"in"===d&&(h.opacity=0,h["margin-left"]=a(b).width(),"left"===f&&(h["margin-left"]*=-1),c.css(h),c.show(),i.opacity=g.opacity,i["margin-left"]=g["margin-left"]),c.animate(i,e.slideTime,function(){"out"===d&&(c.hide(),c.css(g))})}function h(){a(".nav-tabs > li",q).css("text-align","center"),a(".nav-tabs > li:not(.active)",q).hide(),a("<a class='right tab-control'>&rsaquo;</a>").appendTo(a(".nav-tabs li:not(:last-child)",q)).each(function(b){var c=a(this).parents("ul").first().children("li:nth-child("+(b+1)+")"),d=(a(c).children("a[href]"),a(this).parents("ul").first().children("li:nth-child("+(b+2)+")")),e=a(d).children("a[href]");a(this).click(function(){g(c,"out","left"),g(d,"in","right"),a(e).tab("show")})}),a("<a class='left tab-control'>&lsaquo;</a>").prependTo(a(".nav-tabs li:not(:first-child)",q)).each(function(b){var c=a(this).parents("ul").first().children("li:nth-child("+(b+2)+")"),d=(a(c).children("a[href]"),a(this).parents("ul").first().children("li:nth-child("+(b+1)+")")),e=a(d).children("a[href]");a(this).click(function(){g(c,"out","right"),g(d,"in","left"),a(e).tab("show")})}),a(".nav-tabs li:first-child",q).prepend("<span class='left tab-control-spacer'> </span>"),a(".nav-tabs li:last-child",q).append("<span class='right tab-control-spacer'> </span>")}function i(){a(".nav-tabs > li",q).css("text-align","left"),a(".nav-tabs > li:not(.active)",q).show(),a(".tab-control",q).remove(),a(".tab-control-spacer",q).remove()}function j(){var a=b.innerWidth;o>e.maxSmallWidth&&a<=e.maxSmallWidth?h():o<=e.maxSmallWidth&&a>e.maxSmallWidth&&i(),o=a}function k(){o=a("body").width(),o<=e.maxSmallWidth&&h(),a(b).on("resize",j),n("onInit")}function l(a,b){return b?void(e[a]=b):e[a]}function m(){a(b).off("resize",j),i(),q.each(function(){var b=a(this);n("onDestroy"),b.removeData("plugin_"+f)})}function n(a){e[a]!==d&&e[a].call(p)}var o,p=c,q=a(c);return e=a.extend({},a.fn[f].defaults,e),k(),{option:l,destroy:m}}var f="resptabs";a.fn[f]=function(b){if("string"==typeof arguments[0]){var c,g=arguments[0],h=Array.prototype.slice.call(arguments,1);return this.each(function(){if(!a.data(this,"plugin_"+f)||"function"!=typeof a.data(this,"plugin_"+f)[g])throw new Error("Method "+g+" does not exist on jQuery."+f);c=a.data(this,"plugin_"+f)[g].apply(this,h)}),c!==d?c:this}return"object"!=typeof b&&b?void 0:this.each(function(){a.data(this,"plugin_"+f)||a.data(this,"plugin_"+f,new e(this,b))})},a.fn[f].defaults={maxSmallWidth:767,slideTime:500,onInit:function(){},onDestroy:function(){}}}(jQuery,window,document);
//# sourceMappingURL=icjia.js.map