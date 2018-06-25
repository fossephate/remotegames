
let socket = io("https://twitchplaysnintendoswitch.com", {
	path: "/8110/socket.io",
	transports: ["websocket"],
});

socket.on("connection", function(socket){
	socket.join("viewers");
});

let globalEventTimer = false;
let keyboardTimer;
let gamepadTimer;
let touchTimer;
let lagless1Break = false;
let audio = true;
let controlQueue = [];
let twitchUsername = null;
let toggleDarkTheme = false;
let timeLeft = 30000;
let turnLength = 30000;
let turnUsername = null;
let lastCurrentTime = 0;
let mouseMoveTimer = null;
let pingTime = 0;
let restPos = 128;
let stats = new Stats();
stats.showPanel(0);// 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);


let now;
let elapsed;
let fpsInterval = 1000 / 15;
let then = Date.now();
let startTime = then;

let keyboardLayout = {};
keyboardLayout.LYU = "W";
keyboardLayout.LYD = "S";
keyboardLayout.LXL = "A";
keyboardLayout.LXR = "D";
keyboardLayout.RYU = "I";
keyboardLayout.RYD = "K";
keyboardLayout.RXL = "J";
keyboardLayout.RXR = "L";
keyboardLayout.A = "right";
keyboardLayout.B = "down";
keyboardLayout.X = "up";
keyboardLayout.Y = "left";
keyboardLayout.DUp = "T";
keyboardLayout.DDown = "G";
keyboardLayout.DLeft = "F";
keyboardLayout.DRight = "H";
keyboardLayout.LStick = "R";
keyboardLayout.RStick = "Y";
keyboardLayout.L = "U";
keyboardLayout.ZL = "Q";
keyboardLayout.R = "O";
keyboardLayout.ZR = "E";
keyboardLayout.Minus = "-";
keyboardLayout.Plus = "=";
keyboardLayout.Capture = "1";
keyboardLayout.Home = "2";

function getMeta(url, callback) {
	let img = new Image();
	img.src = url;
	img.onload = function() {
		callback(this.width, this.height);
	}
}

// function getLatestImage() {
// 	$("#screen").load("/8110/img/ #screenshot");
// // 	document.getElementById("screen2").contentDocument.location.reload(true);

// 	if (typeof $("#screen")[0].children[0] != "undefined") {
// 		let src = $("#screen")[0].children[0].src;
// 		if(src == "data:image/jpeg;base64,") {
// 			socket.emit("restart");
// 		}
// 	}

// 	if (lagless1Break) {
// 		return;
// 	}

// // 	let fps = parseInt($("#fpsSlider").val());
// // 	let timeToSleep = 1000 / fps;
// // 	setTimeout(getLatestImage, timeToSleep);
// 	requestAnimationFrame(getLatestImage);
// }


function updateImage() {
	$("#screen").load("/8110/img/ #screenshot");
	if (typeof $("#screen")[0].children[0] != "undefined") {
		// fix for dom freaking out:
		$("#screen")[0].style.height = "" + $("#screenshot")[0].height;
		
// 		if (toggleFullscreen) {
// 			$("#screenshot")[0].style.width = "100%";
// 		} else {
// 			$("#screenshot")[0].style.width = "75%";
// 		}
		
		let src = $("#screen")[0].children[0].src;
		if(src == "data:image/jpeg;base64,") {
			socket.emit("restart");
		}
	}
}

function getLatestImage() {
	
	if (lagless1Break) {
		return;
	}
	
    requestAnimationFrame(getLatestImage);

    now = Date.now();
    elapsed = now - then;
	
    if (elapsed > fpsInterval) {	
		
		let fps = parseInt($("#fpsSlider").val());
		fpsInterval = 1000 / fps;
		
        then = now - (elapsed % fpsInterval);
		stats.begin();
		updateImage();
		stats.end();
    }
}

// socket.on("viewImage", function(data) {
// 	//requestAnimationFrame(function() {
// 		stats.begin();
// 		let src = "data:image/jpeg;base64," + data.src;
// 	// 	if(src == "data:image/jpeg;base64,") {
// 	// 		socket.emit("restart");
// 	// 	}
// 		let image = new Image();
// 		image.src = src;
// 		image.style = "max-width:100%; height:auto;";
// 		//image.style = "width:120%; height:auto;";
// 		image.id = "screenshot";
// // 		$("#screen").empty();
// // 		$("#screen").append(image);
// 		$("#screenshot")[0].replaceWith(image);
// 		stats.end();
// 	//});
// });

/*    CHAT */
$("#chatForm").on("submit", function() {
	event.preventDefault();
	let msg = $("#msgInput").val();
	socket.emit("chat message", msg);
	$("#msgInput").val("");
	return false;
});

socket.on("chat message", function(msg) {
	let newMessage = $("<li>").text(msg);
	$("#messageList").append(newMessage);
	newMessage[0].scrollIntoView(false);
});

socket.on("currentPlayer", function(data) {
	$("#currentPlayer").text("Current Player: " + data);
});


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

controller.btns.up = false;
controller.btns.down = false;
controller.btns.left = false;
controller.btns.right = false;
controller.btns.stick_button = false;
controller.btns.l = false;
controller.btns.zl = false;
controller.btns.minus = false;
controller.btns.capture = false;

controller.btns.a = false;
controller.btns.b = false;
controller.btns.x = false;
controller.btns.y = false;
controller.btns.stick_button2 = false;
controller.btns.r = false;
controller.btns.zr = false;
controller.btns.plus = false;
controller.btns.home = false;

controller.reset = function() {
	for (let prop in controller.btns) {
		controller.btns[prop] = false;
	}
	controller.LStick.x = restPos;
	controller.LStick.y = restPos;
	controller.RStick.x = restPos;
	controller.RStick.y = restPos;
}

let oldControllerState = "";

function sendControllerState() {
	
	let newControllerState = "";

	if (controller.btns.up == 1 && controller.btns.left == 1) {
		newControllerState += "7";
	} else if (controller.btns.up && controller.btns.right == 1) {
		newControllerState += "1";
	} else if (controller.btns.down == 1 && controller.btns.left == 1) {
		newControllerState += "5";
	} else if (controller.btns.down == 1 && controller.btns.right == 1) {
		newControllerState += "3";
	} else if (controller.btns.up == 1) {
		newControllerState += "0";
	} else if (controller.btns.down == 1) {
		newControllerState += "4";
	} else if (controller.btns.left == 1) {
		newControllerState += "6";
	} else if (controller.btns.right == 1) {
		newControllerState += "2";
	} else {
		newControllerState += "8";
	}

	newControllerState += controller.btns.stick_button == 1 ? "1" : "0";
	newControllerState += controller.btns.l == 1 ? "1" : "0";
	newControllerState += controller.btns.zl == 1 ? "1" : "0";
	newControllerState += controller.btns.minus == 1 ? "1" : "0";
	newControllerState += controller.btns.capture == 1 ? "1" : "0";

	newControllerState += controller.btns.a == 1 ? "1" : "0";
	newControllerState += controller.btns.b == 1 ? "1" : "0";
	newControllerState += controller.btns.x == 1 ? "1" : "0";
	newControllerState += controller.btns.y == 1 ? "1" : "0";
	newControllerState += controller.btns.stick_button2 == 1 ? "1" : "0";
	newControllerState += controller.btns.r == 1 ? "1" : "0";
	newControllerState += controller.btns.zr == 1 ? "1" : "0";
	newControllerState += controller.btns.plus == 1 ? "1" : "0";
	newControllerState += controller.btns.home == 1 ? "1" : "0";


	let LX = controller.LStick.x;
	let LY = controller.LStick.y;
	let RX = controller.RStick.x;
	let RY = controller.RStick.y;

	newControllerState += " " + LX + " " + LY + " " + RX + " " + RY;


	if (newControllerState == oldControllerState) {
		return;
	} else {
		oldControllerState = newControllerState;
	}
	
	// check to see if any of the controls checkboxes are enabled:
	if (!document.getElementById("keyboardControllerCheckbox").checked &&
		!document.getElementById("touchControlsCheckbox").checked &&
		!document.getElementById("mouseControlsCheckbox").checked) {
		return;
	}
	
	if(controlQueue.indexOf(twitchUsername) == -1) {
		socket.emit("requestTurn");
	}
	
	if(controlQueue[0] != twitchUsername && controlQueue.length > 0) {
		//swal("It's not your turn yet!");
		$("#turnTimerBar").effect("shake", {direction: "left", distance: 100, times: 3}, 500);
		return;
	}
	
	console.log(newControllerState);
	//if(controlQueue[0] == twitchUsername) {
	socket.emit("sendControllerState", newControllerState);
	//}
}



let wasPressedKeyCodes = [];

function getKeyboardInput() {

	if (!document.getElementById("keyboardControllerCheckbox").checked) {
		return;
	}
	let authCookie = getCookie("TwitchPlaysNintendoSwitch");
	if (authCookie == null) {
		$("#keyboardControllerCheckbox").prop("checked", false);
		swal("You need to connect to twitch!");
		//setCookie("AttemptedAuth", 1, 60);
		//window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
		return;
	}
	
	//controller.reset();

	if (key.isPressed(keyboardLayout.LYU)) {
		controller.LStick.y = 255;
	} else if(key.wasPressed(keyboardLayout.LYU, wasPressedKeyCodes)) {
		controller.LStick.y = restPos;
	}
	if (key.isPressed(keyboardLayout.LYD)) {
		controller.LStick.y = 0;
	} else if(key.wasPressed(keyboardLayout.LYD, wasPressedKeyCodes)) {
		controller.LStick.y = restPos;
	}
	if (key.isPressed(keyboardLayout.LXL)) {
		controller.LStick.x = 0;
	} else if(key.wasPressed(keyboardLayout.LXL, wasPressedKeyCodes)) {
		controller.LStick.x = restPos;
	}
	if (key.isPressed(keyboardLayout.LXR)) {
		controller.LStick.x = 255;
	} else if(key.wasPressed(keyboardLayout.LXR, wasPressedKeyCodes)) {
		controller.LStick.x = restPos;
	}

	if (key.isPressed(keyboardLayout.X)) {
		controller.btns.x = 1;
	} else if(key.wasPressed(keyboardLayout.X, wasPressedKeyCodes)) {
		controller.btns.x = 0;
	}
	if (key.isPressed(keyboardLayout.B)) {
		controller.btns.b = 1;
	} else if(key.wasPressed(keyboardLayout.B, wasPressedKeyCodes)) {
		controller.btns.b = 0;
	}
	if (key.isPressed(keyboardLayout.Y)) {
		controller.btns.y = 1;
	} else if(key.wasPressed(keyboardLayout.Y, wasPressedKeyCodes)) {
		controller.btns.y = 0;
	}
	if (key.isPressed(keyboardLayout.A)) {
		controller.btns.a = 1;
	} else if(key.wasPressed(keyboardLayout.A, wasPressedKeyCodes)) {
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

	if (key.isPressed(keyboardLayout.RYU)) {
		controller.RStick.y = 255;
	} else if(key.wasPressed(keyboardLayout.RYU, wasPressedKeyCodes)) {
		controller.RStick.y = restPos;
	}
	if (key.isPressed(keyboardLayout.RYD)) {
		controller.RStick.y = 0;
	} else if(key.wasPressed(keyboardLayout.RYD, wasPressedKeyCodes)) {
		controller.RStick.y = restPos;
	}
	if (key.isPressed(keyboardLayout.RXL)) {
		controller.RStick.x = 0;
	} else if(key.wasPressed(keyboardLayout.RXL, wasPressedKeyCodes)) {
		controller.RStick.x = restPos;
	}
	if (key.isPressed(keyboardLayout.RXR)) {
		controller.RStick.x = 255;
	} else if(key.wasPressed(keyboardLayout.RXR, wasPressedKeyCodes)) {
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

	if (key.isPressed(keyboardLayout.L)) {
		controller.btns.l = 1;
	} else if(key.wasPressed(keyboardLayout.L, wasPressedKeyCodes)) {
		controller.btns.l = 0;
	}
	if (key.isPressed(keyboardLayout.R)) {
		controller.btns.r = 1;
	} else if(key.wasPressed(keyboardLayout.R, wasPressedKeyCodes)) {
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
	
	//sendControllerState();
}


/* prevent arrow key scrolling */
window.addEventListener("keydown", function(e) {
	// space and arrow keys
	if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}
}, false);

// function getMouseInput() {
// 	if (!document.getElementById("mouseControlsCheckbox").checked) {
// 		return;
// 	}
	
// 	//canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;
// }


function getMouseInput(e) {
	//console.log(e.movementX);
	
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
	
	// todo: min max this:
	if (controller.RStick.x < 0) {
		controller.RStick.x = 0;
	}
	if (controller.RStick.x > 255) {
		controller.RStick.x = 255;
	}
	if (controller.RStick.y < 0) {
		controller.RStick.y = 0;
	}
	if (controller.RStick.y > 255) {
		controller.RStick.y = 255;
	}
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
});
gamepad.on("release", "button_1", e => {
	controller.btns.b = 0;
});

gamepad.on("press", "button_2", e => {
	controller.btns.a = 1;
});
gamepad.on("release", "button_2", e => {
	controller.btns.a = 0;
});

gamepad.on("press", "button_3", e => {
	controller.btns.y = 1;
});
gamepad.on("release", "button_3", e => {
	controller.btns.y = 0;
});

gamepad.on("press", "button_4", e => {
	controller.btns.x = 1;
});
gamepad.on("release", "button_4", e => {
	controller.btns.x = 0;
});


gamepad.on("press", "shoulder_top_left", e => {
	controller.btns.l = 1;
});
gamepad.on("release", "shoulder_top_left", e => {
	controller.btns.l = 0;
});

gamepad.on("press", "shoulder_top_right", e => {
	controller.btns.r = 1;
});
gamepad.on("release", "shoulder_top_right", e => {
	controller.btns.r = 0;
});

gamepad.on("press", "shoulder_bottom_left", e => {
	controller.btns.zl = 1;
});
gamepad.on("release", "shoulder_bottom_left", e => {
	controller.btns.zl = 0;
});

gamepad.on("press", "shoulder_bottom_right", e => {
	controller.btns.zr = 1;
});
gamepad.on("release", "shoulder_bottom_right", e => {
	controller.btns.zr = 0;
});

gamepad.on("press", "select", e => {
	controller.btns.minus = 1;
});
gamepad.on("release", "select", e => {
	controller.btns.minus = 0;
});
gamepad.on("press", "start", e => {
	controller.btns.plus = 1;
});
gamepad.on("release", "start", e => {
	controller.btns.plus = 0;
});



gamepad.on("press", "d_pad_up", e => {
	controller.btns.up = 1;
});
gamepad.on("release", "d_pad_up", e => {
	controller.btns.up = 0;
});

gamepad.on("press", "d_pad_down", e => {
	controller.btns.down = 1;
});
gamepad.on("release", "d_pad_down", e => {
	controller.btns.down = 0;
});

gamepad.on("press", "d_pad_left", e => {
	controller.btns.left = 1;
});
gamepad.on("release", "d_pad_left", e => {
	controller.btns.left = 0;
});

gamepad.on("press", "d_pad_right", e => {
	controller.btns.right = 1;
});
gamepad.on("release", "d_pad_right", e => {
	controller.btns.right = 0;
});

gamepad.on("hold", "stick_axis_left", e => {
	let x = e.value[0];
	let y = e.value[1];
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.LStick.x = parseInt(x);
	controller.LStick.y = parseInt(y);
	let thresh = parseInt($("#threshold").text());
	if (Math.abs(restPos - controller.LStick.x) < thresh) {
		controller.LStick.x = restPos;
	}
	if (Math.abs(restPos - controller.LStick.y) < thresh) {
		controller.LStick.y = restPos;
	}
});
gamepad.on("press", "stick_axis_left", e => {
	let x = e.value[0];
	let y = e.value[1];
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.LStick.x = parseInt(x);
	controller.LStick.y = parseInt(y);
	let thresh = parseInt($("#threshold").text());
	if (Math.abs(restPos - controller.LStick.x) < thresh) {
		controller.LStick.x = restPos;
	}
	if (Math.abs(restPos - controller.LStick.y) < thresh) {
		controller.LStick.y = restPos;
	}
});
gamepad.on("release", "stick_axis_left", e => {
	let x = e.value[0];
	let y = e.value[1];
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.LStick.x = parseInt(x);
	controller.LStick.y = parseInt(y);
	let thresh = parseInt($("#threshold").text());
	if (Math.abs(restPos - controller.LStick.x) < thresh) {
		controller.LStick.x = restPos;
	}
	if (Math.abs(restPos - controller.LStick.y) < thresh) {
		controller.LStick.y = restPos;
	}
});
gamepad.on("hold", "stick_axis_right", e => {
	let x = e.value[0];
	let y = e.value[1];
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.RStick.x = parseInt(x);
	controller.RStick.y = parseInt(y);
	let thresh = parseInt($("#threshold").text());
	if (Math.abs(restPos - controller.RStick.x) < thresh) {
		controller.RStick.x = restPos;
	}
	if (Math.abs(restPos - controller.RStick.y) < thresh) {
		controller.RStick.y = restPos;
	}
});
gamepad.on("press", "stick_axis_right", e => {
	let x = e.value[0];
	let y = e.value[1];
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.RStick.x = parseInt(x);
	controller.RStick.y = parseInt(y);
	let thresh = parseInt($("#threshold").text());
	if (Math.abs(restPos - controller.RStick.x) < thresh) {
		controller.RStick.x = restPos;
	}
	if (Math.abs(restPos - controller.RStick.y) < thresh) {
		controller.RStick.y = restPos;
	}
});
gamepad.on("release", "stick_axis_right", e => {
	let x = e.value[0];
	let y = e.value[1];
	x = (x / 2) + 0.5;
	y = (-y / 2) + 0.5;
	x *= 255;
	y *= 255;
	controller.RStick.x = parseInt(x);
	controller.RStick.y = parseInt(y);
	let thresh = parseInt($("#threshold").text());
	if (Math.abs(restPos - controller.RStick.x) < thresh) {
		controller.RStick.x = restPos;
	}
	if (Math.abs(restPos - controller.RStick.y) < thresh) {
		controller.RStick.y = restPos;
	}
});

gamepad.on("press", "stick_button_left", e => {
	controller.btns.stick_button = 1;
});
gamepad.on("release", "stick_button_left", e => {
	controller.btns.stick_button = 0;
});
gamepad.on("press", "stick_button_right", e => {
	controller.btns.stick_button2 = 1;
});
gamepad.on("release", "stick_button_right", e => {
	controller.btns.stick_button2 = 0;
});


function getGamepadInput() {

	if (!document.getElementById("keyboardControllerCheckbox").checked) {
		return;
	}
	let authCookie = getCookie("TwitchPlaysNintendoSwitch");
	if (authCookie == null) {
		$("#keyboardControllerCheckbox").prop("checked", false);
		swal("You need to connect to twitch!");
		//setCookie("AttemptedAuth", 1, 60);
		//window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
		return;
	}
	//controller.reset();
// 	if (gamepad._events.gamepad.length > 0) {
// 		sendControllerState();
// 	}
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

//change document to #keyboardLayoutConfig using <tabindex="0">
$(".buttonConfig").on("click", function(e) {
	$(document).off("keydown");
	//window.addEventListener("keydown", handleKey, false);
	$(document).on("keydown", function(e2) {
		console.log(e2.key);
		let keys = [];
		for (let i in keyboardLayout) {
			keys.push(keyboardLayout[i]);
		}
		//let values = Object.values(preferences.keyboard.layout);
		if (keys.indexOf(e2.key) == -1) {
			$("#" + e.target.id).html(String.fromCharCode(e2.which));
			keyboardLayout[e.target.id] = e2.key;
			localforage.setItem("keyboardLayout", keyboardLayout);

			$(document).off("keydown");
			//window.addEventListener("keydown", handleKey, false);
		} else {
			$("#" + e.target.id).animate({
				backgroundColor: "#AC3333"
			}, "fast");
			setTimeout(function() {
				$("#" + e.target.id).animate({
					backgroundColor: "#888"
				}, "slow");
			}, 100);
		}
	});
});
$("#keyboardLayoutConfig").on("click", function(e) {
	//console.log(e.target);
	let isButton = e.target.classList[0] == "buttonConfig";
	if (!isButton) {
		$(document).off("keydown");
		// 			window.addEventListener("keydown", handleKey, false);
	}
});

// $("#keyboardController").checkboxpicker({
// 	html: true,
// 	offLabel: '<span class="glyphicon glyphicon-remove">',
// 	onLabel: '<span class="glyphicon glyphicon-ok">'
// });








/* TOUCH CONTROLS */
let leftJoyConCanvas = $("#leftJoyConCanvas")[0];
leftJoyConCanvas.width = 500;
leftJoyConCanvas.height = 500;
let leftJoyConCtx = leftJoyConCanvas.getContext("2d");
let leftJoyConImage = new Image();
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
	leftJoyConCtx.drawImage(leftJoyConImage, 0, 0, cWidth * ratioW, cWidth * ratio * ratioH);
};
setTimeout(function(){
	leftJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/leftJoyCon.png";
}, 3000);


let rightJoyConCanvas = $("#rightJoyConCanvas")[0];
rightJoyConCanvas.width = 500;
rightJoyConCanvas.height = 500;
let rightJoyConCtx = rightJoyConCanvas.getContext("2d");
let rightJoyConImage = new Image();
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
setTimeout(function(){
	rightJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/rightJoyCon.png";
}, 3000);




// let canvas = $("#buttonsCanvas")[0];
// let ctx = canvas.getContext("2d");
// canvas.style.width="100%";
// canvas.style.height="100%";
// canvas.width  = canvas.offsetWidth;
// canvas.height = canvas.offsetHeight;
// let realWidth = $("#buttonsCanvas")[0].width;
// let realHeight = $("#buttonsCanvas")[0].height;
// let halfWidth = $("#buttonsCanvas")[0].width/2;
// let halfHeight = $("#buttonsCanvas")[0].height/2;
// // ctx.fillStyle = "#FF0000";
// // ctx.fillRect(halfWidth+(halfWidth/2)-25,0,50,50);

// function touchButton(x, y, width, height, color, button) {
// 	this.x = x;
// 	this.y = y;
// 	this.width = width;
// 	this.height = height;
// 	this.color = color;
// 	this.button = button;
	
// 	this.x2 = this.x + this.width;
// 	this.y2 = this.y + this.height;

	
	
// 	this.isPressed = function(X, Y) {
// // 		console.log(X + " " + Y);
// // 		console.log(this.x + "." + this.y);
// 		if(X >= this.x && X <= this.x2) {
// 			if(Y >= this.y && Y <= this.y2) {
// 				console.log(this.button);
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
	
// 	this.draw = function() {
// 		ctx.fillStyle = this.color;
// 		ctx.fillRect(this.x, this.y, this.width, this.height);
// 	}
	
// 	return this;
// }




// function touchStart(event) {
// 	event.preventDefault();
// 	if (event.touches) {
// 		if (event.touches.length == 1) {
// 			let touch = event.touches[0];
// 			let touchX = touch.pageX - touch.target.offsetLeft;
// 			let touchY = touch.pageY - touch.target.offsetTop;
			
// 			controller.btns.x = buttons[0].isPressed(touchX, touchY);
// 			controller.btns.b = buttons[1].isPressed(touchX, touchY);
// 			controller.btns.y = buttons[2].isPressed(touchX, touchY);
// 			controller.btns.a = buttons[3].isPressed(touchX, touchY);
			
// 		}
// 	}
// }

// function touchMove(event) {
// 	event.preventDefault();
// 	if (event.touches) {
// 		if (event.touches.length == 1) {
// 			let touch = event.touches[0];
// 			let touchX = touch.pageX - touch.target.offsetLeft;
// 			let touchY = touch.pageY - touch.target.offsetTop;
			
// 			controller.btns.x = buttons[0].isPressed(touchX, touchY);
// 			controller.btns.b = buttons[1].isPressed(touchX, touchY);
// 			controller.btns.y = buttons[2].isPressed(touchX, touchY);
// 			controller.btns.a = buttons[3].isPressed(touchX, touchY);
			
// 		}
// 	}
// }

// function touchEnd(event) {
// 	event.preventDefault();
// }

// function mouseDown(event) {
// 	let canvas = $("#buttonsCanvas")[0];
// 	let x = event.pageX - canvas.offsetLeft;
// 	let y = event.pageY - canvas.offsetTop;
	
// 	//console.log(x + " " + y);

// 	controller.btns.x = buttons[0].isPressed(x, y);
// 	controller.btns.b = buttons[1].isPressed(x, y);
// 	controller.btns.y = buttons[2].isPressed(x, y);
// 	controller.btns.a = buttons[3].isPressed(x, y);
// }

// function mouseMove(event) {
// 	let canvas = $("#buttonsCanvas")[0];
// 	let x = event.pageX - canvas.offsetLeft - 35;
// 	let y = event.pageY - canvas.offsetTop - 640;
	
// 	//console.log(x + " " + y);

// 	controller.btns.x = buttons[0].isPressed(x, y);
// 	controller.btns.b = buttons[1].isPressed(x, y);
// 	controller.btns.y = buttons[2].isPressed(x, y);
// 	controller.btns.a = buttons[3].isPressed(x, y);
// }

// function mouseUp(event) {
// 	let canvas = $("#buttonsCanvas")[0];
// 	let x = event.pageX - canvas.offsetLeft;
// 	let y = event.pageY - canvas.offsetTop - 581;

// 	controller.btns.x = !buttons[0].isPressed(x, y);
// 	controller.btns.b = !buttons[1].isPressed(x, y);
// 	controller.btns.y = !buttons[2].isPressed(x, y);
// 	controller.btns.a = !buttons[3].isPressed(x, y);
// }


// // canvas.addEventListener("touchstart", touchStart, false);
// // canvas.addEventListener("touchmove", touchMove, false);
// // canvas.addEventListener("touchend", touchEnd, false);

// // canvas.addEventListener("mousedown", mouseDown, false);
// // canvas.addEventListener("mousemove", mouseMove, false);
// // canvas.addEventListener("mouseup", mouseUp, false);

// let buttons = [];
// // let XButton = touchButton(halfWidth+(halfWidth/2)-25, 0, 50, 50, "blue", "X");
// // let BButton = touchButton(halfWidth+(halfWidth/2)-25, 50, 50, 50, "yellow", "B");
// // let YButton = touchButton(halfWidth+(halfWidth/2)-75, 25, 50, 50, "green", "X");
// // let AButton = touchButton(halfWidth+(halfWidth/2)+25, 25, 50, 50, "red", "B");

// let XButton = new touchButton(halfWidth-25, -25+(halfHeight/3), 50, 50, "blue", "X");
// let BButton = new touchButton(halfWidth-25, 75+(halfHeight/3), 50, 50, "yellow", "B");
// let YButton = new touchButton(halfWidth-75, 25+(halfHeight/3), 50, 50, "green", "Y");
// let AButton = new touchButton(halfWidth+25, 25+(halfHeight/3), 50, 50, "red", "A");

// buttons.push(XButton);
// buttons.push(BButton);
// buttons.push(YButton);
// buttons.push(AButton);

// ctx.clearRect(0, 0, canvas.width, canvas.height);
// for (let i = 0; i < 4; i++) {
// 	buttons[i].draw();
// }






/**/
let s = function(sel) {
	return document.querySelector(sel);
};
let sId = function(sel) {
	return document.getElementById(sel);
};
let removeClass = function(el, clss) {
	el.className = el.className.replace(new RegExp("\\b" + clss + " ?\\b", "g"), "");
}
let joysticks = {
	leftStick: {
		zone: document.querySelector("#leftStick"),
		mode: "semi",
		catchDistance: 150,
		color: "red",
		multitouch: true,
	},
	rightStick: {
		zone: document.querySelector("#rightStick"),
		mode: "semi",
		catchDistance: 150,
		color: "blue",
		multitouch: true,
	},

};

let leftStick;
let rightStick;

createJoysticks("static");

function bindJoysticks() {
	leftStick.on("start", function(evt, data) {
		let pos = data.frontPosition;
		pos.x = parseInt(((pos.x + 50) / 100) * 255);
		pos.y = parseInt(((pos.y + 50) / 100) * 255);
		pos.y = 255 - pos.y;
		controller.LStick.x = pos.x;
		controller.LStick.y = pos.y;
	}).on("end", function(evt, data) {
		controller.LStick.x = restPos;
		controller.LStick.y = restPos;
	}).on("move", function(evt, data) {
		let pos = data.instance.frontPosition;
		pos.x = parseInt(((pos.x + 50) / 100) * 255);
		pos.y = parseInt(((pos.y + 50) / 100) * 255);
		pos.y = 255 - pos.y;
		controller.LStick.x = pos.x;
		controller.LStick.y = pos.y;
	})

	rightStick.on("start", function(evt, data) {
		let pos = data.frontPosition;
		pos.x = parseInt(((pos.x + 50) / 100) * 255);
		pos.y = parseInt(((pos.y + 50) / 100) * 255);
		pos.y = 255 - pos.y;
		controller.RStick.x = pos.x;
		controller.RStick.y = pos.y;
	}).on("end", function(evt, data) {
		controller.RStick.x = restPos;
		controller.RStick.y = restPos;
	}).on("move", function(evt, data) {
		let pos = data.instance.frontPosition;
		pos.x = parseInt(((pos.x + 50) / 100) * 255);
		pos.y = parseInt(((pos.y + 50) / 100) * 255);
		pos.y = 255 - pos.y;
		controller.RStick.x = pos.x;
		controller.RStick.y = pos.y;
	})
}

function createJoysticks(evt) {
	leftStick = nipplejs.create(joysticks["leftStick"]);
	rightStick = nipplejs.create(joysticks["rightStick"]);
	bindJoysticks();
}


function getTouchInput() {
	if (!document.getElementById("touchControlsCheckbox").checked) {
		return;
	}
	let authCookie = getCookie("TwitchPlaysNintendoSwitch");
	if (authCookie == null) {
		$("#touchControlsCheckbox").prop("checked", false);
		swal("You need to connect to twitch!");
		//setCookie("AttemptedAuth", 1, 60);
		//window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
		return;
	}
	//controller.reset();
}


function onButtonPress(e) {
	
	if (e.toElement == null) {return;}
	if (e.toElement.id == "dpadButtons" || e.toElement.id == "abxyButtons") {return;}
	
	let value = 0;
	if (e.type == "mousedown" || e.type == "touchstart") {
		value = 1;
	} else if (e.type == "mouseup" || e.type == "mouseleave" || e.type == "touchend") {
		value = 0;
	} else if (e.type == "touchmove") {
		// todo: make an equivalent to mouseleave since touchleave doesn't exist :/
	}
	
	
	let button = e.toElement.id;
	
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
		default:
			break;
	}
	
}

setTimeout(function() {
	$("#leftJoyCon")[0].style.display = "none";
	$("#rightJoyCon")[0].style.display = "none";
}, 5000);


// $("#videoCanvas2")[0].style.width = "100%";
// $("#videoCanvas2")[0].style["margin-left"] = "0";
$("#touchControlsCheckbox").on("click", function() {
	if ($(this).is(":checked")) {
		$("#leftJoyCon")[0].style.display = "";
		$("#rightJoyCon")[0].style.display = "";
// 		$("#videoCanvas2")[0].style.width = "75%";
// 		$("#videoCanvas2")[0].style["margin-left"] = "12.5%";
		
		// for each button add event listener
		$("#dpadButtons").children().each(function () {
			this.addEventListener("touchstart", onButtonPress, false);
			this.addEventListener("touchmove", onButtonPress, false);
			this.addEventListener("touchend", onButtonPress, false);
			this.addEventListener("mousedown", onButtonPress, false);
			this.addEventListener("mouseup", onButtonPress, false);
			this.addEventListener("mouseleave", onButtonPress, false);
		});
		$("#abxyButtons").children().each(function () {
			this.addEventListener("touchstart", onButtonPress, false);
			this.addEventListener("touchmove", onButtonPress, false);
			this.addEventListener("touchend", onButtonPress, false);
			this.addEventListener("mousedown", onButtonPress, false);
			this.addEventListener("mouseup", onButtonPress, false);
			this.addEventListener("mouseleave", onButtonPress, false);
		});
	} else {
		$("#leftJoyCon")[0].style.display = "none";
		$("#rightJoyCon")[0].style.display = "none";	
// 		$("#videoCanvas2")[0].style.width = "100%";
// 		$("#videoCanvas2")[0].style["margin-left"] = "0";
		
		
		// for each button remove event listener
		$("#dpadButtons").children().each(function () {
			this.removeEventListener("touchstart", onButtonPress);
			this.removeEventListener("touchmove", onButtonPress);
			this.removeEventListener("touchend", onButtonPress);
			this.removeEventListener("mousedown", onButtonPress);
			this.removeEventListener("mouseup", onButtonPress);
			this.removeEventListener("mouseleave", onButtonPress);
		});
		$("#abxyButtons").children().each(function () {
			this.removeEventListener("touchstart", onButtonPress);
			this.removeEventListener("touchmove", onButtonPress);
			this.removeEventListener("touchend", onButtonPress);
			this.removeEventListener("mousedown", onButtonPress);
			this.removeEventListener("mouseup", onButtonPress);
			this.removeEventListener("mouseleave", onButtonPress);
		});
	}
});

function sendInputs() {
	getKeyboardInput();
	getGamepadInput();
	getTouchInput();
	sendControllerState();
}
setInterval(sendInputs, 10);





/* AUTH  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
let authCookie = getCookie("TwitchPlaysNintendoSwitch");
let attemptedAuth = getCookie("AttemptedAuth");

// if (attemptedAuth && !authCookie) {
// 	window.location.href = "https://twitchplaysnintendoswitch.com/8110/";
// }
if (authCookie != null) {
	socket.emit("registerUsername", authCookie);
	$("#authenticateButton").remove();
}

setInterval(function() {
	if (authCookie != null) {
		socket.emit("registerUsername", authCookie);
		$("#authenticateButton").remove();
	}
}, 2000);



/* STREAM SETTINGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

$("#qualitySlider").on("input", function(event) {
	let quality = this.value;
	$("#quality").text(quality);
	socket.emit("setQuality", parseInt(quality));
})
$("#scaleSlider").on("input", function(event) {
	let scale = this.value;
	$("#scale").text(scale);
	socket.emit("setScale", parseInt(scale));
})
$("#fpsSlider").on("input", function(event) {
	let fps = this.value;
	$("#fps").text(fps);
	// 		socket.emit("setFPS", parseInt(fps));
})
$("#thresholdSlider").on("input", function(event) {
	let threshold = this.value;
	$("#threshold").text(threshold);
})

socket.on("setQuality", function(data) {
	$("#quality").text(data);
	$("#qualitySlider").val(data);
});
socket.on("setScale", function(data) {
	$("#scale").text(data);
	$("#scaleSlider").val(data);
});
socket.on("setFPS", function(data) {
	$("#fps").text(data);
	$("#fpsSlider").val(data);
});

/* LAGLESS 1.0*/
getLatestImage();

/* LAGLESS 2.0 */
// Setup the WebSocket connection and start the player
let url = "wss://twitchplaysnintendoswitch.com/8002/";
let canvas2 = document.getElementById("videoCanvas2");
// Default 512*1024 (512kb).
// Default 128*1024 (128kb)
let player = new JSMpeg.Player(url, {canvas: canvas2, audio: true, videoBufferSize: 256*1024, audioBufferSize: 128*1024});
player.maxAudioLag = 0.5;
player.stop();
player.stats = stats;

// $("#lagless2Refresh").on("click", function() {
// 	client = WebSocket("wss://twitchplaysnintendoswitch.com/8002/ws");
// 	canvas2 = document.getElementById("videoCanvas2");
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

// var pixelValues = new Uint8Array(400);
// var gl = player.renderer.gl;
// gl.readPixels(0, 0, 10, 10, gl.RGB, gl.UNSIGNED_BYTE, pixelValues);




/* LAGLESS 3.0 */
let canvas3 = document.getElementById("videoCanvas3");
// Create h264 player
let uri = "wss://twitchplaysnintendoswitch.com/8003/";
let wsavc = new WSAvcPlayer(canvas3, "webgl", 1, 35);
wsavc.stats = stats;


$("#lagless3Refresh").on("click", function() {
	try {
		wsavc.disconnect();
	} catch(error) {
	}
	let uri = "wss://twitchplaysnintendoswitch.com/8003/";
	wsavc.connect(uri);
});



/* LAGLESS 2.0 3DS*/
// Setup the WebSocket connection and start the player
// let url2 = "wss://twitchplaysnintendoswitch.com/8004/";
// let canvas4 = document.getElementById("videoCanvas4");
// let player2 = new JSMpeg.Player(url, {canvas: canvas4, audio: true});
// player2.maxAudioLag = 0.5;// todo: max adjustable
// player2.stop();
// player2.stats = stats;




/* RESIZALBLE */
// interact("#screen")
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



/* SWITCH IMPLEMENTATIONS */

$(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function(e) {

	let tab = $(e.target);
	let contentId = tab.attr("href");

	//This check if the tab is active
	if (tab.parent().hasClass("active")) {
		
		//console.log("the tab with the content id " + contentId + " is visible");
		
		// lagless 1:
		if (contentId == "#lagless1") {
			//$("#screen").append("<img id='screenshot'></img>")
			lagless1Break = false;
			getLatestImage();
		} else {
			lagless1Break = true;
		}
		
		// lagless 2:
		if (contentId == "#lagless2") {
			if (typeof player != "undefined") {
				player.play();
			}
		} else {
			if (typeof player != "undefined") {
				player.stop();
			}
		}
		
		// lagless 3:
		if (contentId == "#lagless3") {
			//let uri = "wss://twitchplaysnintendoswitch3.localtunnel.me";
			let uri = "wss://twitchplaysnintendoswitch.com/8003/";
			wsavc.connect(uri);
		} else {
			try {
				wsavc.disconnect();
			} catch(error) {
			}
		}
		
		// lagless 4:
		if (contentId == "#lagless4") {
			if (typeof player2 != "undefined") {
				player2.play();
			}
		} else {
			if (typeof player2 != "undefined") {
				player2.stop();
			}
		}

	} else {}

});


/* NEW AUDIO @@@@@@@@@@@@@@@@ */
let hash = window.location.hash.replace("#", "");
let meeting = new Meeting(hash);
let remoteMediaStreams = document.getElementById("remote-media-streams");
let localMediaStream = document.getElementById("local-media-stream");
let channel = "#twitchplaysnintendoswitch";
let sender = Math.round(Math.random() * 999999999) + 999999999;
let socket2 = io("https://twitchplaysnintendoswitch.com", {
	path: "/8110/socket.io/",
	transports: ["websocket"],
});
socket2.emit("new-channel", {
	channel: channel,
	sender: sender
});
//socket = io.connect(SIGNALING_SERVER + channel);
io.connect("https://twitchplaysnintendoswitch.com", {
	path: "/8110/socket.io/",
	transports: ["websocket"] // added
});
socket2.on("connect", function() {
	// setup peer connection & pass socket object over the constructor!
});
socket2.send = function(message) {
	socket.emit("message", {
		sender: sender,
		data: message
	});
};
meeting.openSignalingChannel = function(callback) {
	return socket.on("message", callback);
};
// on getting media stream
meeting.onaddstream = function(e) {
};
// using firebase for signaling
meeting.firebase = "rtcweb";
// if someone leaves; just remove their audio
meeting.onuserleft = function(userid) {
	let audio = document.getElementById(userid);
	if (audio) audio.parentNode.removeChild(audio);
};
// check pre-created meeting rooms
meeting.check();


// $("#toggleAudio").on("click", function() {
// 	toggleAudio = !toggleAudio;
// 	if (toggleAudio) {
// 		audioElem.play();
// 	} else {
// 		audioElem.pause();
// 	}
// });

$("#audioCheckbox").on("click", function() {
	toggleAudio = !toggleAudio;
	if ($("#audioCheckbox")[0].checked) {
		audioElem.play();
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
audioElem.volume = 0;


/* QUEUE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
socket.on("controlQueue", function(data) {
	controlQueue = data.queue;
	$("#controlQueue").empty();
	
	for (let i = 0; i < controlQueue.length; i++) {
		let username = controlQueue[i];
		let html;
		if (!toggleDarkTheme) {
			html = "<li class='list-group-item'>" + username + "</li>";
		} else {
			html = "<li class='list-group-item-dark'>" + username + "</li>";
		} 
		$("#controlQueue").append(html);
	}
});

socket.on("twitchUsername", function(data) {
	twitchUsername = data;
});

socket.on("turnTimeLeft", function(data) {
	timeLeft = data.timeLeft;
	turnUsername = data.username;
	turnLength = data.turnLength;
	lastCurrentTime = Date.now();
	let timeLeftMilli = timeLeft;
	let timeLeftSec = parseInt(timeLeft / 1000);
	let percent = parseInt((timeLeftMilli / turnLength) * 100);
	let progressBar = $(".progress-bar");
	
	if (turnUsername == null) {
		percent = 100;
		progressBar.css("width", percent + "%").attr("aria-valuenow", "100%").text("No one is playing right now.");
		$("#currentPlayer").text("No one is playing right now.");
	} else {
		progressBar.css("width", percent + "%").attr("aria-valuenow", percent + "%").text(data.username + ": " + timeLeftSec + " seconds");
		$("#currentPlayer").text("Current Player: " + turnUsername);
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

$("#requestTurn").on("click", function(event) {
	socket.emit("requestTurn");
});

$("#cancelTurn").on("click", function(event) {
	socket.emit("cancelTurn");
});






/* DARK THEME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

$("#toggleTheme").on("click", function() {
	toggleDarkTheme = !toggleDarkTheme;
	if (toggleDarkTheme) {
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
		
		$("body").addClass("dark");
		
		$("#twitchChat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat?darkpopout");
		
		
// ::-webkit-scrollbar { width: 8px; height: 3px;}
// ::-webkit-scrollbar-button {  background-color: #666; }
// ::-webkit-scrollbar-track {  background-color: #646464;}
// ::-webkit-scrollbar-track-piece { background-color: #000;}
// ::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
// ::-webkit-scrollbar-corner { background-color: #646464;}}
// ::-webkit-resizer { background-color: #666;}
// 		$("::-webkit-scrollbar").css("width: 8px; height: 3px;");
// 		$("::-webkit-scrollbar-button").css("background-color: #666;");
// 		$("::-webkit-scrollbar-track").css("background-color: #646464;");
// 		$("::-webkit-scrollbar-track-piece").css("background-color: #000;");
		
// 		$("::-webkit-scrollbar-thumb").css("height: 50px; background-color: #666; border-radius: 3px;");
// 		$("::-webkit-scrollbar-corner").css("background-color: #646464;");
// 		$("::-webkit-resizer").css("background-color: #666;");
		
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
		
		$("body").removeClass("dark");
		
		$("#twitchChat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat");
	}
});

$("#darkThemeCheckbox").on("click", function() {
	toggleDarkTheme = !toggleDarkTheme;
	if ($("#darkThemeCheckbox")[0].checked) {
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
		
		$("body").addClass("dark");
		
		$("#twitchChat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat?darkpopout");
		
		
// ::-webkit-scrollbar { width: 8px; height: 3px;}
// ::-webkit-scrollbar-button {  background-color: #666; }
// ::-webkit-scrollbar-track {  background-color: #646464;}
// ::-webkit-scrollbar-track-piece { background-color: #000;}
// ::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
// ::-webkit-scrollbar-corner { background-color: #646464;}}
// ::-webkit-resizer { background-color: #666;}
// 		$("::-webkit-scrollbar").css("width: 8px; height: 3px;");
// 		$("::-webkit-scrollbar-button").css("background-color: #666;");
// 		$("::-webkit-scrollbar-track").css("background-color: #646464;");
// 		$("::-webkit-scrollbar-track-piece").css("background-color: #000;");
		
// 		$("::-webkit-scrollbar-thumb").css("height: 50px; background-color: #666; border-radius: 3px;");
// 		$("::-webkit-scrollbar-corner").css("background-color: #646464;");
// 		$("::-webkit-resizer").css("background-color: #666;");
		
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
		
		$("body").removeClass("dark");
		
		$("#twitchChat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat");
	}
});


/* TOGGLE FULLSCREEN @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#fullscreenCheckbox").on("click", function() {
	if ($("#fullscreenCheckbox")[0].checked) {
		$("#screen")[0].style.width = "100%";
		$("#screen")[0].style["margin-left"] = "0";
		$("#videoCanvas2")[0].style.width = "100%";
		$("#videoCanvas2")[0].style["margin-left"] = "0";
		$("#videoCanvas3")[0].style.width = "100%";
	} else {
		$("#screen")[0].style.width = "75%";
		$("#screen")[0].style["margin-left"] = "12.5%";
		$("#videoCanvas2")[0].style.width = "75%";
		$("#videoCanvas2")[0].style["margin-left"] = "12.5%";
		$("#videoCanvas3")[0].style.width = "75%";
	}
});


/* TOGGLE FULLSCREEN @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#fullscreenCheckbox").on("click", function() {
	toggleFullscreen = !toggleFullscreen;
	if ($("#fullscreenCheckbox")[0].checked) {
		$("#screen")[0].style.width = "100%";
		$("#screen")[0].style["margin-left"] = "0";
		$("#videoCanvas2")[0].style.width = "100%";
		$("#videoCanvas2")[0].style["margin-left"] = "0";
		$("#videoCanvas3")[0].style.width = "100%";
	} else {
		$("#screen")[0].style.width = "75%";
		$("#screen")[0].style["margin-left"] = "12.5%";
		$("#videoCanvas2")[0].style.width = "75%";
		$("#videoCanvas2")[0].style["margin-left"] = "12.5%";
		$("#videoCanvas3")[0].style.width = "75%";
	}
});


/* TOGGLE HIDE NAV @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
$("#navCheckbox").on("click", function() {
	if ($("#navCheckbox")[0].checked) {
		$(".nav")[0].style.display = "none"
	} else {
		$(".nav")[0].style.display = ""
	}
});


/* TOGGLE CHAT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
// $("#toggleChat").on("click", function() {
// 	toggleChat = !toggleChat;
// 	if (toggleChat) {
// 		$("#twitchChat").attr("style", "display: none;");
// 		$("#picture").attr("style", "width: 100%;");
// 	} else {
// 		$("#twitchChat").attr("style", "display: visible;");
// 		$("#picture").attr("style", "width: 75%;");
// 	}
// });

// start checked:
$("#chatCheckbox")[0].checked = true;

$("#chatCheckbox").on("click", function() {
	if (!$("#chatCheckbox")[0].checked) {
		$("#twitchChat").attr("style", "display: none;");
		$("#picture").attr("style", "width: 100%;");
	} else {
		$("#twitchChat").attr("style", "display: visible;");
		$("#picture").attr("style", "width: 75%;");
	}
});

/* MOBILE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
// check if on mobile, if so, change to tab2
let isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
// if (isMobile) {
// 	$("#tab2").trigger("click");
// }
// default:
$("#tab2").trigger("click");



/* CONTROLLER VIEW @@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
let controllerCanvas = document.getElementById("controllerViewCanvas");
let controllerCtx = controllerCanvas.getContext("2d");
controllerCanvas.width = 1500;
controllerCanvas.height = 1045;

let img = new Image();
img.onload = function() {
	let width = controllerCanvas.width;
	let height = controllerCanvas.height;
	let ratio = (img.height / img.width);
	controllerCtx.drawImage(img, 0, 0, width * ratio, height);
};
img.src = "https://twitchplaysnintendoswitch.com/images/procontroller.png";




/* PING @@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
setInterval(function() {
	pingTime = Date.now();
	socket.emit("ping2");
}, 1000);

socket.on("pong2", function() {
	let latency = Date.now() - pingTime;
	$("#ping").text(latency + "ms");
});

