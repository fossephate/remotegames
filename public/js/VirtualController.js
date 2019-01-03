// import Gamepad from "js/gamepad.js";

// import GamepadWrapper from "js/GamepadWrapper.js";

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

class ButtonState {
	constructor(pressed, value) {
		this.pressed = pressed;
		this.value = value;
	}
}

class VirtualController {

	constructor() {

		// this.activeControllers = [1];
		this.state = new VirtualProController();
		this.oldState = {
			buttons: [],
			axes: [],
		};

		for (let i = 0; i < 50; i++) {
			this.oldState.buttons.push(new ButtonState(0, 0));
			this.oldState.axes.push(0);
		}

		// this.gamepadWrapper = new GamepadWrapper();
		// this.getState = this.state.getState;
		// this.setState = this.state.setState;

		this.lastChangedButton = null;
		this.lastChangedAxis = null;

		this.gamepadList = [];

		this.triggerIndexes = [];

		this.poll = this.poll.bind(this);

		this.settings = {

			controllerIndex: null,

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

		window.gamepadWrapper.callbacksAfterPoll.push(this.poll);

		// auto select an xbox / playstation controller:
		setTimeout(() => {
			let keys = [];
			for (let key in window.gamepadWrapper.controllers) {
				let controller = window.gamepadWrapper.controllers[key];
				if (controller.id.indexOf("Xbox") > -1) {
					this.settings.controllerIndex = key;
					console.log("Xbox controller found!");
				}
				if (controller.id.indexOf("Twin") > -1) {
					this.settings.controllerIndex = key;
					console.log("Playstation controller found!");
				}
				keys.push(key);
			}
			// didn't find a known controller, just pick the first one if there is one:
			if (keys.length > 0) {
				this.settings.controllerIndex = keys[0];
			}
		}, 2000);

	}

	poll() {

		let controller = window.gamepadWrapper.controllers[this.settings.controllerIndex];

		// console.log(controller);
		// console.log(window.gamepadWrapper.controllers);
		// console.log(this.settings.controllerIndex);

		if (!controller) {
			return;
		}

		// map buttons and axes to VirtualProController:

		// buttons:
		for (let j = 0; j < controller.buttons.length; j++) {

			let button = controller.buttons[j];
			let mapping = this.settings.map.buttons[j];


			let oldPressed = this.oldState.buttons[j].pressed;
			let oldValue = this.oldState.buttons[j].value;
			let newPressed = button.pressed;
			let newValue = button.value;
			// if it's changed:
			if ((oldPressed != newPressed) || (oldValue != newValue)) {
				// console.log(j);
				this.lastChangedButton = j;
			}
			this.oldState.buttons[j].pressed = button.pressed;
			this.oldState.buttons[j].value = button.value;

			if (j > 50) {
				continue;
			}

			let triggerIndex = this.triggerIndexes.indexOf(j);
			if (triggerIndex > -1) {
				this.state.axes[4 + triggerIndex] = button.value;
				// continue;
			}

			if (this.triggerIndexes.length < 2) {
				// check if it's a float:
				if (button.value % 1 != 0 && this.triggerIndexes.indexOf(j) == -1) {
					this.triggerIndexes.push(j);
					this.triggerIndexes.sort();
				}
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

			let oldValue = this.oldState.axes[j];
			let newValue = axis;
			// if it's changed:
			if (oldValue != newValue) {
				this.lastChangedAxis = j;
			}
			this.oldState.axes[j] = axis;

			if (mapping.type = "axis") {

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

module.exports = VirtualController;
