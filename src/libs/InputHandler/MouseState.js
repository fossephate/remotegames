export class MouseState {
	constructor() {
		this.x = 0;
		this.y = 0;

		this.dx = 0;
		this.dy = 0;

		this.btns = {
			left: 0,
			right: 0,
			middle: 0,
		};

		this.getState = this.getState.bind(this);
	}

	getState() {
		return this;
	}
}
