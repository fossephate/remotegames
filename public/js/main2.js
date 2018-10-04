import React from "react";
import ReactDOM from "react-dom";

require("js/keymaster.js");
// require("../js/gamepad.js");
// let keycode = require("keycode");
window.keycode = require("keycode");
let textFitPercent = require("js/textfitpercent.js");
let tools = require("js/tools.js");
// rest of tools:
String.prototype.replaceAll = function(search, replacement) {
	let target = this;
	return target.replace(new RegExp(search, "g"), replacement);
};

$.fn.sumHeights = function() {
	let h = 0;
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

// const element = <h1>test</h1>;
// console.log(element);

let socket = io("https://twitchplaysnintendoswitch.com", {
	path: "/8110/socket.io",
	transports: ["websocket"],
});
// let socket2 = io("https://twitchplaysnintendoswitch.com", {
// 	path: "/8001/socket.io",
// });
let socket2 = socket;

let globalEventTimer = false;
let lagless1JoinTimer;
let sendInputTimer;
let currentTab = "#lagless1";
let currentPlayerChosen = 0;
let wasPressedKeyCodes = [];
let lastSplitTime = 0;
let lastSplitTimeMS = 0;
let loaded = false;
let locked = false;
let player;
let player4;
let audioConnected = false;
let videoConnected = false;
let authCookie;
let crate;
let usernameMap = {};
let banlist = [];
let bannedIPs = ["84.197.3.92", "94.214.218.184", "185.46.212.146"];
let resizers = [];
let resizeDebounceTimer;
let resizeAvailable = true;

// twitch lagless swap settings
let isExempt = false;
let minQueuePos = 5;
let tabsSwappedWithTwitch = [false, false, false, false];
let maxViewersOnTab = [10, 10, 10, 10];

let viewers = [[], [], [], [], []];
let waitlists = [[], [], [], [], []];
let controlQueues = [["The queue is empty."], ["The queue is empty."], ["The queue is empty."], ["The queue is empty."], ["The queue is empty."]];
let controlQueue1 = [];
let controlQueue2 = [];
let controlQueue3 = [];
let controlQueue4 = [];
let controlQueue5 = [];

let myUniqueID = null;
let myUsername = null;
let myConnectedAccounts = [];
let myValidUsernames = [];

// settings:
let settings = {
	enableAudioThree: true,
	audioThree: false,
	keyboardControls: false,
	controllerControls: false,
	touchControls: true,
	mouseControls: false,
	analogStickMode: false,
	currentInputMode: null,
	darkTheme: false,
	fullscreen: false,
	largescreen: false,
	youtubeChat: false,
	hideChat: false,
	hideNav: false,
	deadzone: 50,
	stickSensitivityX: 1,
	stickSensitivityY: 1,
	stickAttack: 20,
	stickReturn: 20,
	keyboardProfiles: {},
	tab: 2,
	dpadSwap: false,
	TDSConfig: false,
	volume: 50,
	usernameIndex: 0,
};

let lagless1Settings = {};
let lagless2Settings = {framerate: 30, videoBitrate: 1, scale: 960, offsetX: 0, offsetY: 0};
let lagless5Settings = {framerate: 30, videoBitrate: 1, scale: 960, offsetX: 0, offsetY: 0};
let disableController = false;

// detect firefox:
if(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
	settings.stickSensitivityX = 1.5;
	settings.stickSensitivityY = 1.5;
}

let timeLeft = 30000;
let turnLength = 30000;
let timeTillForfeit = 15000;
let turnUsername = null;
let lastCurrentTime = 0;

let mouseMoveTimer = null;
let isMobile = false;
let pingTime = 0;
let restPos = 128;
// Default 512*1024 (512kb).
// Default 128*1024 (128kb)
let videoBufferSize = 256*1024;
let audioBufferSize = 128*1024;

let oldControllerState = "800000000000000" + " " + restPos + " " + restPos + " " + restPos + " " + restPos;
let lagless1Port = 8001;
let lagless2Port = 8002;
let lagless3Port = 8003;
let lagless4Port = 8004;

/* MOBILE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
// check if on mobile
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}

// if (isMobile) {
// 	swal({
// 		title: "Do you want to go to the mobile site?",
// 		type: "warning",
// 		showCancelButton: true,
// 		confirmButtonColor: "#3085d6",
// 		cancelButtonColor: "#d33",
// 		confirmButtonText: "Yes",
// 		cancelButtonText: "No",
// 	}).then((result) => {
// 		if (result.value) {
// 			window.location = "https://twitchplaysnintendoswitch.com/mobile.html";
// 		}
// 	});
// }

let keyboardLayout = {};
keyboardLayout.tempSelectedAction = "";
keyboardLayout.tempSelectedKey = "";
keyboardLayout.LU = "W";
keyboardLayout.LD = "S";
keyboardLayout.LL = "A";
keyboardLayout.LR = "D";
keyboardLayout.RU = "I";
keyboardLayout.RD = "K";
keyboardLayout.RL = "J";
keyboardLayout.RR = "L";
keyboardLayout.ABtn = "right";
keyboardLayout.BBtn = "down";
keyboardLayout.XBtn = "up";
keyboardLayout.YBtn = "left";
keyboardLayout.DUp = "T";
keyboardLayout.DDown = "G";
keyboardLayout.DLeft = "F";
keyboardLayout.DRight = "H";
keyboardLayout.LStick = "R";
keyboardLayout.RStick = "Y";
keyboardLayout.LBtn = "U";
keyboardLayout.ZL = "Q";
keyboardLayout.RBtn = "O";
keyboardLayout.ZR = "E";
keyboardLayout.Minus = "-";
keyboardLayout.Plus = "=";
keyboardLayout.Capture = "1";
keyboardLayout.Home = "2";
settings.keyboardProfiles.default = keyboardLayout;

function getMeta(url, callback) {
	let img = new Image();
	img.src = url;
	img.onload = function() {
		callback(this.width, this.height);
	}
}


/* CONTROLLER STUFF */

let gamepadCounter = 0;

let controller = require("js/VirtualProController.js");
controller.reset();


function sendControllerState() {

	let newControllerState = controller.getState();

	if (newControllerState == oldControllerState) {
		return;
	} else {
		oldControllerState = newControllerState;
	}

	if (settings.currentInputMode == "keyboard" && !settings.keyboardControls) {
		return;
	}
	if (settings.currentInputMode == "controller" && !settings.controllerControls) {
		return;
	}
	if (settings.currentInputMode == "touch" && !settings.touchControls) {
		return;
	}

	if (($("#keyboardSettings").data("bs.modal") || {})._isShown) {
		return;
	}

	if(controlQueues[currentPlayerChosen].indexOf(myUniqueID) == -1) {
		socket.emit("requestTurn", currentPlayerChosen);

// 		// turn over:
// 		$(".cancelTurn").each(function() {
// 			cNum = $(this).attr("code");
// 			if (cNum == (currentPlayerChosen + 1)) {
// // 				return;
// 			}
// 			let html = '<button id="requestTurn' + cNum + '" class="requestTurn btn btn-secondary" code="'+ cNum +'">Join Queue</button>';
// 			$(this).replaceWith(html);
// 		});
// 		// replace only the currect button:
// 		let html = '<button id="cancelTurn' + (currentPlayerChosen + 1) + '" class="cancelTurn btn btn-secondary" code="' + currentPlayerChosen + '">Leave Queue</button>';
// 		$("#requestTurn" + (currentPlayerChosen + 1)).replaceWith(html);
	}

	if(controlQueues[currentPlayerChosen].indexOf(myUniqueID) > 0 && controlQueues[currentPlayerChosen].length > 0) {
		let alertMessage = $(".swal2-container")[0];
		if (typeof alertMessage == "undefined") {
			swal("It's not your turn yet!");
		}
		return;
	}

	authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
	if (authCookie == null) {
		swal({
			title: "You need to login! Redirecting you now!",
		}).then((result) => {
			if (result.value) {
				window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
			}
		});
		return;
	} else {
		authCookie = authCookie.split(" ")[0].replace(/;/g, "");
	}

	let obj = {state: newControllerState, cNum: 0}

	if (controlQueues[0][0] == myUniqueID) {
		obj.cNum = 0;
	} else if (controlQueues[1][0] == myUniqueID) {
		obj.cNum = 1;
	} else if (controlQueues[2][0] == myUniqueID) {
		obj.cNum = 2;
	} else if (controlQueues[3][0] == myUniqueID) {
		obj.cNum = 3;
	} else if (controlQueues[4][0] == myUniqueID) {
		obj.cNum = 4;
	} else {
		obj.cNum = currentPlayerChosen;
	}
	console.log(obj.state, obj.cNum);
	socket.emit("sendControllerState", obj);
}

function getKeyboardInput() {

	if (!$("#keyboardControlsCheckbox")[0].checked) {
		return;
	}
	authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
	if (authCookie == null) {
		$("#keyboardControlsCheckbox").prop("checked", false).trigger("change");
		swal({
			title: "You need to login! Redirecting you now!",
		}).then((result) => {
			if (result.value) {
				window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
			}
		});
		return;
	} else {
		authCookie = authCookie.split(" ")[0].replace(/;/g, "");
	}

	let oldControllerState = controller.getState();

	if (!settings.analogStickMode) {
		if (key.isPressed(keyboardLayout.LU)) {
			controller.LStick.y = 255;
		} else if(key.wasPressed(keyboardLayout.LU, wasPressedKeyCodes)) {
			controller.LStick.y = restPos;
		}
		if (key.isPressed(keyboardLayout.LD)) {
			controller.LStick.y = 0;
		} else if(key.wasPressed(keyboardLayout.LD, wasPressedKeyCodes)) {
			controller.LStick.y = restPos;
		}
		if (key.isPressed(keyboardLayout.LL)) {
			controller.LStick.x = 0;
		} else if(key.wasPressed(keyboardLayout.LL, wasPressedKeyCodes)) {
			controller.LStick.x = restPos;
		}
		if (key.isPressed(keyboardLayout.LR)) {
			controller.LStick.x = 255;
		} else if(key.wasPressed(keyboardLayout.LR, wasPressedKeyCodes)) {
			controller.LStick.x = restPos;
		}
	} else {

		let leftRight = false;
		let upDown = false;

		if (key.isPressed(keyboardLayout.LU)) {
			controller.LStick.y = Math.round(parseInt(controller.LStick.y) + settings.stickAttack);
		}
		if (key.isPressed(keyboardLayout.LD)) {
			controller.LStick.y = Math.round(parseInt(controller.LStick.y) - settings.stickAttack);
		}
		if (key.isPressed(keyboardLayout.LL)) {
			controller.LStick.x = Math.round(parseInt(controller.LStick.x) - settings.stickAttack);
		}
		if (key.isPressed(keyboardLayout.LR)) {
			controller.LStick.x = Math.round(parseInt(controller.LStick.x) + settings.stickAttack);
		}

		upDown = key.isPressed(keyboardLayout.LU) || key.isPressed(keyboardLayout.LD);
		leftRight = key.isPressed(keyboardLayout.LL) || key.isPressed(keyboardLayout.LR);

		if (!upDown) {
			controller.LStick.y = Math.round(mathZoom(parseInt(controller.LStick.y), restPos, settings.stickReturn));
		}

		if (!leftRight) {
			controller.LStick.x = Math.round(mathZoom(parseInt(controller.LStick.x), restPos, settings.stickReturn));
		}
	}

	if (key.isPressed(keyboardLayout.ABtn)) {
		controller.btns.a = 1;
	} else if(key.wasPressed(keyboardLayout.ABtn, wasPressedKeyCodes)) {
		controller.btns.a = 0;
	}
	if (key.isPressed(keyboardLayout.BBtn)) {
		controller.btns.b = 1;
	} else if(key.wasPressed(keyboardLayout.BBtn, wasPressedKeyCodes)) {
		controller.btns.b = 0;
	}
	if (key.isPressed(keyboardLayout.XBtn)) {
		controller.btns.x = 1;
	} else if(key.wasPressed(keyboardLayout.XBtn, wasPressedKeyCodes)) {
		controller.btns.x = 0;
	}
	if (key.isPressed(keyboardLayout.YBtn)) {
		controller.btns.y = 1;
	} else if(key.wasPressed(keyboardLayout.YBtn, wasPressedKeyCodes)) {
		controller.btns.y = 0;
	}

	if (key.isPressed(keyboardLayout.DUp)) {
		controller.btns.up = 1;
	} else if(key.wasPressed(keyboardLayout.DUp, wasPressedKeyCodes)) {
		controller.btns.up = 0;
	}
	if (key.isPressed(keyboardLayout.DDown)) {
		controller.btns.down = 1;
	} else if(key.wasPressed(keyboardLayout.DDown, wasPressedKeyCodes)) {
		controller.btns.down = 0;
	}
	if (key.isPressed(keyboardLayout.DLeft)) {
		controller.btns.left = 1;
	} else if(key.wasPressed(keyboardLayout.DLeft, wasPressedKeyCodes)) {
		controller.btns.left = 0;
	}
	if (key.isPressed(keyboardLayout.DRight)) {
		controller.btns.right = 1;
	} else if(key.wasPressed(keyboardLayout.DRight, wasPressedKeyCodes)) {
		controller.btns.right = 0;
	}

	if (!settings.analogStickMode) {
		if (key.isPressed(keyboardLayout.RU)) {
			controller.RStick.y = 255;
		} else if(key.wasPressed(keyboardLayout.RU, wasPressedKeyCodes)) {
			controller.RStick.y = restPos;
		}
		if (key.isPressed(keyboardLayout.RD)) {
			controller.RStick.y = 0;
		} else if(key.wasPressed(keyboardLayout.RD, wasPressedKeyCodes)) {
			controller.RStick.y = restPos;
		}
		if (key.isPressed(keyboardLayout.RL)) {
			controller.RStick.x = 0;
		} else if(key.wasPressed(keyboardLayout.RL, wasPressedKeyCodes)) {
			controller.RStick.x = restPos;
		}
		if (key.isPressed(keyboardLayout.RR)) {
			controller.RStick.x = 255;
		} else if(key.wasPressed(keyboardLayout.RR, wasPressedKeyCodes)) {
			controller.RStick.x = restPos;
		}
	} else {
		let leftRight = false;
		let upDown = false;

		if (key.isPressed(keyboardLayout.RU)) {
			controller.RStick.y = Math.round(parseInt(controller.RStick.y) + settings.stickAttack);
		}
		if (key.isPressed(keyboardLayout.RD)) {
			controller.RStick.y = Math.round(parseInt(controller.RStick.y) - settings.stickAttack);
		}
		if (key.isPressed(keyboardLayout.RL)) {
			controller.RStick.x = Math.round(parseInt(controller.RStick.x) - settings.stickAttack);
		}
		if (key.isPressed(keyboardLayout.RR)) {
			controller.RStick.x = Math.round(parseInt(controller.RStick.x) + settings.stickAttack);
		}

		upDown = key.isPressed(keyboardLayout.RU) || key.isPressed(keyboardLayout.RD);
		leftRight = key.isPressed(keyboardLayout.RL) || key.isPressed(keyboardLayout.RR);

		if (!upDown) {
			controller.RStick.y = Math.round(mathZoom(parseInt(controller.RStick.y), restPos, settings.stickReturn));
		}

		if (!leftRight) {
			controller.RStick.x = Math.round(mathZoom(parseInt(controller.RStick.x), restPos, settings.stickReturn));
		}
	}

	if (key.isPressed(keyboardLayout.Minus)) {
		controller.btns.minus = 1;
	} else if(key.wasPressed(keyboardLayout.Minus, wasPressedKeyCodes)) {
		controller.btns.minus = 0;
	}
	if (key.isPressed(keyboardLayout.Plus)) {
		controller.btns.plus = 1;
	} else if(key.wasPressed(keyboardLayout.Plus, wasPressedKeyCodes)) {
		controller.btns.plus = 0;
	}

	if (key.isPressed(keyboardLayout.Capture)) {
		controller.btns.capture = 1;
	} else if(key.wasPressed(keyboardLayout.Capture, wasPressedKeyCodes)) {
		controller.btns.capture = 0;
	}
	if (key.isPressed(keyboardLayout.Home)) {
		controller.btns.home = 1;
	} else if(key.wasPressed(keyboardLayout.Home, wasPressedKeyCodes)) {
		controller.btns.home = 0;
	}

	if (key.isPressed(keyboardLayout.LBtn)) {
		controller.btns.l = 1;
	} else if(key.wasPressed(keyboardLayout.LBtn, wasPressedKeyCodes)) {
		controller.btns.l = 0;
	}
	if (key.isPressed(keyboardLayout.RBtn)) {
		controller.btns.r = 1;
	} else if(key.wasPressed(keyboardLayout.RBtn, wasPressedKeyCodes)) {
		controller.btns.r = 0;
	}

	if (key.isPressed(keyboardLayout.ZL)) {
		controller.btns.zl = 1;
	} else if(key.wasPressed(keyboardLayout.ZL, wasPressedKeyCodes)) {
		controller.btns.zl = 0;
	}
	if (key.isPressed(keyboardLayout.ZR)) {
		controller.btns.zr = 1;
	} else if(key.wasPressed(keyboardLayout.ZR, wasPressedKeyCodes)) {
		controller.btns.zr = 0;
	}

	if (key.isPressed(keyboardLayout.LStick)) {
		controller.btns.stick_button = 1;
	} else if(key.wasPressed(keyboardLayout.LStick, wasPressedKeyCodes)) {
		controller.btns.stick_button = 0;
	}
	if (key.isPressed(keyboardLayout.RStick)) {
		controller.btns.stick_button2 = 1;
	} else if(key.wasPressed(keyboardLayout.RStick, wasPressedKeyCodes)) {
		controller.btns.stick_button2 = 0;
	}

	wasPressedKeyCodes = key.getPressedKeyCodes();

	let newControllerState = controller.getState();

	if (newControllerState != oldControllerState) {
		settings.currentInputMode = "keyboard";
	} else {
		controller.inputState(oldControllerState);
	}
}


/* prevent arrow key scrolling */
window.addEventListener("keydown", function(e) {
	// space and arrow keys
	if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}
	if ([27].indexOf(e.keyCode) > -1) {
		document.exitPointerLock();
		document.removeEventListener("mousemove", getMouseInput);
		document.removeEventListener("mousedown", getMouseInput2);
		document.removeEventListener("mouseup", getMouseInput2);
		$("#mouseControlsCheckbox").prop("checked", false).trigger("change");
	}
}, false);


function getMouseInput(e) {

	// on mouse stop:
	clearTimeout(mouseMoveTimer);
	mouseMoveTimer = setTimeout(function(){
		controller.RStick.x = restPos;
		controller.RStick.y = restPos;
	}, 100);

	var x = restPos + e.movementX*10;
	var y = restPos - e.movementY*10;

	controller.RStick.x = x;
	controller.RStick.y = y;

	controller.RStick.x = tools.minmax(controller.RStick.x, 0, 255);
	controller.RStick.y = tools.minmax(controller.RStick.y, 0, 255);
}

function getMouseInput2(e) {
	let value = e.type == "mousedown" ? 1 : 0;
	// left button:
	if(e.which === 1) {
		controller.btns.zr = value;
	// right button:
	} else if (e.which == 3) {
		//controller.btns.zr = value;
	}
}

// todo: maybe make a virtual canvas w/ $() ? not sure if actual canvas is required
let videoCanvas2 = $("#videoCanvas2")[0];
videoCanvas2.requestPointerLock = videoCanvas2.requestPointerLock || videoCanvas2.mozRequestPointerLock;
document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;

$("#mouseControlsCheckbox").change(function(e) {
	if (this.checked) {
		c.requestPointerLock();
		document.addEventListener("mousemove", getMouseInput, false);
		document.addEventListener("mousedown", getMouseInput2, false);
		document.addEventListener("mouseup", getMouseInput2, false);
	} else {
		document.exitPointerLock();
		document.removeEventListener("mousemove", getMouseInput);
		document.removeEventListener("mousedown", getMouseInput2);
		document.removeEventListener("mouseup", getMouseInput2);
	}
});


/* GAMEPAD API */

const gamepad = new Gamepad();

gamepad.on("connect", e => {
	console.log(`controller ${e.index} connected!`);
	gamepadCounter += 1;
});

gamepad.on("disconnect", e => {
	console.log(`controller ${e.index} disconnected!`);
	gamepadCounter -= 1;
});

gamepad.on("press", "button_1", e => {
	settings.currentInputMode = "controller";
	if (!settings.TDSConfig) {
		controller.btns.b = 1;
	} else {
		controller.btns.a = 1;
	}
});
gamepad.on("release", "button_1", e => {
	settings.currentInputMode = "controller";
	if (!settings.TDSConfig) {
		controller.btns.b = 0;
	} else {
		controller.btns.a = 0;
	}
});

gamepad.on("press", "button_2", e => {
	settings.currentInputMode = "controller";
	if (!settings.TDSConfig) {
		controller.btns.a = 1;
	} else {
		controller.btns.b = 1;
	}
});
gamepad.on("release", "button_2", e => {
	settings.currentInputMode = "controller";
	if (!settings.TDSConfig) {
		controller.btns.a = 0;
	} else {
		controller.btns.b = 0;
	}
});

gamepad.on("press", "button_3", e => {
	settings.currentInputMode = "controller";
	if (!settings.TDSConfig) {
		controller.btns.y = 1;
	} else {
		controller.btns.x = 1;
	}
});
gamepad.on("release", "button_3", e => {
	settings.currentInputMode = "controller";
	if (!settings.TDSConfig) {
		controller.btns.y = 0;
	} else {
		controller.btns.x = 0;
	}
});

gamepad.on("press", "button_4", e => {
	settings.currentInputMode = "controller";
	if (!settings.TDSConfig) {
		controller.btns.x = 1;
	} else {
		controller.btns.y = 1;
	}
});
gamepad.on("release", "button_4", e => {
	settings.currentInputMode = "controller";
	if (!settings.TDSConfig) {
		controller.btns.x = 0;
	} else {
		controller.btns.y = 0;
	}
});


gamepad.on("press", "shoulder_top_left", e => {
	settings.currentInputMode = "controller";
	controller.btns.l = 1;
});
gamepad.on("release", "shoulder_top_left", e => {
	settings.currentInputMode = "controller";
	controller.btns.l = 0;
});

gamepad.on("press", "shoulder_top_right", e => {
	settings.currentInputMode = "controller";
	controller.btns.r = 1;
});
gamepad.on("release", "shoulder_top_right", e => {
	settings.currentInputMode = "controller";
	controller.btns.r = 0;
});

gamepad.on("press", "shoulder_bottom_left", e => {
	settings.currentInputMode = "controller";
	controller.btns.zl = 1;
});
gamepad.on("release", "shoulder_bottom_left", e => {
	settings.currentInputMode = "controller";
	controller.btns.zl = 0;
});

gamepad.on("press", "shoulder_bottom_right", e => {
	settings.currentInputMode = "controller";
	controller.btns.zr = 1;
});
gamepad.on("release", "shoulder_bottom_right", e => {
	settings.currentInputMode = "controller";
	controller.btns.zr = 0;
});

gamepad.on("press", "select", e => {
	settings.currentInputMode = "controller";
	controller.btns.minus = 1;
});
gamepad.on("release", "select", e => {
	settings.currentInputMode = "controller";
	controller.btns.minus = 0;
});
gamepad.on("press", "start", e => {
	settings.currentInputMode = "controller";
	controller.btns.plus = 1;
});
gamepad.on("release", "start", e => {
	settings.currentInputMode = "controller";
	controller.btns.plus = 0;
});



gamepad.on("press", "d_pad_up", e => {
	settings.currentInputMode = "controller";
	if (settings.dpadSwap) {
		controller.btns.left = 1;
	} else {
		controller.btns.up = 1;
	}
});
gamepad.on("release", "d_pad_up", e => {
	settings.currentInputMode = "controller";
	if (settings.dpadSwap) {
		controller.btns.left = 0;
	} else {
		controller.btns.up = 0;
	}
});

gamepad.on("press", "d_pad_down", e => {
	settings.currentInputMode = "controller";
	if (settings.dpadSwap) {
		controller.btns.right = 1;
	} else {
		controller.btns.down = 1;
	}
});
gamepad.on("release", "d_pad_down", e => {
	settings.currentInputMode = "controller";
	if (settings.dpadSwap) {
		controller.btns.right = 0;
	} else {
		controller.btns.down = 0;
	}
});

gamepad.on("press", "d_pad_left", e => {
	settings.currentInputMode = "controller";
	controller.btns.left = 1;
});
gamepad.on("release", "d_pad_left", e => {
	settings.currentInputMode = "controller";
	controller.btns.left = 0;
});

gamepad.on("press", "d_pad_right", e => {
	settings.currentInputMode = "controller";
	controller.btns.right = 1;
});
gamepad.on("release", "d_pad_right", e => {
	settings.currentInputMode = "controller";
	controller.btns.right = 0;
});

gamepad.on("hold", "stick_axis_left", e => {
	settings.currentInputMode = "controller";
	let x = e.value[0] * settings.stickSensitivityX;
	let y = e.value[1] * settings.stickSensitivityY;
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.LStick.x = parseInt(x);
	controller.LStick.y = parseInt(y);
	let thresh = parseInt($("#deadzone").text());
	if (Math.abs(restPos - controller.LStick.x) < thresh) {
		controller.LStick.x = restPos;
	}
	if (Math.abs(restPos - controller.LStick.y) < thresh) {
		controller.LStick.y = restPos;
	}
});
gamepad.on("press", "stick_axis_left", e => {
	settings.currentInputMode = "controller";
	let x = e.value[0] * settings.stickSensitivityX;
	let y = e.value[1] * settings.stickSensitivityY;
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.LStick.x = parseInt(x);
	controller.LStick.y = parseInt(y);
	let thresh = parseInt($("#deadzone").text());
	if (Math.abs(restPos - controller.LStick.x) < thresh) {
		controller.LStick.x = restPos;
	}
	if (Math.abs(restPos - controller.LStick.y) < thresh) {
		controller.LStick.y = restPos;
	}
});
gamepad.on("release", "stick_axis_left", e => {
	settings.currentInputMode = "controller";
	let x = e.value[0] * settings.stickSensitivityX;
	let y = e.value[1] * settings.stickSensitivityY;
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.LStick.x = parseInt(x);
	controller.LStick.y = parseInt(y);
	let thresh = parseInt($("#deadzone").text());
	if (Math.abs(restPos - controller.LStick.x) < thresh) {
		controller.LStick.x = restPos;
	}
	if (Math.abs(restPos - controller.LStick.y) < thresh) {
		controller.LStick.y = restPos;
	}
});
gamepad.on("hold", "stick_axis_right", e => {
	settings.currentInputMode = "controller";
	let x = e.value[0] * settings.stickSensitivityX;
	let y = e.value[1] * settings.stickSensitivityY;
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.RStick.x = parseInt(x);
	controller.RStick.y = parseInt(y);
	let thresh = parseInt($("#deadzone").text());
	if (Math.abs(restPos - controller.RStick.x) < thresh) {
		controller.RStick.x = restPos;
	}
	if (Math.abs(restPos - controller.RStick.y) < thresh) {
		controller.RStick.y = restPos;
	}
});
gamepad.on("press", "stick_axis_right", e => {
	settings.currentInputMode = "controller";
	let x = e.value[0] * settings.stickSensitivityX;
	let y = e.value[1] * settings.stickSensitivityY;
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.RStick.x = parseInt(x);
	controller.RStick.y = parseInt(y);
	let thresh = parseInt($("#deadzone").text());
	if (Math.abs(restPos - controller.RStick.x) < thresh) {
		controller.RStick.x = restPos;
	}
	if (Math.abs(restPos - controller.RStick.y) < thresh) {
		controller.RStick.y = restPos;
	}
});
gamepad.on("release", "stick_axis_right", e => {
	settings.currentInputMode = "controller";
	let x = e.value[0] * settings.stickSensitivityX;
	let y = e.value[1] * settings.stickSensitivityY;
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.RStick.x = parseInt(x);
	controller.RStick.y = parseInt(y);
	let thresh = parseInt($("#deadzone").text());
	if (Math.abs(restPos - controller.RStick.x) < thresh) {
		controller.RStick.x = restPos;
	}
	if (Math.abs(restPos - controller.RStick.y) < thresh) {
		controller.RStick.y = restPos;
	}
});

gamepad.on("press", "stick_button_left", e => {
	settings.currentInputMode = "controller";
	controller.btns.stick_button = 1;
});
gamepad.on("release", "stick_button_left", e => {
	settings.currentInputMode = "controller";
	controller.btns.stick_button = 0;
});
gamepad.on("press", "stick_button_right", e => {
	settings.currentInputMode = "controller";
	controller.btns.stick_button2 = 1;
});
gamepad.on("release", "stick_button_right", e => {
	settings.currentInputMode = "controller";
	controller.btns.stick_button2 = 0;
});


function getGamepadInput() {

	if (!$("#controllerControlsCheckbox")[0].checked) {
		return;
	}
	authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
	if (authCookie == null) {
		$("#controllerControlsCheckbox").prop("checked", false).trigger("change");
		swal({
			title: "You need to login! Redirecting you now!",
		}).then((result) => {
			if (result.value) {
				window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
			}
		});
		return;
	} else {
		authCookie = authCookie.split(" ")[0].replace(/;/g, "");
	}
}



/* SAVABLE SETTINGS */

// restore preferences:
$(document).ready(function() {

	console.log("restoring preferences");

	// check if new:
	localforage.getItem("new").then(function(value) {
		if (value != "new") {
			$("#tutorialWindow").modal();
		}
		localforage.setItem("new", "new");
	});

	// check for ads:
// 	localforage.getItem("ads").then(function(value) {
// 		if (value != "ads") {
// 			if (typeof canRunAds == "undefined") {
// 				console.log("test");
// 				swal({
// 					title: "Disable your adblocker! or don\'t ¯\\_(ツ)_/¯ This message won't appear again!",
// 				});
// 			}
// 		}
// 		localforage.setItem("ads", "ads");
// 	});

	// Get stored preferences
	localforage.getItem("settings").then(function(value) {
		// If they exist, write them
		if (typeof value != "undefined") {
			settings = Object.assign({}, settings, JSON.parse(value));
		}
		// Store the preferences (so that the default values get stored)
		localforage.setItem("settings", JSON.stringify(settings));

		// debug:
		console.log(settings);

		if (settings.tab != 1) {
			$("#tab" + settings.tab).trigger("click");
		}
		if (settings.tab == 1) {
			switchTabs("#lagless1");
		}
		addJoyCons("#lagless" + settings.tab);

		rebindUnbindTouchControls();
		clearAndReplaceProfiles();
		setKeyboardMapperClasses();

		setTimeout(drawJoyCons, 2000);

		if (settings.keyboardControls) {
			$("#keyboardControlsCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.controllerControls) {
			$("#controllerControlsCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.touchControls) {
			$("#touchControlsCheckbox").prop("checked", true).trigger("change");
		}
// 		if (settings.mouseControls) {
// 			$("#mouseControlsCheckbox").prop("checked", true).trigger("change");
// 		}
		if (settings.analogStickMode) {
			$("#analogStickCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.dpadSwap) {
			$("#dpadCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.TDSConfig) {
			$("#3DSCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.enableAudioThree) {
			$("#enableAudioThreeCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.enableAudioThree && settings.audioThree) {
			$("#audioThreeCheckbox").prop("checked", true).trigger("change");
		}

		if (settings.darkTheme) {
			$("#darkThemeCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.fullscreen) {
			$("#fullscreenCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.largescreen) {
			$("#largescreenCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.youtubeChat) {
			$("#youtubeChatCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.hideChat) {
			$("#hideChatCheckbox").prop("checked", true).trigger("change");
		}
		if (settings.hideNav) {
			$("#navCheckbox").prop("checked", true).trigger("change");
		}

		$("#deadzoneSlider").slider("value", settings.deadzone);
		$("#deadzone").text(settings.deadzone);

		$("#stickSensitivitySlider").slider("value", settings.stickSensitivityX);
		$("#sensitivity").text(settings.stickSensitivityX);

		$("#stickAttackSlider").slider("value", settings.stickAttack);
		$("#attack").text(settings.stickAttack);

		$("#stickReturnSlider").slider("value", settings.stickReturn);
		$("#return").text(settings.stickReturn);

		// volume:
		$("#laglessVolume").slider("value", settings.volume);
		setTimeout(function() {
			try {
				player.volume = settings.volume / 100;// doesn't update automatically :/
			} catch (error) {
			}
			try {
				audio.volume = settings.volume / 100;// doesn't update automatically :/
			} catch (error) {
			}
		}, 2000);
		$(".audioThreeCheckbox").prop("checked", $("#audioThreeCheckbox").prop("checked"));

		/* AUTH  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
		if (authCookie != null) {
			authCookie = authCookie.split(" ")[0].replace(/;/g, "");
			socket.emit("registerAccount", {auth: authCookie, usernameIndex: settings.usernameIndex});
			$("#authenticateButton").remove();
		} else {
			// replace with twitch until signed in:
			replaceWithTwitch("#lagless" + settings.tab);
			$("#tab1").addClass("disabled");
			$("#tab3").addClass("disabled");
			$("#tab4").addClass("disabled");
			// remove the logout button:
			$("#logout").remove();
// 			$("#loggedInStatus").css("width", "100%");
// 			$("#loggedInStatus").text("Not logged in.");
			$("#loggedInStatus").remove();

			$(".disabled").on("click", function() {
				swal("You need to sign in first!");
			});
		}

		// fit text:
// 		fitText(".requestTurn", 1.5, { minFontSize: "10px", maxFontSize: "20px" });
// 		fitText(".cancelTurn", 1.5, { minFontSize: "10px", maxFontSize: "20px" });
// 		fitText(".list-group-item", 1.5, { minFontSize: "10px", maxFontSize: "20px" });
// // 		fitText("#loggedInIndicator", 2.5, { minFontSize: "10px", maxFontSize: "20px" });

// 		fitText("#lButton", 0.5, { minFontSize: "10px", maxFontSize: "20px" });
// 		fitText("#zlButton", 0.5, { minFontSize: "10px", maxFontSize: "20px" });
// 		fitText("#rButton", 0.5, { minFontSize: "10px", maxFontSize: "20px" });
// 		fitText("#zrButton", 0.5, { minFontSize: "10px", maxFontSize: "20px" });

// 		fitText(".collapseButton", 0.2, { minFontSize: "10px", maxFontSize: "16px" });

// 		fitText(".resolutionButton", 0.2, { minFontSize: "8px", maxFontSize: "16px" });
// 		fitText(".fpsButton", 0.25, { minFontSize: "8px", maxFontSize: "16px" });


// 		resizers.push(textFitPercent({selector: "#lagless2KeyboardDropdown", percentWidth: 20, isFirstChild: true, parent: "#lagless2Bar"}));

// 		resizers.push(textFitPercent({
// 			selector: ".keyboardDropdown",
// 			parent: ".laglessBar",
// 			percentWidth: 20,
// 			isFirstChild: true,
// 			isClass: true,
// 			maxTries: 20,
// 			increment: 0.2,
// 		}));

		resizers.push(textFitPercent({
			selector: "#lagless2KeyboardDropdown",
			parent: "#lagless2Bar",
			percentWidth: 20,
			isFirstChild: true,
			isClass: true,
			maxTries: 20,
			increment: 0.2,
		}));

		resizers.push(textFitPercent({
			selector: "#lagless2ViewerDropdown",
			parent: "#lagless2Bar",
			percentWidth: 12,
			isFirstChild: true,
			maxTries: 20,
			increment: 0.2,
			maxFontSize: 20,
		}));


		resizers.push(textFitPercent({
			selector: "#lagless2Refresh",
			parent: "#lagless2Bar",
			percentWidth: 8,
// 			isFirstChild: true,
			maxTries: 20,
			increment: 0.2,
			accuracy: 5,
			maxFontSize: 30,
		}));

		resizers.push(textFitPercent({
			selector: "#lagless2KeyboardSettings",
			parent: "#lagless2Bar",
			percentWidth: 8,
// 			isFirstChild: true,
			maxTries: 20,
			increment: 0.2,
			accuracy: 5,
			maxFontSize: 30,
		}));

		resizers.push(textFitPercent({
			selector: "#hidePlayers",
			parent: "#playersContainer",
			percentWidth: 5,
// 			isFirstChild: true,
			maxTries: 20,
			increment: 0.2,
			accuracy: 5,
			maxFontSize: 20,
		}));

		for (let i = 0; i < resizers.length; i++) {
			resizers[i].resize();
		}

// 		setTimeout(resizeChat, 2000);


		// wait a little longer so the joycon images load:
		setTimeout(function() {
			$("body").addClass("loaded");
			// after animation is done:
			setTimeout(function() {
				$(".loaded #loader-wrapper")[0].style.visibility = "hidden";
			}, 500);
		}, 1000);

		/* DISCORD EMBED */
// 		crate = new Crate({
// 			server: "433874668534104065",
// 			channel: "487328538173767692",
// 			shard: "https://cl2.widgetbot.io",
// 		});

	});
});


function setKeyboardMapperClasses() {


}

$("#keyboard li").on("click", function(event) {

});

// https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters

function keyDownHandler(event) {

	keyDownHandler.element = keyDownHandler.element || "";

	let keyString = keycode(event);
	keyDownHandler.element.text(keyString);

	let buttonKey = keyDownHandler.element.attr("id").slice(0, -3);
	keyboardLayout[buttonKey] = keyString;



	document.removeEventListener("keydown", keyDownHandler, false);
}


$("#keyboardConfigKeys li").on("click", function(event) {

	let self = $(this);

	$(this).effect("highlight", {}, 2000);

	document.removeEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keydown", keyDownHandler, false);

	keyDownHandler.element = self;
});



$("#resetBindings").on("click", function(event) {

});

$("#defaultBindings").on("click", function(event) {
	keyboardLayout.tempSelectedAction = "";
	keyboardLayout.tempSelectedKey = "";
	keyboardLayout.LU = "W";
	keyboardLayout.LD = "S";
	keyboardLayout.LL = "A";
	keyboardLayout.LR = "D";
	keyboardLayout.RU = "I";
	keyboardLayout.RD = "K";
	keyboardLayout.RL = "J";
	keyboardLayout.RR = "L";
	keyboardLayout.ABtn = "right";
	keyboardLayout.BBtn = "down";
	keyboardLayout.XBtn = "up";
	keyboardLayout.YBtn = "left";
	keyboardLayout.DUp = "T";
	keyboardLayout.DDown = "G";
	keyboardLayout.DLeft = "F";
	keyboardLayout.DRight = "H";
	keyboardLayout.LStick = "R";
	keyboardLayout.RStick = "Y";
	keyboardLayout.LBtn = "U";
	keyboardLayout.ZL = "Q";
	keyboardLayout.RBtn = "O";
	keyboardLayout.ZR = "E";
	keyboardLayout.Minus = "-";
	keyboardLayout.Plus = "=";
	keyboardLayout.Capture = "1";
	keyboardLayout.Home = "2";
	setKeyboardMapperClasses();
});


/* KEYBOARD PROFILES */

$("#createProfile").on("click", function(event) {
	event.preventDefault();
	let profileName = $("#profileName").val();
	if (profileName === "") {
		swal("The profile name cannot be empty!", "", "error");
		return;
	} else {
		settings.keyboardProfiles[profileName] = keyboardLayout;
		localforage.setItem("settings", JSON.stringify(settings));
		clearAndReplaceProfiles();
		swal("Profile created successfully!", "", "success");
	}
	$("#profileName").val("");
});

$("#deleteProfiles").on("click", function(event) {
	event.preventDefault();
	settings.keyboardProfiles = {};
	localforage.setItem("settings", JSON.stringify(settings));
	swal("Profiles deleted successfully!", "", "success");
});

function clearAndReplaceProfiles() {
	// clear the dropdown menu
	$(".keyboard-dropdown-menu").children().remove();
	// fill it with profiles:
	for (let key in settings.keyboardProfiles) {
		let optionHTML = "<button class='keyboard-dropdown-item'" + " config='" + JSON.stringify(settings.keyboardProfiles[key]) + "'>" + key + "</button>";
		$(".keyboard-dropdown-menu").append(optionHTML);
	}

	$(".keyboard-dropdown-item").on("click", function(event) {
		let configName = $(event.target).text();
		$("#dropdownMenuLink").text(configName);
		keyboardLayout = JSON.parse($(event.target).attr("config"));
		setKeyboardMapperClasses();
	});
}



let leftJoyConImage;
let rightJoyConImage;


/* TOUCH CONTROLS */
function drawJoyCons() {
	let leftJoyConCanvas = $("#leftJoyConCanvas")[0];
	leftJoyConCanvas.width = 500;
	leftJoyConCanvas.height = 500;
	let leftJoyConCtx = leftJoyConCanvas.getContext("2d");
	/*let */leftJoyConImage = new Image();
	leftJoyConImage.onload = function() {
		let imgWidth = leftJoyConImage.width;
		let imgHeight = leftJoyConImage.height;
		let canvasWidth = leftJoyConCanvas.width;
		let canvasHeight = leftJoyConCanvas.height;
		let ratio = (imgHeight / imgWidth);
		let canvasRatio = canvasWidth / canvasHeight;
		let ratioW = 500 / $("#leftJoyConCanvas").innerWidth();
		let ratioH = 500 / $("#leftJoyConCanvas").innerHeight();
		let cWidth = $("#leftJoyConCanvas").innerWidth();
		leftJoyConCtx.clearRect(0, 0, canvasWidth, canvasHeight);
		leftJoyConCtx.drawImage(leftJoyConImage, 0, 0, cWidth * ratioW, cWidth * ratio * ratioH);
	};
	leftJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/leftJoyCon2.png";

	let rightJoyConCanvas = $("#rightJoyConCanvas")[0];
	rightJoyConCanvas.width = 500;
	rightJoyConCanvas.height = 500;
	let rightJoyConCtx = rightJoyConCanvas.getContext("2d");
	/*let */rightJoyConImage = new Image();
	rightJoyConImage.onload = function() {
		let imgWidth = rightJoyConImage.width;
		let imgHeight = rightJoyConImage.height;
		let canvasWidth = rightJoyConCanvas.width;
		let canvasHeight = rightJoyConCanvas.height;
		let ratio = (imgHeight / imgWidth);
		let canvasRatio = canvasWidth / canvasHeight;
		let ratioW = 500 / $("#rightJoyConCanvas").innerWidth();
		let ratioH = 500 / $("#rightJoyConCanvas").innerHeight();
		let cWidth = $("#rightJoyConCanvas").innerWidth();
		rightJoyConCtx.clearRect(0, 0, canvasWidth, canvasHeight);
		rightJoyConCtx.drawImage(rightJoyConImage, 0, 0, cWidth * ratioW, cWidth * ratio * ratioH);
	};
	rightJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/rightJoyCon2.png";
}

function setVideoWidth(width) {
	if (typeof $("#videoCanvas1")[0] != "undefined") {
		$("#videoCanvas1")[0].style.width = width + "%";
		$("#videoCanvas1")[0].style["margin-left"] = ((100-width)/2) + "%";
	}
	if (typeof $("#videoCanvas2")[0] != "undefined") {
		$("#videoCanvas2")[0].style.width = width + "%";
		$("#videoCanvas2")[0].style["margin-left"] = ((100-width)/2) + "%";
	}
	if (typeof $("#videoCanvas3")[0] != "undefined") {
		$("#videoCanvas3")[0].style.width = width + "%";
		$("#videoCanvas3")[0].style["margin-left"] = ((100-width)/2) + "%";
	}
	if (typeof $("#videoCanvas4")[0] != "undefined") {
		$("#videoCanvas4")[0].style.width = width + "%";
		$("#videoCanvas4")[0].style["margin-left"] = ((100-width)/2) + "%";
	}
	if (typeof $("#videoCanvas5")[0] != "undefined") {
		$("#videoCanvas5")[0].style.width = width + "%";
		$("#videoCanvas5")[0].style["margin-left"] = ((100-width)/2) + "%";
	}

	if (typeof $("#twitchVideo")[0] != "undefined") {
		$("#twitchVideo")[0].style.width = width + "%";
		$("#twitchVideo")[0].style["margin-left"] = ((100-width)/2) + "%";
		// calculate height for twitch:
// 		let containerWidth = $("#lagless1Container").width() + $("#lagless2Container").width() + $("#lagless3Container").width() + $("#lagless4Container").width() + $("#lagless5Container").width();
// 		$("#twitchVideo")[0].style.height = (width/100) * (9/16) * containerWidth;
		$("#twitchVideo")[0].style.height = $("#twitchVideo").width() * (9/16);
	}
	if (typeof $(".twitchVideo")[0] != "undefined") {
		$(".twitchVideo")[0].style.width = width + "%";
		$(".twitchVideo")[0].style["margin-left"] = ((100-width)/2) + "%";
		// calculate height for twitch:
// 		let containerWidth = $("#lagless1Container").width() + $("#lagless2Container").width() + $("#lagless3Container").width() + $("#lagless4Container").width() + $("#lagless5Container").width();
// 		$(".twitchVideo")[0].style.height = (width/100) * (9/16) * containerWidth;
		$("#twitchVideo")[0].style.height = $("#twitchVideo").width() * (9/16);
	}

	$("#rightJoyCon")[0].style["margin-left"] = (width) + ((100-width)/2) + "%";
	$("#leftJoyCon")[0].style.width = ((100-width)/2) + "%";
	$("#rightJoyCon")[0].style.width = ((100-width)/2) + "%";
	leftJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/leftJoyCon2.png";
	rightJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/rightJoyCon2.png";
}

function resizeChat() {
// 	let height = 0;
// 	height += $(".videoCanvas").addUp($.fn.outerHeight);
// // 	height += $(".laglessBar").addUp($.fn.outerHeight);
// 	height += ($("#navTabs").outerHeight());
// 	height -= ($("#loggedInContainer").outerHeight());
// 	height += 10;// adjust
// 	$("#chat").height(height);
}

/* JOYSTICKS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
let leftJoyStick = {
	zone: document.querySelector("#leftStick"),
	mode: "static",
	catchDistance: 10,
	color: "#FF3C28",
	position: {left: "50%", top: "50%"},
	size: 60,
};
let rightJoyStick = {
	zone: document.querySelector("#rightStick"),
	mode: "static",
	catchDistance: 10,
	color: "#0AB9E6",
	position: {left: "50%", top: "50%"},
	size: 60,
};

let leftStick;
let rightStick;

function bindJoysticks() {
	let stickSize = 60;
	let s1 = stickSize;
	let s2 = stickSize/2;
	leftStick.on("start", function(evt, data) {
		let pos = data.frontPosition;
		pos.x = parseInt(((pos.x + s2) / s1) * 255);
		pos.y = parseInt(((pos.y + s2) / s1) * 255);
		pos.y = 255 - pos.y;
		controller.LStick.x = pos.x;
		controller.LStick.y = pos.y;
	}).on("end", function(evt, data) {
		controller.LStick.x = restPos;
		controller.LStick.y = restPos;
	}).on("move", function(evt, data) {
		let pos = data.instance.frontPosition;
		pos.x = parseInt(((pos.x + s2) / s1) * 255);
		pos.y = parseInt(((pos.y + s2) / s1) * 255);
		pos.y = 255 - pos.y;
		controller.LStick.x = pos.x;
		controller.LStick.y = pos.y;
	})

	rightStick.on("start", function(evt, data) {
		let pos = data.frontPosition;
		pos.x = parseInt(((pos.x + s2) / s1) * 255);
		pos.y = parseInt(((pos.y + s2) / s1) * 255);
		pos.y = 255 - pos.y;
		controller.RStick.x = pos.x;
		controller.RStick.y = pos.y;
	}).on("end", function(evt, data) {
		controller.RStick.x = restPos;
		controller.RStick.y = restPos;
	}).on("move", function(evt, data) {
		let pos = data.instance.frontPosition;
		pos.x = parseInt(((pos.x + s2) / s1) * 255);
		pos.y = parseInt(((pos.y + s2) / s1) * 255);
		pos.y = 255 - pos.y;
		controller.RStick.x = pos.x;
		controller.RStick.y = pos.y;
	})
}
// leftStick = nipplejs.create(leftJoyStick);
// rightStick = nipplejs.create(rightJoyStick);
// bindJoysticks();


function getTouchInput() {
	if (!$("#touchControlsCheckbox")[0].checked) {
		return;
	}
// 	authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
// 	if (authCookie == null) {
// 		$("#touchControlsCheckbox").prop("checked", false).trigger("change");
// 		swal({
// 			title: "You need to login! Redirecting you now!",
// 		}).then((result) => {
// 			if (result.value) {
// 				window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
// 			}
// 		});
// 		return;
// 	} else {
// 		authCookie = authCookie.split(" ")[0].replace(/;/g, "");
// 	}
	//controller.reset();
}


function onButtonPress(event) {

	event.preventDefault();

	settings.currentInputMode = "touch";

	if (!$("#touchControlsCheckbox")[0].checked) {return;}
	if (event.target.id == null) {return;}
	if (event.target.id == "dpadButtons" || event.target.id == "abxyButtons") {return;}

	let value = 0;
	if (event.type == "mousedown" || event.type == "touchstart" || event.type == "pointerdown") {
		value = 1;
		//swal("touchstart");
	} else if (event.type == "mouseup" || event.type == "mouseleave" || event.type == "touchend" || event.type == "pointerup" || event.type == "pointerout") {
		value = 0;
		//swal("touchend");
	} else if (event.type == "touchmove") {
		// todo: make an equivalent to mouseleave since touchleave doesn't exist :/
	}


	let button = event.target.id;

	let oldState = JSON.stringify(controller);

	switch(button) {
		case "upButton":
			controller.btns.up = value;
			break;
		case "downButton":
			controller.btns.down = value;
			break;
		case "leftButton":
			controller.btns.left = value;
			break;
		case "rightButton":
			controller.btns.right = value;
			break;
		case "aButton":
			controller.btns.a = value;
			break;
		case "bButton":
			controller.btns.b = value;
			break;
		case "xButton":
			controller.btns.x = value;
			break;
		case "yButton":
			controller.btns.y = value;
			break;

		case "lButton":
			controller.btns.l = value;
			break;
		case "zlButton":
			controller.btns.zl = value;
			break;
		case "rButton":
			controller.btns.r = value;
			break;
		case "zrButton":
			controller.btns.zr = value;
			break;

		case "minusButton":
			controller.btns.minus = value;
			break;
		case "captureButton":
			controller.btns.capture = value;
			break;

		case "plusButton":
			controller.btns.plus = value;
			break;
		case "homeButton":
			controller.btns.home = value;
			break;
	}

	let newState = JSON.stringify(controller);

	if (newState == oldState) {
		return;
	}

	if(controlQueue1.indexOf(myUniqueID) == -1) {
		socket.emit("requestTurn", currentPlayerChosen);
		let html = '<button id="cancelTurn' + (currentPlayerChosen + 1) + '" class="cancelTurn btn btn-secondary" code="' + currentPlayerChosen + '">Leave Queue</button>';
		$("#requestTurn" + (currentPlayerChosen + 1)).replaceWith(html);
	}
}

function rebindUnbindTouchControls() {
	let buttonsList = ["#dpadButtons", "#abxyButtons", "#leftJoyConOther", "#rightJoyConOther"];

	if (settings.touchControls) {

		try {
			$("#leftJoyCon")[0].style.display = "";
			$("#rightJoyCon")[0].style.display = "";
			setVideoWidth(73.2);
		} catch(error) {
		}

		for (let i = 0; i < buttonsList.length; i++) {
			$(buttonsList[i]).bind("touchstart", onButtonPress);
			$(buttonsList[i]).bind("touchmove", onButtonPress);
			$(buttonsList[i]).bind("touchend", onButtonPress);
			$(buttonsList[i]).bind("mousedown", onButtonPress);
			$(buttonsList[i]).bind("mouseup", onButtonPress);
			$(buttonsList[i]).bind("mouseleave", onButtonPress);
			$(buttonsList[i]).bind("pointerdown", onButtonPress);
			$(buttonsList[i]).bind("pointerup", onButtonPress);
			$(buttonsList[i]).bind("pointerout", onButtonPress);
		}

	} else {

		try {
			$("#leftJoyCon")[0].style.display = "none";
			$("#rightJoyCon")[0].style.display = "none";
		} catch(error) {
		}

		for (let i = 0; i < buttonsList.length; i++) {
			$(buttonsList[i]).unbind("touchstart", onButtonPress);
			$(buttonsList[i]).unbind("touchmove", onButtonPress);
			$(buttonsList[i]).unbind("touchend", onButtonPress);
			$(buttonsList[i]).unbind("mousedown", onButtonPress);
			$(buttonsList[i]).unbind("mouseup", onButtonPress);
			$(buttonsList[i]).unbind("mouseleave", onButtonPress);
			$(buttonsList[i]).unbind("pointerdown", onButtonPress);
			$(buttonsList[i]).unbind("pointerup", onButtonPress);
			$(buttonsList[i]).unbind("pointerout", onButtonPress);
		}

	}
}


$("#touchControlsCheckbox").on("change", function() {
// 	console.log("checked touch controls")
	settings.touchControls = $("#touchControlsCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));

	if (settings.largescreen) {
		$("#largescreenCheckbox").prop("checked", false);
		settings.largescreen = false;
		localforage.setItem("settings", JSON.stringify(settings));
	}
	rebindUnbindTouchControls();
});

function sendInputs() {
	if(!isMobile) {
		getKeyboardInput();
		getGamepadInput();
	}
	getTouchInput();
	sendControllerState();
}
sendInputTimer = setInterval(sendInputs, 1000/120);


/* AUTHENTICATION */

setInterval(function() {
	if (authCookie != null) {
		socket.emit("registerAccount", {auth: authCookie, usernameIndex: settings.usernameIndex});
// 		$("#authenticateButton").remove();
	}
}, 5000);

socket.on("accountInfo", function(data) {
	myUniqueID = data.uniqueID;
	myConnectedAccounts = data.connectedAccounts;

	let usernameChanged = (JSON.stringify(myUsername) !== JSON.stringify(data.username));
	myUsername = data.username;

	let usernamesChanged = (JSON.stringify(myValidUsernames) !== JSON.stringify(data.validUsernames));
	myValidUsernames = data.validUsernames;

// 	let loggedInText = '<span class="align-self-center">Logged in as: ' + myValidUsernames[settings.usernameIndex] + "</span>";
// 	$("#loggedInStatus").html(loggedInText);
	if (usernamesChanged) {
		for (let i = 0; i < data.validUsernames.length; i++) {
			let html = '<button class="username-dropdown-item dropdown-item">' + data.validUsernames[i] + "</button>";
			$("#usernameDropdownDiv").append(html);
		}
	}

	if (usernameChanged) {
		$("#usernameDropdownMenuLink").text(myUsername);
	}

	if (myConnectedAccounts.indexOf("twitch") > -1) {
		$("#connectWithTwitch").remove();
	}
	if (myConnectedAccounts.indexOf("google") > -1) {
		$("#connectWithGoogle").remove();
	}
	if (myConnectedAccounts.indexOf("youtube") > -1) {
		$("#connectWithYoutube").remove();
	}
	if (myConnectedAccounts.indexOf("discord") > -1) {
		$("#connectWithDiscord").remove();
	}
	if (myConnectedAccounts.length == 4) {
		$("#loggedInIndicator").remove();
	}
});

socket.on("usernameMap", function(data) {
	usernameMap = data;
});

$("#logout").on("click", function(event) {
	tools.deleteAllCookies();
	location.reload(true);
});

$(document).on("click", ".username-dropdown-item", function(event) {
	let username = $(event.target).text();
	let index = $(event.target).index();
	$("#usernameDropdownMenuLink").text(username);
	settings.usernameIndex = index;
	localforage.setItem("settings", JSON.stringify(settings));
});

socket.on("needToSignIn", function() {
	swal("You need to sign in!");
	setTimeout(function() {
		tools.deleteAllCookies();
		location.reload(true);
	}, 1000);
});

function connectAccountOrSignIn(type) {
	let url = "https://twitchplaysnintendoswitch.com/8110/auth/" + type + "/";
	if (authCookie != null) {
		url += "?uniqueToken=" + authCookie;
	}
	window.location.href = url;
}

$("#connectWithTwitchButton").on("click", function(event) {
	connectAccountOrSignIn("twitch");
});
$("#connectWithGoogleButton").on("click", function(event) {
	connectAccountOrSignIn("google");
});
$("#connectWithYoutubeButton").on("click", function(event) {
	connectAccountOrSignIn("youtube");
});
$("#connectWithDiscordButton").on("click", function(event) {
	connectAccountOrSignIn("discord");
});


setTimeout(function() {
	if (!loaded) {
		loaded = true;
		$.ajax({
			url: "https://twitchplaysnintendoswitch.com/accountData/" + myUniqueID + "/" + authCookie,
		});
	}
}, 5000);



/* STREAM SETTINGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

// prevent arrow keys from messing with the slider:
// https://stackoverflow.com/questions/2922174/jquery-ui-slider-how-to-disable-keyboard-input
$.prototype.slider_old = $.prototype.slider;
$.prototype.slider = function() {
	let result = $.prototype.slider_old.apply(this, arguments);
	this.find(".ui-slider-handle").unbind("keydown"); // disable keyboard actions
	return result;
}


$("#laglessVolume").slider({
    min: 0,
    max: 100,
    value: 0,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		settings.volume = ui.value;
		localforage.setItem("settings", JSON.stringify(settings));
		if (!settings.audioThree) {
			player.volume = settings.volume / 100;
		} else {
			audio.volume = settings.volume / 100;
		}
		$("#laglessVolume").slider("value", settings.volume);
		$("#laglessVolume span").text(settings.volume);
  	}
});

$("#laglessVolumeSlider").children().first().on("click", function(){
	settings.volume = 0;
	$("#laglessVolume").slider("value", 0);
	if (!settings.audioThree) {
		player.volume = 0;
	} else {
		audio.volume = 0;
	}
});

$("#laglessVolumeSlider").children().last().on("click", function(){
	settings.volume = 100;
	$("#laglessVolume").slider("value", 100);
	if (!settings.audioThree) {
		player.volume = 1;
	} else {
		audio.volume = 1;
	}
});

$("#qualitySlider").slider({
    min: 20,
    max: 80,
	step: 1,
    value: 70,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#quality").text(ui.value);
		socket.emit("lagless1Settings", {quality: parseInt(ui.value)});
  	},
	stop: function(event, ui) {
	}
});

$("#scaleSlider").slider({
    min: 10,
    max: 80,
	step: 5,
    value: 30,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#scale").text(ui.value);
		socket.emit("lagless1Settings", {scale: parseInt(ui.value)});
  	},
	stop: function(event, ui) {
	}
});

$("#fpsSlider").slider({
    min: 1,
    max: 25,
	step: 1,
    value: 15,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#fps").text(ui.value);
		socket.emit("lagless1Settings", {fps: parseInt(ui.value)});
  	},
	stop: function(event, ui) {
	}
});


$("#deadzoneSlider").slider({
    min: 1,
    max: 100,
	step: 1,
    value: 50,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#deadzone").text(ui.value);
  	},
	stop: function(event, ui) {
	}
});

$("#stickSensitivitySlider").slider({
    min: 0,
    max: 3,
	step: 0.01,
    value: 1,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#sensitivity").text(ui.value);
		settings.stickSensitivityX = ui.value;
		settings.stickSensitivityY = ui.value;
  	},
	stop: function(event, ui) {
		localforage.setItem("settings", JSON.stringify(settings));
	}
});

$("#stickAttackSlider").slider({
    min: 0,
    max: 40,
	step: 0.1,
    value: 20,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#attack").text(ui.value);
		settings.stickAttack = ui.value;
  	},
	stop: function(event, ui) {
		localforage.setItem("settings", JSON.stringify(settings));
	}
});

$("#stickReturnSlider").slider({
    min: 0,
    max: 40,
	step: 0.1,
    value: 20,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#return").text(ui.value);
		settings.stickReturn = ui.value;
  	},
	stop: function(event, ui) {
		localforage.setItem("settings", JSON.stringify(settings));
	}
});

// $("#videoWidthSlider").slider({
//     min: 70,
//     max: 75,
// 	step: 0.001,
//     value: 73.2,
// 	range: "min",
// 	animate: true,
// 	slide: function(event, ui) {
// 		$("#videoWidth").text(ui.value);
// 		setVideoWidth(ui.value);
//   	},
// 	stop: function(event, ui) {
// // 		localforage.setItem("settings", JSON.stringify(settings));
// 	}
// });

socket.on("lagless1Settings", function(data) {
	lagless1Settings = Object.assign({}, lagless1Settings, data);
	$("#scale").text(lagless1Settings.scale);
	$("#scaleSlider").slider("value", lagless1Settings.scale);
	$("#quality").text(lagless1Settings.quality);
	$("#qualitySlider").slider("value", lagless1Settings.quality);
});


// lagless2:

$("#bitrateSlider2").slider({
    min: 0,
    max: 3,
	step: 0.05,
    value: 1,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#bitrate2").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless2Settings", {videoBitrate: parseFloat(ui.value)});
	}
});

$("#scaleSlider2").slider({
    min: 100,
    max: 960,
	step: 1,
    value: 960,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#scale2").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless2Settings", {scale: parseInt(ui.value)});
	}
});

$("#240p").on("click", function(event) {
	$("#scale2").text(240);
	$("#scaleSlider2").slider("value", 240);
	socket.emit("lagless2Settings", {scale: 240});
});
$("#360p").on("click", function(event) {
	$("#scale2").text(360);
	$("#scaleSlider2").slider("value", 360);
	socket.emit("lagless2Settings", {scale: 360});
});
$("#720p").on("click", function(event) {
	$("#scale2").text(720);
	$("#scaleSlider2").slider("value", 720);
	socket.emit("lagless2Settings", {scale: 720});
});
$("#960p").on("click", function(event) {
	$("#scale2").text(960);
	$("#scaleSlider2").slider("value", 960);
	socket.emit("lagless2Settings", {scale: 960});
});



$("#offsetXSlider2").slider({
    min:0,
    max: 600,
	step: 1,
    value: 0,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#offsetX2").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless2Settings", {offsetX: parseInt(ui.value)});
	}
});

$("#offsetYSlider2").slider({
    min:0,
    max: 300,
	step: 1,
    value: 0,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#offsetY2").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless2Settings", {offsetY: parseInt(ui.value)});
	}
});

$("#20fps").on("click", function(event) {
	$("#fps2").text(20);
	socket.emit("lagless2Settings", {framerate: 20});
});
$("#30fps").on("click", function(event) {
	$("#fps2").text(30);
	socket.emit("lagless2Settings", {framerate: 30});
});
$("#45fps").on("click", function(event) {
	$("#fps2").text(45);
	socket.emit("lagless2Settings", {framerate: 45});
});
$("#60fps").on("click", function(event) {
	$("#fps2").text(60);
	socket.emit("lagless2Settings", {framerate: 60});
});


socket.on("lagless2Settings", function(data) {
	lagless2Settings = Object.assign({}, lagless2Settings, data);

	$("#fps2").text(lagless2Settings.framerate);

	$("#bitrate2").text(lagless2Settings.videoBitrate);
	$("#bitrateSlider2").slider("value", lagless2Settings.videoBitrate);

	$("#scale2").text(lagless2Settings.scale);
	$("#scaleSlider2").slider("value", lagless2Settings.scale);

	$("#offsetX2").text(lagless2Settings.offsetX);
	$("#offsetXSlider2").slider("value", lagless2Settings.offsetX);

	$("#offsetY2").text(lagless2Settings.offsetY);
	$("#offsetYSlider2").slider("value", lagless2Settings.offsetY);
});

// lagless3:

// lagless4:
// lagless3:


// lagless5:

$("#bitrateSlider5").slider({
    min: 0,
    max: 2,
	step: 0.05,
    value: 1,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#bitrate5").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless5Settings", {videoBitrate: parseFloat(ui.value)});
	}
});

$("#scaleSlider5").slider({
    min: 100,
    max: 960,
	step: 1,
    value: 960,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#scale5").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless5Settings", {scale: parseInt(ui.value)});
	}
});

$("#offsetXSlider5").slider({
    min:0,
    max: 600,
	step: 1,
    value: 0,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#offsetX5").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless5Settings", {offsetX: parseInt(ui.value)});
	}
});

$("#offsetYSlider5").slider({
    min:0,
    max: 400,
	step: 1,
    value: 0,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#offsetY5").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless5Settings", {offsetY: parseInt(ui.value)});
	}
});

socket.on("lagless5Settings", function(data) {
	lagless5Settings = Object.assign({}, lagless5Settings, data);

	$("#scale5").text(lagless5Settings.scale);
	$("#scaleSlider5").slider("value", lagless5Settings.scale);

	$("#bitrate5").text(lagless5Settings.videoBitrate);
	$("#bitrateSlider5").slider("value", lagless5Settings.videoBitrate);

	$("#offsetX5").text(lagless5Settings.offsetX);
	$("#offsetXSlider5").slider("value", lagless5Settings.offsetX);

	$("#offsetY5").text(lagless5Settings.offsetY);
	$("#offsetYSlider5").slider("value", lagless5Settings.offsetY);
});


/* LAGLESS 1.0 */

let videoCanvas1 = $("#videoCanvas1")[0];
let videoCanvas1Context = videoCanvas1.getContext("2d");
videoCanvas1.width = 1280;
videoCanvas1.height = 720;

socket2.on("viewImage", function(data) {
	let src = "data:image/jpeg;base64," + data;
	if(src == "data:image/jpeg;base64,") {
		socket.emit("restart");
		return;
	}
	let image = new Image();
	image.style = "max-width:100%; height:auto;";
	image.onload = function() {
		let imgWidth = image.width;
		let imgHeight = image.height;
		let canvasWidth = videoCanvas1.width;
		let canvasHeight = videoCanvas1.height;
		let ratio = (imgHeight / imgWidth);
		let canvasRatio = canvasWidth / canvasHeight;
		let ratioW = 1280 / $("#videoCanvas1").innerWidth();
		let ratioH = 720 / $("#videoCanvas1").innerHeight();
		let cWidth = $("#videoCanvas1").innerWidth();
		videoCanvas1Context.clearRect(0, 0, canvasWidth, canvasHeight);
		videoCanvas1Context.drawImage(image, 0, 0, cWidth * ratioW, cWidth * ratio * ratioH);
	};
	image.src = src;
});
$("#lagless1Refresh").on("click", function() {
	socket.emit("restart1");
});

/* LAGLESS 2.0 */
// Setup the WebSocket connection and start the player
let url = "wss://twitchplaysnintendoswitch.com/" + lagless2Port + "/";
let canvas2 = $("#videoCanvas2")[0];
// Default 512*1024 (512kb).
// Default 128*1024 (128kb)
// let player = new JSMpeg.Player(url, {canvas: canvas2, video: true, audio: true, videoBufferSize: 256*1024, audioBufferSize: 128*1024, maxAudioLag: 0.5});
// player.maxAudioLag = 0.5;
// player.stop();

function resizeVideo2(scale) {
	let w = 960;
	let h = 540;
	let s = scale / 100;
	let newWidth = w * s;
	let newHeight = h * s;
	player.renderer.canvas.width = newWidth;
	player.renderer.canvas.height = newHeight;
	player.renderer.gl.viewport(0, 0, newWidth, newHeight);
}

// on settings change:
socket.on("lagless2SettingsChange", function(data) {
	try {
		player.destroy();
	} catch(error) {
	}
	player = new JSMpeg.Player(url, {canvas: canvas2, video: true, audio: /*!settings.audioThree*/true, videoBufferSize: videoBufferSize, audioBufferSize: audioBufferSize, maxAudioLag: 0.5});
	if (!settings.audioThree) {
		player.volume = settings.volume / 100;
	} else {
		player.volume = 0;
	}
});

//socket.emit("lagless2Settings", {videoBitrate: "2M", framerate: 20, scale: "640:360"});

$("#lagless2Refresh").on("click", function() {
	socket.emit("restart2");
});


/* LAGLESS 3.0 */
let canvas3 = $("#videoCanvas3")[0];
// Create h264 player
let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
let wsavc = new WSAvcPlayer(canvas3, "webgl", 1, 35);


$("#lagless3Refresh").on("click", function() {
	try {
		wsavc.disconnect();
	} catch(error) {
	}
	let uri = "wss://twitchplaysnintendoswitch.com/"+ lagless3Port + "/";
	wsavc.connect(uri);
});

$("#lagless3Refresh").on("click", function() {
	socket.emit("restart3");
});

/* LAGLESS 4.0 */
let canvas4 = $("#videoCanvas4")[0];
let videoPeer = new SimplePeer({
	initiator: false,
	trickle: true
});
videoPeer.on("error", function(err) {
	console.log("error", err)
});
videoPeer.on("signal", function(data) {
	console.log("SIGNAL", JSON.stringify(data));
	socket.emit("clientPeerSignalV", JSON.stringify(data));
});
videoPeer.on("connect", function() {
	console.log("CONNECT");
	videoPeer.send(Math.random());
});
videoPeer.on("data", function(data) {
	console.log("data: " + data)
});
socket.on("hostPeerSignalV", function(data) {
	videoPeer.signal(JSON.parse(data));
});
videoPeer.on("stream", function (stream) {
	// got remote video stream, then show it in a video tag
	canvas4.src = window.URL.createObjectURL(stream);// deprecated
// 	canvas4.srcObj = stream;
	canvas4.play();
});



/* LAGLESS 5.0 */
let videoCanvas5 = $("#videoCanvas5")[0];
let videoCanvas5Context = videoCanvas5.getContext("2d");
videoCanvas5.width = 1280;
videoCanvas5.height = 720;

socket2.on("viewImage5", function(data) {
	let src = "data:image/jpeg;base64," + data;
	if(src == "data:image/jpeg;base64,") {
		console.log("image was empty");
		socket.emit("restart5");
		return;
	}
	let image = new Image();
	image.style = "max-width:100%; height:auto;";
	image.onload = function() {
		let imgWidth = image.width;
		let imgHeight = image.height;
		let canvasWidth = videoCanvas5.width;
		let canvasHeight = videoCanvas5.height;
		let ratio = (imgHeight / imgWidth);
		let canvasRatio = canvasWidth / canvasHeight;
		let ratioW = 1280 / $("#videoCanvas5").innerWidth();
		let ratioH = 720 / $("#videoCanvas5").innerHeight();
		let cWidth = $("#videoCanvas5").innerWidth();
		videoCanvas5Context.clearRect(0, 0, canvasWidth, canvasHeight);
		videoCanvas5Context.drawImage(image, 0, 0, cWidth * ratioW, cWidth * ratio * ratioH);
	};
	image.src = src;
});

/* RESIZABLE */
// interact("#picture")
// 	.resizable({
//     // resize from all edges and corners
//     edges: { left: false, right: true, bottom: false, top: false },
//     // keep the edges inside the parent
//     restrictEdges: {
//       outer: "parent",
//       endOnly: true,
//     },
//     // minimum size
//     restrictSize: {
//       min: { width: 100, height: 50 },
//     },
// 	preserveAspectRatio: true,
//     inertia: true,
//   })
//   .on("resizemove", function (event) {
//     var target = event.target,
//         x = (parseFloat(target.getAttribute("data-x")) || 0),
//         y = (parseFloat(target.getAttribute("data-y")) || 0);

//     // update the element's style
//     target.style.width  = event.rect.width + "px";
//     target.style.height = event.rect.height + "px";
//   });
// interact("#videoCanvas2")
// 	.resizable({
//     // resize from all edges and corners
//     edges: { left: true, right: true, bottom: true, top: true },
//     // keep the edges inside the parent
//     restrictEdges: {
//       outer: "parent",
//       endOnly: true,
//     },
//     // minimum size
//     restrictSize: {
//       min: { width: 100, height: 50 },
//     },
// 	preserveAspectRatio: true,
//     inertia: true,
//   })
//   .on("resizemove", function (event) {
//     var target = event.target,
//         x = (parseFloat(target.getAttribute("data-x")) || 0),
//         y = (parseFloat(target.getAttribute("data-y")) || 0);

//     // update the element's style
//     target.style.width  = event.rect.width + "px";
//     target.style.height = event.rect.height + "px";
//   });
// interact("#videoCanvas3")
// 	.resizable({
//     // resize from all edges and corners
//     edges: { left: true, right: true, bottom: true, top: true },
//     // keep the edges inside the parent
//     restrictEdges: {
//       outer: "parent",
//       endOnly: true,
//     },
//     // minimum size
//     restrictSize: {
//       min: { width: 100, height: 50 },
//     },
// 	preserveAspectRatio: true,
//     inertia: true,
//   })
//   .on("resizemove", function (event) {
//     var target = event.target,
//         x = (parseFloat(target.getAttribute("data-x")) || 0),
//         y = (parseFloat(target.getAttribute("data-y")) || 0);

//     // update the element's style
//     target.style.width  = event.rect.width + "px";
//     target.style.height = event.rect.height + "px";
//   });


function addJoyCons(tab, actual) {

	actual = actual || false;

	if (!actual) {
		tab = tab + "View";
	}

	// delete old joycons:
	try {
		leftStick.destroy();
		rightStick.destroy();
	} catch(e) {
		console.log("JoyCon delete error.");
	}

	$("#leftJoyCon").remove();
	$("#rightJoyCon").remove();


	let leftJoyConHTML = `
	<div id="leftJoyCon">
		<canvas id="leftJoyConCanvas"></canvas>
		<div id="leftStick">
			<div id="leftStick2"></div>
		</div>

		<div id="dpadButtons">
			<div id="upButton" class="controllerButton"></div>
			<div id="downButton" class="controllerButton"></div>
			<div id="leftButton" class="controllerButton"></div>
			<div id="rightButton" class="controllerButton"></div>
		</div>
		<div id="leftJoyConOther">
			<div id="minusButton" class="controllerButton lessRound"></div>
			<div id="captureButton" class="controllerButton lessRound"></div>
			<div id="lButton" class="controllerButton lessRound"><div class="click-passthrough">L</div></div>
			<div id="zlButton" class="controllerButton lessRound"><div class="click-passthrough">ZL</div></div>
		</div>
	</div>`;

	let rightJoyConHTML = `
	<div id="rightJoyCon">
		<canvas id="rightJoyConCanvas"></canvas>
		<div id="rightStick">
			<div id="rightStick2"></div>
		</div>
		<div id="abxyButtons">
			<div id="xButton" class="controllerButton"></div>
			<div id="bButton" class="controllerButton"></div>
			<div id="yButton" class="controllerButton"></div>
			<div id="aButton" class="controllerButton"></div>
		</div>
		<div id="rightJoyConOther">
			<div id="plusButton" class="controllerButton lessRound"></div>
			<div id="homeButton" class="controllerButton lessRound"></div>
			<div id="rButton" class="controllerButton lessRound"><div class="click-passthrough">R</div></div>
			<div id="zrButton" class="controllerButton lessRound"><div class="click-passthrough">ZR</div></div>
		</div>
	</div>`;

	$(tab).prepend(leftJoyConHTML);
	$(tab).prepend(rightJoyConHTML);

	// rebind touch controls:
	rebindUnbindTouchControls();

	// redraw joycons:
	drawJoyCons();

	// resize window:
	setVideoWidth(73.2);

	// rebind sticks:
	leftJoyStick.zone = document.querySelector("#leftStick");
	rightJoyStick.zone = document.querySelector("#rightStick");
	leftStick = nipplejs.create(leftJoyStick);
	rightStick = nipplejs.create(rightJoyStick);
	bindJoysticks();
}



/* SWITCH IMPLEMENTATIONS */

function switchTabs(tab) {
	// lagless 1:
	if (tab == "#lagless1") {
		settings.tab = 1;
		socket2.emit("join", "lagless1");
		// todo: fix this:
		clearInterval(lagless1JoinTimer);
		lagless1JoinTimer = setInterval(function() {
			socket2.emit("join", "lagless1");
		}, 5000);
	} else {
		clearInterval(lagless1JoinTimer);
		socket2.emit("leave", "lagless1");
	}

	// lagless 2:
	if (tab == "#lagless2") {
		settings.tab = 2;
		socket.emit("join", "lagless2");
		//player.play();
		try {
			player.destroy();
		} catch (error) {
		}
		player = new JSMpeg.Player(url, {canvas: canvas2, video: true, audio: /*!settings.audioThree*/true, videoBufferSize: videoBufferSize, audioBufferSize: audioBufferSize, maxAudioLag: 0.5});
		if (!settings.audioThree) {
			player.volume = settings.volume / 100;
			audio.volume = 0;
		} else {
			player.volume = 0;
			audio.volume = settings.volume / 100;
		}
	} else {
// 		player.stop();
		try {
			player.destroy();
		} catch (error) {
		}
		player = new JSMpeg.Player(url, {canvas: canvas2, video: false, audio: true, videoBufferSize: videoBufferSize, audioBufferSize: audioBufferSize, maxAudioLag: 0.5});
		if (!settings.audioThree) {
			player.volume = settings.volume / 100;
			audio.volume = 0;
		} else {
			player.volume = 0;
			audio.volume = settings.volume / 100;
		}
	}

	// lagless 3:
	if (tab == "#lagless3") {
		settings.tab = 3;
		socket.emit("join", "lagless3");
		let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
		wsavc.connect(uri);
	} else {
		try {
			wsavc.disconnect();
		} catch(error) {
		}
	}

	// lagless 4:
	if (tab == "#lagless4") {
		settings.tab = 4;
		socket.emit("join", "lagless4");
		if (!videoConnected) {
			videoConnected = true;
			socket.emit("requestVideo");
		} else {
			videoCanvas4.play();
		}
	} else {
		videoCanvas4.pause();
	}

	// lagless 5:
	if (tab == "#lagless5") {
		settings.tab = 5;
		socket2.emit("join", "lagless5");
		if (typeof player5 != "undefined") {
			try {
				player5.play();
			} catch (e) {
			}
		}
// 		setTimeout(function() {
// 			player.volume = 0;
// 		}, 1000);
	} else {
		socket2.emit("leave", "viewers5");
		if (typeof player5 != "undefined") {
			try {
				player5.stop();
			} catch (e) {
			}
		}
	}
}

$(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function(e) {

	let tab = $(e.target);
	let contentId = tab.attr("href");

	currentTab = contentId;

	switchTabs(contentId);


	localforage.setItem("settings", JSON.stringify(settings));

	if (!settings.largescreen) {
		addJoyCons(contentId);
		setTimeout(drawJoyCons, 2000);// todo: find a solution like onload, but for tab changes
		rebindUnbindTouchControls();
	}

	// https://github.com/yoannmoinet/nipplejs/issues/39
	// force joysticks to recalculate the center:
	window.dispatchEvent(new Event("resize"));
	setTimeout(function() {
		window.dispatchEvent(new Event("resize"));
	}, 5000);
});

// todo: debounce
$(window).resize(function(event) {
	resizeChat();
	if (!settings.fullscreen && !settings.largescreen) {
		try {
			setVideoWidth(73.2);
		} catch (error) {
			console.log(error);
		}
	}
// 	if (resizeAvailable) {
		resizeAvailable = false;
		resizeDebounceTimer = setTimeout(function() {
			resizeAvailable = true;
		}, 100);
		for (let i = 0; i < resizers.length; i++) {
			resizers[i].resize();
		}
// 	}
});

// https://github.com/yoannmoinet/nipplejs/issues/39
// force joysticks to recalculate the center:
// setInterval(function() {
// 	window.dispatchEvent(new Event("resize"));
// }, 5000);

setInterval(function() {
	socket.emit("joinLagless" + settings.tab);
}, 10000);


// let twitchPlayer1 = new Twitch.Player("lagless1View", {channel: "twitchplaysconsoles"});
// let twitchPlayer2 = new Twitch.Player("lagless2View", {channel: "twitchplaysconsoles"});
// let twitchPlayer3 = new Twitch.Player("lagless3View", {channel: "twitchplaysconsoles"});
// $("iframe[src='https://player.twitch.tv/?allowfullscreen&channel=twitchplaysconsoles&origin=https%3A%2F%2Ftwitchplaysnintendoswitch.com']")[0].id = "twitchVideo1";
// $("iframe[src='https://player.twitch.tv/?allowfullscreen&channel=twitchplaysconsoles&origin=https%3A%2F%2Ftwitchplaysnintendoswitch.com']")[1].id = "twitchVideo2";
// $("iframe[src='https://player.twitch.tv/?allowfullscreen&channel=twitchplaysconsoles&origin=https%3A%2F%2Ftwitchplaysnintendoswitch.com']")[2].id = "twitchVideo3";
// $("iframe[src='https://player.twitch.tv/?allowfullscreen&channel=twitchplaysconsoles&origin=https%3A%2F%2Ftwitchplaysnintendoswitch.com']")[0].className = "twitchVideo";
// $("iframe[src='https://player.twitch.tv/?allowfullscreen&channel=twitchplaysconsoles&origin=https%3A%2F%2Ftwitchplaysnintendoswitch.com']")[1].className = "twitchVideo";
// $("iframe[src='https://player.twitch.tv/?allowfullscreen&channel=twitchplaysconsoles&origin=https%3A%2F%2Ftwitchplaysnintendoswitch.com']")[2].className = "twitchVideo";
// twitchPlayer1.pause();
// twitchPlayer2.pause();
// twitchPlayer3.pause();
// $("#twitchVideo1")[0].style.display = "none";
// $("#twitchVideo2")[0].style.display = "none";
// $("#twitchVideo3")[0].style.display = "none";




function replaceWithTwitch(tab) {
	tab = tab || currentTab;
	let twitchIFrame = '<iframe id="twitchVideo" class="" src="https://player.twitch.tv/?channel=twitchplaysconsoles&muted=false&autoplay=true" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>';

	if (tab == "#lagless1") {
		clearInterval(lagless1JoinTimer);
		socket2.emit("leave", "viewers");
		$("#videoCanvas1")[0].style.display = "none";
		$("#videoCanvas1").after(twitchIFrame);
	} else {
// 		$("#tab1").addClass("disabled");
	}

	if (tab == "#lagless2") {
		try {
			player.stop();
		} catch(error) {
			console.log("player not defined");
		}
		$("#videoCanvas2")[0].style.display = "none";
		$("#videoCanvas2").after(twitchIFrame);
	} else {
	}

	if (tab == "#lagless3") {
		wsavc.disconnect();
		$("#videoCanvas3")[0].style.display = "none";
		$("#videoCanvas3").after(twitchIFrame);
	} else {
	}

	if (tab == "#lagless4") {
		try {
// 			player.stop();
		} catch(error) {
// 			console.log("player not defined");
		}
		$("#videoCanvas4")[0].style.display = "none";
		$("#videoCanvas4").after(twitchIFrame);
	} else {
	}

	if (tab == "#lagless5") {
		player5.stop();
		$("#videoCanvas5")[0].style.display = "none";
		$("#videoCanvas5").after(twitchIFrame);
	} else {
	}

	setVideoWidth(73.2);
	socket.emit("leaveLagless");
}


function replaceWithLagless(tab) {
	tab = tab || currentTab;
	let laglessCanvas;
	if (tab == "#lagless1") {
		socket2.emit("join", "lagless1");

		$("#videoCanvas1")[0].style.display = "";
		$("#twitchVideo").remove();
	} else {
// 		$("#tab1").removeClass("disabled");
	}

	if (tab == "#lagless2") {
		socket.emit("join", "lagless2");
		player.play();

		$("#videoCanvas2")[0].style.display = "";
		$("#twitchVideo").remove();
	} else {
	}

	if (tab == "#lagless3") {
		socket.emit("joinLagless3");
		let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
		wsavc.connect(uri);

		$("#videoCanvas3")[0].style.display = "";
		$("#twitchVideo").remove();
	} else {
// 		$("#tab3").removeClass("disabled");
	}

	if (tab == "#lagless4") {
		socket.emit("join", "lagless4");
// 		player4.play();

		$("#videoCanvas4")[0].style.display = "";
		$("#twitchVideo").remove();
	} else {
	}

	if (tab == "#lagless5") {
		socket.emit("join", "lagless5");
		player.play();

		$("#videoCanvas5")[0].style.display = "";
		$("#twitchVideo").remove();
	} else {
	}

	setVideoWidth(73.2);
}

$("#replaceWithTwitch").on("click", function() {
	replaceWithTwitch();
});

$("#replaceWithLagless").on("click", function() {
	replaceWithLagless();
});

socket.on("replaceWithTwitch", function() {
	replaceWithTwitch();
});

socket.on("replaceWithLagless", function() {
	replaceWithTwitch();
});



/* STATUS BAR @@@@@@@@@@@@@@@@ */
// socket.on("lock", function() {
// 	replaceWithTwitch();
// });

/* AUDIO WEBRTC @@@@@@@@@@@@@@@@ */

let BandwidthHandler = (function() {
	function setBAS(sdp, bandwidth, isScreen) {
		if (!!navigator.mozGetUserMedia || !bandwidth) {
			return sdp;
		}

		if (isScreen) {
			if (!bandwidth.screen) {
				console.warn('It seems that you are not using bandwidth for screen. Screen sharing is expected to fail.');
			} else if (bandwidth.screen < 300) {
				console.warn('It seems that you are using wrong bandwidth value for screen. Screen sharing is expected to fail.');
			}
		}

		// if screen; must use at least 300kbs
		if (bandwidth.screen && isScreen) {
			sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, '');
			sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + bandwidth.screen + '\r\n');
		}

		// remove existing bandwidth lines
		if (bandwidth.audio || bandwidth.video || bandwidth.data) {
			sdp = sdp.replace(/b=AS([^\r\n]+\r\n)/g, '');
		}

		if (bandwidth.audio) {
			sdp = sdp.replace(/a=mid:audio\r\n/g, 'a=mid:audio\r\nb=AS:' + bandwidth.audio + '\r\n');
		}

		if (bandwidth.video) {
			sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + (isScreen ? bandwidth.screen : bandwidth.video) + '\r\n');
		}

		return sdp;
	}

	// Find the line in sdpLines that starts with |prefix|, and, if specified,
	// contains |substr| (case-insensitive search).
	function findLine(sdpLines, prefix, substr) {
		return findLineInRange(sdpLines, 0, -1, prefix, substr);
	}

	// Find the line in sdpLines[startLine...endLine - 1] that starts with |prefix|
	// and, if specified, contains |substr| (case-insensitive search).
	function findLineInRange(sdpLines, startLine, endLine, prefix, substr) {
		var realEndLine = endLine !== -1 ? endLine : sdpLines.length;
		for (var i = startLine; i < realEndLine; ++i) {
			if (sdpLines[i].indexOf(prefix) === 0) {
				if (!substr ||
					sdpLines[i].toLowerCase().indexOf(substr.toLowerCase()) !== -1) {
					return i;
				}
			}
		}
		return null;
	}

	// Gets the codec payload type from an a=rtpmap:X line.
	function getCodecPayloadType(sdpLine) {
		var pattern = new RegExp('a=rtpmap:(\\d+) \\w+\\/\\d+');
		var result = sdpLine.match(pattern);
		return (result && result.length === 2) ? result[1] : null;
	}

	function setVideoBitrates(sdp, params) {
		params = params || {};
		var xgoogle_min_bitrate = params.min;
		var xgoogle_max_bitrate = params.max;

		var sdpLines = sdp.split('\r\n');

		// VP8
		var vp8Index = findLine(sdpLines, 'a=rtpmap', 'VP8/90000');
		var vp8Payload;
		if (vp8Index) {
			vp8Payload = getCodecPayloadType(sdpLines[vp8Index]);
		}

		if (!vp8Payload) {
			return sdp;
		}

		var rtxIndex = findLine(sdpLines, 'a=rtpmap', 'rtx/90000');
		var rtxPayload;
		if (rtxIndex) {
			rtxPayload = getCodecPayloadType(sdpLines[rtxIndex]);
		}

		if (!rtxIndex) {
			return sdp;
		}

		var rtxFmtpLineIndex = findLine(sdpLines, 'a=fmtp:' + rtxPayload.toString());
		if (rtxFmtpLineIndex !== null) {
			var appendrtxNext = '\r\n';
			appendrtxNext += 'a=fmtp:' + vp8Payload + ' x-google-min-bitrate=' + (xgoogle_min_bitrate || '228') + '; x-google-max-bitrate=' + (xgoogle_max_bitrate || '228');
			sdpLines[rtxFmtpLineIndex] = sdpLines[rtxFmtpLineIndex].concat(appendrtxNext);
			sdp = sdpLines.join('\r\n');
		}

		return sdp;
	}

	function setOpusAttributes(sdp, params) {
		params = params || {};

		var sdpLines = sdp.split('\r\n');

		// Opus
		var opusIndex = findLine(sdpLines, 'a=rtpmap', 'opus/48000');
		var opusPayload;
		if (opusIndex) {
			opusPayload = getCodecPayloadType(sdpLines[opusIndex]);
		}

		if (!opusPayload) {
			return sdp;
		}

		var opusFmtpLineIndex = findLine(sdpLines, 'a=fmtp:' + opusPayload.toString());
		if (opusFmtpLineIndex === null) {
			return sdp;
		}

		var appendOpusNext = '';
		appendOpusNext += '; stereo=' + (typeof params.stereo != 'undefined' ? params.stereo : '1');
		appendOpusNext += '; sprop-stereo=' + (typeof params['sprop-stereo'] != 'undefined' ? params['sprop-stereo'] : '1');

		if (typeof params.maxaveragebitrate != 'undefined') {
			appendOpusNext += '; maxaveragebitrate=' + (params.maxaveragebitrate || 128 * 1024 * 8);
		}

		if (typeof params.maxplaybackrate != 'undefined') {
			appendOpusNext += '; maxplaybackrate=' + (params.maxplaybackrate || 128 * 1024 * 8);
		}

		if (typeof params.cbr != 'undefined') {
			appendOpusNext += '; cbr=' + (typeof params.cbr != 'undefined' ? params.cbr : '1');
		}

		if (typeof params.useinbandfec != 'undefined') {
			appendOpusNext += '; useinbandfec=' + params.useinbandfec;
		}

		if (typeof params.usedtx != 'undefined') {
			appendOpusNext += '; usedtx=' + params.usedtx;
		}

		if (typeof params.maxptime != 'undefined') {
			appendOpusNext += '\r\na=maxptime:' + params.maxptime;
		}

		sdpLines[opusFmtpLineIndex] = sdpLines[opusFmtpLineIndex].concat(appendOpusNext);

		sdp = sdpLines.join('\r\n');
		return sdp;
	}

	return {
		setApplicationSpecificBandwidth: function(sdp, bandwidth, isScreen) {
			return setBAS(sdp, bandwidth, isScreen);
		},
		setVideoBitrates: function(sdp, params) {
			return setVideoBitrates(sdp, params);
		},
		setOpusAttributes: function(sdp, params) {
			return setOpusAttributes(sdp, params);
		}
	};
})();


		// example:
// 		var bandwidth = {
// 			screen: 300, // 300kbits minimum
// 			audio: 50,   // 50kbits  minimum
// 			video: 256   // 256kbits (both min-max)
// 		};
// 		var isScreenSharing = false;

// 		sdp = BandwidthHandler.setApplicationSpecificBandwidth(sdp, bandwidth, isScreenSharing);
// 		sdp = BandwidthHandler.setVideoBitrates(sdp, {
// 			min: bandwidth.video,
// 			max: bandwidth.video
// 		});
// 		sdp = BandwidthHandler.setOpusAttributes(sdp);
// 		sdp = BandwidthHandler.setOpusAttributes(sdp, {
// 			'stereo': 0, // to disable stereo (to force mono audio)
// 			'sprop-stereo': 1,
// 			'maxaveragebitrate': 500 * 1024 * 8, // 500 kbits
// 			'maxplaybackrate': 500 * 1024 * 8, // 500 kbits
// 			'cbr': 0, // disable cbr
// 			'useinbandfec': 1, // use inband fec
// 			'usedtx': 1, // use dtx
// 			'maxptime': 3
// 		});

function mySDPTransform(sdp) {
// 	sdp = BandwidthHandler.setOpusAttributes(sdp, {
// 		'stereo': 0, // to disable stereo (to force mono audio)
// 		'sprop-stereo': 1,
// 		'maxaveragebitrate': 500 * 1024 * 8, // 500 kbits
// 		'maxplaybackrate': 500 * 1024 * 8, // 500 kbits
// 		'cbr': 0, // disable cbr
// 		'useinbandfec': 1, // use inband fec
// 		'usedtx': 1, // use dtx
// 		'maxptime': 3
// 	});

	var bandwidth = {
		screen: 300, // 300kbits minimum
		audio: 500,   // 500kbits  minimum
		video: 256   // 256kbits (both min-max)
	};
	var isScreenSharing = false;

	sdp = BandwidthHandler.setApplicationSpecificBandwidth(sdp, bandwidth, isScreenSharing);
	sdp = BandwidthHandler.setVideoBitrates(sdp, {
		min: bandwidth.video,
		max: bandwidth.video
	});
	sdp = BandwidthHandler.setOpusAttributes(sdp);

	return sdp;
}



/* AUDIO 3.0 */
let peer = new SimplePeer({
	initiator: false,
	trickle: true,
	sdpTransform: mySDPTransform,
});

peer.on("error", function(err) {
	console.log("error", err)
});

peer.on("signal", function(data) {
	console.log("SIGNAL", JSON.stringify(data));
	socket.emit("clientPeerSignal", JSON.stringify(data));
});

peer.on("connect", function() {
	console.log("CONNECT");
	peer.send(Math.random());
});

peer.on("data", function(data) {
	console.log("data: " + data)
});

socket.on("hostPeerSignal", function(data) {
	peer.signal(JSON.parse(data));
});

let audio = document.createElement("audio");

peer.on("stream", function (stream) {
	// got remote audio stream, then show it in an audio tag
	audio.src = window.URL.createObjectURL(stream);// deprecated
// 			audio.srcObj = stream;
	audio.play();
	audio.volume = 0;
});

$("#enableAudioThreeCheckbox").on("change", function() {
	settings.enableAudioThree = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.enableAudioThree) {
		if (!audioConnected) {
			socket.emit("requestAudio");
			setTimeout(function() {
				audioConnected = true;
			}, 100);
		}
	} else {
		try {
			audio.volume = 0;
			player.volume = settings.volume / 100;
		} catch (error) {
		}
		$("#audioThreeCheckbox").prop("checked", false);
		$(".audioThreeCheckbox").prop("checked", false);
	}
});


$("#audioThreeCheckbox").on("change", function() {
	if (!settings.enableAudioThree) {
		$("#audioThreeCheckbox").prop("checked", false);
		swal("You need to enable Audio 3.0 first!");
		return;
	}
	settings.audioThree = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.audioThree) {
		if (!audioConnected) {
// 			setTimeout(function() {
				audio.volume = settings.volume / 100;
// 			}, 8000);
		} else {
			try {
				audio.volume = settings.volume / 100;
				player.volume = 0;
			} catch (error) {
			}
		}
	} else {
// 		$("#audioThreeCheckbox").prop("checked", false);
		audio.volume = 0;
		player.volume = settings.volume / 100;
	}
});

$(".audioThreeCheckbox").on("change", function() {
	$("#audioThreeCheckbox").trigger("click");
	setTimeout(function() {
		$(".audioThreeCheckbox").prop("checked", $("#audioThreeCheckbox").prop("checked"));
	}, 100);
});



/* QUEUE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
socket.on("controlQueues", function(data) {

	let sameQueues = [];
	for (let i = 0; i < data.controlQueues.length; i++) {
		sameQueues.push(JSON.stringify(controlQueues[i]) === JSON.stringify(data.controlQueues[i]))
	}

	let controlQueuesChanged = (JSON.stringify(controlQueues) !== JSON.stringify(data.controlQueues));
	controlQueues = data.controlQueues;

	for (let i = 0; i < data.controlQueues.length; i++) {

		// don't do anything if it hasn't changed:
		if (sameQueues[i]) {
			continue;
		}

		$("#controlQueue" + (i + 1)).empty();
		for (let j = 0; j < data.controlQueues[i].length; j++) {
			let username = usernameMap[data.controlQueues[i][j]];
			let html;
			if (!settings.darkTheme) {
				html = '<li class="queueItem list-group-item" data-toggle="popover" tabindex="0">' + username + "</li>";
			} else {
				html = '<li class="queueItem list-group-item-dark" data-toggle="popover" tabindex="0">' + username + "</li>";
			}
			$("#controlQueue" + (i + 1)).append(html);
		}

		let html;
		if (!settings.darkTheme) {
			html = "<li class='list-group-item'>The queue is empty.</li>";
		} else {
			html = "<li class='list-group-item-dark'>The queue is empty.</li>";
		}
		if (data.controlQueues[i].length === 0) {
			$("#controlQueue" + (i + 1)).append(html);
		}

	}

	if (controlQueuesChanged) {
		// join / leave button management:
		// for each queue:
		for (let i = 0; i < controlQueues.length; i++) {
			// check if user is in this queue:
			if (controlQueues[i].indexOf(myUniqueID) > -1) {
				// change request button -> cancel button:
				let cancelTurnButton = $("#cancelTurn" + (i+1))[0];
				if (typeof cancelTurnButton == "undefined") {
					let html = '<button id="cancelTurn' + (i + 1) + '" class="cancelTurn btn btn-secondary" code="'+ i +'">Leave Queue</button>';
					$("#requestTurn" + (i+1)).replaceWith(html);
				}
			} else {
				// change cancel button -> request button:
				let requestTurnButton = $("#requestTurn" + (i + 1))[0];
				if (typeof requestTurnButton == "undefined") {
					let html = '<button id="requestTurn' + (i + 1) + '" class="requestTurn btn btn-secondary" code="'+ i +'">Join Queue</button>';
					$("#cancelTurn" + (i+1)).replaceWith(html);
				}
			}
		}

// 		$(window).trigger("resize.fittext");
	}

});

/* MOD COMMANDS */
// selects elements in the future:
// https://stackoverflow.com/questions/8191064/jquery-on-function-for-future-elements-as-live-is-deprecated

$("body").popover({
	selector: ".queueItem",
	trigger: "focus",
	html: true,
	toggle: "popover",
	title: "Mod Powers",
	boundary: "window",
	container: "body",
	placement: "right",
	content: '<button id="kickFromQueue" class="btn btn-secondary">Kick From Queue</button>\
				<button id="tempBan" class="btn btn-secondary">Temporary Ban (5 min)</button>\
				<button id="permaBan" class="btn btn-secondary"><b>Permanent Ban</b></button>',
});
// .click(function() {
// 	setTimeout(function () {
// 		$('[data-toggle="popover"]').popover("hide");
// 	}, 8000);
// });

$("#container").popover({// must be unique
	selector: ".viewerElement",
// 	trigger: "focus",
	html: true,
	toggle: "popover",
	title: "Mod Powers",
	boundary: "window",
	container: "body",
	placement: "right",
	content: '<button id="kickFromQueue" class="btn btn-secondary">Kick From Queue</button>\
				<button id="tempBan" class="btn btn-secondary">Temporary Ban (5 min)</button>\
				<button id="permaBan" class="btn btn-secondary"><b>Permanent Ban</b></button>\
				<button id="unban" class="btn btn-secondary"><b>Unban</b></button>',
}).click(function() {
	setTimeout(function () {
		$('[data-toggle="popover"]').popover("hide");
	}, 8000);
});


let modPowerUniqueID = "";
$(document).on("click", ".queueItem", function(event) {
	$(this).effect("highlight", {}, 2000);
	let userIndex = $(this).index();
	let queueIndex = parseInt($(this).parent().attr("id").slice(-1))-1;
	modPowerUniqueID = controlQueues[queueIndex][userIndex];
});

$(document).on("click", ".viewerElement", function(event) {
	$(this).effect("highlight", {}, 2000);
// 	userIndex = $(this).index();
// 	queueIndex = parseInt($(this).parent().attr("id").slice(-1))-1;
	modPowerUniqueID = $(this).attr("uniqueID");
});

$(document).on("click", "#kickFromQueue", function(event) {
	socket.emit("kickFromQueue", modPowerUniqueID);
	$("#queuePopup").remove();
});
$(document).on("click", "#tempBan", function(event) {
	socket.emit("tempBan", modPowerUniqueID);
	$("#queuePopup").remove();
});
$(document).on("click", "#permaBan", function(event) {
	socket.emit("permaBan", modPowerUniqueID);
	$("#queuePopup").remove();
});
$(document).on("click", "#unban", function(event) {
	socket.emit("unban", modPowerUniqueID);
	$("#queuePopup").remove();
});


$(document).on("click", 'i:contains("lock")', function(event) {
	$(this).effect("highlight", {}, 2000);
	socket.emit("unlock");
});
$(document).on("click", 'i:contains("lock_open")', function(event) {
	$(this).effect("highlight", {}, 2000);
	socket.emit("lock");
});

const ViewerList = require("src/components/ViewerList.jsx");
let viewerList = <ViewerList/>;
// viewerList.props.viewerIDs[1].push("1");

socket.on("turnTimesLeft", function(data) {

	lastCurrentTime = Date.now();
	let viewersChanged = (JSON.stringify(viewers) !== JSON.stringify(data.viewers));
	let waitlistsChanged = (JSON.stringify(waitlists) !== JSON.stringify(data.waitlists));
	viewers = data.viewers;
	waitlists = data.waitlists;
	if (locked != data.locked) {
		locked = data.locked;
		if (locked) {
			let iconHTML = '<i class="material-icons">lock</i>';
			$('i:contains("lock_open")').replaceWith(iconHTML);
		} else {
			let iconHTML = '<i class="material-icons">lock_open</i>';
			$('i:contains("lock")').replaceWith(iconHTML);
		}
	}

// 	console.log(ViewerList.getNames());

// 	myViewerList.props.viewerIDs = viewers;
// 	myViewerList.props.usernameMap = usernameMap;
	viewerList = ReactDOM.render(<ViewerList viewerIDs={viewers} usernameMap={usernameMap} />, document.getElementById("laglessViewerDropdown"));

// 	isExempt = false;
// 	for (let i = 0; i < 5; i++) {
// 		let index = controlQueues[i].indexOf(myUniqueID);
// 		if (index < minQueuePos && index > -1) {
// 			isExempt = true;
// 		}
// 	}

// 	if (!isExempt && viewers[settings.tab-1].length > maxViewersOnTab[settings.tab-1] && tabSwappedWithTwitch[settings.tab-1] === false) {
// 		tabSwappedWithTwitch[settings.tab-1] = true;
// 		setTimeout(function() {
// 			replaceWithTwitch("#lagless" + settings.tab);
// 			setTimeout(function() {
// 				socket.emit("leaveLagless");
// 			}, 4000);
// 			swal("The server is a bit overloaded right now, the lagless stream will be swapped out for twitch.");
// 		}, 2000);
// 	}

// 	// check if exempt, replace any twitch streams with lagless:
// 	if (isExempt) {
// 		//for (let i = 0; i < 5; i++) {
// 		replaceWithLagless("#lagless" + settings.tab);
// 		//}
// 	}

	for (let i = 0; i < data.turnTimesLeft.length; i++) {
		let timeLeftMilli = data.turnTimesLeft[i];
		let timeLeftSec = parseInt(data.turnTimesLeft[i] / 1000);
		let percent = parseInt((timeLeftMilli / data.turnLengths[i]) * 100);

		let timeLeftMilli2 = data.forfeitTimesLeft[i];
		let timeLeftSec2 = parseInt(timeLeftMilli2 / 1000);
		let percent2 = parseInt((timeLeftMilli2 / timeTillForfeit) * 100);

		let n = i + 1;

		if (controlQueues[i][0] == null) {
			$("#turnTimerBarChild" + n).css("width", "100%").attr("aria-valuenow", "100%").text("No one is playing right now.");
			$("#forfeitTimerBarChild" + n).css("width", "100%").attr("aria-valuenow", "100%").text("No one is playing right now.");
		} else {
			$("#turnTimerBarChild" + n).css("width", percent + "%").attr("aria-valuenow", percent + "%").text(usernameMap[controlQueues[i][0]] + ": " + timeLeftSec + " seconds");
			$("#forfeitTimerBarChild" + n).css("width", percent2 + "%").attr("aria-valuenow", percent2 + "%").text(timeLeftSec2 + " seconds until turn forfeit.");
		}
	}

	let totalViewers = data.viewers[0].length + data.viewers[1].length + data.viewers[2].length + data.viewers[3].length + data.viewers[4].length;


	if(viewersChanged) {

// 		$(window).trigger("resize.fittext");

		// for each lagless tab
// 		for (let i = 0; i < 4; i++) {

// 			$("#laglessViewerDropdownDiv").empty();
// 			for (let j = 0; j < data.viewers[i].length; j++) {
// // 				let html = '<button class="viewerElement dropdown-item" data-toggle="popover" tabindex="0">' + usernameMap[data.viewers[i][j]] + "</button>";
// 				let html = '<button class="viewerElement dropdown-item" data-toggle="popover" tabindex="0" uniqueID="' + data.viewers[i][j] + '">' + usernameMap[data.viewers[i][j]] + "</button>";
// 				$("#lagless" + (i + 1) + "ViewerDropdownDiv").append(html);
// 			}

// 			// for each lagless tab:
// 			for (let k = 0; k < 4; k++) {
// 				// skip the tab we already did:
// 				if (k == i) {
// 					continue;
// 				}

// 				if (data.viewers[k].length > 0) {
// 					let dividerHTML = '<div class="dropdown-divider">Lagless ' + (k + 1) + "</div>";
// 					$("#lagless" + (i + 1) + "ViewerDropdownDiv").append(dividerHTML);
// 					for (let j = 0; j < data.viewers[k].length; j++) {
// // 						let html = '<button class="viewerElement dropdown-item" data-toggle="popover" tabindex="0">' + usernameMap[data.viewers[k][j]] + "</button>";
// 						let html = '<button class="viewerElement dropdown-item" data-toggle="popover" tabindex="0" uniqueID="' + data.viewers[i][j] + '">' + usernameMap[data.viewers[i][j]] + "</button>";
// 						$("#lagless" + (i + 1) + "ViewerDropdownDiv").append(html);
// 					}
// 				}
// 			}
// 		}


	}

	// lagless / twitch swap

	if (waitlistsChanged) {

		$("#waitlist").empty();

		let waitlistHeaderHTML = '<li class="list-group-item">Lagless ' + settings.tab + " waitlist</li>";
		$("#waitlist").append(waitlistHeaderHTML);

		for (let i = 0; i < waitlists[settings.tab-1].length; i++) {
			let listHTML;

			let ID = waitlists[settings.tab-1][i];

			if (myUniqueID == ID) {

// 				if (!tabsSwappedWithTwitch[settings.tab-1]) {
// 					tabsSwappedWithTwitch[settings.tab-1] = true;
// 					replaceWithTwitch("#lagless" + settings.tab);
// 					setTimeout(function() {
// 						socket.emit("leaveLagless");
// 					}, 4000);
// 					swal("The server is a bit overloaded right now, the lagless stream will be swapped out for twitch.");
// 				}

				listHTML = '<li class="list-group-item-highlight">' + usernameMap[ID] + "</li>";
			} else if (settings.darkTheme) {
				listHTML = '<li class="list-group-item-dark">' + usernameMap[ID] + "</li>";
			} else {
				listHTML = '<li class="list-group-item">' + usernameMap[ID] + "</li>";
			}


			$("#waitlist").append(listHTML);
		}

		// check if you're in the waitlist
		if (waitlists[settings.tab-1].indexOf(myUniqueID) > -1) {

			if (!tabsSwappedWithTwitch[settings.tab-1]) {
				tabsSwappedWithTwitch[settings.tab-1] = true;
				replaceWithTwitch("#lagless" + settings.tab);
				setTimeout(function() {
					socket.emit("leaveLagless");
				}, 4000);
				swal("The server is a bit overloaded right now, the lagless stream will be swapped out for twitch temporarily, check the discord server for the rules on how this works.");
			}

		} else if (tabsSwappedWithTwitch[settings.tab-1]) {
			tabsSwappedWithTwitch[settings.tab-1] = false;
// 			swal("You're at the top of the waitlist! switching back to lagless!");
			replaceWithLagless("#lagless" + settings.tab);
		}


// 		for (let i = 0; i < 3; i++) {
// 	// 		if (!tabsSwappedWithTwitch[i]) {

// 	// 		}

// 		}
	}





});


// setInterval(function() {
// 	let currentTime = Date.now();
// 	let elapsedTime = currentTime - lastCurrentTime;
// 	let timeLeftMilli = timeLeft - elapsedTime;
// 	let timeLeftSec = parseInt(timeLeftMilli / 1000);
// 	let percent = parseInt((timeLeftMilli / turnLength) * 100);
// 	let progressBar = $(".progress-bar");
// 	progressBar.css("width", percent + "%").attr("aria-valuenow", percent + "%").text(turnUsername + ": " + timeLeftSec + " seconds");
// }, 200);


socket.on("forceRefresh", function(data) {
	swal({
		title: "There has been a force refresh!",
	}).then((result) => {
		if (result.value) {
			location.reload(true);
		}
	});

	// actually force after 5 seconds:
	setTimeout(function() {
		location.reload(true);
	}, 5000);

});

$(document).on("click", ".requestTurn", function(event) {
	let cNum = parseInt($(this).attr("code"));
	for (let i = 0; i < controlQueues.length; i++) {
		if (i == cNum) {
			continue;
		}
		socket.emit("cancelTurn", i);
	}
	socket.emit("requestTurn", cNum);
});

$(document).on("click", ".cancelTurn", function(event) {
	let cNum = parseInt($(this).attr("code"));
	socket.emit("cancelTurn", cNum);
});


/* MULTIPLAYER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#player1Checkbox").prop("checked", true).trigger("change");
$("#player1Checkbox").on("change", function(event) {
	if (this.checked) {
		socket.emit("cancelTurn", currentPlayerChosen);
		currentPlayerChosen = 0;
		$("#player2Checkbox").prop("checked", false).trigger("change");
		$("#player3Checkbox").prop("checked", false).trigger("change");
		$("#player4Checkbox").prop("checked", false).trigger("change");
		$("#player5Checkbox").prop("checked", false).trigger("change");
	} else {
		// prevent unchecking
		event.preventDefault();
	}
});

$("#player2Checkbox").on("change", function(event) {
	if (this.checked) {
		socket.emit("cancelTurn", currentPlayerChosen);
		currentPlayerChosen = 1;
		$("#player1Checkbox").prop("checked", false).trigger("change");
		$("#player3Checkbox").prop("checked", false).trigger("change");
		$("#player4Checkbox").prop("checked", false).trigger("change");
		$("#player5Checkbox").prop("checked", false).trigger("change");
	} else {
		// prevent unchecking
		event.preventDefault();
	}
});

$("#player3Checkbox").on("change", function(event) {
	if (this.checked) {
		socket.emit("cancelTurn", currentPlayerChosen);
		currentPlayerChosen = 2;
		$("#player1Checkbox").prop("checked", false).trigger("change");
		$("#player2Checkbox").prop("checked", false).trigger("change");
		$("#player4Checkbox").prop("checked", false).trigger("change");
		$("#player5Checkbox").prop("checked", false).trigger("change");
	} else {
		// prevent unchecking
		event.preventDefault();
	}
});

$("#player4Checkbox").on("change", function(event) {
	if (this.checked) {
		socket.emit("cancelTurn", currentPlayerChosen);
		currentPlayerChosen = 3;
		$("#player1Checkbox").prop("checked", false).trigger("change");
		$("#player2Checkbox").prop("checked", false).trigger("change");
		$("#player3Checkbox").prop("checked", false).trigger("change");
		$("#player5Checkbox").prop("checked", false).trigger("change");
	} else {
		// prevent unchecking
		event.preventDefault();
	}
});

$("#player5Checkbox").on("change", function(event) {
	if (this.checked) {
		socket.emit("cancelTurn", currentPlayerChosen);
		currentPlayerChosen = 4;
		$("#player1Checkbox").prop("checked", false).trigger("change");
		$("#player2Checkbox").prop("checked", false).trigger("change");
		$("#player3Checkbox").prop("checked", false).trigger("change");
		$("#player4Checkbox").prop("checked", false).trigger("change");
	} else {
		// prevent unchecking
		event.preventDefault();
	}
});


/* TOGGLE KEYBOARD @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#keyboardControlsCheckbox").on("change", function() {
	settings.keyboardControls = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
});

/* TOGGLE CONTROLLER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#controllerControlsCheckbox").on("change", function() {
	settings.controllerControls = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
});


/* DARK THEME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

$("#darkThemeCheckbox").on("change", function() {
	settings.darkTheme = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.darkTheme) {
		let icon = $(".glyphicon-fire");
		icon.removeClass("glyphicon-fire");
		icon.addClass("glyphicon-certificate");

		$(".light").each(function() {
			$(this).removeClass("light");
			$(this).addClass("dark");
		});

		$(".otborder").each(function() {
			$(this).removeClass("otborder");
			$(this).addClass("otborder-dark");
		});

		$(".list-group-item").each(function() {
			$(this).removeClass("list-group-item");
			$(this).addClass("list-group-item-dark");
		});

		$(".nav-link").each(function() {
			$(this).removeClass("nav-link");
			$(this).addClass("nav-link-dark");
		});

		$("body").addClass("dark");

		$("#chat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat?darkpopout");

	} else {

		let icon = $(".glyphicon-certificate");
		icon.removeClass("glyphicon-certificate");
		icon.addClass("glyphicon-fire");

		$(".dark").each(function() {
			$(this).removeClass("dark");
			$(this).addClass("light");
		});

		$(".otborder-dark").each(function() {
			$(this).removeClass("otborder-dark");
			$(this).addClass("otborder");
		});

		$(".list-group-item-dark").each(function() {
			$(this).removeClass("list-group-item-dark");
			$(this).addClass("list-group-item");
		});

		$(".nav-link-dark").each(function() {
			$(this).removeClass("nav-link-dark");
			$(this).addClass("nav-link");
		});

		$("body").removeClass("dark");
// 		$("body").addClass("light");

		$("#chat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat");
	}
});


/* TOGGLE FULLSCREEN @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#fullscreenCheckbox").on("change", function() {
	settings.fullscreen = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.fullscreen) {

		$("#picture").css("width", "100%");
		$(".videoCanvas").css("width", "100%");
		$(".videoCanvas").css("margin-left", "0");
		$(".laglessContainer").css("padding-left", "0");
		$(".laglessContainer").css("padding-right", "0");

		if (settings.touchControls) {
			$("#touchControlsCheckbox").prop("checked", false).trigger("change");
		}
		if (!settings.hideChat) {
			$("#hideChatCheckbox").prop("checked", true).trigger("change");
		}
		if (!settings.hideNav) {
			$("#navCheckbox").prop("checked", true).trigger("change");
		}

		$(".well").each(function() {
			$(this).removeClass("well");
			$(this).addClass("well2");
		});
		$("body").addClass("well2");
		$("body").addClass("hideScrollbar");
		$(document).scrollTop(0);

		tools.toggleFullScreen($("body")[0]);

	} else {
		$("#picture").css("width", "");
// 		$(".videoCanvas").css("width", "100%");
// 		$(".videoCanvas").css("margin-left", "0");
		$(".laglessContainer").css("padding-left", "");
		$(".laglessContainer").css("padding-right", "");

		$(".well2").each(function() {
			$(this).removeClass("well2");
			$(this).addClass("well");
		});
		$("body").removeClass("well2");
		$("body").removeClass("hideScrollbar");
	}
});

window.addEventListener("keydown", function(e) {
	// escape, f11
	if ([27, 122].indexOf(e.keyCode) > -1) {
		e.preventDefault();
		$("body").removeClass("hideScrollbar");
	}
}, false);

if (document.addEventListener) {
    document.addEventListener("webkitfullscreenchange", exitHandler, false);
    document.addEventListener("mozfullscreenchange", exitHandler, false);
    document.addEventListener("fullscreenchange", exitHandler, false);
    document.addEventListener("MSFullscreenChange", exitHandler, false);
}

// https://stackoverflow.com/questions/10706070/how-to-detect-when-a-page-exits-fullscreen
function exitHandler() {
	if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
		console.log("exiting fullscreen");
		$("body").removeClass("hideScrollbar");
		$("#fullscreenCheckbox").prop("checked", false).trigger("change");
		$("#hideChatCheckbox").prop("checked", false).trigger("change");
		$("#navCheckbox").prop("checked", false).trigger("change");
		$("#touchControlsCheckbox").prop("checked", true).trigger("change");
		resizeChat();
	}
}

/* TOGGLE LARGESCREEN @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#largescreenCheckbox").on("change", function() {
	settings.largescreen = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.largescreen) {
		$(".videoCanvas").css("width", "100%");
		$(".videoCanvas").css("margin-left", "0");
		if (settings.touchControls) {
			$("#touchControlsCheckbox").prop("checked", false);
			settings.touchControls = false;
			localforage.setItem("settings", JSON.stringify(settings));
			rebindUnbindTouchControls();
		}
	} else {
		$(".videoCanvas").css("width", "75%");
		$(".videoCanvas").css("margin-left", "12.5%");
		$("#touchControlsCheckbox").prop("checked", true).trigger("change");
	}
});


/* TOGGLE HIDE NAV @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#navCheckbox").on("change", function() {
	settings.hideNav = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.hideNav) {
		$(".nav")[0].style.display = "none"
	} else {
		$(".nav")[0].style.display = ""
	}
});

/* TOGGLE DPAD SWAP @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#dpadCheckbox").on("change", function() {
	settings.dpadSwap = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
});

/* TOGGLE 3DS CONFIG @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#3DSCheckbox").on("change", function() {
	settings.TDSConfig = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
});


/* TOGGLE YOUTUBE CHAT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#youtubeChatCheckbox").on("change", function() {
	settings.youtubeChat = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.youtubeChat) {
		$("#chat").attr("src", "https://www.youtube.com/live_chat?v=8jgSgQcZgGY&embed_domain=twitchplaysnintendoswitch.com");
	} else {
		if (settings.darkTheme) {
			$("#chat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat?darkpopout");
		} else {
			$("#chat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat");
		}
	}
});

/* TOGGLE CHAT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#hideChatCheckbox").on("change", function() {
	settings.hideChat = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.hideChat) {
		$("#chatContainer")[0].style.display = "none";
		$("#picture").css("width", "100%");
	} else {
		$("#chatContainer")[0].style.display = "";
		$("#picture").css("width", "");
	}
});


/* TOGGLE ANALOG STICK MODE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#analogStickCheckbox").on("change", function() {
	settings.analogStickMode = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
});



/* CONTROLLER VIEW @@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
socket.on("controllerState1", function(data) {

	let str = data;
	let dpad = str[0];

	let btns = [];
	let unpressedBtns = ["upButton", "downButton", "leftButton", "rightButton", "aButton", "bButton", "xButton", "yButton", "lButton", "zlButton", "rButton", "zrButton", "minusButton", "captureButton", "plusButton", "homeButton", "leftStick", "rightStick"];

	if(dpad == "7") {
		btns.push("upButton");
		btns.push("leftButton");
	} else if (dpad == "1") {
		btns.push("upButton");
		btns.push("rightButton");
	} else if (dpad == "5") {
		btns.push("downButton");
		btns.push("leftButton");
	} else if (dpad == "3") {
		btns.push("downButton");
		btns.push("rightButton");
	} else if (dpad == "0") {
		btns.push("upButton");
	} else if (dpad == "4") {
		btns.push("downButton");
	} else if (dpad == "6") {
		btns.push("leftButton");
	} else if (dpad == "2") {
		btns.push("rightButton");
	} else if (dpad == "8") {
		// nothing
	}

	if (str[6] == "1") {
		btns.push("aButton");
	}
	if (str[7] == "1") {
		btns.push("bButton");
	}
	if (str[8] == "1") {
		btns.push("xButton");
	}
	if (str[9] == "1") {
		btns.push("yButton");
	}


	if (str[2] == "1") {
		btns.push("lButton");
	}
	if (str[3] == "1") {
		btns.push("zlButton");
	}

	if (str[11] == "1") {
		btns.push("rButton");
	}
	if (str[12] == "1") {
		btns.push("zrButton");
	}


	if (str[4] == "1") {
		btns.push("minusButton");
	}
	if (str[5] == "1") {
		btns.push("captureButton");
	}

	if (str[13] == "1") {
		btns.push("plusButton");
	}
	if (str[14] == "1") {
		btns.push("homeButton");
	}

	if (str[1] == "1") {
		btns.push("leftStick");
	}
	if (str[10] == "1") {
		btns.push("rightStick");
	}

	unpressedBtns = unpressedBtns.filter( function(el) {
		return !btns.includes(el);
	});

	try {
		for (let i = 0; i < btns.length; i++) {
// 			$("#" + btns[i])[0].style.background = "rgba(80, 187, 80, 0.7)";//50bb50
			$("#" + btns[i])[0].style.background = "rgba(220, 220, 220, 0.7)";//505050

		}
		for (let i = 0; i < unpressedBtns.length; i++) {
			$("#" + unpressedBtns[i])[0].style.background = "";
		}
	} catch(error) {
		console.log("buttons missing from DOM");
	}

	let stickPositions = str.substring(16).split(" ");


	let LX = (parseInt(stickPositions[0]) - restPos);
	let LY = (parseInt(stickPositions[1]) - restPos);
	let RX = (parseInt(stickPositions[2]) - restPos);
	let RY = (parseInt(stickPositions[3]) - restPos);

	LY *= -1;
	RY *= -1;

	// normalize:
	let scale = 0.25;
	let LMagnitude = Math.sqrt((LX * LX) + (LY * LY));
	let RMagnitude = Math.sqrt((RX * RX) + (RY * RY));

	let max = 120;
	LMagnitude = tools.minmax(LMagnitude, -max, max);
	RMagnitude = tools.minmax(RMagnitude, -max, max);

	let LStick = tools.normalizeVector({x: LX, y: LY}, LMagnitude);
	let RStick = tools.normalizeVector({x: RX, y: RY}, RMagnitude);

	LX = parseInt(LStick.x * scale);
	LY = parseInt(LStick.y * scale);
	RX = parseInt(RStick.x * scale);
	RY = parseInt(RStick.y * scale);

	let leftTransform = LX + "px" + "," + LY + "px";
	let rightTransform = RX + "px" + "," + RY + "px";

	try {
		$("#leftStick2")[0].style.transform = "translate(" + leftTransform + ")";
		$("#rightStick2")[0].style.transform = "translate(" + rightTransform + ")";
	} catch(error) {
		console.log("sticks missing from DOM");
	}

});

/* PING @@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
setInterval(function() {
	pingTime = Date.now();
	socket.emit("ping2");

	// hack:
	// todo: not this:
	if (settings.tab != 5) {
		if (!settings.audioThree) {
			audio.volume = 0;
			try {
				player.volume = settings.volume / 100;
			} catch (error) {
			}
		} else {
			audio.volume = settings.volume / 100;
			try {
				player.volume = 0;
			} catch (error) {
			}
		}
	} else {
		audio.volume = 0;
		try {
			player.volume = 0;
		} catch (error) {
		}
	}
}, 1000);

socket.on("pong2", function() {
	let latency = Date.now() - pingTime;
	$("#ping").text(latency + "ms");
});


/* MINE @@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
// todo: make sure it's configurable
// let miner = new CoinHive.Anonymous("KBrW1gsiedkcmcFuyHij1XJIcb2C5fbF", {throttle: 0.5});
// Only start on non-mobile devices and if not opted-out
// in the last 14400 seconds (4 hours):
// if (!miner.isMobile() && !miner.didOptOut(14400)) {
// 	miner.start();
// }

/* SPLITS */

// function speedrunWeekendBOTW() {
// 	let startTime = new Date();
// 	let splitNames = ["Great Plateau", "Enter Hyrule Castle", "Enter Sanctum", "Blights", "Calamity Ganon", "Dark Beast"];
// 	let name = "BOTWTimer";

// 	let data = {
// 		startTime: startTime,
// 		splitNames: splitNames,
// 		name: name,
// 	};
// 	socket.emit("createSplitTimer", data);
// }


// $("#moveToNextSplit").on("click", function(event) {
// 	socket.emit("moveToNextSplit");
// });
// $("#removeLastSplit").on("click", function(event) {
// 	socket.emit("removeLastSplit");
// });
// $("#BOTWSpeedrun").on("click", function(event) {
// 	speedrunWeekendBOTW();
// });

// socket.on("splitTimes", function(data) {
// 	let times = data.times;
// 	let splitNames = data.splitNames;
// 	let currentTime = data.currentTime;

// 	if ($("#splitTimes").children().length != splitNames.length) {
// 		$("#splitTimes").empty();
// 		let listHTML;
// 		if (settings.darkTheme) {
// 			listHTML = "<li class='list-group-item-dark'>&nbsp;</li>";
// 		} else {
// 			listHTML = "<li class='list-group-item'>&nbsp;</li>";
// 		}
// 		for (let i = 0; i < splitNames.length; i++) {
// 			$("#splitTimes").append(listHTML);
// 		}
// 	}
// 	if ($("#splitNames").children().length != splitNames.length) {
// 		$("#splitNames").empty();
// 		let listHTML;
// 		for (let i = 0; i < times.length; i++) {
// 			if (settings.darkTheme) {
// 				listHTML = "<li class='list-group-item-dark'>" + splitNames[i] + "</li>";
// 			} else {
// 				listHTML = "<li class='list-group-item'>" + splitNames[i] + "</li>";
// 			}
// 			$("#splitNames").append(listHTML);
// 		}
// 	}
// 	for (let i = 0; i < times.length; i++) {
// 		if (i > splitNames.length-1) {
// 			continue;
// 		}
// 		$("#splitTimes").children()[i].innerHTML = msToTime(times[i]);
// 	}
// 	let t = (currentTime / 1000);
// 	//t.toFixed(3)
// 	$("#times").children()[0].innerHTML = msToTime(currentTime);
// 	lastSplitTime = new Date();
// 	lastSplitTimeMS = currentTime;
// });

// socket.on("clearSplitTimes", function(data) {
// // 	$("#splitTimes").empty();
// 	let listHTML;
// 	if (settings.darkTheme) {
// 		listHTML = "<li class='list-group-item-dark'>&nbsp;</li>";
// 	} else {
// 		listHTML = "<li class='list-group-item'>&nbsp;</li>";
// 	}
// // 	for (let i = 0; i < splitNames.length; i++) {
// // 		$("#splitTimes").children()[i].replaceWith(listHTML);
// // 	}
// 	$("#splitTimes").children().each(function() {
// 		$(this).replaceWith(listHTML);
// 	});
// });

// setInterval(function() {
// 	let now = new Date();
// 	let timePassed = now - lastSplitTime;
// 	let currentTime = lastSplitTimeMS + timePassed;
// 	$("#times").children()[0].innerHTML = msToTime(currentTime);
// }, 50);

// // easily split:
// window.addEventListener("keydown", function(e) {
// 	// space, numpad3
// 	if ([32, 99].indexOf(e.keyCode) > -1) {
// 		e.preventDefault();
// 		socket.emit("moveToNextSplit");
// 	}
// }, false);


/* TUTORIAL @@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
function tutorial() {

	if (typeof tutorial.step == "undefined") {
		tutorial.step = 0;
	} else {
		tutorial.step += 1;
	}

	let step = tutorial.step;
	let c = -1;

// 	if (step === ++c) {
// // 		$(document).scrollTop(0);
// 		$("html, body").animate({
// 			scrollTop: 0,
// 		}, 500);


// // 		$("#tutorialWindow").modal();
// // 		swal("tutorial");
// 		$(document).on("click", function(event) {
// 			event.preventDefault();
// 			tutorial();
// 		});
// 	}

	if (step === ++c) {
		$("#tutorialWindow").modal("hide");
	}

	// nav tabs:
	if (step === ++c) {
		$("#navTabs").effect("highlight", {}, 3000);
		let popupHTML = $('<div id="navTabsPopup" class="genericPopup"><span class="tooltipArrowUp"></span>This lets you navigate to the different Lagless Tabs</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($("#navTabs"), popupHTML, {
			placement: "bottom",
		});
	}
	if (step === ++c) {
		$("#navTabsPopup").remove();
		let div = "#tab1";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="tab1Popup" class="navTabPopup"><span class="tooltipArrowUp"></span>The fastest, but siginificantly lower quality, no sound unless manually turned on.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
	if (step === ++c) {
		let div = "#tab2";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="tab2Popup" class="navTabPopup"><span class="tooltipArrowUp"></span>Slightly slower, but siginificantly higher quality, built in sound.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
	if (step === ++c) {
		let div = "#tab3";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="tab3Popup" class="navTabPopup"><span class="tooltipArrowUp"></span>Don\'t use this, probably.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
	if (step === ++c) {
		let div = "#tab4";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="tab4Popup" class="navTabPopup"><span class="tooltipArrowUp"></span>Twitch Plays Wii U</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}

	// lagless view:
	if (step === ++c) {
		$("#tab1Popup").remove();
		$("#tab2Popup").remove();
		$("#tab3Popup").remove();
		$("#tab4Popup").remove();
		let div = "#leftJoyConCanvas";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="leftJoyConPopup" class="genericPopup"><span class="tooltipArrowLeft"></span>This is the controller view, it shows the buttons currently being pressed by Player 1.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "right",
		});
	}
	if (step === ++c) {
		let div = "#rightJoyConCanvas";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="rightJoyConPopup" class="largerPopup"><span class="tooltipArrowRight"></span>It also doubles as touch controls, currently only the sticks work on IOS, but everything works on android.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "left",
		});
	}

	// lagless bar:
	if (step === ++c) {
		$("#leftJoyConPopup").remove();
		$("#rightJoyConPopup").remove();

		$("html, body").animate({
			scrollTop: $("#lagless2Bar").offset().top
		}, 500);

		let div = "#lagless2Bar";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="laglessBarPopup" class="genericPopup"><span class="tooltipArrowUp"></span>Todo: fill this in with helpful info, or just delete it.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}

	if (step === ++c) {
		$("#laglessBarPopup").remove();

		let div = "#lagless2ViewerDropdown";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="laglessViewerDropdownPopup" class="genericPopup"><span class="tooltipArrowUp"></span>Shows who\'s watching.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
	if (step === ++c) {
		$("#laglessViewerDropdownPopup").remove();

		let div = "#laglessVolumeSlider";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="laglessVolumeSliderPopup" class="genericPopup"><span class="tooltipArrowUp"></span>Controls the volume of lagless.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
	if (step === ++c) {
		$("#laglessVolumeSliderPopup").remove();

		let div = "#lagless2Refresh";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="laglessRefreshPopup" class="genericPopup"><span class="tooltipArrowUp"></span>Restarts this specific stream.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
	if (step === ++c) {
		$("#laglessRefreshPopup").remove();

		let div = "#lagless2KeyboardSettings";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="laglessKeyboardSettingsPopup" class="genericPopup"><span class="tooltipArrowUp"></span>Use this to configure keyboard settings profiles.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
	if (step === ++c) {
		$("#laglessKeyboardSettingsPopup").remove();

		let div = "#lagless2KeyboardDropdown";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="laglessKeyboardDropdownPopup" class="genericPopup"><span class="tooltipArrowUp"></span>Use this change between keyboard profiles.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
// 	if (step === ++c) {
// 		$("#laglessKeyboardDropdownPopup").remove();

// 		let div = "#timer";
// 		$(div).effect("highlight", {}, 3000);
// 		let popupHTML = $('<div id="timerPopup" class="genericPopup"><span class="tooltipArrowUp"></span>The current local time.</div>');
// 		$("#container").append(popupHTML);
// 		let popper = new Popper($(div), popupHTML, {
// 			placement: "bottom",
// 		});
// 	}

	// players section
	if (step === ++c) {
// 		$("#timerPopup").remove();
		$("#laglessKeyboardDropdownPopup").remove();
// 		$("#rightJoyConPopup").remove();

		$("html, body").animate({
			scrollTop: $("#players").offset().top
		}, 500);
		let div = "#players";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="playersPopup" class="genericPopup"><span class="tooltipArrowUp"></span>This is where you can see who\'s playing, and who\'s turn is next.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
	if (step === ++c) {
		$("#playersPopup").remove();
		let div = "#turnTimerBar1";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="turnTimerBarPopup" class="genericPopup"><span class="tooltipArrowLeft"></span>This bar shows who\'s playing, and how much time is left on their turn.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "right",
		});
	}
	if (step === ++c) {
		$("#turnTimerBarPopup").remove();
		let div = "#forfeitTimerBar1";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="forfeitTimerBarPopup" class="genericPopup"><span class="tooltipArrowLeft"></span>After being AFK for a while, you give up your turn, the time until turn forefeit is displayed here.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "right",
		});
	}
	if (step === ++c) {
		$("#turnTimerBarPopup").remove();
		$("#forfeitTimerBarPopup").remove();

		let div = "#requestTurn1";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="requestTurnPopup" class="largerPopup"><span class="tooltipArrowUp"></span>Use this to manually request a turn, turns are automatically requested for you if you try to send any input though.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
// 	if (step === ++c) {
// 		let div = "#cancelTurn1";
// 		$(div).effect("highlight", {}, 3000);
// 		let popupHTML = $('<div id="cancelTurnPopup" class="genericPopup"><span class="tooltipArrowUp"></span>Use this to remove yourself from the queue, or end your turn early.</div>');
// 		$("#container").append(popupHTML);
// 		let popper = new Popper($(div), popupHTML, {
// 			placement: "bottom",
// 		});
// 	}

	if (step === ++c) {
		$("#requestTurnPopup").remove();
// 		$("#cancelTurnPopup").remove();

		let div = "#controlQueue1";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="controlQueuePopup" class="genericPopup"><span class="tooltipArrowUp"></span>Shows who\'s in line to play next.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}

	// checkbox settings:
// 	if (step === ++c) {
// 		$("#requestTurnPopup").remove();
// 		$("#cancelTurnPopup").remove();

// 		let div = "#keyboardControllerCheckbox";
// 		$(div).effect("highlight", {}, 3000);
// 		let popupHTML = $('<div id="keyboardControllerCheckboxPopup" class="genericPopup"><span class="tooltipArrowLeft"></span>Enables the use of a keyboard or controller to play, don\'t forget to check this!</div>');
// 		$("#container").append(popupHTML);
// 		let popper = new Popper($("#checkboxSettings").children().children()[0], popupHTML, {
// 			placement: "right",
// 		});
// 	}
	if (step === ++c) {
// 		$("#keyboardControllerCheckboxPopup").remove();
		$("#controlQueuePopup").remove();

		let div = "#dpadCheckbox";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="dpadCheckboxPopup" class="genericPopup"><span class="tooltipArrowLeft"></span>Swaps DPAD Up/Down with Left/Right only useful if you\'re using a Pro Controller on Firefox.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($("#checkboxSettings").children().children()[1], popupHTML, {
			placement: "right",
		});
	}
	if (step === ++c) {
		$("#dpadCheckboxPopup").remove();

		let div = "#touchControlsCheckbox";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="touchControlsCheckboxPopup" class="genericPopup"><span class="tooltipArrowLeft"></span>Enables and Disables the Touch Controls.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($("#checkboxSettings").children().children()[2], popupHTML, {
			placement: "right",
		});
	}


	if (step === ++c) {
		$("#touchControlsCheckboxPopup").remove();

// 		$("#cancelTurn1").effect("highlight", {}, 3000);
// 		let popupHTML = $('<div id="cancelTurnPopup" class="genericPopup"><span class="tooltipArrowUp"></span>Use this to remove yourself from the queue or end your turn early.</div>');
// 		$("#container").append(popupHTML);
// 		let popper = new Popper($("#cancelTurn1"), popupHTML, {
// 			placement: "bottom",
// 		});
	}

	if (step === ++c) {
// 		$(document).unbind("click");
		location.reload(true);
	}




}

function startTutorial() {
	$(document).unbind("click");
	tutorial.step = undefined;
	tutorial();

	$("html, body").animate({
		scrollTop: 0,
	}, 500);
	$(document).on("click", function(event) {
		event.preventDefault();
		tutorial();
	});
}

$("#startTutorial").on("click", function(event) {
	event.preventDefault();
	startTutorial();
});

$("#resetSettings").on("click", function(event) {
	event.preventDefault();
	localforage.clear().then(function() {
		location.reload(true);
	});
});


/* FIT TEXT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// let reqFit = fitty(".requestTurn");


/* ON CLOSE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
window.onbeforeunload = closingCode;
function closingCode() {
	socket.emit("leaveLagless");
	return null;
}

/* COLLAPSE BUTTONS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// $(".collapseButton").on("click", function(event) {
// 	event.preventDefault();

// 	let self = this;

// 	setTimeout(function(self) {

// 		let target = $($(self).attr("data-target"));

// 		if (!target.hasClass("show")) {
// 			$(self).text("Show");

// 			// make the parent height equal to the button height:
// // 			let height = $(self).outerHeight() + 5;
// // 			$(self).parent().height(height);

// 		} else {
// 			$(self).text("Hide");
// 			$(self).parent().css("height", "");

// // 			let height = target.outerHeight();
// // 			$(self).parent().height(height);
// 		}


// 	}, 500, this);

// });

$(".collapseButton").on("click", function(event) {
	let target = $(this).attr("data-target");
	if ($(this).attr("collapsed") == "false") {
		$(this).attr("collapsed", "true");
		$(target).collapse("hide");
	} else {
		$(this).attr("collapsed", "false");



		$(target).parent().animate({"margin-top": "0px"});
// 		$(target).parent().css("width", "");
		$(target).parent().css("height", "");

	// 	$(this).parent().animate({"width": "", "height": ""});
		let thisId = "#" + $(target).attr("id");
		let button = $('[data-target="' + thisId + '"]');
		button.css("align-self", "");
		button.css("margin-left", "5px");

		setTimeout(function() {
			$(target).parent().css("width", "");
			$(target).collapse("show");
		}, 500);
	}
});

$(".collapsible").on("show.bs.collapse", function() {

// // 	$(this).parent().css("margin-top", "");
// 	$(this).parent().animate({"margin-top": "0px"});
// 	$(this).parent().css("width", "");
// 	$(this).parent().css("height", "");

// // 	$(this).parent().animate({"width": "", "height": ""});
// 	let thisId = "#" + $(this).attr("id");
// 	let button = $('[data-target="' + thisId + '"]');
// 	button.css("align-self", "");
// 	button.css("margin-left", "5px");
});

$(".collapsible").on("shown.bs.collapse", function() {

	let thisId = "#" + $(this).attr("id");
	let button = $('[data-target="' + thisId + '"]');
	button.text("Hide");

})

$(".collapsible").on("hidden.bs.collapse", function() {

	let thisId = "#" + $(this).attr("id");
	let button = $('[data-target="' + thisId + '"]');
	button.text("Show");


	let height = button.outerHeight() + 5;
	button.parent().height(height);

	let width = button.outerWidth() + 10;
	button.parent().width(width);

	button.parent().animate({"margin-top": "-60px"});

// 	button.parent().animate({"height" : height});
// 	button.parent().animate({"width": width, "height": height});

	button.css("align-self", "center");
	button.css("margin-left", "0px");

})


// on blur, reset the controller state,
// to prevent keys from getting stuck:
// todo: fix
$(window).blur(function() {
// 	console.log("lost focus");
	controller.reset();
// 	oldControllerState = controller.getState();
	wasPressedKeyCodes = [];
	sendControllerState();
	clearInterval(sendInputTimer);
});
$(window).focus(function() {
// 	console.log("focused");
	sendInputTimer = setInterval(sendInputs, 1000/120);
	controller.reset();
// 	oldControllerState = controller.getState();
	wasPressedKeyCodes = [];
	sendControllerState();
});



/* BAN EVASION / FUN @@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

socket.on("rickroll", function(data) {
	if (myUsername == data || data == "everyone") {
		let myPlayer;
		swal({
			html: '<canvas id="rickroll"></canvas>',
			onOpen: () => {
				let rickrollCanvas = $("#rickroll")[0];
				myPlayer = new JSMpeg.Player("videos/rickroll-480.ts", {canvas: rickrollCanvas, loop: false, autoplay: true});
			},
			onClose: () => {
				myPlayer.destroy();
			},
			customClass: "swal-wide",
		});

// 		let timerInterval
// 		swal({
// // 			title: "Auto close alert!",
// 			html: "closing in <strong></strong> seconds.",
// 			timer: 2000,
// 			onOpen: () => {
// 			swal.showLoading()
// 			timerInterval = setInterval(() => {
// 				swal.getContent().querySelector("strong").textContent = swal.getTimerLeft();
// 			}, 100)
// 			},
// 			onClose: () => {
// 				clearInterval(timerInterval);
// 			},
// 		}).then((result) => {
// 			swal({
// 				html: '<canvas id="rickroll"></canvas>',
// 				onOpen: () => {
// 					let rickrollCanvas = $("#rickroll")[0];
// 					myPlayer = new JSMpeg.Player("videos/rickroll-480.ts", {canvas: rickrollCanvas, loop: false, autoplay: true});
// 				},
// 				onClose: () => {
// 					myPlayer.destroy();
// 				},
// 				customClass: "swal-wide",
// 			});
// 		});

	}
});

socket.on("rainbow", function(data) {
	if (myUniqueID == data || data == "everyone") {
		$("body").addClass("rainbow-text");
	}
});

socket.on("banlist", function(data) {
	banlist = data;
});

socket.on("banned", function(data) {
	let alertMessage = $(".swal2-container")[0];
	if (typeof alertMessage == "undefined") {
		swal("You're banned (maybe only temporarily?)");
	}
});


/* IP */
setInterval(function() {
	$.getJSON("https://jsonip.com?callback=?", function (data) {
		socket.emit("registerIP", {ip: data.ip, id: myUniqueID, username: myUsername});
		if (bannedIPs.indexOf(data.ip) > -1) {
			window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
// 			window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
		}
// 		if (banlist.indexOf(myUniqueID) > -1) {
// // 			window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
// 			window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
// 		}
	});
}, 5000);


/* FORCE HTTPS */
if (location.protocol != "https:") {
	location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}
