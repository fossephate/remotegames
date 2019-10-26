require("libs/keymaster.js");
import { mathZoom } from "libs/tools.js";

import ControllerState from "./ControllerState.js";

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

export default class VirtualKeyboard {
	constructor() {
		this.changed = false;
		this.cstate = new ControllerState();
		this.getControllerState = this.getControllerState.bind(this);
		this.kstate = {
			keys: [],
		};

		// a list of keys to keep track of:
		this.keysToTrack = [];

		// function to call when state updates:
		// this.updateParentState = () => {};

		this.map1 = {
			LU: 0,
			LD: 1,
			LL: 2,
			LR: 3,
			RU: 4,
			RD: 5,
			RL: 6,
			RR: 7,
			a: 8,
			b: 9,
			x: 10,
			y: 11,
			up: 12,
			down: 13,
			left: 14,
			right: 15,
			lstick: 16,
			rstick: 17,
			l: 18,
			zl: 19,
			r: 20,
			zr: 21,
			minus: 22,
			plus: 23,
			capture: 24,
			home: 25,
		};

		this.map2 = [
			"W",
			"S",
			"A",
			"D",
			"I",
			"K",
			"J",
			"L",
			"right",
			"down",
			"up",
			"left",
			"T",
			"G",
			"F",
			"H",
			"R",
			"Y",
			"U",
			"Q",
			"O",
			"E",
			"-",
			"=",
			"1",
			"2",
		];

		// todo: combine map1 and map2:
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

		// document.addEventListener("keypress", (event) => {
		// 	console.log(event.key);
		// 	this.lastPressedKey = event.key;
		// });
		document.addEventListener("keydown", (event) => {
			// console.log(event.key);
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
		if (key.isPressed(this.map2[this.map1["LU"]])) {
			this.cstate.axes[1] += 1;
		} else if (key.wasPressed(this.map2[this.map1["LU"]], this.wasPressedKeyCodes)) {
			this.cstate.axes[1] = 0;
		}
		if (key.isPressed(this.map2[this.map1["LD"]])) {
			this.cstate.axes[1] -= 1;
		} else if (key.wasPressed(this.map2[this.map1["LD"]], this.wasPressedKeyCodes)) {
			this.cstate.axes[1] = 0;
		}
		if (key.isPressed(this.map2[this.map1["LL"]])) {
			this.cstate.axes[0] -= 1;
		} else if (key.wasPressed(this.map2[this.map1["LL"]], this.wasPressedKeyCodes)) {
			this.cstate.axes[0] = 0;
		}
		if (key.isPressed(this.map2[this.map1["LR"]])) {
			this.cstate.axes[0] += 1;
		} else if (key.wasPressed(this.map2[this.map1["LR"]], this.wasPressedKeyCodes)) {
			this.cstate.axes[0] = 0;
		}

		if (key.isPressed(this.map2[this.map1["a"]])) {
			this.cstate.buttons.a = 1;
		} else if (key.wasPressed(this.map2[this.map1["a"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.a = 0;
		}
		if (key.isPressed(this.map2[this.map1["b"]])) {
			this.cstate.buttons.b = 1;
		} else if (key.wasPressed(this.map2[this.map1["b"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.b = 0;
		}
		if (key.isPressed(this.map2[this.map1["x"]])) {
			this.cstate.buttons.x = 1;
		} else if (key.wasPressed(this.map2[this.map1["x"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.x = 0;
		}
		if (key.isPressed(this.map2[this.map1["y"]])) {
			this.cstate.buttons.y = 1;
		} else if (key.wasPressed(this.map2[this.map1["y"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.y = 0;
		}

		if (key.isPressed(this.map2[this.map1["up"]])) {
			this.cstate.buttons.up = 1;
		} else if (key.wasPressed(this.map2[this.map1["up"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.up = 0;
		}
		if (key.isPressed(this.map2[this.map1["down"]])) {
			this.cstate.buttons.down = 1;
		} else if (key.wasPressed(this.map2[this.map1["down"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.down = 0;
		}
		if (key.isPressed(this.map2[this.map1["left"]])) {
			this.cstate.buttons.left = 1;
		} else if (key.wasPressed(this.map2[this.map1["left"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.left = 0;
		}
		if (key.isPressed(this.map2[this.map1["right"]])) {
			this.cstate.buttons.right = 1;
		} else if (key.wasPressed(this.map2[this.map1["right"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.right = 0;
		}

		this.cstate.axes[2] = 0;
		this.cstate.axes[3] = 0;
		if (key.isPressed(this.map2[this.map1["RU"]])) {
			this.cstate.axes[3] += 1;
		} else if (key.wasPressed(this.map2[this.map1["RU"]], this.wasPressedKeyCodes)) {
			this.cstate.axes[3] = 0;
		}
		if (key.isPressed(this.map2[this.map1["RD"]])) {
			this.cstate.axes[3] -= 1;
		} else if (key.wasPressed(this.map2[this.map1["RD"]], this.wasPressedKeyCodes)) {
			this.cstate.axes[3] = 0;
		}
		if (key.isPressed(this.map2[this.map1["RL"]])) {
			this.cstate.axes[2] -= 1;
		} else if (key.wasPressed(this.map2[this.map1["RL"]], this.wasPressedKeyCodes)) {
			this.cstate.axes[2] = 0;
		}
		if (key.isPressed(this.map2[this.map1["RR"]])) {
			this.cstate.axes[2] += 1;
		} else if (key.wasPressed(this.map2[this.map1["RR"]], this.wasPressedKeyCodes)) {
			this.cstate.axes[2] = 0;
		}

		if (key.isPressed(this.map2[this.map1["minus"]])) {
			this.cstate.buttons.minus = 1;
		} else if (key.wasPressed(this.map2[this.map1["minus"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.minus = 0;
		}
		if (key.isPressed(this.map2[this.map1["plus"]])) {
			this.cstate.buttons.plus = 1;
		} else if (key.wasPressed(this.map2[this.map1["plus"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.plus = 0;
		}

		if (key.isPressed(this.map2[this.map1["capture"]])) {
			this.cstate.buttons.capture = 1;
		} else if (key.wasPressed(this.map2[this.map1["capture"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.capture = 0;
		}
		if (key.isPressed(this.map2[this.map1["home"]])) {
			this.cstate.buttons.home = 1;
		} else if (key.wasPressed(this.map2[this.map1["home"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.home = 0;
		}

		if (key.isPressed(this.map2[this.map1["l"]])) {
			this.cstate.buttons.l = 1;
		} else if (key.wasPressed(this.map2[this.map1["l"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.l = 0;
		}
		if (key.isPressed(this.map2[this.map1["r"]])) {
			this.cstate.buttons.r = 1;
		} else if (key.wasPressed(this.map2[this.map1["r"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.r = 0;
		}

		if (key.isPressed(this.map2[this.map1["zl"]])) {
			this.cstate.buttons.zl = 1;
			this.cstate.axes[4] = 1;
		} else if (key.wasPressed(this.map2[this.map1["zl"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.zl = 0;
			this.cstate.axes[4] = 0;
		}
		if (key.isPressed(this.map2[this.map1["zr"]])) {
			this.cstate.buttons.zr = 1;
			this.cstate.axes[5] = 1;
		} else if (key.wasPressed(this.map2[this.map1["zr"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.zr = 0;
			this.cstate.axes[5] = 0;
		}

		if (key.isPressed(this.map2[this.map1["lstick"]])) {
			this.cstate.buttons.lstick = 1;
		} else if (key.wasPressed(this.map2[this.map1["lstick"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.lstick = 0;
		}
		if (key.isPressed(this.map2[this.map1["rstick"]])) {
			this.cstate.buttons.rstick = 1;
		} else if (key.wasPressed(this.map2[this.map1["rstick"]], this.wasPressedKeyCodes)) {
			this.cstate.buttons.rstick = 0;
		}

		let newKeycodes = key.getPressedKeyCodes();

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

	getKeyboardState() {
		return this.kstate;
	}
}
