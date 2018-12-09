// libs:

const keycode = require("keycode");
require("./keymaster.js");

// input types:
// each should handle each type of device:
const VirtualController = require("./VirtualController.js");
const VirtualKeyboard = require("./VirtualKeyboard.js");
const VirtualMouse = require("./VirtualMouse.js"); // todo

const VirtualProController = require("./VirtualProController.js");

export class InputState {

	constructor() {

		this.btns = 0;

		this.axes = [0, 0, 0, 0];

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

		// represents any controller's current state:
		this.controller = new VirtualController();
		// the current state of the keyboard:
		this.keyboard = new VirtualKeyboard();
		// the current state of the mouse:
		// this.mouse = new VirtualMouse(); // todo
		// the touch controls state:
		// this.touch = new ???(); // todo

		// output to be read:
		this.inputState = new InputState();
		this.oldInputState = this.inputState;

		// init:
		if (!this.isMobile) {
			this.controller.init();
		}

	}

	pollDevices() {

		let newInputState;
		let updatedState = this.oldInputState;

		if (!this.isMobile) {

			// controller:
			this.controller.poll();
			newInputState = this.controller.state.getState();
			if (JSON.stringify(newInputState) != JSON.stringify(this.oldInputState)) {
				this.currentInputMode = "controller";
				updatedState = newInputState;
				// console.log(newInputState);
			}

			// keyboard:
			this.keyboard.poll();
			newInputState = this.keyboard.state.getState();
			if (JSON.stringify(newInputState) != JSON.stringify(this.oldInputState)) {
				this.currentInputMode = "keyboard";
				updatedState = newInputState;
			}

		}

		if (JSON.stringify(updatedState) != JSON.stringify(this.oldInputState)) {

			this.controller.state.setState(updatedState);
			this.keyboard.state.setState(updatedState);

			this.inputState.setState(updatedState);

			this.oldInputState = updatedState;
		}
	}

	getState() {
		return this.inputState.getState();
	}

}

// module.exports = InputHandler;
