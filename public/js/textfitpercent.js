

function resizePercent(mySettings) {
	
	this.textSettings = mySettings;
	
	this.resize = function() {
		
		let self1 = this;
		
		let self2;
		if (this.textSettings.isFirstChild) {
			self2 = $(this.textSettings.selector).children().first();
		} else {
			self2 = $(this.textSettings.selector);
		}

		self2.each(function() {
			
			let self3 = $(this);
			
			let currentFontSize = parseFloat(self3.css("font-size"));
			let parentWidth;
			let parentHeight;
			
			if (self1.textSettings.parent != null) {
				parentWidth = $(self1.textSettings.parent).outerWidth();
				parentHeight = $(self1.textSettings.parent).outerHeight();
				if (self1.textSettings.isClass) {
					parentWidth = $(self1.textSettings.parent).addUp($.fn.outerWidth);
					parentHeight = $(self1.textSettings.parent).addUp($.fn.outerHeight);
				}
			} else {
				parentWidth = self3.parent().outerWidth();
				parentHeight = self3.parent().outerHeight();
			}
			
			let currentWidth = self3.outerWidth();
			let currentHeight = self3.outerHeight();
			
			let targetWidth = (self1.textSettings.percentWidth / 100) * parentWidth;
			
			let counter = 0;
			
			while ((Math.abs(currentWidth - targetWidth) > self1.textSettings.accuracy) && counter < self1.textSettings.maxTries) {
				
				counter++;
				
				// min / max font sizes:
				if (currentFontSize < self1.textSettings.minFontSize) {
					currentFontSize = self1.textSettings.minFontSize
				}
				if (currentFontSize > self1.textSettings.maxFontSize) {
					currentFontSize = self1.textSettings.maxFontSize
				}
				
				// if it's bigger than it should be:
				// decrease the font size:
				if ((currentWidth - targetWidth) > 0) {
					self3.css("font-size", currentFontSize - self1.textSettings.increment);
// 					console.log("decreasing font size.");
				// if it's smaller than it should be:
				// increase the font size:
				} else if ((currentWidth - targetWidth) < 0) {
					self3.css("font-size", currentFontSize + self1.textSettings.increment);
// 					console.log("increasing font size.");
				}
				
				// update current width and height:
				currentWidth = self3.outerWidth();
				currentHeight = self3.outerHeight();
				
				// update current font size:
				currentFontSize = parseFloat(self3.css("font-size"));
				
				// not necessary:
// 				targetWidth = (self1.textSettings.percentWidth / 100) * parentWidth;
				
// 				console.log("cw: " + currentWidth);
// 				console.log("tw: " + targetWidth);
// 				console.log("fs: " + currentFontSize);
			}
		});
		
	}

}

// textFitPercent
module.exports = function (options) {
	// Setup options
	let textSettings = $.extend({
		"selector": null,
		"parent": null,
		"isFirstChild": false,
		"isClass": false,
		"percentWidth": 10,
		"percentHeight": 10,
		"accuracy": 10,
		"increment": 0.1,
		"maxTries": 40,
		"minFontSize": Number.NEGATIVE_INFINITY,
		"maxFontSize": Number.POSITIVE_INFINITY,
	}, options);
	
	let myResizePercent = new resizePercent(textSettings);
	
	return myResizePercent;
	
}