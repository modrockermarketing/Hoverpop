$(document).ready(function () {

	/* - @TODO - Change to use .on() and event handlers instead of shortcuts and anonymous functions */

	var enlarger = $('img');

	/*
	*
	* Handle events
	*
	*/

	 /* On mouse enter create hover div and inner image */

	enlarger.mouseenter(function (e) {

		var curImg 		= $(this),
			curImgSrc 	= curImg.attr('src'),
			hoverDiv	= $(document.createElement('div'))
							.attr('id', 'hoverdiv')
							.html('<img src="' + curImgSrc + '" />');

		$('body').append(hoverDiv);
	});

	/* On mouse mvoe, position hover div and inner image */

	enlarger.mousemove(function (e) {
		$('#hoverdiv')
			.css({'top' : e.pageY + 20, 'left' : e.pageX + 20});
	});

	/* On mouse leave, delete the element from the dom */
	/* - @TODO - maybe create an init function to create hoverdiv once instead of on every enter and then just hide on mouseleave. */

	enlarger.mouseleave(function (e) {
		$('#hoverdiv').remove();
	});

});