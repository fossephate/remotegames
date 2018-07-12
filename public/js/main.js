let socket = io("https://twitchplaysnintendoswitch.com", {
	path: "/8110/socket.io",
	transports: ["websocket"],
});

socket.on("connection", function(socket) {
});

let globalEventTimer = false;
let keyboardTimer;
let gamepadTimer;
let touchTimer;
let lagless1Break = false;
let lagless1JoinTimer;
let audio = true;
let controlQueue = [];
let twitchUsername = null;
let toggleDarkTheme = false;
let toggleFullscreen = false;
let timeLeft = 30000;
let turnLength = 30000;
let timeTillForfeit = 15000;
let turnUsername = null;
let lastCurrentTime = 0;
let mouseMoveTimer = null;
let isMobile = false;
let pingTime = 0;
let restPos = 128;
let oldControllerState = "800000000000000" + " " + restPos + " " + restPos + " " + restPos + " " + restPos;
let stats = new Stats();
let lagless2Port = 8002;// 8008
let lagless3Port = 8003;// 8009
stats.showPanel(0);// 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild(stats.dom);

/* MOBILE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
// check if on mobile, if so, change to tab2
// device detection
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


let now;
let elapsed;
let fpsInterval = 1000 / 10;
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

function sendControllerState() {
	
	let newControllerState = "";

	if (controller.btns.up == 1 && controller.btns.left == 1) {
		newControllerState += "7";
	} else if (controller.btns.up == 1 && controller.btns.right == 1) {
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

	newControllerState += controller.btns.stick_button;
	newControllerState += controller.btns.l;
	newControllerState += controller.btns.zl;
	newControllerState += controller.btns.minus;
	newControllerState += controller.btns.capture;

	newControllerState += controller.btns.a;
	newControllerState += controller.btns.b;
	newControllerState += controller.btns.x;
	newControllerState += controller.btns.y;
	newControllerState += controller.btns.stick_button2;
	newControllerState += controller.btns.r;
	newControllerState += controller.btns.zr;
	newControllerState += controller.btns.plus;
	newControllerState += controller.btns.home;


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
		swal("It's not your turn yet!");
		//$("#turnTimerBar").effect("shake", {direction: "left", distance: 100, times: 2}, 250);
// 		let timerInterval;
// 		swal({
// 			title: "It's not your turn yet!",
// 			html: "I will close in <strong></strong> seconds.",
// 			timer: 100,
// 			onOpen: () => {
// 				swal.showLoading()
// 				timerInterval = setInterval(() => {
// 					swal.getContent().querySelector("strong")
// 						.textContent = swal.getTimerLeft()
// 				}, 10)
// 			},
// 			onClose: () => {
// 				clearInterval(timerInterval);
// 			}
// 		}).then((result) => {
// 			if (
// 				// Read more about handling dismissals
// 				result.dismiss === swal.DismissReason.timer
// 			) {
// 				console.log("I was closed by the timer");
// 			}
// 		});
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
		swal("You need to connect to twitch! Redirecting you now!");
		setTimeout(function() {
			window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
		}, 2000);
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
		swal("You need to connect to twitch! Redirecting you now!");
		setTimeout(function() {
			window.location.href = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/";
		}, 2000);
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
	setTimeout(function(){
		leftJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/leftJoyCon2.png";
	}, 3000);


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
	setTimeout(function(){
		rightJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/rightJoyCon2.png";
	}, 3000);
}
drawJoyCons();

function setVideoWidth(width, num) {
	$("#videoCanvas1")[0].style.width = width + "%";
	$("#videoCanvas1")[0].style["margin-left"] = ((100-width)/2) + "%";
	$("#videoCanvas2")[0].style.width = width + "%";
	$("#videoCanvas2")[0].style["margin-left"] = ((100-width)/2) + "%";
	$("#videoCanvas3")[0].style.width = width + "%";
	$("#videoCanvas3")[0].style["margin-left"] = ((100-width)/2) + "%";
	$("#rightJoyCon")[0].style["margin-left"] = (width) + ((100-width)/2) + "%";
	$("#leftJoyCon")[0].style.width = ((100-width)/2) + "%";
	$("#rightJoyCon")[0].style.width = ((100-width)/2) + "%";
	leftJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/leftJoyCon2.png";
	rightJoyConImage.src = "https://twitchplaysnintendoswitch.com/images/rightJoyCon2.png";
}

setTimeout(function() {
	setVideoWidth(73.2);
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
	if (!document.getElementById("touchControlsCheckbox").checked) {
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


function onButtonPress(e) {
	
	e.preventDefault();
	
	if (!document.getElementById("touchControlsCheckbox").checked) {return;}
	if (e.toElement == null) {return;}
	if (e.toElement.id == "dpadButtons" || e.toElement.id == "abxyButtons") {return;}
	
	let value = 0;
	if (e.type == "mousedown" || e.type == "touchstart" || e.type == "pointerdown") {
		value = 1;
		//swal("touchstart");
	} else if (e.type == "mouseup" || e.type == "mouseleave" || e.type == "touchend" || e.type == "pointerup" || e.type == "pointerout") {
		value = 0;
		//swal("touchend");
	} else if (e.type == "touchmove") {
		// todo: make an equivalent to mouseleave since touchleave doesn't exist :/
	}
	
	
	let button = e.toElement.id;
	
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
	
	if(controlQueue.indexOf(twitchUsername) == -1) {
		socket.emit("requestTurn");
	}
	
}


// $("#videoCanvas2")[0].style.width = "100%";
// $("#videoCanvas2")[0].style["margin-left"] = "0";
$("#touchControlsCheckbox").on("click", function() {
	
	let buttonsList = ["#dpadButtons", "#abxyButtons", "#leftJoyConOther", "#rightJoyConOther"];
	
	if ($("#touchControlsCheckbox")[0].checked) {
		
		$("#leftJoyCon")[0].style.display = "";
		$("#rightJoyCon")[0].style.display = "";
		
		setVideoWidth(73.2);
		
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
});

// setTimeout(function() {
// 	$("#leftJoyCon")[0].style.display = "none";
// 	$("#rightJoyCon")[0].style.display = "none";
// }, 5000);
$("#touchControlsCheckbox").trigger("click");

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

let videoCanvas1 = $("#videoCanvas1")[0];
let videoCanvas1Context = videoCanvas1.getContext("2d");
videoCanvas1.width = 1280;
videoCanvas1.height = 720;

socket.on("viewImage", function(data) {
	stats.begin();
	let src = "data:image/jpeg;base64," + data.src;
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
		let ratioH = 729 / $("#videoCanvas1").innerHeight();
		let cWidth = $("#videoCanvas1").innerWidth();
		videoCanvas1Context.clearRect(0, 0, canvasWidth, canvasHeight);
		videoCanvas1Context.drawImage(image, 0, 0, cWidth * ratioW, cWidth * ratio * ratioH);
	};
	image.src = src;
	stats.end();
});
$("#lagless1Refresh").on("click", function() {
	socket.emit("restart");
});

/* LAGLESS 2.0 */
// Setup the WebSocket connection and start the player
let url = "wss://twitchplaysnintendoswitch.com/" + lagless2Port + "/";
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


/* LAGLESS 3.0 */
let canvas3 = document.getElementById("videoCanvas3");
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



/* LAGLESS 2.0 3DS*/
// Setup the WebSocket connection and start the player
// let url2 = "wss://twitchplaysnintendoswitch.com/8004/";
// let canvas4 = document.getElementById("videoCanvas4");
// let player2 = new JSMpeg.Player(url, {canvas: canvas4, audio: true});
// player2.maxAudioLag = 0.5;// todo: max adjustable
// player2.stop();
// player2.stats = stats;


// default:
setTimeout(function() {
	$("#tab2").trigger("click");
}, 100);

/* RESIZALBLE */
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


function addJoyCons(tab) {
	
	tab = tab + "View";
	
	// delete old joycons:
	try {
		leftStick.destroy();
		rightStick.destroy();
	} catch(e) {
		
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
	$("#touchControlsCheckbox").trigger("click");
	$("#touchControlsCheckbox").trigger("click");
	
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

	// check if the tab is active
	if (tab.parent().hasClass("active")) {
		
		// lagless 1:
		if (contentId == "#lagless1") {
			socket.emit("join", "viewers");
			// todo: fix this:
			lagless1JoinTimer = setInterval(function() {
				socket.emit("join", "viewers");
			}, 5000);
			$("#lagless1Volume").slider("value", 50);
			audioElem.volume = 0.5;// doesn't update automatically :/
		} else {
			clearInterval(lagless1JoinTimer);
			socket.emit("leave", "viewers");
		}
		
		// lagless 2:
		if (contentId == "#lagless2") {
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
			//let uri = "wss://twitchplaysnintendoswitch3.localtunnel.me";
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
			if (typeof player2 != "undefined") {
				player2.play();
			}
		} else {
			if (typeof player2 != "undefined") {
				player2.stop();
			}
		}
		
		addJoyCons(contentId);
	}
	
	// https://github.com/yoannmoinet/nipplejs/issues/39
	// force joysticks to recalculate the center:
	window.dispatchEvent(new Event("resize"));
	setTimeout(function() {
		window.dispatchEvent(new Event("resize"));
	}, 2000);
});


/* AUDIO WEBRTC @@@@@@@@@@@@@@@@ */
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


$("#audioCheckbox").on("click", function() {
	toggleAudio = !toggleAudio;
	if ($("#audioCheckbox")[0].checked) {
		audioElem.play();
	} else {
		audioElem.pause();
	}
});

// $("#globalVolume").slider({
//     min: 0,
//     max: 100,
//     value: 0,
// 		range: "min",
// 		animate: true,
// 	slide: function(event, ui) {
// 		audioElem.volume = ui.value / 100;
//   	}
// });
// audioElem.volume = 0;

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
$("#lagless1Volume").slider("value", 0);
audioElem.volume = 0;// doesn't update automatically :/

$("#lagless1VolumeSlider").children().on("click", function(){
	$("#lagless1Volume").slider("value", 0);
	audioElem.volume = 0.0;// doesn't update automatically :/
});

$("#lagless1VolumeSlider").children().next().on("click", function(){
	$("#lagless1Volume").slider("value", 100);
	audioElem.volume = 1;// doesn't update automatically :/
});


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
	let progressBar = $("#turnTimerBarChild");
	
	let timeLeftMilli2 = data.timeLeftForfeit;
	let timeLeftSec2 = parseInt(timeLeftMilli2 / 1000);
	let percent2 = parseInt((timeLeftMilli2 / timeTillForfeit) * 100);
	let forfeitBar = $("#forfeitTimerBarChild");
	
	if (turnUsername == null) {
		progressBar.css("width", "100%").attr("aria-valuenow", "100%").text("No one is playing right now.");
		forfeitBar.css("width", "100%").attr("aria-valuenow", "100%").text("No one is playing right now.");
		$("#currentPlayer").text("No one is playing right now.");
	} else {
		progressBar.css("width", percent + "%").attr("aria-valuenow", percent + "%").text(data.username + ": " + timeLeftSec + " seconds");
		forfeitBar.css("width", percent2 + "%").attr("aria-valuenow", percent2 + "%").text(timeLeftSec2 + " seconds until turn forfeit.");
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
	toggleFullscreen = !toggleFullscreen;
	if ($("#fullscreenCheckbox")[0].checked) {
		$("#videoCanvas1")[0].style.width = "100%";
		$("#videoCanvas1")[0].style["margin-left"] = "0";
		$("#videoCanvas2")[0].style.width = "100%";
		$("#videoCanvas2")[0].style["margin-left"] = "0";
		$("#videoCanvas3")[0].style.width = "100%";
	} else {
		$("#videoCanvas1")[0].style.width = "75%";
		$("#videoCanvas1")[0].style["margin-left"] = "12.5%";
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



/* CONTROLLER VIEW @@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
socket.on("controllerState", function(data) {
	
	let str = data;
	let dpad = str[0];
	
	let btns = [];
	let unpressedBtns = ["upButton", "downButton", "leftButton", "rightButton", "aButton", "bButton", "xButton", "yButton", "lButton", "zlButton", "rButton", "zrButton", "minusButton", "captureButton", "plusButton", "homeButton"];
	
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
	
	unpressedBtns = unpressedBtns.filter( function(el) {
		return !btns.includes(el);
	});
	
	for (let i = 0; i < btns.length; i++) {
		$("#" + btns[i])[0].style.background = "rgba(80, 187, 80, 0.7)";//50bb50
	}
	for (let i = 0; i < unpressedBtns.length; i++) {
		$("#" + unpressedBtns[i])[0].style.background = "";
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
	
	$("#leftStick2")[0].style.transform = "translate(" + leftTransform + ")";
	$("#rightStick2")[0].style.transform = "translate(" + rightTransform + ")";
	
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
