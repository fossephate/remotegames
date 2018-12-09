require("./keymaster.js");
const keycode = require("keycode");
import keyboardJS from "keyboardjs";
import { mathZoom } from "./tools.js";

const VirtualProController = require("./VirtualProController.js");
let restPos = 128;

class VirtualKeyboard {

	constructor() {

		this.state = new VirtualProController();
		// this.getState = this.state.getState;
		// this.setState = this.state.setState;

		// a list of keys to keep track of:
		this.keysToTrack = [];

		// function to call when state updates:
		// this.updateParentState = () => {};

		this.keyboardMapping = {
			LU: "W",
			LD: "S",
			LL: "A",
			LR: "D",
			RU: "I",
			RD: "K",
			RL: "J",
			RR: "L",
			ABtn: "right",
			BBtn: "down",
			XBtn: "up",
			YBtn: "left",
			DUp: "T",
			DDown: "G",
			DLeft: "F",
			DRight: "H",
			lstick: "R",
			rstick: "Y",
			LBtn: "U",
			ZLBtn: "Q",
			RBtn: "O",
			ZRBtn: "E",
			Minus: "-",
			Plus: "=",
			Capture: "1",
			Home: "2",
		};

		this.wasPressedKeyCodes = [];

		this.settings = {
			analogStickMode: false,
		};

	}

	// get controller state:
	poll() {

		// if (!this.state.keyboardControls) {
		// 	return;
		// }

		let oldControllerState = this.state.getState();

		if (!this.settings.analogStickMode) {
			if (key.isPressed(this.keyboardMapping.LU)) {
				this.state.axes[1] = 255;
			} else if (key.wasPressed(this.keyboardMapping.LU, this.wasPressedKeyCodes)) {
				this.state.axes[1] = restPos;
			}
			if (key.isPressed(this.keyboardMapping.LD)) {
				this.state.axes[1] = 0;
			} else if (key.wasPressed(this.keyboardMapping.LD, this.wasPressedKeyCodes)) {
				this.state.axes[1] = restPos;
			}
			if (key.isPressed(this.keyboardMapping.LL)) {
				this.state.axes[0] = 0;
			} else if (key.wasPressed(this.keyboardMapping.LL, this.wasPressedKeyCodes)) {
				this.state.axes[0] = restPos;
			}
			if (key.isPressed(this.keyboardMapping.LR)) {
				this.state.axes[0] = 255;
			} else if (key.wasPressed(this.keyboardMapping.LR, this.wasPressedKeyCodes)) {
				this.state.axes[0] = restPos;
			}

		} else {

			let leftRight = false;
			let upDown = false;

			if (key.isPressed(this.keyboardMapping.LU)) {
				this.state.axes[1] = Math.round(parseInt(this.state.axes[1]) + settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.LD)) {
				this.state.axes[1] = Math.round(parseInt(this.state.axes[1]) - settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.LL)) {
				this.state.axes[0] = Math.round(parseInt(this.state.axes[0]) - settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.LR)) {
				this.state.axes[0] = Math.round(parseInt(this.state.axes[0]) + settings.stickAttack);
			}

			upDown = key.isPressed(this.keyboardMapping.LU) || key.isPressed(this.keyboardMapping.LD);
			leftRight = key.isPressed(this.keyboardMapping.LL) || key.isPressed(this.keyboardMapping.LR);

			if (!upDown) {
				this.state.axes[1] = Math.round(mathZoom(parseInt(this.state.axes[1]), restPos, settings.stickReturn));
			}

			if (!leftRight) {
				this.state.axes[0] = Math.round(mathZoom(parseInt(this.state.axes[0]), restPos, settings.stickReturn));
			}
		}

		// console.log(this.state.lstick);

		if (key.isPressed(this.keyboardMapping.ABtn)) {
			this.state.buttons.a = 1;
		} else if (key.wasPressed(this.keyboardMapping.ABtn, this.wasPressedKeyCodes)) {
			this.state.buttons.a = 0;
		}
		if (key.isPressed(this.keyboardMapping.BBtn)) {
			this.state.buttons.b = 1;
		} else if (key.wasPressed(this.keyboardMapping.BBtn, this.wasPressedKeyCodes)) {
			this.state.buttons.b = 0;
		}
		if (key.isPressed(this.keyboardMapping.XBtn)) {
			this.state.buttons.x = 1;
		} else if (key.wasPressed(this.keyboardMapping.XBtn, this.wasPressedKeyCodes)) {
			this.state.buttons.x = 0;
		}
		if (key.isPressed(this.keyboardMapping.YBtn)) {
			this.state.buttons.y = 1;
		} else if (key.wasPressed(this.keyboardMapping.YBtn, this.wasPressedKeyCodes)) {
			this.state.buttons.y = 0;
		}

		if (key.isPressed(this.keyboardMapping.DUp)) {
			this.state.buttons.up = 1;
		} else if (key.wasPressed(this.keyboardMapping.DUp, this.wasPressedKeyCodes)) {
			this.state.buttons.up = 0;
		}
		if (key.isPressed(this.keyboardMapping.DDown)) {
			this.state.buttons.down = 1;
		} else if (key.wasPressed(this.keyboardMapping.DDown, this.wasPressedKeyCodes)) {
			this.state.buttons.down = 0;
		}
		if (key.isPressed(this.keyboardMapping.DLeft)) {
			this.state.buttons.left = 1;
		} else if (key.wasPressed(this.keyboardMapping.DLeft, this.wasPressedKeyCodes)) {
			this.state.buttons.left = 0;
		}
		if (key.isPressed(this.keyboardMapping.DRight)) {
			this.state.buttons.right = 1;
		} else if (key.wasPressed(this.keyboardMapping.DRight, this.wasPressedKeyCodes)) {
			this.state.buttons.right = 0;
		}

		if (!this.settings.analogStickMode) {
			if (key.isPressed(this.keyboardMapping.RU)) {
				this.state.axes[3] = 255;
			} else if (key.wasPressed(this.keyboardMapping.RU, this.wasPressedKeyCodes)) {
				this.state.axes[3] = restPos;
			}
			if (key.isPressed(this.keyboardMapping.RD)) {
				this.state.axes[3] = 0;
			} else if (key.wasPressed(this.keyboardMapping.RD, this.wasPressedKeyCodes)) {
				this.state.axes[3] = restPos;
			}
			if (key.isPressed(this.keyboardMapping.RL)) {
				this.state.axes[2] = 0;
			} else if (key.wasPressed(this.keyboardMapping.RL, this.wasPressedKeyCodes)) {
				this.state.axes[2] = restPos;
			}
			if (key.isPressed(this.keyboardMapping.RR)) {
				this.state.axes[2] = 255;
			} else if (key.wasPressed(this.keyboardMapping.RR, this.wasPressedKeyCodes)) {
				this.state.axes[2] = restPos;
			}
		} else {
			let leftRight = false;
			let upDown = false;

			if (key.isPressed(this.keyboardMapping.RU)) {
				this.state.axes[3] = Math.round(parseInt(this.state.axes[3]) + settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.RD)) {
				this.state.axes[3] = Math.round(parseInt(this.state.axes[3]) - settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.RL)) {
				this.state.axes[2] = Math.round(parseInt(this.state.axes[2]) - settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.RR)) {
				this.state.axes[2] = Math.round(parseInt(this.state.axes[2]) + settings.stickAttack);
			}

			upDown = key.isPressed(this.keyboardMapping.RU) || key.isPressed(this.keyboardMapping.RD);
			leftRight = key.isPressed(this.keyboardMapping.RL) || key.isPressed(this.keyboardMapping.RR);

			if (!upDown) {
				this.state.axes[3] = Math.round(mathZoom(parseInt(this.state.axes[3]), restPos, settings.stickReturn));
			}

			if (!leftRight) {
				this.state.axes[2] = Math.round(mathZoom(parseInt(this.state.axes[2]), restPos, settings.stickReturn));
			}
		}

		if (key.isPressed(this.keyboardMapping.Minus)) {
			this.state.buttons.minus = 1;
		} else if (key.wasPressed(this.keyboardMapping.Minus, this.wasPressedKeyCodes)) {
			this.state.buttons.minus = 0;
		}
		if (key.isPressed(this.keyboardMapping.Plus)) {
			this.state.buttons.plus = 1;
		} else if (key.wasPressed(this.keyboardMapping.Plus, this.wasPressedKeyCodes)) {
			this.state.buttons.plus = 0;
		}

		if (key.isPressed(this.keyboardMapping.Capture)) {
			this.state.buttons.capture = 1;
		} else if (key.wasPressed(this.keyboardMapping.Capture, this.wasPressedKeyCodes)) {
			this.state.buttons.capture = 0;
		}
		if (key.isPressed(this.keyboardMapping.Home)) {
			this.state.buttons.home = 1;
		} else if (key.wasPressed(this.keyboardMapping.Home, this.wasPressedKeyCodes)) {
			this.state.buttons.home = 0;
		}

		if (key.isPressed(this.keyboardMapping.LBtn)) {
			this.state.buttons.l = 1;
		} else if (key.wasPressed(this.keyboardMapping.LBtn, this.wasPressedKeyCodes)) {
			this.state.buttons.l = 0;
		}
		if (key.isPressed(this.keyboardMapping.RBtn)) {
			this.state.buttons.r = 1;
		} else if (key.wasPressed(this.keyboardMapping.RBtn, this.wasPressedKeyCodes)) {
			this.state.buttons.r = 0;
		}

		if (key.isPressed(this.keyboardMapping.ZLBtn)) {
			this.state.buttons.zl = 1;
		} else if (key.wasPressed(this.keyboardMapping.ZLBtn, this.wasPressedKeyCodes)) {
			this.state.buttons.zl = 0;
		}
		if (key.isPressed(this.keyboardMapping.ZRBtn)) {
			this.state.buttons.zr = 1;
		} else if (key.wasPressed(this.keyboardMapping.ZRBtn, this.wasPressedKeyCodes)) {
			this.state.buttons.zr = 0;
		}

		if (key.isPressed(this.keyboardMapping.lstick)) {
			this.state.buttons.lstick = 1;
		} else if (key.wasPressed(this.keyboardMapping.lstick, this.wasPressedKeyCodes)) {
			this.state.buttons.lstick = 0;
		}
		if (key.isPressed(this.keyboardMapping.rstick)) {
			this.state.buttons.rstick = 1;
		} else if (key.wasPressed(this.keyboardMapping.rstick, this.wasPressedKeyCodes)) {
			this.state.buttons.rstick = 0;
		}

		this.wasPressedKeyCodes = key.getPressedKeyCodes();

		let newControllerState = this.state.getState();

		// reset if nothing changed:
		if (JSON.stringify(newControllerState) == JSON.stringify(oldControllerState)) {
			this.state.setState(oldControllerState);
		}
	}
}

module.exports = VirtualKeyboard;
