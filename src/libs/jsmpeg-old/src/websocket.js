import socketio from "socket.io-client";

export class WSSource {
	constructor(url, options) {
		this.url = url;
		this.options = options;
		this.socket = null;
		this.streaming = true;

		this.callbacks = { connect: [], data: [] };
		this.destination = null;

		this.reconnectInterval =
			options.reconnectInterval !== undefined ? options.reconnectInterval : 5;
		this.shouldAttemptReconnect = !!this.reconnectInterval;

		this.completed = false;
		this.established = false;
		this.progress = 0;

		this.reconnectTimeoutId = 0;

		this.onEstablishedCallback = options.onSourceEstablished;
		this.onCompletedCallback = options.onSourceCompleted; // Never used
	}

	connect = (destination) => {
		this.destination = destination;
	};

	destroy = () => {
		clearTimeout(this.reconnectTimeoutId);
		this.shouldAttemptReconnect = false;
		if (this.socket) {
			this.socket.close();
		}
	};

	start = () => {
		this.shouldAttemptReconnect = !!this.reconnectInterval;
		this.progress = 0;
		this.established = false;

		if (this.options.protocols) {
			this.socket = new WebSocket(this.url, this.options.protocols);
		} else {
			this.socket = new WebSocket(this.url);
		}

		this.socket.binaryType = "arraybuffer";
		this.socket.onmessage = this.onMessage.bind(this);
		this.socket.onopen = this.onOpen.bind(this);
		this.socket.onerror = this.onClose.bind(this);
		this.socket.onclose = this.onClose.bind(this);
	};

	resume = (secondsHeadroom) => {
		// Nothing to do here
	};

	onOpen = () => {
		this.progress = 1;
	};

	onClose = () => {
		if (this.shouldAttemptReconnect) {
			clearTimeout(this.reconnectTimeoutId);
			this.reconnectTimeoutId = setTimeout(() => {
				this.start();
			}, this.reconnectInterval * 1000);
		}
	};

	onMessage = (ev) => {
		let isFirstChunk = !this.established;
		this.established = true;

		if (isFirstChunk && this.onEstablishedCallback) {
			this.onEstablishedCallback(this);
		}

		if (this.destination) {
			this.destination.write(ev.data);
		}
	};
}

export class SIOSource {
	constructor(url, options) {
		this.url = url;
		this.path = options.path;
		this.options = options;
		this.socket = null;
		this.streaming = true;

		this.callbacks = { connect: [], data: [] };
		this.destination = null;

		this.reconnectInterval =
			options.reconnectInterval !== undefined ? options.reconnectInterval : 5;
		this.shouldAttemptReconnect = !!this.reconnectInterval;

		this.completed = false;
		this.established = false;
		this.progress = 0;

		this.reconnectTimeoutId = 0;

		this.onEstablishedCallback = options.onSourceEstablished;
		this.onCompletedCallback = options.onSourceCompleted; // Never used
	}

	connect = (destination) => {
		this.destination = destination;
	};

	destroy = () => {
		clearTimeout(this.reconnectTimeoutId);
		this.shouldAttemptReconnect = false;
		if (this.socket) {
			this.socket.close();
		}
	};

	start = () => {
		this.shouldAttemptReconnect = !!this.reconnectInterval;
		this.progress = 0;
		this.established = false;

		if (!this.socket) {
			this.socket = socketio(this.url, {
				path: this.path,
				transports: ["websocket"],
			});
			this.socket.on("connect", this.onOpen.bind(this));
			this.socket.on("disconnect", this.onClose.bind(this));
			this.socket.on("videoData", this.onMessage.bind(this));
		}
	};

	resume = (secondsHeadroom) => {
		// Nothing to do here
	};

	onOpen = () => {
		this.progress = 1;
	};

	onClose = () => {
		if (this.shouldAttemptReconnect) {
			clearTimeout(this.reconnectTimeoutId);
			this.reconnectTimeoutId = setTimeout(() => {
				this.start();
			}, this.reconnectInterval * 1000);
		}
	};

	onMessage = (ev) => {
		let isFirstChunk = !this.established;
		this.established = true;

		if (isFirstChunk && this.onEstablishedCallback) {
			this.onEstablishedCallback(this);
		}

		if (this.destination) {
			this.destination.write(ev);
		}
	};
}
