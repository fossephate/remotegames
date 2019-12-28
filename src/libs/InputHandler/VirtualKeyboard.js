// import { mathZoom } from "libs/tools.js";

import { ControllerState, KeyboardState } from "./DeviceStates.js";

const SPECIAL_KEYS = {
	8: "backspace",
	9: "tab",
	13: "enter",
	16: "shift",
	17: "control",
	18: "alt",
	27: "escape",
	32: "space",
	33: "pageup",
	34: "pagedown",
	35: "end",
	36: "home",
	37: "left",
	38: "up",
	39: "right",
	40: "down",
	46: "delete",
};

export class VirtualKeyboard {
	constructor(keyboardWrapper) {
		// this.keyboardWrapper = keyboardWrapper;
		// this.kW = this.keyboardWrapper;

		this.kW = keyboardWrapper;

		this.changed = false;
		this.cstate = new ControllerState();
		this.kstate = new KeyboardState();

		this.getControllerState = this.getControllerState.bind(this);
		this.getState = this.getState.bind(this);

		// a list of keys to keep track of:
		this.keysToTrack = [];

		// function to call when state updates:
		// this.updateParentState = () => {};

		this.map = {
			LU: "W",
			LD: "S",
			LL: "A",
			LR: "D",
			RU: "I",
			RD: "K",
			RL: "J",
			RR: "L",
			a: "right",
			b: "down",
			x: "up",
			y: "left",
			up: "T",
			down: "G",
			left: "F",
			right: "H",
			lstick: "R",
			rstick: "Y",
			l: "U",
			zl: "Q",
			r: "O",
			zr: "E",
			minus: "-",
			plus: "=",
			capture: "1",
			home: "2",
		};

		this.wasPressedKeyCodes = [];

		this.settings = {
			analogStickMode: false,
			stickAttack: 0.4,
			stickReturn: 0.3,
		};

		this.lastPressedKey = null;

		document.addEventListener("keydown", (event) => {
			let key = event.key;
			if (!key) {
				return;
			}
			if (key.indexOf("Arrow") > -1) {
				key = key.substring(5).toLowerCase();
			}
			this.lastPressedKey = key;
		});
	}

	// get controller state:

	poll() {
		let oldControllerState = this.cstate.getState();

		this.cstate.axes[0] = 0;
		this.cstate.axes[1] = 0;
		if (this.kW.isPressed(this.map.LU)) {
			this.cstate.axes[1] += 1;
		} else if (this.kW.wasPressed(this.map.LU, this.wasPressedKeyCodes)) {
			this.cstate.axes[1] = 0;
		}
		if (this.kW.isPressed(this.map.LD)) {
			this.cstate.axes[1] -= 1;
		} else if (this.kW.wasPressed(this.map.LD, this.wasPressedKeyCodes)) {
			this.cstate.axes[1] = 0;
		}
		if (this.kW.isPressed(this.map.LL)) {
			this.cstate.axes[0] -= 1;
		} else if (this.kW.wasPressed(this.map.LL, this.wasPressedKeyCodes)) {
			this.cstate.axes[0] = 0;
		}
		if (this.kW.isPressed(this.map.LR)) {
			this.cstate.axes[0] += 1;
		} else if (this.kW.wasPressed(this.map.LR, this.wasPressedKeyCodes)) {
			this.cstate.axes[0] = 0;
		}

		if (this.kW.isPressed(this.map.a)) {
			this.cstate.buttons.a = 1;
		} else if (this.kW.wasPressed(this.map.a, this.wasPressedKeyCodes)) {
			this.cstate.buttons.a = 0;
		}
		if (this.kW.isPressed(this.map.b)) {
			this.cstate.buttons.b = 1;
		} else if (this.kW.wasPressed(this.map.b, this.wasPressedKeyCodes)) {
			this.cstate.buttons.b = 0;
		}
		if (this.kW.isPressed(this.map.x)) {
			this.cstate.buttons.x = 1;
		} else if (this.kW.wasPressed(this.map.x, this.wasPressedKeyCodes)) {
			this.cstate.buttons.x = 0;
		}
		if (this.kW.isPressed(this.map.y)) {
			this.cstate.buttons.y = 1;
		} else if (this.kW.wasPressed(this.map.y, this.wasPressedKeyCodes)) {
			this.cstate.buttons.y = 0;
		}

		if (this.kW.isPressed(this.map.up)) {
			this.cstate.buttons.up = 1;
		} else if (this.kW.wasPressed(this.map.up, this.wasPressedKeyCodes)) {
			this.cstate.buttons.up = 0;
		}
		if (this.kW.isPressed(this.map.down)) {
			this.cstate.buttons.down = 1;
		} else if (this.kW.wasPressed(this.map.down, this.wasPressedKeyCodes)) {
			this.cstate.buttons.down = 0;
		}
		if (this.kW.isPressed(this.map.left)) {
			this.cstate.buttons.left = 1;
		} else if (this.kW.wasPressed(this.map.left, this.wasPressedKeyCodes)) {
			this.cstate.buttons.left = 0;
		}
		if (this.kW.isPressed(this.map.right)) {
			this.cstate.buttons.right = 1;
		} else if (this.kW.wasPressed(this.map.right, this.wasPressedKeyCodes)) {
			this.cstate.buttons.right = 0;
		}

		this.cstate.axes[2] = 0;
		this.cstate.axes[3] = 0;
		if (this.kW.isPressed(this.map.RU)) {
			this.cstate.axes[3] += 1;
		} else if (this.kW.wasPressed(this.map.RU, this.wasPressedKeyCodes)) {
			this.cstate.axes[3] = 0;
		}
		if (this.kW.isPressed(this.map.RD)) {
			this.cstate.axes[3] -= 1;
		} else if (this.kW.wasPressed(this.map.RD, this.wasPressedKeyCodes)) {
			this.cstate.axes[3] = 0;
		}
		if (this.kW.isPressed(this.map.RL)) {
			this.cstate.axes[2] -= 1;
		} else if (this.kW.wasPressed(this.map.RL, this.wasPressedKeyCodes)) {
			this.cstate.axes[2] = 0;
		}
		if (this.kW.isPressed(this.map.RR)) {
			this.cstate.axes[2] += 1;
		} else if (this.kW.wasPressed(this.map.RR, this.wasPressedKeyCodes)) {
			this.cstate.axes[2] = 0;
		}

		if (this.kW.isPressed(this.map.minus)) {
			this.cstate.buttons.minus = 1;
		} else if (this.kW.wasPressed(this.map.minus, this.wasPressedKeyCodes)) {
			this.cstate.buttons.minus = 0;
		}
		if (this.kW.isPressed(this.map.plus)) {
			this.cstate.buttons.plus = 1;
		} else if (this.kW.wasPressed(this.map.plus, this.wasPressedKeyCodes)) {
			this.cstate.buttons.plus = 0;
		}

		if (this.kW.isPressed(this.map.capture)) {
			this.cstate.buttons.capture = 1;
		} else if (this.kW.wasPressed(this.map.capture, this.wasPressedKeyCodes)) {
			this.cstate.buttons.capture = 0;
		}
		if (this.kW.isPressed(this.map.home)) {
			this.cstate.buttons.home = 1;
		} else if (this.kW.wasPressed(this.map.home, this.wasPressedKeyCodes)) {
			this.cstate.buttons.home = 0;
		}

		if (this.kW.isPressed(this.map.l)) {
			this.cstate.buttons.l = 1;
		} else if (this.kW.wasPressed(this.map.l, this.wasPressedKeyCodes)) {
			this.cstate.buttons.l = 0;
		}
		if (this.kW.isPressed(this.map.r)) {
			this.cstate.buttons.r = 1;
		} else if (this.kW.wasPressed(this.map.r, this.wasPressedKeyCodes)) {
			this.cstate.buttons.r = 0;
		}

		if (this.kW.isPressed(this.map.zl)) {
			this.cstate.buttons.zl = 1;
			this.cstate.axes[4] = 1;
		} else if (this.kW.wasPressed(this.map.zl, this.wasPressedKeyCodes)) {
			this.cstate.buttons.zl = 0;
			this.cstate.axes[4] = 0;
		}
		if (this.kW.isPressed(this.map.zr)) {
			this.cstate.buttons.zr = 1;
			this.cstate.axes[5] = 1;
		} else if (this.kW.wasPressed(this.map.zr, this.wasPressedKeyCodes)) {
			this.cstate.buttons.zr = 0;
			this.cstate.axes[5] = 0;
		}

		if (this.kW.isPressed(this.map.lstick)) {
			this.cstate.buttons.lstick = 1;
		} else if (this.kW.wasPressed(this.map.lstick, this.wasPressedKeyCodes)) {
			this.cstate.buttons.lstick = 0;
		}
		if (this.kW.isPressed(this.map.rstick)) {
			this.cstate.buttons.rstick = 1;
		} else if (this.kW.wasPressed(this.map.rstick, this.wasPressedKeyCodes)) {
			this.cstate.buttons.rstick = 0;
		}

		let newKeycodes = this.kW.getPressedKeyCodes();

		if (JSON.stringify(newKeycodes) != JSON.stringify(this.wasPressedKeyCodes)) {
			this.changed = true;
			this.wasPressedKeyCodes = newKeycodes;
			this.kstate.keys = [];
			for (let i = 0; i < this.wasPressedKeyCodes.length; i++) {
				if (SPECIAL_KEYS[this.wasPressedKeyCodes[i]]) {
					this.kstate.keys.push(SPECIAL_KEYS[this.wasPressedKeyCodes[i]]);
				} else {
					this.kstate.keys.push(String.fromCharCode(this.wasPressedKeyCodes[i]));
				}
			}
		}

		this.wasPressedKeyCodes = newKeycodes;

		let newControllerState = this.cstate.getState();

		// reset if nothing changed:
		if (JSON.stringify(newControllerState) == JSON.stringify(oldControllerState)) {
			this.cstate.setState(oldControllerState);
		} else {
			this.changed = true;
		}
	}

	getControllerState() {
		return this.cstate.getState();
	}

	getState() {
		return this.kstate;
	}
}
