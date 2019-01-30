// libs:

// const keycode = require("keycode");
// require("./keymaster.js");

// input types:
// each should handle each type of device:
import VirtualController from "./VirtualController.js";
import VirtualKeyboard from "./VirtualKeyboard.js";
import VirtualMouse from "./VirtualMouse.js";

const VirtualProController = require("./VirtualProController.js");

import GamepadWrapper from "js/GamepadWrapper.js";
window.gamepadWrapper = new GamepadWrapper();


const BIT_MAP = {
	"up": 0,
	"down": 1,
	"left": 2,
	"right": 3,
	"l": 4,
	"zl": 5,
	"lstick": 6,
	"minus": 7,
	"capture": 8,
	"a": 9,
	"b": 10,
	"x": 11,
	"y": 12,
	"r": 13,
	"zr": 14,
	"rstick": 15,
	"plus": 16,
	"home": 17,
};

export class InputState {

	constructor() {

		this.btns = 0;

		this.axes = [0, 0, 0, 0, 0, 0];

		this.gyro = {
			x: 0,
			y: 0,
			z: 0,
		};

		this.accel = {
			x: 0,
			y: 0,
			z: 0,
		};

		this.mouse = {
			x: 0,
			y: 0,
			dx: 0,
			dy: 0,
		};

		this.keys = [];
	}

	setState(state) {

		// controller:
		if (state.btns != null) {
			this.btns = state.btns;
		}
		if (state.axes != null) {
			this.axes = state.axes;
		}
		if (state.gyro != null) {
			this.gyro = state.gyro;
		}
		if (state.accel != null) {
			this.accel = state.accel;
		}

		// mouse
		if (state.mouse != null) {
			this.mouse = state.mouse;
		}
		// keyboard
		if (state.keys != null) {
			this.keys = state.keys;
		}
	}

	getState() {
		return {
			btns: this.btns,
			axes: this.axes,
			// gyro: this.gyro,
			// accel: this.accel,
			// mouse: this.mouse,
			// keys: this.keys,
		}
	}
}


// map several inputs to a single virtual controller:
export default class InputHandler {


	constructor(isMobile) {

		this.isMobile = isMobile;

		// current device being used:
		this.currentInputMode = "keyboard";

		// represents a controller's current state:
		this.controller = new VirtualController();
		// the current state of the keyboard:
		this.keyboard = new VirtualKeyboard();
		// the current state of the mouse:
		this.mouse = new VirtualMouse(); // todo
		// the touch controls state:
		// this.touch = new ???(); // todo

		// output to be read:
		this.inputState = new InputState();
		this.oldInputState = this.inputState;
		this.oldInputStateString = JSON.stringify(this.inputState);

		// init:
		if (!this.isMobile) {
			this.controller.init();
		}

	}

	pollDevices() {

		let newInputState;
		let updatedState = {
			btns: 0,
			axes: [128, 128, 128, 128, 0, 0],
		};

		updatedState = this.oldInputState;

		if (!this.isMobile) {

			// controller:
			this.controller.poll();
			if (this.controller.changed) {
				this.controller.changed = false;
				this.currentInputMode = "controller";
				updatedState = this.controller.state.getState();

			} else {

				// keyboard:
				this.keyboard.poll();
				if (this.keyboard.changed) {
					this.keyboard.changed = false;
					this.currentInputMode = "keyboard";
					updatedState = this.keyboard.state.getState();
				}
				if (this.mouse.settings.enabled && this.mouse.changed) {

					this.mouse.changed = false;
					updatedState.btns = this.keyboard.state.getState().btns | this.mouse.state.getState().btns;
					updatedState.axes[2] = this.mouse.state.axes[2];
					updatedState.axes[3] = this.mouse.state.axes[3];
					// triggers:
					updatedState.axes[4] = ((updatedState.btns & (1 << 5)) != 0) ? 1 : 0;
					updatedState.axes[5] = ((updatedState.btns & (1 << 14)) != 0) ? 1 : 0;
				}
			}

		}

		let updatedStateString = JSON.stringify(updatedState);

		if (updatedStateString != this.oldStateString) {

			// this.controller.state.setState(updatedState);
			// this.keyboard.state.setState(updatedState);

			this.inputState.setState(updatedState);

			this.oldInputState = updatedState;
			this.oldInputStateString = updatedStateString;
		}
	}

	getState() {
		return this.inputState.getState();
	}

}

// module.exports = InputHandler;
