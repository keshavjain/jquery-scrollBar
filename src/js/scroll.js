/*
 == keshav jquery-scrollBar plugin ==
*/

/*
 Code below is in early stage.
 Any person willing to request updates to this plugin is welcome.
*/

(function($)
{
	$.fn.contentScroll = function(options)										//scroll handler
	{
		var $tmpContent = this.children('.scrollContent');
		var contentHeight = $tmpContent[0].scrollHeight;
		var parentHeight = this[0].scrollHeight;

		var defaults = {};
		var settings = this.extend({}, defaults, options );

		if	(contentHeight > parentHeight)
		{
			var $scrollTrack = $('<div>',{'class' : 'scrollTrack'});
			var $scrollThumb = $('<div>',{'class' : 'scrollThumb'});

			$scrollTrack.append($scrollThumb);
			this.append($scrollTrack);							//scrollTrack is visible

			var scrollThumbHeight = parentHeight - ((contentHeight - parentHeight) / (10));
			$('.scrollThumb').height(scrollThumbHeight);		// '10' approx. movement of scrollbar in pixels

			$tmpContent.on('scroll', getScroll);
		}

		function getScroll()                                    //position scrollThumb
		{
			var topPosition = $(this).scrollTop();
			$('.scrollThumb').css('top', (topPosition / 10) + 'px');
		}

		return this;
	};
}(jQuery));


	
		