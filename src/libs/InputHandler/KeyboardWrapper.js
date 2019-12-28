const MODS = [16, 18, 17, 91];

export class KeyboardWrapper {
	constructor() {
		this.pressedKeys = [];
		this.werePressedKeys = [];

		this.modifiers = {
			shift: false,
			alt: false,
			option: false,
			ctrl: false,
			command: false,
		};

		// special keys
		this.map = {
			backspace: 8,
			tab: 9,
			clear: 12,
			enter: 13,
			return: 13,
			esc: 27,
			escape: 27,
			space: 32,
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			del: 46,
			delete: 46,
			home: 36,
			end: 35,
			pageup: 33,
			pagedown: 34,
			shift: 16,
			alt: 18,
			option: 18,
			ctrl: 17,
			command: 91,
			",": 188,
			".": 190,
			"/": 191,
			"`": 192,
			"-": 189,
			"=": 187,
			";": 186,
			"'": 222,
			"[": 219,
			"]": 221,
			"\\": 220,
		};

		for (let k = 1; k < 20; k++) {
			this.map["f" + k] = 111 + k;
		}

		document.addEventListener("keydown", this.handleKeydown, false);
		document.addEventListener("keyup", this.handleKeyup, false);
		window.addEventListener("focus", this.resetModifiers, false);
	}

	keyCode = (k) => {
		return this.map[k] || k.toUpperCase().charCodeAt(0);
	};

	handleKeydown = (event) => {
		let keycode = event.keyCode;

		if (this.pressedKeys.indexOf(keycode) === -1) {
			this.pressedKeys.push(keycode);
		}

		if (keycode === 93 || keycode === 224) {
			keycode = 91; // right command on webkit, command on Gecko
		}

		if (keycode in MODS) {
			this.modifiers[this.map[keycode]] = true;
			return;
		}

		// ignore key presses if a select, textarea, or input is focused
		let tagName = (event.target || event.srcElement).tagName;
		if (!(tagName == "INPUT" || tagName == "SELECT" || tagName == "TEXTAREA")) {
			return;
		}
	};

	handleKeyup = (event) => {
		let keyCode = event.keyCode;

		// remove key
		let index = this.pressedKeys.indexOf(keyCode);
		if (index >= 0) {
			this.pressedKeys.splice(index, 1);
		}

		if (keyCode == 93 || keyCode == 224) {
			keyCode = 91; // right command on webkit, command on Gecko
		}

		if (keyCode in MODS) {
			this.modifiers[this.map[keycode]] = false;
		}
	};

	isPressed = (k) => {
		k = typeof k === "string" ? this.keyCode(k) : k;
		return this.pressedKeys.indexOf(k) != -1;
	};

	wasPressed = (k, pressedKeys) => {
		k = typeof k === "string" ? this.keyCode(k) : k;
		return pressedKeys.indexOf(k) != -1;
	};

	getPressedKeyCodes = () => {
		return this.pressedKeys.slice(0);
	};

	resetModifiers = () => {
		for (let key in this.modifiers) {
			this.modifiers[key] = false;
		}
	};
}
