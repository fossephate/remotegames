import { ControllerState, TouchState } from "./DeviceStates.js";

export class VirtualTouchpad {
	constructor(touchWrapper) {
		this.touchWrapper = touchWrapper;

		this.changed = false;
		this.cstate = new ControllerState();
		this.tstate = new TouchState();
	}

	// get controller state:

	poll = () => {
		let oldControllerState = this.cstate.getState();

		this.cstate.buttons.a = this.touchWrapper.activeTargets.a ? 1 : 0;
		this.cstate.buttons.b = this.touchWrapper.activeTargets.b ? 1 : 0;
		this.cstate.buttons.x = this.touchWrapper.activeTargets.x ? 1 : 0;
		this.cstate.buttons.y = this.touchWrapper.activeTargets.y ? 1 : 0;

		this.cstate.buttons.up = this.touchWrapper.activeTargets.up ? 1 : 0;
		this.cstate.buttons.down = this.touchWrapper.activeTargets.down ? 1 : 0;
		this.cstate.buttons.left = this.touchWrapper.activeTargets.left ? 1 : 0;
		this.cstate.buttons.right = this.touchWrapper.activeTargets.right ? 1 : 0;

		this.cstate.buttons.l = this.touchWrapper.activeTargets.l ? 1 : 0;
		this.cstate.buttons.zl = this.touchWrapper.activeTargets.zl ? 1 : 0;

		this.cstate.buttons.r = this.touchWrapper.activeTargets.r ? 1 : 0;
		this.cstate.buttons.zr = this.touchWrapper.activeTargets.zr ? 1 : 0;

		this.cstate.buttons.capture = this.touchWrapper.activeTargets.capture ? 1 : 0;
		this.cstate.buttons.home = this.touchWrapper.activeTargets.home ? 1 : 0;

		this.cstate.buttons.minus = this.touchWrapper.activeTargets.minus ? 1 : 0;
		this.cstate.buttons.plus = this.touchWrapper.activeTargets.plus ? 1 : 0;

		this.cstate.axes[0] = this.touchWrapper.sticks.lx;
		this.cstate.axes[1] = this.touchWrapper.sticks.ly;
		this.cstate.axes[2] = this.touchWrapper.sticks.rx;
		this.cstate.axes[3] = this.touchWrapper.sticks.ry;

		let newControllerState = this.cstate.getState();
		// reset if nothing changed:
		if (JSON.stringify(newControllerState) == JSON.stringify(oldControllerState)) {
			this.cstate.setState(oldControllerState);
		} else {
			this.changed = true;
		}
	};

	getControllerState = () => {
		return this.cstate.getState();
	};

	getState = () => {
		// return this.tstate;
	};
}
