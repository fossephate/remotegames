function getCookie(name) {
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	var end;
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin !== 0) return null;
	} else {
		begin += 2;
		end = document.cookie.indexOf(";", begin);
		if (end == -1) {
			end = dc.length;
		}
	}
	// because unescape has been deprecated, replaced with decodeURI
	//return unescape(dc.substring(begin + prefix.length, end));
	return decodeURI(dc.substring(begin + prefix.length, end));
}

function setCookie(name, value, seconds) {
	var expires = "";
	if (seconds) {
		var date = new Date();
		date.setTime(date.getTime() + (seconds * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function minmax(num, min, max) {
	if (num < min) {
		return min;
	} else if (num > max) {
		return max;
	} else {
		return num;
	}
}

function round(value, precision) {
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}

String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, "g"), replacement);
};

function msToTime(duration) {
	// 	var milliseconds = parseInt((duration % 1000) / 100);
	var milliseconds = parseInt((((duration / 1000) % 60) % 1) * 1000);
	var seconds = parseInt((duration / 1000) % 60);
	var minutes = parseInt((duration / (1000 * 60)) % 60);
	var hours = parseInt((duration / (1000 * 60 * 60)) % 24);
	hours = (hours < 10) ? "0" + hours : hours;
	if (hours.length == 2 || hours.length == 3 && hours[0] == "0") {
		hours = hours.substr(1);
	}
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	if (minutes.length == 3 || minutes.length == 4) {
		minutes = minutes.substr(1);
	}
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	if (seconds.length == 3 || seconds.length == 4) {
		seconds = seconds.substr(1);
	}
	//seconds = seconds.replaceAll("-", "");
	if (seconds.length < 2) {
		seconds = "0" + seconds;
	}
	var time = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
	time = time.replaceAll("-", ""); // remove negative signs
	return time;
}

function toggleFullScreen(elem) {
	// ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
	if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
		if (elem.requestFullScreen) {
			elem.requestFullScreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullScreen) {
			elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		} else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		}
	} else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
}

function setToPercentParent(elem, percent) {
	$(elem).height(0);
	let parentHeight = $(elem).parent().height();
	let newHeight = (percent / 100) * parentHeight;
	$(elem).height(newHeight);
}

// like sleep, but worse:
function wait(ms) {
	var start = new Date().getTime();
	var end = start;
	while (end < start + ms) {
		end = new Date().getTime();
	}
}

// brings number closer to target by accel
function mathZoom(current, target, accel) {
	if (current == target) {
		return current;
	}
	if (Math.abs(current - target) < accel) {
		return target;
	}
	if (current < target) {
		return current + accel;
	} else {
		return current - accel;
	}
}


// jquery sum heights:
(function($) {
	$.fn.sumHeights = function() {
		var h = 0;
		this.each(function() {
			h += $(this).outerHeight();
		});
		return h;
	};
	$.fn.addUp = function(getter) {
		return Array.prototype.reduce.call(this, function(a, b) {
			return a + getter.call($(b));
		}, 0);
	}
})(jQuery);