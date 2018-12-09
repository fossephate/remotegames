// import Gamepad from "js/gamepad.js";

import GamepadWrapper from "js/GamepadWrapper.js";

// import InputState from "js/InputHandler.js";

const VirtualProController = require("./VirtualProController.js");
let restPos = 128;

// class ControllerMapping {
// 	constructor(type, rest, activated, released, which) {
// 		this.type = type;
//
// 		if (type == "button") {
// 			this.rest = rest;
// 		} else if (type == "axis") {
// 			this.rest = rest;
// 			this.activated = active;
// 			this.released = released;
// 			this.index = which;
// 		}
// 	}
// }

class AxisSettings {
	constructor(sensitivity, offset, deadzone) {
		this.sensitivity = sensitivity;
		this.offset = offset;
		this.deadzone = deadzone;
	}
}

class AxisMapping {

	constructor(which, activationThreshold, aboveOrBelow) {

		if (typeof(which) == "number") {
			this.type = "axis";
		} else {
			this.type ="button";
		}

		this.which = which;

		if (this.type == "button") {
			this.activationThreshold = activationThreshold;
			this.aboveOrBelow = aboveOrBelow;
		}

		if (this.type == "axis") {

		}

	}

}


class ButtonMapping {

	constructor(which, value, isAnalog) {

		this.which = which;

		if (typeof(which) == "string") {
			this.type = "button";
		} else if (typeof(which) == "number") {
			this.type = "axis";
			this.value = value;
			this.isAnalog = isAnalog;
		}
	}
}

class VirtualController {

	constructor() {

		this.activeControllers = [1];
		this.state = new VirtualProController();
		// this.gamepadWrapper = new GamepadWrapper();
		// this.getState = this.state.getState;
		// this.setState = this.state.setState;

		this.gamepadList = [];

		this.poll = this.poll.bind(this);

		this.settings = {

			activeController: "0",

			axes: [
				new AxisSettings(1, 0, 50),
				new AxisSettings(-1, 0, 50),
				new AxisSettings(1, 0, 50),
				new AxisSettings(-1, 0, 50),
				new AxisSettings(1, 0, 50),
				new AxisSettings(1, 0, 50),
				new AxisSettings(1, 0, 50),
				new AxisSettings(1, 0, 50),
				new AxisSettings(1, 0, 50),
				new AxisSettings(1, 0, 50),
				new AxisSettings(1, 0, 50),
				new AxisSettings(1, 0, 50),
			],

			map: {

				buttons: [
					// new ButtonMapping("up"),
					// new ButtonMapping("down"),
					// new ButtonMapping("left"),
					// new ButtonMapping("right"),
					// new ButtonMapping("l"),
					// new ButtonMapping("zl"),
					// new ButtonMapping("lstick"),
					// new ButtonMapping("minus"),
					// new ButtonMapping("capture"),
					//
					// new ButtonMapping("a"),
					// new ButtonMapping("b"),
					// new ButtonMapping("x"),
					// new ButtonMapping("y"),
					// new ButtonMapping("r"),
					// new ButtonMapping("zr"),
					// new ButtonMapping("rstick"),
					// new ButtonMapping("plus"),

					new ButtonMapping("b"),
					new ButtonMapping("a"),
					new ButtonMapping("y"),
					new ButtonMapping("x"),
					new ButtonMapping("l"),
					new ButtonMapping("r"),
					new ButtonMapping("zl"),
					new ButtonMapping("zr"),
					new ButtonMapping("minus"),
					new ButtonMapping("plus"),
					new ButtonMapping("lstick"),
					new ButtonMapping("rstick"),
					new ButtonMapping("up"),
					new ButtonMapping("down"),
					new ButtonMapping("left"),
					new ButtonMapping("right"),
					new ButtonMapping("home"),

					// extra:
					new ButtonMapping("a"), new ButtonMapping("a"),
					new ButtonMapping("a"), new ButtonMapping("a"),
					new ButtonMapping("a"), new ButtonMapping("a"),
					new ButtonMapping("a"), new ButtonMapping("a"),
					new ButtonMapping("a"), new ButtonMapping("a"),
					new ButtonMapping("a"), new ButtonMapping("a"),
					new ButtonMapping("a"), new ButtonMapping("a"),
				],

				axes: [
					new AxisMapping(0),
					new AxisMapping(1),
					new AxisMapping(2),
					new AxisMapping(3),
					new AxisMapping(4),
					new AxisMapping(5),
					new AxisMapping(6),
					new AxisMapping(7),
				],
			},

		}

	}

	init() {

		window.gamepadWrapper = new GamepadWrapper();

		window.gamepadWrapper.callbackAfterPoll = this.poll;

	}

	poll() {

		// for (let i = 0; i < this.activeControllers.length; i++) {
		for (let i in gamepadWrapper.controllers) {

			// let index = this.activeControllers[i];
			//
			// let controller = gamepadWrapper.controllerStates[index];

			let controller = gamepadWrapper.controllers[i];

			if (!controller) {
				continue;
			}

			// todo: remove
			if (this.gamepadList.indexOf(controller.id) == -1) {
				this.gamepadList.push(controller.id);
			}

			if (controller.id.indexOf("Xbox") == -1 && controller.id.indexOf("play") == -1) {
				// console.log(controller.id);
				continue;
			}

			// map buttons and axes to VirtualProController:

			// buttons:
			for (let j = 0; j < controller.buttons.length; j++) {

				let button = controller.buttons[j];
				let mapping = this.settings.map.buttons[j];

				if (j > 30) {
					continue;
				}

				if (mapping.type = "button") {
					this.state.buttons[mapping.which] = button.pressed ? 1 : 0;
				} else if (mapping.type = "axis") {
					console.log("something is wrong");
					// TODO:
					// this.state.axes[mapping.which] = button.pressed ? button.value : 0;
				}

			}

			// axes:
			for (let j = 0; j < controller.axes.length; j++) {

				let axis = controller.axes[j];
				let mapping = this.settings.map.axes[j];

				if (mapping.type = "axis") {

					// let x = (e.value[0] * this.settings.sticks.L.X.sensitivity);
					// let y = (e.value[1] * this.settings.sticks.L.Y.sensitivity);
					// x = (x / 2) + 0.5;
					// y = (-y / 2) + 0.5;
					// x *= 255;
					// y *= 255;
					// this.state.sticks[0][0] = parseInt(x) + this.settings.sticks.L.X.offset;
					// this.state.sticks[0][1] = parseInt(y) + this.settings.sticks.L.Y.offset;
					// if (Math.abs(restPos - this.state.sticks[0][0]) < this.settings.sticks.L.X.deadzone) {
					// 	this.state.sticks[0][0] = restPos;
					// }
					// if (Math.abs(restPos - this.state.sticks[0][1]) < this.settings.sticks.L.Y.deadzone) {
					// 	this.state.sticks[0][1] = restPos;
					// }

					let x = (axis * this.settings.axes[mapping.which].sensitivity);
					x = (x / 2) + 0.5;
					x *= 255;
					this.state.axes[mapping.which] = parseInt(x) + this.settings.axes[mapping.which].offset;
					if (Math.abs(restPos - this.state.axes[mapping.which]) < this.settings.axes[mapping.which].deadzone) {
						this.state.axes[mapping.which] = restPos;
					}
					// this.state.axes[mapping.which] = axis;

				} else if (mapping.type = "button") {
					if (mapping.aboveOrBelow) {
						this.state.buttons[mapping.which] = (axis > mapping.activationThreshold) ? 1 : 0;
					} else {
						this.state.buttons[mapping.which] = (axis < mapping.activationThreshold) ? 1 : 0;
					}
				}

			}

		}

	}

}

module.exports = VirtualController;
