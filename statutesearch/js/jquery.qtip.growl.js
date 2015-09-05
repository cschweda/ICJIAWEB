//pseudo-Growl implementation from Qtip2 website: http://craigsworks.com/projects/qtip2/demos/#growl


$(document).ready(function()
{
   
   
   window.createGrowl = function(growlTitleText, growlBodyText, growlLifespan, persistent) {
      // Use the last visible jGrowl qtip as our positioning target
      var target = $('.qtip.jgrowl:visible:last');
 
      // Create your jGrowl qTip...
      $(document.body).qtip({
         // Any content config you want here really.... go wild!
         content: {
            text: growlBodyText,
            title: {
               text: growlTitleText,
               button: true
            }
         },
         position: {
            my: 'top right', // Not really important...
            at: (target.length ? 'bottom' : 'top') + ' right', // If target is window use 'top right' instead of 'bottom right'
            target: target.length ? target : $(window), // Use our target declared above
            adjust: { y: 5 },
			 position: {
      				viewport: $(window)
   				}
         },
         show: {
            event: false, // Don't show it on a regular event
            ready: true, // Show it when ready (rendered)
            effect: function() { $(this).stop(0,1).fadeIn(400); }, // Matches the hide effect
            
            // Custom option for use with the .get()/.set() API, awesome!
            persistent: persistent
         },
         hide: {
            event: false, // Don't hide it on a regular event
            effect: function(api) { 
               // Do a regular fadeOut, but add some spice!
               $(this).stop(0,1).fadeOut(200).queue(function() {
                  // Destroy this tooltip after fading out
                  api.destroy();
 
                  // Update positions
                  updateGrowls();
               })
            }
         },
         style: {
            classes: 'jgrowl ui-tooltip-dark ui-tooltip-rounded', // Some nice visual classes
            tip: false // No tips for this one (optional ofcourse)
         },
         events: {
            render: function(event, api) {
               // Trigger the timer (below) on render
               timer.call(api.elements.tooltip, event, growlLifespan);
            }
         }
      })
      .removeData('qtip');
   };
 
   // Make it a window property see we can call it outside via updateGrowls() at any point
   window.updateGrowls = function() {
      // Loop over each jGrowl qTip
      var each = $('.qtip.jgrowl:not(:animated)');
      each.each(function(i) {
         var api = $(this).data('qtip');
 
         // Set the target option directly to prevent reposition() from being called twice.
         api.options.position.target = !i ? $(window) : each.eq(i - 1);
         api.set('position.at', (!i ? 'top' : 'bottom') + ' right');
      });
   };
 
   // Setup our timer function
   function timer(event, growlLifespan) {
      var api = $(this).data('qtip'),
         lifespan = growlLifespan; 
      
      // If persistent is set to true, don't do anything.
      if(api.get('show.persistent') === true) { return; }
 
      // Otherwise, start/clear the timer depending on event type
      clearTimeout(api.timer);
      if(event.type !== 'mouseover') {
         api.timer = setTimeout(api.hide, lifespan);
      }
   }
 
   // Utilise delegate so we don't have to rebind for every qTip!
   $(document).delegate('.qtip.jgrowl', 'mouseover mouseout', timer);
});