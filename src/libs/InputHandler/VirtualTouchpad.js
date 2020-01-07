import { ControllerState /*, TouchpadState*/ } from "./DeviceStates.js";

export class VirtualTouchpad {
	constructor(touchpadWrapper) {
		this.touchpadWrapper = touchpadWrapper;

		this.changed = false;
		this.cstate = new ControllerState();
		// this.tstate = new TouchpadState();

		this.getControllerState = this.getControllerState.bind(this);
		this.getState = this.getState.bind(this);
	}

	// get controller state:

	poll() {
		// let oldControllerState = this.cstate.getState();
	}

	getControllerState() {
		return this.cstate.getState();
	}

	getState() {
		// return this.tstate;
	}
}
