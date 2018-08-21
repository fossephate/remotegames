/*global jQuery */
/*!
 * FitText.js 1.2
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */

(function($) {

	// http://stackoverflow.com/questions/2420970/how-can-i-get-selector-from-jquery-object/15623322#15623322
	var get_selector = function(element) {
		var pieces = [];

		for (; element && element.tagName !== undefined; element = element.parentNode) {
			if (element.className) {
				var classes = element.className.split(' ');
				for (var i in classes) {
					if (classes.hasOwnProperty(i) && classes[i]) {
						pieces.unshift(classes[i]);
						pieces.unshift('.');
					}
				}
			}
			if (element.id && !/\s/.test(element.id)) {
				pieces.unshift(element.id);
				pieces.unshift('#');
			}
			pieces.unshift(element.tagName);
			pieces.unshift(' > ');
		}

		return pieces.slice(1).join('');
	};

	$.fn.getSelector = function(only_one) {
		if (true === only_one) {
			return get_selector(this[0]);
		} else {
			return $.map(this, function(el) {
				return get_selector(el);
			});
		}
	};

})(jQuery);

let fitText = function(selector, kompressor, options) {
	// Setup options
	let compressor = kompressor || 1;
	let settings = $.extend({
		"minFontSize": Number.NEGATIVE_INFINITY,
		"maxFontSize": Number.POSITIVE_INFINITY
	}, options);
	
	
	
	let resizer = function(selector, compressor, settings) {
		let $this = $(selector);
		$this.each(function() {
			let $this2 = $(this);
			$this2.css("font-size", Math.max(Math.min($this2.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
// 			let n = $this2.width() / (compressor * 10);
// 			console.log("w:" + $this2.width() + " c:" + compressor + " n:" + n);
		});
	};
	
	// call once on init:
	resizer(selector, compressor, settings);
	
	// on resize:
	$(window).on("resize.fittext orientationchange.fittext", function() {
		resizer(selector, compressor, settings);
	});
};