// libs:

// const keycode = require("keycode");
// require("./keymaster.js");

// input types:
// each should handle each type of device:
import { GamepadWrapper } from "./GamepadWrapper.js";
import { KeyboardWrapper } from "./KeyboardWrapper.js";
import { TouchWrapper } from "./TouchWrapper.js";
import { VirtualController } from "./VirtualController.js";
import { VirtualKeyboard } from "./VirtualKeyboard.js";
import { VirtualMouse } from "./VirtualMouse.js";
import { VirtualTouchpad } from "./VirtualTouchpad.js";

export class InputState {
	constructor() {
		this.changed = false;

		this.controller = {
			btns: 0,
			axes: [0, 0, 0, 0, 0, 0],
			// gyro: {
			// 	x: 0,
			// 	y: 0,
			// 	z: 0,
			// },

			// accel: {
			// 	x: 0,
			// 	y: 0,
			// 	z: 0,
			// },
		};

		this.mouse = {
			x: 0,
			y: 0,
			dx: 0,
			dy: 0,
			btns: {
				left: 0,
				right: 0,
				middle: 0,
			},
		};

		this.keyboard = {
			keys: [],
		};
	}

	setControllerState(state) {
		this.controller.btns = state.btns;
		this.controller.axes = state.axes;
	}

	setKeyboardState(state) {
		this.keyboard.keys = state.keys;
	}

	setMouseState(state) {
		this.mouse.x = state.x;
		this.mouse.y = state.y;
		this.mouse.dx = state.dx;
		this.mouse.dy = state.dy;
		this.mouse.btns = { ...state.btns };
	}

	setState(state) {
		// controller
		if (state.controller != null) {
			this.controller = state.controller;
		}
		// mouse
		if (state.mouse != null) {
			this.mouse = state.mouse;
		}
		// keyboard
		if (state.keyboard != null) {
			this.keyboard = state.keyboard;
		}
	}

	getState() {
		return {
			controller: this.controller,
			mouse: this.mouse,
			keyboard: this.keyboard,
		};
	}
}

// map several inputs to a single virtual controller:
export default class InputHandler {
	constructor(isMobile) {
		// initialize gamepad wrapper:
		this.gamepadWrapper = new GamepadWrapper();
		this.keyboardWrapper = new KeyboardWrapper();
		this.touchWrapper = new TouchWrapper();

		this.isMobile = isMobile;

		// current device being used:
		this.currentInputMode = "keyboard";

		// represents a controller's current state:
		// pass gamepadWrapper to constructor:
		this.controller = new VirtualController(this.gamepadWrapper);
		// the current state of the keyboard:
		this.keyboard = new VirtualKeyboard(this.keyboardWrapper);
		// the current state of the mouse:
		this.mouse = new VirtualMouse();
		// the touch controls state:
		this.touchpad = new VirtualTouchpad(this.touchWrapper);

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

	pollDevices(touchControls) {
		let updatedState = new InputState();

		updatedState = this.oldInputState;

		if (!this.isMobile) {
			if (!this.realMode) {
				// controller:
				this.controller.poll();
				if (this.controller.changed) {
					this.controller.changed = false;
					this.currentInputMode = "controller";
					updatedState.setControllerState(this.controller.getState());
				} else {
					// keyboard:
					this.keyboard.poll();
					if (this.keyboard.changed) {
						this.keyboard.changed = false;
						this.currentInputMode = "keyboard";
						updatedState.setControllerState(this.keyboard.getControllerState());
					}
					if (this.mouse.settings.enabled && this.mouse.changed) {
						this.mouse.changed = false;
						updatedState.controller.btns =
							this.keyboard.getControllerState().btns |
							this.mouse.getControllerState().btns;
						updatedState.controller.axes[2] = this.mouse.cstate.axes[2];
						updatedState.controller.axes[3] = this.mouse.cstate.axes[3];
						// triggers:
						updatedState.controller.axes[4] =
							(updatedState.controller.btns & (1 << 5)) != 0 ? 1 : 0;
						updatedState.controller.axes[5] =
							(updatedState.controller.btns & (1 << 14)) != 0 ? 1 : 0;
					}
				}
			} else {
				// keyboard & mouse:
				this.keyboard.poll();
				updatedState.setKeyboardState(this.keyboard.getState());
				if (this.mouse.settings.enabled && this.mouse.changed) {
					this.mouse.changed = false;
					updatedState.setMouseState(this.mouse.getState());
				}
			}
		}
		if (touchControls) {
			// touchpad:
			this.touchpad.poll();
			if (this.touchpad.changed) {
				this.touchpad.changed = false;
				this.currentInputMode = "touchpad";
				updatedState.setControllerState(this.touchpad.getControllerState());
			}
		}

		let updatedStateString = JSON.stringify(updatedState);

		if (updatedStateString != this.oldInputStateString) {
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
