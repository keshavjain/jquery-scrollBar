$(document).ready(function()
{
	(function($)
	{
		$.fn.contentScroll = function()										//scroll handler
		{
			$this = $(this);											
			var parentHeight = $this[0].scrollHeight;
			var $tmpContent = $this.children('.scrollContent');
			var contentHeight = $tmpContent[0].scrollHeight;
			if	(contentHeight > parentHeight)
			{
				var $scrollTrack = $('<div>',{'class' : 'scrollTrack'}).addClass('scrollTrack');
				var $scrollThumb = $('<div>',{'class' : 'scrollThumb'}).addClass('scrollThumb');
				$scrollTrack.append($scrollThumb);
				$this.append($scrollTrack);							//scrollTrack is visible				
				var scrollThumbHeight = parentHeight - ((contentHeight - parentHeight) / (10)); 
				$('.scrollThumb').height(scrollThumbHeight);		// '10' approx. movement of scrollbar in pixels
				$tmpContent.on('scroll', getScroll);
			}
			function getScroll()                                    //position scrollThumb
			{
				var topPosition = $(this).scrollTop();
				$('.scrollThumb').css('top', (topPosition / 10) + 'px');
			}
		};
		
	}(jQuery));
});											

	
		