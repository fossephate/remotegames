
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

		this.callbacksAfterPoll = [];
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

		for (let i = 0; i < this.callbacksAfterPoll.length; i++) {
			this.callbacksAfterPoll[i]();
		}
	}

}

module.exports = GamepadWrapper;
