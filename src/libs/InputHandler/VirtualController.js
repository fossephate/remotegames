import ControllerState from "./ControllerState.js";
const restPos = 0;

export const AxisSettings = class AxisSettings {
	constructor(sensitivity, offset, deadzone) {
		this.sensitivity = sensitivity;
		this.offset = offset;
		this.deadzone = deadzone;
	}
};

class AxisMapping {
	constructor(which, activationThreshold, aboveOrBelow) {
		if (typeof which == "number") {
			this.type = "axis";
		} else {
			this.type = "button";
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

		if (typeof which == "string") {
			this.type = "button";
		} else if (typeof which == "number") {
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

export default class VirtualController {
	constructor(gamepadWrapper) {
		this.gamepadWrapper = gamepadWrapper;

		// this.activeControllers = [1];
		this.cstate = new ControllerState();
		this.getControllerState = this.getControllerState.bind(this);
		this.oldState = {
			buttons: [],
			axes: [],
		};

		for (let i = 0; i < 50; i++) {
			this.oldState.buttons.push(new ButtonState(0, 0));
			this.oldState.axes.push(0);
		}

		this.changed = false;

		this.lastChangedButton = null;
		this.lastChangedAxis = null;

		// this.gamepadList = [];

		this.triggerIndexes = [];

		this.poll = this.poll.bind(this);
		this.autoSelectGamepad = this.autoSelectGamepad.bind(this);

		this.settings = {
			controllerIndex: null,

			axes: [
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(-1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(-1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
				new AxisSettings(1, 0, 0.1),
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
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
					new ButtonMapping("a"),
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
					new AxisMapping(8),
					new AxisMapping(9),
					new AxisMapping(10),
					new AxisMapping(11),
					new AxisMapping(12),
					new AxisMapping(13),
					new AxisMapping(14),
					new AxisMapping(15),
					new AxisMapping(16),
				],
			},
		};
	}

	autoSelectGamepad() {
		// only auto select if one hasn't already been selected:
		if (this.settings.controllerIndex != null) {
			return;
		}

		// auto select an xbox / playstation controller:
		let keys = [];
		for (let key in this.gamepadWrapper.controllers) {
			let controller = this.gamepadWrapper.controllers[key];
			key = parseInt(key);
			if (controller.id.indexOf("Xbox") > -1) {
				this.settings.controllerIndex = key;
				console.log("Xbox controller found!");
			}
			if (controller.id.indexOf("Twin") > -1) {
				this.settings.controllerIndex = key;
				console.log("Playstation controller found!");
			}
			if (controller.id.indexOf("Pro Controller") > -1) {
				this.settings.controllerIndex = key;
				console.log("Pro controller found!");
			}
			keys.push(key);
		}
		// didn't find a known controller, just pick the first one if there is one:
		if (this.settings.controllerIndex == null && keys.length > 0) {
			this.settings.controllerIndex = keys[0];
		}
	}

	init() {
		this.gamepadWrapper.callbacksAfterPoll.push(this.poll);
		setTimeout(this.autoSelectGamepad, 2000);
		setInterval(this.autoSelectGamepad, 10000);
	}

	poll() {
		let controller = this.gamepadWrapper.controllers[this.settings.controllerIndex];

		// console.log(controller);
		// console.log(this.gamepadWrapper.controllers);
		// console.log(this.settings.controllerIndex);

		if (!controller) {
			return;
		}

		let oldState = JSON.stringify(this.cstate.getState());

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
			if (oldPressed != newPressed || oldValue != newValue) {
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
				this.cstate.axes[4 + triggerIndex] = button.value;
				// continue;
			}

			if (this.triggerIndexes.length < 2) {
				// check if it's a float:
				if (button.value % 1 != 0 && this.triggerIndexes.indexOf(j) == -1) {
					this.triggerIndexes.push(j);
					this.triggerIndexes.sort();
				}
			}

			if (mapping.type == "button") {
				this.cstate.buttons[mapping.which] = button.pressed ? 1 : 0;
			} else if (mapping.type == "axis") {
				console.log("something is wrong");
				// TODO:
				// this.cstate.axes[mapping.which] = button.pressed ? button.value : 0;
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

			if (mapping.type == "axis") {
				let ax = this.settings.axes[mapping.which];
				if (!ax) {
					console.log("mapping error?");
					console.log(this.settings.axes);
					console.log(mapping.which);
					return;
				}
				let x = axis * ax.sensitivity;
				// x = x / 2 + 0.5;
				// x *= 255;
				this.cstate.axes[mapping.which] = x + this.settings.axes[mapping.which].offset;
				if (
					Math.abs(restPos - this.cstate.axes[mapping.which]) <
					this.settings.axes[mapping.which].deadzone
				) {
					this.cstate.axes[mapping.which] = restPos;
				}
				// this.cstate.axes[mapping.which] = axis;
			} else if (mapping.type == "button") {
				if (mapping.aboveOrBelow) {
					this.cstate.buttons[mapping.which] = axis > mapping.activationThreshold ? 1 : 0;
				} else {
					this.cstate.buttons[mapping.which] = axis < mapping.activationThreshold ? 1 : 0;
				}
			}
		}

		let newState = JSON.stringify(this.cstate.getState());
		if (newState != oldState) {
			this.changed = true;
		}
	}

	getControllerState() {
		return this.cstate.getState();
	}
}
