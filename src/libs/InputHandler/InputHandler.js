// libs:

// const keycode = require("keycode");
// require("./keymaster.js");

// input types:
// each should handle each type of device:
import GamepadWrapper from "./GamepadWrapper.js";
import VirtualController from "./VirtualController.js";
import VirtualKeyboard from "./VirtualKeyboard.js";
import VirtualMouse from "./VirtualMouse.js";
require("libs/keymaster.js");

const BIT_MAP = {
	up: 0,
	down: 1,
	left: 2,
	right: 3,
	l: 4,
	zl: 5,
	lstick: 6,
	minus: 7,
	capture: 8,
	a: 9,
	b: 10,
	x: 11,
	y: 12,
	r: 13,
	zr: 14,
	rstick: 15,
	plus: 16,
	home: 17,
};

export class InputState {
	constructor() {
		this.changed = false;

		this.btns = 0;

		this.axes = [0, 0, 0, 0, 0, 0];

		// this.gyro = {
		// 	x: 0,
		// 	y: 0,
		// 	z: 0,
		// };

		// this.accel = {
		// 	x: 0,
		// 	y: 0,
		// 	z: 0,
		// };

		this.mouse = {
			dx: 0,
			dy: 0,
			btns: {
				left: 0,
				right: 0,
				middle: 0,
			},
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
		// if (state.gyro != null) {
		// 	this.gyro = state.gyro;
		// }
		// if (state.accel != null) {
		// 	this.accel = state.accel;
		// }

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
			mouse: this.mouse,
			keys: this.keys,
		};
	}
}

// map several inputs to a single virtual controller:
export default class InputHandler {
	constructor(isMobile) {
		// initialize gamepad wrapper:
		this.gamepadWrapper = new GamepadWrapper();
		window.gamepadWrapper = this.gamepadWrapper; // for debugging

		this.isMobile = isMobile;

		// current device being used:
		this.currentInputMode = "keyboard";

		// represents a controller's current state:
		// pass gamepadWrapper to constructor:
		this.controller = new VirtualController(this.gamepadWrapper);
		// the current state of the keyboard:
		this.keyboard = new VirtualKeyboard();
		// the current state of the mouse:
		this.mouse = new VirtualMouse(); // todo
		// the touch controls state:
		// this.touch = new ???(); // todo

		// real mode:
		this.realMode = false;

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
		// let updatedState = {
		// 	btns: 0,
		// 	axes: [0, 0, 0, 0, 0, 0],
		// 	mouse: { dx: 0, dy: 0, btns: { left: 0, right: 0, middle: 0 } },
		// 	keys: [],
		// 	// gryo: {
		// 	// 	x: 0,
		// 	// 	y: 0,
		// 	// 	z: 0,
		// 	// },
		// 	// accel: {
		// 	// 	x: 0,
		// 	// 	y: 0,
		// 	// 	z: 0,
		// 	// },
		// };
		let updatedState = new InputState();

		updatedState = this.oldInputState;

		if (!this.isMobile) {
			if (!this.realMode) {
				// controller:
				this.controller.poll();
				if (this.controller.changed) {
					this.controller.changed = false;
					this.currentInputMode = "controller";
					updatedState.setState(this.controller.getControllerState());
				} else {
					// keyboard:
					this.keyboard.poll();
					if (this.keyboard.changed) {
						this.keyboard.changed = false;
						this.currentInputMode = "keyboard";
						updatedState.setState(this.keyboard.getControllerState());
					}
					if (this.mouse.settings.enabled && this.mouse.changed) {
						this.mouse.changed = false;
						updatedState.btns =
							this.keyboard.cstate.getState().btns | this.mouse.getControllerState().btns;
						updatedState.axes[2] = this.mouse.cstate.axes[2];
						updatedState.axes[3] = this.mouse.cstate.axes[3];
						// triggers:
						updatedState.axes[4] = (updatedState.btns & (1 << 5)) != 0 ? 1 : 0;
						updatedState.axes[5] = (updatedState.btns & (1 << 14)) != 0 ? 1 : 0;
					}
				}
			} else {
				// keyboard & mouse:
				this.keyboard.poll();
				if (this.keyboard.changed) {
					this.keyboard.changed = false;
					this.currentInputMode = "keyboard";
					updatedState.setState(this.keyboard.getKeyboardState());
				}
				if (this.mouse.settings.enabled && this.mouse.changed) {
					this.mouse.changed = false;
					updatedState.setState(this.mouse.getMouseState());
				}
			}
		}

		// setInterval(() => {
		// 	let keys = key.getPressedKeyCodes();
		// 	let keys2 = [];
		// 	for (let i = 0; i < keys.length; i++) {
		// 		keys2.push(String.fromCharCode(keys[i]));
		// 	}
		// 	console.log(keys2);
		// }, 100);

		// setInterval(() => {
		// 	let keys = key.getPressedKeyCodes();
		// 	let keys2 = [];
		// 	for (let i = 0; i < keys.length; i++) {
		// 		keys2.push(keys[i]);
		// 	}
		// 	console.log(keys2);
		// }, 100);

		let updatedStateString = JSON.stringify(updatedState);

		if (updatedStateString != this.oldInputStateString) {
			// this.controller.state.setState(updatedState);
			// this.keyboard.state.setState(updatedState);

			this.inputState.setState(updatedState);

			this.oldInputState = updatedState;
			this.oldInputStateString = updatedStateString;

			this.changed = true;
		}
	}

	getState() {
		return this.inputState.getState();
	}
}
