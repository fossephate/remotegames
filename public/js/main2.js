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
let currentTab = "#lagless1";
let currentPlayerChosen = 0;
let wasPressedKeyCodes = [];
let viewerCounts = [];
let viewers = [];
let lastSplitTime = 0;
let lastSplitTimeMS = 0;
let loaded = false;

let controlQueues = [];
let controlQueue1 = [];
let controlQueue2 = [];
let controlQueue3 = [];
let controlQueue4 = [];
let controlQueue5 = [];
let twitchUsername = null;

// settings:
let settings = {
	audio: false,
	keyboardControls: false,
	controllerControls: false,
	touchControls: true,
	mouseControls: false,
	currentInputMode: null,
	darkTheme: false,
	fullscreen: false,
	largescreen: false,
	hideChat: false,
	hideNav: false,
	deadzone: 50,
	stickSensitivityX: 1,
	stickSensitivityY: 1,
	keyboardProfiles: {},
	tab: 2,
	dpadSwap: false,
};
// let toggleAudio = false;
// let toggleDarkTheme = false;
// let toggleFullscreen = false;
// let stickSensitivityX = 1;
// let stickSensitivityY = 1;

let lagless1Settings = {};
let lagless2Settings = {videoBitrate: 1, scale: 960, offsetX: 0, offsetY: 0};
let lagless4Settings = {videoBitrate: 1, scale: 960, offsetX: 0, offsetY: 0};
let disableController = false;

// detect firefox:
// todo: make user configurable
if(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
	settings.stickSensitivityX = 1.5;
	settings.stickSensitivityY = 1.5;
}

let timeLeft = 30000;
let timeLeft2 = 30000;
let turnLength = 30000;
let timeTillForfeit = 15000;
let timeTillForfeit2 = timeTillForfeit;// todo: remove
let turnUsername = null;
let turnUsername2 = null;
let lastCurrentTime = 0;
let lastCurrentTime2 = 0;

let mouseMoveTimer = null;
let isMobile = false;
let pingTime = 0;
let restPos = 128;
let oldControllerState = "800000000000000" + " " + restPos + " " + restPos + " " + restPos + " " + restPos;
let stats = new Stats();
let lagless1Port = 8001;
let lagless2Port = 8002;
let lagless3Port = 8003;
let lagless4Port = 8004;
stats.showPanel(0);// 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild(stats.dom);

/* MOBILE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
// check if on mobile
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if (isMobile) {
	swal({
		title: "Do you want to go to the mobile site?",
// 		text: "You won't be able to revert this!",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes",
		cancelButtonText: "No",
	}).then((result) => {
		if (result.value) {
			window.location = "https://twitchplaysnintendoswitch.com/mobile.html";
		}
	});
}

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

controller = {};
controller.btns = {};
controller.LStick = {
	x: restPos,
	y: restPos
};
controller.RStick = {
	x: restPos,
	y: restPos
};

controller.btns.up = 0;
controller.btns.down = 0;
controller.btns.left = 0;
controller.btns.right = 0;
controller.btns.stick_button = 0;
controller.btns.l = 0;
controller.btns.zl = 0;
controller.btns.minus = 0;
controller.btns.capture = 0;

controller.btns.a = 0;
controller.btns.b = 0;
controller.btns.x = 0;
controller.btns.y = 0;
controller.btns.stick_button2 = 0;
controller.btns.r = 0;
controller.btns.zr = 0;
controller.btns.plus = 0;
controller.btns.home = 0;

controller.reset = function() {
	for (let prop in controller.btns) {
		controller.btns[prop] = 0;
	}
	controller.LStick.x = restPos;
	controller.LStick.y = restPos;
	controller.RStick.x = restPos;
	controller.RStick.y = restPos;
}

controller.getState = function() {
	
	this.LStick.x = minmax(this.LStick.x, 0, 255);
	this.LStick.y = minmax(this.LStick.y, 0, 255);
	this.RStick.x = minmax(this.RStick.x, 0, 255);
	this.RStick.y = minmax(this.RStick.y, 0, 255);
	
	let state = "";

	if (this.btns.up == 1 && this.btns.left == 1) {
		state += "7";
	} else if (this.btns.up == 1 && this.btns.right == 1) {
		state += "1";
	} else if (this.btns.down == 1 && this.btns.left == 1) {
		state += "5";
	} else if (this.btns.down == 1 && this.btns.right == 1) {
		state += "3";
	} else if (this.btns.up == 1) {
		state += "0";
	} else if (this.btns.down == 1) {
		state += "4";
	} else if (this.btns.left == 1) {
		state += "6";
	} else if (this.btns.right == 1) {
		state += "2";
	} else {
		state += "8";
	}

	state += this.btns.stick_button;
	state += this.btns.l;
	state += this.btns.zl;
	state += this.btns.minus;
	state += this.btns.capture;

	state += this.btns.a;
	state += this.btns.b;
	state += this.btns.x;
	state += this.btns.y;
	state += this.btns.stick_button2;
	state += this.btns.r;
	state += this.btns.zr;
	state += this.btns.plus;
	state += this.btns.home;


	let LX = this.LStick.x;
	let LY = this.LStick.y;
	let RX = this.RStick.x;
	let RY = this.RStick.y;

	state += " " + LX + " " + LY + " " + RX + " " + RY;
	
	return state;
}

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
	
// 	if(controlQueues[0].indexOf(twitchUsername) == -1 && currentPlayerChosen == 0) {
// 		socket.emit("requestTurn", 0);
// 	}
// 	if(controlQueues[1].indexOf(twitchUsername) == -1 && currentPlayerChosen == 1) {
// 		socket.emit("requestTurn", 1);
// 	}
// 	if(controlQueues[2].indexOf(twitchUsername) == -1 && currentPlayerChosen == 2) {
// 		socket.emit("requestTurn", 1);
// 	}
// 	if(controlQueues[3].indexOf(twitchUsername) == -1 && currentPlayerChosen == 3) {
// 		socket.emit("requestTurn", 1);
// 	}
	
	if(controlQueues[currentPlayerChosen].indexOf(twitchUsername) == -1) {
		socket.emit("requestTurn", currentPlayerChosen);
	}
	
	if(controlQueues[currentPlayerChosen].indexOf(twitchUsername) > 0 && controlQueues[currentPlayerChosen].length > 0) {
		swal("It's not your turn yet!");
	}
	
	let obj = {state: newControllerState, cNum: 0}
	
	if (controlQueues[0][0] == twitchUsername) {
		obj.cNum = 0;
	} else if (controlQueues[1][0] == twitchUsername) {
		obj.cNum = 1;
	} else if (controlQueues[2][0] == twitchUsername) {
		obj.cNum = 2;
	} else if (controlQueues[3][0] == twitchUsername) {
		obj.cNum = 3;
	} else if (controlQueues[4][0] == twitchUsername) {
		obj.cNum = 4;
	}
	console.log(obj.state, obj.cNum);
	socket.emit("sendControllerState", obj);
}

function getKeyboardInput() {

	if (!$("#keyboardControlsCheckbox")[0].checked) {
		return;
	}
	let authCookie = getCookie("TwitchPlaysNintendoSwitch");
	if (authCookie == null) {
		$("#keyboardControlsCheckbox").prop("checked", false);
		swal("You need to connect to twitch! Redirecting you now!");
		setTimeout(function() {
			window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
		}, 2000);
		return;
	}
	
	let oldControllerState = controller.getState();

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

	if (key.isPressed(keyboardLayout.XBtn)) {
		controller.btns.x = 1;
	} else if(key.wasPressed(keyboardLayout.XBtn, wasPressedKeyCodes)) {
		controller.btns.x = 0;
	}
	if (key.isPressed(keyboardLayout.BBtn)) {
		controller.btns.b = 1;
	} else if(key.wasPressed(keyboardLayout.BBtn, wasPressedKeyCodes)) {
		controller.btns.b = 0;
	}
	if (key.isPressed(keyboardLayout.YBtn)) {
		controller.btns.y = 1;
	} else if(key.wasPressed(keyboardLayout.YBtn, wasPressedKeyCodes)) {
		controller.btns.y = 0;
	}
	if (key.isPressed(keyboardLayout.ABtn)) {
		controller.btns.a = 1;
	} else if(key.wasPressed(keyboardLayout.ABtn, wasPressedKeyCodes)) {
		controller.btns.a = 0;
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
	}
	
	//sendControllerState();
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
		$("#mouseControlsCheckbox").prop("checked", false);
	}
}, false);

// function getMouseInput() {
// 	if (!$("#mouseControlsCheckbox")[0].checked) {
// 		return;
// 	}
	
// 	//canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;
// }


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
	
	controller.RStick.x = minmax(controller.RStick.x, 0, 255);
	controller.RStick.y = minmax(controller.RStick.y, 0, 255);
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

let c = $("#videoCanvas2")[0];
c.requestPointerLock = c.requestPointerLock || c.mozRequestPointerLock;
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
	controller.btns.b = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "button_1", e => {
	controller.btns.b = 0;
	settings.currentInputMode = "controller";
});

gamepad.on("press", "button_2", e => {
	controller.btns.a = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "button_2", e => {
	controller.btns.a = 0;
	settings.currentInputMode = "controller";
});

gamepad.on("press", "button_3", e => {
	controller.btns.y = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "button_3", e => {
	controller.btns.y = 0;
	settings.currentInputMode = "controller";
});

gamepad.on("press", "button_4", e => {
	controller.btns.x = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "button_4", e => {
	controller.btns.x = 0;
	settings.currentInputMode = "controller";
});


gamepad.on("press", "shoulder_top_left", e => {
	controller.btns.l = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "shoulder_top_left", e => {
	controller.btns.l = 0;
	settings.currentInputMode = "controller";
});

gamepad.on("press", "shoulder_top_right", e => {
	controller.btns.r = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "shoulder_top_right", e => {
	controller.btns.r = 0;
	settings.currentInputMode = "controller";
});

gamepad.on("press", "shoulder_bottom_left", e => {
	controller.btns.zl = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "shoulder_bottom_left", e => {
	controller.btns.zl = 0;
	settings.currentInputMode = "controller";
});

gamepad.on("press", "shoulder_bottom_right", e => {
	controller.btns.zr = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "shoulder_bottom_right", e => {
	controller.btns.zr = 0;
	settings.currentInputMode = "controller";
});

gamepad.on("press", "select", e => {
	controller.btns.minus = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "select", e => {
	controller.btns.minus = 0;
	settings.currentInputMode = "controller";
});
gamepad.on("press", "start", e => {
	controller.btns.plus = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "start", e => {
	controller.btns.plus = 0;
	settings.currentInputMode = "controller";
});



gamepad.on("press", "d_pad_up", e => {
	if (settings.dpadSwap) {
		controller.btns.left = 1;
		settings.currentInputMode = "controller";
	} else {
		controller.btns.up = 1;
		settings.currentInputMode = "controller";
	}
});
gamepad.on("release", "d_pad_up", e => {
	if (settings.dpadSwap) {
		controller.btns.left = 0;
		settings.currentInputMode = "controller";
	} else {
		controller.btns.up = 0;
		settings.currentInputMode = "controller";
	}
});

gamepad.on("press", "d_pad_down", e => {
	if (settings.dpadSwap) {
		controller.btns.right = 1;
		settings.currentInputMode = "controller";
	} else {
		controller.btns.down = 1;
		settings.currentInputMode = "controller";
	}
});
gamepad.on("release", "d_pad_down", e => {
	if (settings.dpadSwap) {
		controller.btns.right = 0;
		settings.currentInputMode = "controller";
	} else {
		controller.btns.down = 0;
		settings.currentInputMode = "controller";
	}
});

gamepad.on("press", "d_pad_left", e => {
	controller.btns.left = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "d_pad_left", e => {
	controller.btns.left = 0;
	settings.currentInputMode = "controller";
});

gamepad.on("press", "d_pad_right", e => {
	controller.btns.right = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "d_pad_right", e => {
	controller.btns.right = 0;
	settings.currentInputMode = "controller";
});

gamepad.on("hold", "stick_axis_left", e => {
	let x = e.value[0]*settings.stickSensitivityX;
	let y = e.value[1]*settings.stickSensitivityY;
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
	settings.currentInputMode = "controller";
});
gamepad.on("press", "stick_axis_left", e => {
	let x = e.value[0]*settings.stickSensitivityX;
	let y = e.value[1]*settings.stickSensitivityY;
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
	settings.currentInputMode = "controller";
});
gamepad.on("release", "stick_axis_left", e => {
	let x = e.value[0]*settings.stickSensitivityX;
	let y = e.value[1]*settings.stickSensitivityY;
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
	settings.currentInputMode = "controller";
});
gamepad.on("hold", "stick_axis_right", e => {
	let x = e.value[0]*settings.stickSensitivityX;
	let y = e.value[1]*settings.stickSensitivityY;
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
	settings.currentInputMode = "controller";
});
gamepad.on("press", "stick_axis_right", e => {
	let x = e.value[0]*settings.stickSensitivityX;
	let y = e.value[1]*settings.stickSensitivityY;
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
	settings.currentInputMode = "controller";
});
gamepad.on("release", "stick_axis_right", e => {
	let x = e.value[0]*settings.stickSensitivityX;
	let y = e.value[1]*settings.stickSensitivityY;
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
	settings.currentInputMode = "controller";
});

gamepad.on("press", "stick_button_left", e => {
	controller.btns.stick_button = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "stick_button_left", e => {
	controller.btns.stick_button = 0;
	settings.currentInputMode = "controller";
});
gamepad.on("press", "stick_button_right", e => {
	controller.btns.stick_button2 = 1;
	settings.currentInputMode = "controller";
});
gamepad.on("release", "stick_button_right", e => {
	controller.btns.stick_button2 = 0;
	settings.currentInputMode = "controller";
});


function getGamepadInput() {

	if (!$("#controllerControlsCheckbox")[0].checked) {
		return;
	}
	let authCookie = getCookie("TwitchPlaysNintendoSwitch");
	if (authCookie == null) {
		$("#controllerControlsCheckbox").prop("checked", false);
		swal("You need to connect to twitch! Redirecting you now!");
		setTimeout(function() {
			window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
		}, 2000);
		return;
	}
}



/* more gamepad support */
// let gamepads = {};

// function gamepadHandler(event, connecting) {
// 	let gamepad = event.gamepad;
// 	// Note:
// 	// gamepad === navigator.getGamepads()[gamepad.index]

// 	if (connecting) {
// 		gamepads[gamepad.index] = gamepad;
// 	} else {
// 		delete gamepads[gamepad.index];
// 	}
// }


// function pollGamepads() {
// 	let gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
// 	for (let i = 0; i < gamepads.length; i++) {
// 		let gp = gamepads[i];
// 		if (gp) {
// 			//console.log(gp.axes[4] + " " + gp.axes[9]);
// 			console.log(gp);
// // 			gamepadInfo.innerHTML = "Gamepad connected at index " + gp.index + ": " + gp.id +
// // 				". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.";
// // 			clearInterval(interval);
// 		}
// 	}
// }
// setInterval(pollGamepads, 1000);

// window.addEventListener("gamepadconnected", function(e) { gamepadHandler(e, true); }, false);
// window.addEventListener("gamepaddisconnected", function(e) { gamepadHandler(e, false); }, false);









/* KEYBOARD CONFIG */


// Get stored preferences
// 	localforage.getItem("keyboardLayout").then(function(value) {
// 		// If they exist, write them
// 		if (value) {
// 			keyboardLayout = value;
// 		}
// 		// Store the preferences (so that the default values get stored)
// 		localforage.setItem("keyboardLayout", keyboardLayout);
// 		// Update the keyboard layout settings window to reflect the stored settings, not the default ones
// 		for (let i = 0; i < $(".buttonConfig").length; i++) {
// 			let div = $(".buttonConfig")[i];
// 			let assignedKey = keyboardLayout[div.id];
// 			$("#" + div.id).html(String.fromCharCode(assignedKey).toLowerCase());
// 		}
// 	});



/* SAVABLE SETTINGS */

// restore preferences:
$(document).ready(function() {
	
	console.log("restoring preferences");
	
	// Get stored preferences
	localforage.getItem("settings").then(function(value) {
		// If they exist, write them
		if (typeof value != "undefined") {
			settings = Object.assign({}, settings, JSON.parse(value));
		}
		// Store the preferences (so that the default values get stored)
		localforage.setItem("settings", JSON.stringify(settings));
		
		if (settings.tab != 1) {
			$("#tab" + settings.tab).trigger("click");
		}
		
		if (settings.darkTheme) {
			$("#darkThemeCheckbox").trigger("click");
		}
		if (settings.audio) {
			$("#audioCheckbox").trigger("click");
		}
		
		
		if (settings.keyboardControls) {
			$("#keyboardControlsCheckbox").trigger("click");
		}
		if (settings.controllerControls) {
			$("#controllerControlsCheckbox").trigger("click");
		}
		if (settings.touchControls) {
			$("#touchControlsCheckbox").trigger("click");
// 			settings.touchControls = true;
// 			$("#touchControlsCheckbox")[0].checked = true;
		}
		if (settings.fullscreen) {
			$("#fullscreenCheckbox").trigger("click");
		}
		if (settings.largescreen) {
			$("#largescreenCheckbox").trigger("click");
		}
		
		if (settings.hideChat) {
			$("#chatCheckbox").trigger("click");
		}
		
		if (settings.hideNav) {
			$("#navCheckbox").trigger("click");
		}
		
		// if (settings.mouseControls) {
		// 	$("#touchControlsCheckbox").trigger("click");
		// }

		$("#deadzoneSlider").slider("value", settings.deadzone);
		$("#deadzone").text(settings.deadzone);

		$("#stickSensitivitySlider").slider("value", settings.stickSensitivityX);
		$("#sensitivity").text(settings.stickSensitivityX);
		
		rebindUnbindTouchControls();
		clearAndReplaceProfiles();
		setKeyboardMapperClasses();
		
		if (settings.tab == 1) {
			// todo:
			// copied from switch implementations, may need to change in the future:
			socket2.emit("join", "viewers");
			socket.emit("joinLagless1");
			// todo: fix this:
			clearInterval(lagless1JoinTimer);
			lagless1JoinTimer = setInterval(function() {
				socket2.emit("join", "viewers");
			}, 5000);
			$("#lagless1Volume").slider("value", 50);
			audioElem.volume = 0.5;// doesn't update automatically :/
			addJoyCons("#lagless" + settings.tab);
			
		}
		setTimeout(drawJoyCons, 1000);
		
		// wait a little longer so the joycon images load:
		setTimeout(function() {
			$("body").addClass("loaded");
			// after animation is done:
			setTimeout(function() {
				$(".loaded #loader-wrapper")[0].style.visibility = "hidden";
			}, 500);
		}, 1000);
		
	});
});


$("#keyboard li").on("click", function(event) {
	if ($(this).hasClass("disabled")) {
		return;
	}
	
	let keyCode;
	keyCode = $(this).attr("id");
// 	console.log(keyCode);
	
	let that = this;
	
	// if we decide to select a new key to pair after selecting a different one, re-pair the original key:
	if (keyboardLayout.tempSelectedKey !== "" && keyboardLayout.tempSelectedKey != $(that).attr("id")) {
		keyboardLayout.tempSelectedKey = keyboardLayout.tempSelectedKey.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g,'\\$1');
		
		let element = $("#" + keyboardLayout.tempSelectedKey);
		if (element.hasClass("keySelected")) {
			element.removeClass("keySelected");
		}
		if (keyboardLayout.tempSelectedAction !== "") {
			element.addClass("keyPaired");
			element.attr("data-toggle", "tooltip");
			element.attr("title", keyboardLayout.tempSelectedAction);
			element.tooltip();
			
			let action = $("#" + keyboardLayout.tempSelectedAction);
			action.attr("title", element.attr("id"));
			action.tooltip();
			action.addClass("actionPaired");
		}
		
		keyboardLayout.tempSelectedKey = "";
		keyboardLayout.tempSelectedAction = "";
		
// 		// new key has been selected:
// 		if ($(that).hasClass("keyPaired")) {
// 			$(that).removeClass("keyPaired");
// 		}
		
// 		$(that).addClass("keySelected");
// 		keyboardLayout.tempSelectedKey = $(that).attr("id");
// 		return;
	}
	
	
	// if it's already paired, unpair it:
	if ($(that).hasClass("keyPaired")) {
		$(that).removeClass("keyPaired");
		$(that).addClass("keySelected");
		// store pair:
		keyboardLayout.tempSelectedAction = $(that).attr("data-original-title") || $(that).attr("title");
		keyboardLayout.tempSelectedKey = $(that).attr("id");
		// delete pair:
		$(that).attr("title", "");
		try {
			$(that).tooltip("dispose");
			$(that).tooltip("destroy");
		} catch(e) {}
		
		let action = $("#" + keyboardLayout.tempSelectedAction);
		action.attr("title", "");
		try {
			action.tooltip("dispose");
			action.tooltip("destroy");
		} catch(e) {}
		action.removeClass("actionPaired");
		
		keyboardLayout[keyboardLayout.tempSelectedAction] = "";
// 		console.log("remapping old key");
	} else {
		// new key has been selected:
		$(that).addClass("keySelected");
		keyboardLayout.tempSelectedKey = $(that).attr("id");
// 		console.log("new key");
	}

// 	swal("test");
// 	$(this).addClass("keySelected");
	//$("#dataTable").attr('data-timer')
});



$("#keyboardConfigCodes2 li").on("click", function(event) {
// 	if (keyboardLayout.tempSelectedAction == "") {
// 		return;
// 	}
	
	let action = $(this).attr("id");
	
	// if this action is not already bound:
	if (keyboardLayout.tempSelectedKey !== "" && keyboardLayout[action] === "") {
		
		keyboardLayout[action] = keyboardLayout.tempSelectedKey;
		
		keyboardLayout.tempSelectedKey = keyboardLayout.tempSelectedKey.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g,'\\$1');
		
		
		if (!$(this).hasClass("actionPaired")) {
			$(this).addClass("actionPaired");
		}
		$(this).attr("data-toggle", "tooltip");
		$(this).attr("title", keyboardLayout.tempSelectedKey);
		$(this).tooltip();
		
		// update key as well:
		let element = $("#" + keyboardLayout.tempSelectedKey);
		element.addClass("keyPaired");
		element.attr("data-toggle", "tooltip");
		element.attr("title", action);
		element.tooltip();
		
		keyboardLayout.tempSelectedKey = "";
		keyboardLayout.tempSelectedAction = "";
	
	}
	// unbind:
// 	} else if ($(this).attr("data-original-title") !== "") {
		
// 		keyboardLayout[action] = "";
		
// 		// unbind key as well:
// 		let element = $("#" + $(this).attr("title"));
// 		element.removeClass("keyPaired");
// 		element.attr("title", "");
// 		try {
// 			element.tooltip("dispose");
// 			element.tooltip("destroy");
// 		} catch(e) {}
		
// 		$(this).attr("title", "");
// 		$(this).removeClass("actionPaired");
// 		try {
// 			$(this).tooltip("dispose");
// 			$(this).tooltip("destroy");
// 		} catch(e) {}
		
// 		keyboardLayout.tempSelectedKey = "";
// 		keyboardLayout.tempSelectedAction = "";
// 		setKeyboardMapperClasses();
// 	}
	
	
	
});

function setKeyboardMapperClasses() {
	
	$("#keyboard li").removeClass("keyPaired");
	$("#keyboard li").removeClass("keySelected");
// 	$("#keyboard li").tooltip("destroy");
	try {
		$("#keyboard li").tooltip("dispose");
		$("#keyboard li").tooltip("destroy");
	} catch(e) {}
	$("#keyboardConfigCodes2 li").removeClass("actionPaired");
	$("#keyboardConfigCodes2 li").removeClass("actionSelected");
// 	$("#keyboardConfigCodes2 li").tooltip("destroy");
	try {
		$("#keyboardConfigCodes2 li").tooltip("dispose");
		$("#keyboardConfigCodes2 li").tooltip("destroy");
	} catch(e) {}

	for (let key in keyboardLayout) {
		let prop = keyboardLayout[key];
		prop = prop.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g,'\\$1');

		if (prop === "") {
			continue;
		}

		let element = $("#" + prop);
		element.addClass("keyPaired");

		element.attr("data-toggle", "tooltip");
		element.attr("title", key);
		element.tooltip();
	}

	for (let key in keyboardLayout) {
		let prop = keyboardLayout[key];
		prop = prop.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g,'\\$1');
		if (key == "tempSelectedAction" || key == "tempSelectedKey") {
			continue;
		}

// 		console.log(key);

		let element = $("#" + key);
		element.addClass("actionPaired");

		element.attr("data-toggle", "tooltip");
		element.attr("title", prop);
		element.tooltip();
	}
}

$("#resetBindings").on("click", function(event) {
	
	$("#keyboard li").removeClass("keyPaired");
	$("#keyboard li").removeClass("keySelected");
// 	$("#keyboard li").tooltip("destroy");
	try {
		$("#keyboard li").tooltip("dispose");
		$("#keyboard li").tooltip("destroy");
	} catch(e) {}

	$("#keyboardConfigCodes2 li").removeClass("actionPaired");
	$("#keyboardConfigCodes2 li").removeClass("actionSelected");
// 	$("#keyboardConfigCodes2 li").tooltip("destroy");
	try {
		$("#keyboardConfigCodes2 li").tooltip("dispose");
		$("#keyboardConfigCodes2 li").tooltip("destroy");
	} catch(e) {}
	
	keyboardLayout.tempSelectedAction = "";
	keyboardLayout.tempSelectedKey = "";
	
	for (let key in keyboardLayout) {
		let prop = keyboardLayout[key];
		prop = prop.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g,'\\$1');
		if (key == "tempSelectedAction" || key == "tempSelectedKey") {
			continue;
		}
		if (prop === "") {
			continue;
		}
		
// 		console.log(key);
// 		console.log(prop);
		
		keyboardLayout[key] = "";
		
		let element;
		element = $("#" + key);
		element.removeClass("actionPaired");
// 		if (element.attr("data-original-title")) {
// 			element.tooltip("destroy");
// 		}
		
		element = $("#" + prop);
		element.removeClass("keyPaired");
// 		if (element.attr("data-original-title")) {
// 			element.tooltip("destroy");
// 		}
	}
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
	$(".dropdown-menu").children().remove();
	// fill it with profiles:
	for (let key in settings.keyboardProfiles) {
		let optionHTML = "<button class='dropdown-item'" + " config='" + JSON.stringify(settings.keyboardProfiles[key]) + "'>" + key + "</button>";
		$(".dropdown-menu").append(optionHTML);
	}
	
	$(".dropdown-item").on("click", function(event) {
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

function setVideoWidth(width, num) {
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
	
	if (typeof $("#twitchVideo")[0] != "undefined") {
		$("#twitchVideo")[0].style.width = width + "%";
		$("#twitchVideo")[0].style["margin-left"] = ((100-width)/2) + "%";
		// calculate height for twitch:
		let containerWidth = $("#lagless1Container").width() + $("#lagless2Container").width() + $("#lagless3Container").width() + $("#lagless4Container").width();
		$("#twitchVideo")[0].style.height = (width/100) * (9/16) * containerWidth;
	}
	if (typeof $(".twitchVideo")[0] != "undefined") {
		$(".twitchVideo")[0].style.width = width + "%";
		$(".twitchVideo")[0].style["margin-left"] = ((100-width)/2) + "%";
		// calculate height for twitch:
		let containerWidth = $("#lagless1Container").width() + $("#lagless2Container").width() + $("#lagless3Container").width() + $("#lagless4Container").width();
		$(".twitchVideo")[0].style.height = (width/100) * (9/16) * containerWidth;
	}
	
	$("#rightJoyCon")[0].style["margin-left"] = (width) + ((100-width)/2) + "%";
	$("#leftJoyCon")[0].style.width = ((100-width)/2) + "%";
	$("#rightJoyCon")[0].style.width = ((100-width)/2) + "%";
	leftJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/leftJoyCon2.png";
	rightJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/rightJoyCon2.png";
}

setTimeout(function() {
	//setVideoWidth(73.2);
	// 20px is for well class:
	$("#twitchChat").height( $("#navTabs").height() + $("#videoCanvas1").height() + $("#videoCanvas2").height() + $("#videoCanvas3").height() + 20);
}, 2000);

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
	let authCookie = getCookie("TwitchPlaysNintendoSwitch");
	if (authCookie == null) {
		$("#touchControlsCheckbox").prop("checked", false);
		swal("You need to connect to twitch! Redirecting you now!");
		setTimeout(function() {
			window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
		}, 2000);
		return;
	}
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
	
	if(controlQueue1.indexOf(twitchUsername) == -1) {
		socket.emit("requestTurn", 0);
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
		
		$("#leftJoyCon")[0].style.display = "none";
		$("#rightJoyCon")[0].style.display = "none";
		
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


// $("#videoCanvas2")[0].style.width = "100%";
// $("#videoCanvas2")[0].style["margin-left"] = "0";
$("#touchControlsCheckbox").on("click", function() {
// 	console.log("checked touch controls")
	settings.touchControls = $("#touchControlsCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));
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
setInterval(sendInputs, 1000/60);



/* AUTH  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
let authCookie = getCookie("TwitchPlaysNintendoSwitch");

if (authCookie != null) {
	socket.emit("registerUsername", authCookie);
	$("#authenticateButton").remove();
}

setInterval(function() {
	if (authCookie != null) {
		socket.emit("registerUsername", authCookie);
		$("#authenticateButton").remove();
	}
}, 5000);

setTimeout(function() {
	if (!loaded) {
		loaded = true;
		$.ajax({
			url: "https://twitchplaysnintendoswitch.com/usernameData/" + twitchUsername + "/" + authCookie,
		});
	}	
}, 5000);



/* STREAM SETTINGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

// $("#lagless2Volume").slider({
//     min: 0,
//     max: 100,
//     value: 0,
// 	range: "min",
// 	animate: true,
// 	slide: function(event, ui) {
// 		player.volume = ui.value / 100;
//   	}
// });

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
    max: 15,
	step: 1,
    value: 15,
	range: "min",
	animate: true,
	slide: function(event, ui) {
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
    max: 2,
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

socket.on("lagless2Settings", function(data) {
	lagless2Settings = Object.assign({}, lagless2Settings, data);
	
	$("#scale2").text(lagless2Settings.scale);
	$("#scaleSlider2").slider("value", lagless2Settings.scale);
	
	$("#bitrate2").text(lagless2Settings.videoBitrate);
	$("#bitrateSlider2").slider("value", lagless2Settings.videoBitrate);
	
	$("#offsetX2").text(lagless2Settings.offsetX);
	$("#offsetXSlider2").slider("value", lagless2Settings.offsetX);

	$("#offsetY2").text(lagless2Settings.offsetY);
	$("#offsetYSlider2").slider("value", lagless2Settings.offsetY);
});


// lagless4:

$("#bitrateSlider4").slider({
    min: 0,
    max: 2,
	step: 0.05,
    value: 1,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#bitrate4").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless4Settings", {videoBitrate: parseFloat(ui.value)});
	}
});

$("#scaleSlider4").slider({
    min: 100,
    max: 960,
	step: 1,
    value: 960,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#scale4").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless4Settings", {scale: parseInt(ui.value)});
	}
});

$("#offsetXSlider4").slider({
    min:0,
    max: 600,
	step: 1,
    value: 0,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#offsetX4").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless4Settings", {offsetX: parseInt(ui.value)});
	}
});

$("#offsetYSlider4").slider({
    min:0,
    max: 400,
	step: 1,
    value: 0,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		$("#offsetY4").text(ui.value);
  	},
	stop: function(event, ui) {
		socket.emit("lagless4Settings", {offsetY: parseInt(ui.value)});
	}
});

socket.on("lagless4Settings", function(data) {
	lagless4Settings = Object.assign({}, lagless4Settings, data);
	
	$("#scale4").text(lagless4Settings.scale);
	$("#scaleSlider4").slider("value", lagless4Settings.scale);
	
	$("#bitrate4").text(lagless4Settings.videoBitrate);
	$("#bitrateSlider4").slider("value", lagless4Settings.videoBitrate);
	
	$("#offsetX4").text(lagless4Settings.offsetX);
	$("#offsetXSlider4").slider("value", lagless4Settings.offsetX);

	$("#offsetY4").text(lagless4Settings.offsetY);
	$("#offsetYSlider4").slider("value", lagless4Settings.offsetY);
});



/* LAGLESS 1.0*/

let videoCanvas1 = $("#videoCanvas1")[0];
let videoCanvas1Context = videoCanvas1.getContext("2d");
videoCanvas1.width = 1280;
videoCanvas1.height = 720;

socket2.on("viewImage", function(data) {
	stats.begin();
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
	stats.end();
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
let player = new JSMpeg.Player(url, {canvas: canvas2, audio: true, videoBufferSize: 256*1024, audioBufferSize: 128*1024, maxAudioLag: 0.5});
player.maxAudioLag = 0.5;
player.stop();
player.stats = stats;

// $("#lagless2Refresh").on("click", function() {
// 	client = WebSocket("wss://twitchplaysnintendoswitch.com/8002/ws");
// 	canvas2 = $("#videoCanvas2")[0];
// 	player = jsmpeg(client, {canvas:canvas2});
// });

$("#lagless2Volume").slider({
    min: 0,
    max: 100,
    value: 0,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		player.volume = ui.value / 100;
  	}
});
$("#lagless2Volume").slider("value", 50);
player.volume = 0.5;// doesn't update automatically :/


$("#lagless2VolumeSlider").children().on("click", function(){
	$("#lagless2Volume").slider("value", 0);
	player.volume = 0.0;// doesn't update automatically :/
});

$("#lagless2VolumeSlider").children().next().on("click", function(){
	$("#lagless2Volume").slider("value", 100);
	player.volume = 1;// doesn't update automatically :/
});

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
	player.destroy();
	player = new JSMpeg.Player(url, {canvas: canvas2, audio: true, videoBufferSize: 256*1024, audioBufferSize: 128*1024, maxAudioLag: 0.5});
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
wsavc.stats = stats;


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



/* LAGLESS 2.0 WiiU*/
// Setup the WebSocket connection and start the player
// let url2 = "wss://twitchplaysnintendoswitch.com/" + lagless4Port + "/";
// let canvas4 = $("#videoCanvas4")[0];
// // Default 512*1024 (512kb).
// // Default 128*1024 (128kb)
// let player4 = new JSMpeg.Player(url2, {canvas: canvas4, audio: true, videoBufferSize: 256*1024, audioBufferSize: 128*1024});
// player4.maxAudioLag = 0.5;
// player4.stop();
// player4.stats = stats;

// $("#lagless4Refresh").on("click", function() {
// 	socket.emit("restart4");
// });


let videoCanvas4 = $("#videoCanvas4")[0];
let videoCanvas4Context = videoCanvas4.getContext("2d");
videoCanvas4.width = 1280;
videoCanvas4.height = 720;

socket2.on("viewImage4", function(data) {
	console.log("got image");
	stats.begin();
	let src = "data:image/jpeg;base64," + data;
	if(src == "data:image/jpeg;base64,") {
		console.log("image was empty");
		socket.emit("restart4");
		return;
	}
	let image = new Image();
	image.style = "max-width:100%; height:auto;";
	image.onload = function() {
		let imgWidth = image.width;
		let imgHeight = image.height;
		let canvasWidth = videoCanvas4.width;
		let canvasHeight = videoCanvas4.height;
		let ratio = (imgHeight / imgWidth);
		let canvasRatio = canvasWidth / canvasHeight;
		let ratioW = 1280 / $("#videoCanvas4").innerWidth();
		let ratioH = 720 / $("#videoCanvas4").innerHeight();
		let cWidth = $("#videoCanvas4").innerWidth();
		videoCanvas4Context.clearRect(0, 0, canvasWidth, canvasHeight);
		videoCanvas4Context.drawImage(image, 0, 0, cWidth * ratioW, cWidth * ratio * ratioH);
	};
	image.src = src;
	stats.end();
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
		<div id="leftStick"></div>
		<div id="leftStick2"></div>
		<div id="dpadButtons">
			<div id="upButton" class="controllerButton"></div>
			<div id="downButton" class="controllerButton"></div>
			<div id="leftButton" class="controllerButton"></div>
			<div id="rightButton" class="controllerButton"></div>
		</div>
		<div id="leftJoyConOther">
			<div id="minusButton" class="controllerButton"></div>
			<div id="captureButton" class="controllerButton"></div>
			<div id="lButton" class="controllerButton">L Button</div>
			<div id="zlButton" class="controllerButton">ZL Button</div>
		</div>
	</div>`;
	
	let rightJoyConHTML = `
	<div id="rightJoyCon">
		<canvas id="rightJoyConCanvas"></canvas>
		<div id="rightStick"></div>
		<div id="rightStick2"></div>
		<div id="abxyButtons">
			<div id="xButton" class="controllerButton"></div>
			<div id="bButton" class="controllerButton"></div>
			<div id="yButton" class="controllerButton"></div>
			<div id="aButton" class="controllerButton"></div>
		</div>
		<div id="rightJoyConOther">
			<div id="plusButton" class="controllerButton"></div>
			<div id="homeButton" class="controllerButton"></div>
			<div id="rButton" class="controllerButton">R Button</div>
			<div id="zrButton" class="controllerButton">ZR Button</div>
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

$(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function(e) {

	let tab = $(e.target);
	let contentId = tab.attr("href");
		
	currentTab = contentId;

	// lagless 1:
	if (contentId == "#lagless1") {
		settings.tab = 1;
		socket2.emit("join", "viewers");
		socket.emit("joinLagless1");
		// todo: fix this:
		clearInterval(lagless1JoinTimer);
		lagless1JoinTimer = setInterval(function() {
			socket2.emit("join", "viewers");
		}, 5000);
		$("#lagless1Volume").slider("value", 50);
		audioElem.volume = 0.5;// doesn't update automatically :/
	} else {
		clearInterval(lagless1JoinTimer);
		socket2.emit("leave", "viewers");
	}

	// lagless 2:
	if (contentId == "#lagless2") {
		settings.tab = 2;
		socket.emit("joinLagless2");
		if (typeof player != "undefined") {
			player.play();
		}
		$("#lagless1Volume").slider("value", 0);
		audioElem.volume = 0;// doesn't update automatically :/
	} else {
		if (typeof player != "undefined") {
			player.stop();
		}
	}

	// lagless 3:
	if (contentId == "#lagless3") {
		settings.tab = 3;
		socket.emit("joinLagless3");
		let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
		wsavc.connect(uri);

		$("#lagless1Volume").slider("value", 50);
		audioElem.volume = 0.5;// doesn't update automatically :/
	} else {
		try {
			wsavc.disconnect();
		} catch(error) {
		}
	}

	// lagless 4:
	if (contentId == "#lagless4") {
		settings.tab = 4;
		socket2.emit("join", "viewers4");
		socket.emit("joinLagless4");
		if (typeof player4 != "undefined") {
			try {
				player4.play();
			} catch (e) {
			}
		}
	} else {
		socket2.emit("leave", "viewers4");
		if (typeof player4 != "undefined") {
			try {
				player4.stop();
			} catch (e) {
			}
		}
	}
	
	localforage.setItem("settings", JSON.stringify(settings));
	addJoyCons(contentId);
	setTimeout(drawJoyCons, 1000);// todo: find a solution like onload, but for tab changes
	rebindUnbindTouchControls();
	
	// https://github.com/yoannmoinet/nipplejs/issues/39
	// force joysticks to recalculate the center:
	window.dispatchEvent(new Event("resize"));
	setTimeout(function() {
		window.dispatchEvent(new Event("resize"));
	}, 5000);
});

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
		socket2.emit("leave", "viewers");
		$("#videoCanvas1")[0].style.display = "none";
		$("#videoCanvas1").after(twitchIFrame);
	}
	
	if (tab == "#lagless2") {
		player.stop();
		$("#videoCanvas2")[0].style.display = "none";
		$("#videoCanvas2").after(twitchIFrame);
// 		$("#twitchVideo2")[0].style.display = "";
// 		twitchPlayer2.play();
	}
	
	if (tab == "#lagless3") {
		wsavc.disconnect();
		$("#videoCanvas3")[0].style.display = "none";
		$("#videoCanvas3").after(twitchIFrame);
	}
	
	if (tab == "#lagless4") {
		player4.stop();
		$("#videoCanvas4")[0].style.display = "none";
		$("#videoCanvas4").after(twitchIFrame);
	}
	
	setVideoWidth(73.2);
	socket.emit("leaveLagless");
}


function replaceWithLagless(tab) {
	tab = tab || currentTab;
	let laglessCanvas;
	if (tab == "#lagless1") {
		socket.emit("joinLagless1");
		socket2.emit("join", "viewers");
		
		$("#videoCanvas1")[0].style.display = "";
		$("#twitchVideo").remove();
	}
	
	if (tab == "#lagless2") {
		socket.emit("joinLagless2");
		player.play();
		
		$("#videoCanvas2")[0].style.display = "";
		$("#twitchVideo").remove();
// 		$("#twitchVideo2")[0].style.display = "none";
// 		twitchPlayer2.pause();
	}
	
	if (tab == "#lagless3") {
		socket.emit("joinLagless3");
		let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
		wsavc.connect(uri);
		
		$("#videoCanvas3")[0].style.display = "";
		$("#twitchVideo").remove();
	}
	
	if (tab == "#lagless4") {
		socket.emit("joinLagless4");
		player.play();
		
		$("#videoCanvas4")[0].style.display = "";
		$("#twitchVideo").remove();
// 		$("#twitchVideo2")[0].style.display = "none";
// 		twitchPlayer2.pause();
	}
	setVideoWidth(73.2);
}

$("#replaceWithTwitch").on("click", function() {
	replaceWithTwitch();
});

$("#replaceWithLagless").on("click", function() {
	replaceWithLagless();
});

/* AUDIO WEBRTC @@@@@@@@@@@@@@@@ */
let hash = window.location.hash.replace("#", "");
let meeting = new Meeting(hash);
let channel = "#twitchplaysnintendoswitch";
let sender = Math.round(Math.random() * 999999999) + 999999999;
// let socket2 = io("https://twitchplaysnintendoswitch.com", {
// 	path: "/8110/socket.io/",
// 	transports: ["websocket"],
// });
socket.emit("new-channel", {
	channel: channel,
	sender: sender
});
meeting.openSignalingChannel = function(callback) {
	return socket.on("message", callback);
};
// check pre-created meeting rooms
//meeting.check();


$("#audioCheckbox").on("click", function() {
	settings.audio = $("#audioCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.audio) {
		meeting.check();
		setTimeout(function() {
			audioElem.play();
		}, 1000);
	} else {
		audioElem.pause();
	}
});

$("#globalVolume").slider({
    min: 0,
    max: 100,
    value: 0,
		range: "min",
		animate: true,
	slide: function(event, ui) {
		audioElem.volume = ui.value / 100;
  	}
});
//audioElem.volume = 0;

$("#lagless1Volume").slider({
    min: 0,
    max: 100,
    value: 0,
	range: "min",
	animate: true,
	slide: function(event, ui) {
		audioElem.volume = ui.value / 100;
  	}
});
// $("#lagless1Volume").slider("value", 50);
// audioElem.volume = 0.5;// doesn't update automatically :/
//$("#lagless1Volume").slider("value", 0);
//audioElem.volume = 0;// doesn't update automatically :/

$("#lagless1VolumeSlider").children().on("click", function(){
	$("#lagless1Volume").slider("value", 0);
	audioElem.volume = 0;// doesn't update automatically :/
});

$("#lagless1VolumeSlider").children().next().on("click", function(){
	$("#lagless1Volume").slider("value", 100);
	audioElem.volume = 1;// doesn't update automatically :/
});


/* QUEUE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
socket.on("controlQueues", function(data) {
	controlQueues = data.queues;
	controlQueue1 = controlQueues[0];
	controlQueue2 = controlQueues[1];
	controlQueue3 = controlQueues[2];
	controlQueue4 = controlQueues[3];
	controlQueue5 = controlQueues[4];
	
	// todo: for loop this
	
	$("#controlQueue1").empty();
	for (let i = 0; i < controlQueue1.length; i++) {
		let username = controlQueue1[i];
		let html;
		if (!settings.darkTheme) {
			html = "<li class='list-group-item'>" + username + "</li>";
		} else {
			html = "<li class='list-group-item-dark'>" + username + "</li>";
		}
		$("#controlQueue1").append(html);
	}
	
	
	$("#controlQueue2").empty();
	for (let i = 0; i < controlQueue2.length; i++) {
		let username = controlQueue2[i];
		let html;
		if (!settings.darkTheme) {
			html = "<li class='list-group-item'>" + username + "</li>";
		} else {
			html = "<li class='list-group-item-dark'>" + username + "</li>";
		}
		$("#controlQueue2").append(html);
	}
	
	$("#controlQueue3").empty();
	for (let i = 0; i < controlQueue3.length; i++) {
		let username = controlQueue3[i];
		let html;
		if (!settings.darkTheme) {
			html = "<li class='list-group-item'>" + username + "</li>";
		} else {
			html = "<li class='list-group-item-dark'>" + username + "</li>";
		}
		$("#controlQueue3").append(html);
	}
	
	$("#controlQueue4").empty();
	for (let i = 0; i < controlQueue4.length; i++) {
		let username = controlQueue4[i];
		let html;
		if (!settings.darkTheme) {
			html = "<li class='list-group-item'>" + username + "</li>";
		} else {
			html = "<li class='list-group-item-dark'>" + username + "</li>";
		}
		$("#controlQueue4").append(html);
	}
	
	$("#controlQueue5").empty();
	for (let i = 0; i < controlQueue5.length; i++) {
		let username = controlQueue5[i];
		let html;
		if (!settings.darkTheme) {
			html = "<li class='list-group-item'>" + username + "</li>";
		} else {
			html = "<li class='list-group-item-dark'>" + username + "</li>";
		}
		$("#controlQueue5").append(html);
	}
	
	let html;
	if (!settings.darkTheme) {
		html = "<li class='list-group-item'>The queue is empty.</li>";
	} else {
		html = "<li class='list-group-item-dark'>The queue is empty.</li>";
	}
	if (controlQueue1.length === 0) {
		$("#controlQueue1").append(html);
	}
	if (controlQueue2.length === 0) {
		$("#controlQueue2").append(html);
	}
	if (controlQueue3.length === 0) {
		$("#controlQueue3").append(html);
	}
	if (controlQueue4.length === 0) {
		$("#controlQueue4").append(html);
	}
	if (controlQueue5.length === 0) {
		$("#controlQueue5").append(html);
	}
	
});

socket.on("twitchUsername", function(data) {
	twitchUsername = data;
});

socket.on("turnTimesLeft", function(data) {
	
	lastCurrentTime = Date.now();
	viewerCounts = data.viewerCounts;
	let viewersChanged = (JSON.stringify(viewers) !== JSON.stringify(data.viewers));
	viewers = data.viewers;
	
	for (let i = 0; i < 5; i++) {
		let timeLeftMilli = data.turnTimesLeft[i];
		let timeLeftSec = parseInt(data.turnTimesLeft[i] / 1000);
		let percent = parseInt((timeLeftMilli / data.turnLengths[i]) * 100);

		let timeLeftMilli2 = data.forfeitTimesLeft[i];
		let timeLeftSec2 = parseInt(timeLeftMilli2 / 1000);
		let percent2 = parseInt((timeLeftMilli2 / timeTillForfeit) * 100);
		
		let n = i+1;

		if (data.usernames[i] == null) {
			$("#turnTimerBarChild" + n).css("width", "100%").attr("aria-valuenow", "100%").text("No one is playing right now.");
			$("#forfeitTimerBarChild" + n).css("width", "100%").attr("aria-valuenow", "100%").text("No one is playing right now.");
		} else {
			$("#turnTimerBarChild" + n).css("width", percent + "%").attr("aria-valuenow", percent + "%").text(data.usernames[i] + ": " + timeLeftSec + " seconds");
			$("#forfeitTimerBarChild" + n).css("width", percent2 + "%").attr("aria-valuenow", percent2 + "%").text(timeLeftSec2 + " seconds until turn forfeit.");
		}
	}
	
	let totalViewers = data.viewerCounts[0] + data.viewerCounts[1] + data.viewerCounts[2];
// 	$("#lagless1ViewerCount").text(data.viewerCounts[0] + "/" + totalViewers + " Viewers");
// 	$("#lagless2ViewerCount").text(data.viewerCounts[1] + "/" + totalViewers + " Viewers");
// 	$("#lagless3ViewerCount").text(data.viewerCounts[2] + "/" + totalViewers + " Viewers");
	//console.log(data.viewerCounts);
	
	// for each lagless tab
	for (let i = 0; i < 4; i++) {
		
		if(viewersChanged) {
			
			$("#lagless" + (i+1) + "ViewerDropdownDiv").empty();
			for (let j = 0; j < data.viewerCounts[i]; j++) {
				let html = '<button class="dropdown-item">' + data.viewers[i][j] + '</button>';
				$("#lagless" + (i+1) + "ViewerDropdownDiv").append(html);
			}
			
			// for each lagless tab:
			for (let k = 0; k < 4; k++) {
				// skip the tab we already did:
				if (k == i) {
					continue;
				}
				
				if (data.viewerCounts[k] > 0) {
					let dividerHTML = '<div class="dropdown-divider"></div>';
					$("#lagless" + (i+1) + "ViewerDropdownDiv").append(dividerHTML);
					for (let j = 0; j < data.viewerCounts[k]; j++) {
						let html = '<button class="dropdown-item">' + data.viewers[k][j] + '</button>';
						$("#lagless" + (i+1) + "ViewerDropdownDiv").append(html);
					}
				}
			}
		}
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
	location.reload(true);
});


$("#requestTurn1").on("click", function(event) {
	socket.emit("requestTurn", 0);
});
$("#cancelTurn1").on("click", function(event) {
	socket.emit("cancelTurn", 0);
});
$("#requestTurn2").on("click", function(event) {
	socket.emit("requestTurn", 1);
});
$("#cancelTurn2").on("click", function(event) {
	socket.emit("cancelTurn", 1);
});
$("#requestTurn3").on("click", function(event) {
	socket.emit("requestTurn", 2);
});
$("#cancelTurn3").on("click", function(event) {
	socket.emit("cancelTurn", 2);
});
$("#requestTurn4").on("click", function(event) {
	socket.emit("requestTurn", 3);
});
$("#cancelTurn4").on("click", function(event) {
	socket.emit("cancelTurn", 3);
});
$("#requestTurn5").on("click", function(event) {
	socket.emit("requestTurn", 4);
});
$("#cancelTurn5").on("click", function(event) {
	socket.emit("cancelTurn", 4);
});


/* MULTIPLAYER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#player1Checkbox").prop("checked", true);
$("#player1Checkbox").on("click", function(event) {
	if ($("#player1Checkbox")[0].checked) {
		socket.emit("cancelTurn", currentPlayerChosen);
		currentPlayerChosen = 0;
		$("#player2Checkbox").prop("checked", false);
		$("#player3Checkbox").prop("checked", false);
		$("#player4Checkbox").prop("checked", false);
		$("#player5Checkbox").prop("checked", false);
	} else {
		// prevent unchecking
		event.preventDefault();
	}
});

$("#player2Checkbox").on("click", function(event) {
	if ($("#player2Checkbox")[0].checked) {
		socket.emit("cancelTurn", currentPlayerChosen);
		currentPlayerChosen = 1;
		$("#player1Checkbox").prop("checked", false);
		$("#player3Checkbox").prop("checked", false);
		$("#player4Checkbox").prop("checked", false);
		$("#player5Checkbox").prop("checked", false);
	} else {
		// prevent unchecking
		event.preventDefault();
	}
});

$("#player3Checkbox").on("click", function(event) {
	if ($("#player3Checkbox")[0].checked) {
		socket.emit("cancelTurn", currentPlayerChosen);
		currentPlayerChosen = 2;
		$("#player1Checkbox").prop("checked", false);
		$("#player2Checkbox").prop("checked", false);
		$("#player4Checkbox").prop("checked", false);
		$("#player5Checkbox").prop("checked", false);
	} else {
		// prevent unchecking
		event.preventDefault();
	}
});

$("#player4Checkbox").on("click", function(event) {
	if ($("#player4Checkbox")[0].checked) {
		socket.emit("cancelTurn", currentPlayerChosen);
		currentPlayerChosen = 3;
		$("#player1Checkbox").prop("checked", false);
		$("#player2Checkbox").prop("checked", false);
		$("#player3Checkbox").prop("checked", false);
		$("#player5Checkbox").prop("checked", false);
	} else {
		// prevent unchecking
		event.preventDefault();
	}
});

$("#player5Checkbox").on("click", function(event) {
	if ($("#player5Checkbox")[0].checked) {
		socket.emit("cancelTurn", currentPlayerChosen);
		currentPlayerChosen = 4;
		$("#player1Checkbox").prop("checked", false);
		$("#player2Checkbox").prop("checked", false);
		$("#player3Checkbox").prop("checked", false);
		$("#player4Checkbox").prop("checked", false);
	} else {
		// prevent unchecking
		event.preventDefault();
	}
});


/* TOGGLE KEYBOARD @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#keyboardControlsCheckbox").on("click", function() {
	settings.keyboardControls = $("#keyboardControlsCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));
});

/* TOGGLE CONTROLLER @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#controllerControlsCheckbox").on("click", function() {
	settings.controllerControls = $("#controllerControlsCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));
});


/* DARK THEME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

$("#darkThemeCheckbox").on("click", function() {
	settings.darkTheme = $("#darkThemeCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.darkTheme) {
		let icon = $(".glyphicon-fire");
		icon.removeClass("glyphicon-fire");
		icon.addClass("glyphicon-certificate");
		
		$(".well").each(function() {
			$(this).removeClass("well");
			$(this).addClass("well-dark");
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
		
		$("#twitchChat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat?darkpopout");
		
	} else {
		let icon = $(".glyphicon-certificate");
		icon.removeClass("glyphicon-certificate");
		icon.addClass("glyphicon-fire");
		
		$(".well-dark").each(function() {
			$(this).removeClass("well-dark");
			$(this).addClass("well");
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
		
		$("#twitchChat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat");
	}
});


/* TOGGLE FULLSCREEN @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#fullscreenCheckbox").on("click", function() {
	settings.fullscreen = $("#fullscreenCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.fullscreen) {
		$("#videoCanvas1")[0].style.width = "100%";
		$("#videoCanvas1")[0].style["margin-left"] = "0";
		$("#videoCanvas2")[0].style.width = "100%";
		$("#videoCanvas2")[0].style["margin-left"] = "0";
		$("#videoCanvas3")[0].style.width = "100%";
		
		if (settings.touchControls) {
			$("#touchControlsCheckbox").trigger("click");
		}
		if (!settings.hideChat) {
			$("#chatCheckbox").trigger("click");
		}
		if (!settings.hideNav) {
			$("#navCheckbox").trigger("click");
		}
		
		$(".well").each(function() {
			$(this).removeClass("well");
			$(this).addClass("well2");
		});
		$("body").addClass("well2");
		$("body").addClass("hideScrollbar");
		$(document).scrollTop(0);
		
		toggleFullScreen($("body")[0]);
		
	} else {
		$("#videoCanvas1")[0].style.width = "75%";
		$("#videoCanvas1")[0].style["margin-left"] = "12.5%";
		$("#videoCanvas2")[0].style.width = "75%";
		$("#videoCanvas2")[0].style["margin-left"] = "12.5%";
		$("#videoCanvas3")[0].style.width = "75%";
		
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
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
}

// https://stackoverflow.com/questions/10706070/how-to-detect-when-a-page-exits-fullscreen
function exitHandler() {
	if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
		console.log("exiting fullscreen");
		$("body").removeClass("hideScrollbar");
		$("#fullscreenCheckbox").trigger("click");
		$("#chatCheckbox").trigger("click");
		$("#navCheckbox").trigger("click");
		$("#touchControlsCheckbox").trigger("click");
	}
}

/* TOGGLE LARGESCREEN @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#largescreenCheckbox").on("click", function() {
	settings.largescreen = $("#largescreenCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.largescreen) {
		$("#videoCanvas1")[0].style.width = "100%";
		$("#videoCanvas1")[0].style["margin-left"] = "0";
		$("#videoCanvas2")[0].style.width = "100%";
		$("#videoCanvas2")[0].style["margin-left"] = "0";
		$("#videoCanvas3")[0].style.width = "100%";
		
// 		$(".well").each(function() {
// 			$(this).removeClass("well");
// 			$(this).addClass("well2");
// 		});
// 		$("body").addClass("well2");
// 		$("body").addClass("hideScrollbar");
// 		$(document).scrollTop(0);
		
		if (settings.touchControls) {
			$("#touchControlsCheckbox").trigger("click");
		}
		
	} else {
		$("#videoCanvas1")[0].style.width = "75%";
		$("#videoCanvas1")[0].style["margin-left"] = "12.5%";
		$("#videoCanvas2")[0].style.width = "75%";
		$("#videoCanvas2")[0].style["margin-left"] = "12.5%";
		$("#videoCanvas3")[0].style.width = "75%";
		
		$("#touchControlsCheckbox").trigger("click");
		
// 		$(".well2").each(function() {
// 			$(this).removeClass("well2");
// 			$(this).addClass("well");
// 		});
// 		$("body").removeClass("well2");
// 		$("body").removeClass("hideScrollbar");
	}
});


/* TOGGLE HIDE NAV @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#navCheckbox").on("click", function() {
	settings.hideNav = $("#navCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.hideNav) {
		$(".nav")[0].style.display = "none"
	} else {
		$(".nav")[0].style.display = ""
	}
});

/* TOGGLE DPAD SWAP @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#dpadCheckbox").on("click", function() {
	settings.dpadSwap = $("#dpadCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));
});


/* TOGGLE CHAT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#chatCheckbox").on("click", function() {
	settings.hideChat = $("#chatCheckbox")[0].checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.hideChat) {
		$("#twitchChat")[0].style.display = "none";
// 		$("#picture").attr("style", "width: 100%;");
	} else {
		$("#twitchChat")[0].style.display = "";
// 		$("#picture").attr("style", "width: 75%;");
	}
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
			$("#" + btns[i])[0].style.background = "rgba(80, 187, 80, 0.7)";//50bb50
		}
		for (let i = 0; i < unpressedBtns.length; i++) {
			$("#" + unpressedBtns[i])[0].style.background = "";
		}
	} catch(error) {
		console.log("buttons missing from DOM");
	}
	
	let stickPositions = str.substring(16).split(" ");
	
	let scale = 0.3;
	let LX = (parseInt(stickPositions[0]) - restPos) * scale;
	let LY = (parseInt(stickPositions[1]) - restPos) * scale;
	let RX = (parseInt(stickPositions[2]) - restPos) * scale;
	let RY = (parseInt(stickPositions[3]) - restPos) * scale;
	
	LY *= -1;
	RY *= -1;
	
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
	
	if (step === ++c) {
// 		$(document).scrollTop(0);
		$("html, body").animate({
			scrollTop: 0,
		}, 500);
		
		
		$("#tutorialWindow").modal();
// 		swal("tutorial");
		$(document).on("click", function(event) {
			event.preventDefault();
			tutorial();
		});
	}
	
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
		
		let div = "#lagless2VolumeSlider";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="laglessVolumeSliderPopup" class="genericPopup"><span class="tooltipArrowUp"></span>Controls the volume of Lagless2.</div>');
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
	if (step === ++c) {
		$("#laglessKeyboardDropdownPopup").remove();
		
		let div = "#timer";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="timerPopup" class="genericPopup"><span class="tooltipArrowUp"></span>The current local time.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
	
	// players section
	if (step === ++c) {
		$("#timerPopup").remove();
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
	if (step === ++c) {
		let div = "#cancelTurn1";
		$(div).effect("highlight", {}, 3000);
		let popupHTML = $('<div id="cancelTurnPopup" class="genericPopup"><span class="tooltipArrowUp"></span>Use this to remove yourself from the queue, or end your turn early.</div>');
		$("#container").append(popupHTML);
		let popper = new Popper($(div), popupHTML, {
			placement: "bottom",
		});
	}
	
	if (step === ++c) {
		$("#requestTurnPopup").remove();
		$("#cancelTurnPopup").remove();
		
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
// 	setInterval(tutorial, 6000);
// 	setTimeout(tutorial, 0);
// 	setTimeout(tutorial, 2000);
// 	setTimeout(tutorial, 4000);
// 	setTimeout(tutorial, 6000);
// 	setTimeout(tutorial, 8000);
// 	setTimeout(tutorial, 10000);
// 	setTimeout(tutorial, 12000);
}

$("#startTutorial").on("click", function(event) {
	event.preventDefault();
	startTutorial();
});

$("#resetSettings").on("click", function(event) {
	event.preventDefault();
	localforage.setItem("settings", JSON.stringify({}));
	location.reload(true);
});


/* FIT TEXT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// let reqFit = fitty(".requestTurn");



