
class GenericGamePad {

	constructor() {

		this.buttons = [];
		this.axes = [];

	}

}

class GamepadWrapper {

	constructor() {

		this.controllers = {};
		this.controllerStates = [];
		this.haveEvents = "ongamepadconnected" in window;
		this.pollTimer = null;

		this.pollGamepads = this.pollGamepads.bind(this);
		this.scanGamepads = this.scanGamepads.bind(this);
		this.addGamepad = this.addGamepad.bind(this);
		this.connectHandler = this.connectHandler.bind(this);
		this.removeGamepad = this.removeGamepad.bind(this);
		this.disconnectHandler = this.disconnectHandler.bind(this);

		window.addEventListener("gamepadconnected", this.connectHandler);
		window.addEventListener("gamepaddisconnected", this.disconnectHandler);

		this.pollTimer = setInterval(this.pollGamepads, (1000 / 120));

		this.callbackAfterPoll = null;
	}

	addGamepad(gamepad) {
		this.controllers[gamepad.index] = gamepad;
	}

	connectHandler(event) {
		if (event.gamepad.id.indexOf("vJoy") > -1) {
			return;
		}
		this.addGamepad(event.gamepad);
	}


	removeGamepad(gamepad) {
		delete this.controllers[gamepad.index];
	}

	disconnectHandler(event) {
		this.removeGamepad(event.gamepad);
	}

	scanGamepads() {
		let gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
		for (let i = 0; i < gamepads.length; i++) {
			if (gamepads[i]) {
				if (gamepads[i].id.indexOf("vJoy") > -1) {
					return;
				}
				if (gamepads[i].index in this.controllers) {
					this.controllers[gamepads[i].index] = gamepads[i];
				} else {
					this.addGamepad(gamepads[i]);
				}
			}
		}
	}

	pollGamepads() {

		if (!this.haveEvents) {
			this.scanGamepads();
		}

		// for (let index in this.controllers) {
		// 	let controller = this.controllers[index];
		// 	let i = parseInt(index);
		//
		// 	if (!this.controllerStates[i]) {
		// 		this.controllerStates[i] = {buttons: [], axes: []};
		// 	}
		//
		// 	for (let j = 0; j < controller.buttons.length; j++) {
		// 		let buttonState = controller.buttons[j];
		// 		this.controllerStates[i].buttons[j] = buttonState;
		// 	}
		//
		// 	for (let j = 0; j < controller.axes.length; j++) {
		// 		let axisState = controller.axes[j];
		// 		this.controllerStates[i].axes[j] = axisState;
		// 	}
		//
		// 	// if (i == 1 && Math.random() > 0.98) {
		// 	// 	console.log(this.controllerStates[i].buttons);
		// 	// }
		// }

		if (this.callbackAfterPoll) {
			this.callbackAfterPoll();
		}
	}

}

// let interval;
//
// if (!("ongamepadconnected" in window)) {
// 	// No gamepad events available, poll instead.
// 	interval = setInterval(pollGamepads, 100);
// }
//
// function pollGamepads() {
// 	// Grab a list of gamepads that are currently connected or a empty array
// 	let gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
// 	const pressedButtons = [];
//
// 	// Loop through all gamepads connect to the computer
// 	for (let i = 0; i < gamepads.length; i++) {
// 		let gamepad = gamepads[i];
// 		if(!!gamepad) {
// 			// Loop through all gamepad buttons pick out pressed ones
// 			for(let b = 0; b < gp.buttons.length; b++) {
//
// 				if(gp.buttons[b].pressed) {
// 					pressedButtons.push(b);
// 				}
//
// 			}
// 		}
//
// 	}
// 	console.log(`Currently pressing: ${pressedButtons.join(' + ')}`);
// }

module.exports = GamepadWrapper;
