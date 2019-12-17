JSMpeg.Source.WebSocket = (function() {
  "use strict";

  var WSSource = function(url, options) {
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
  };

  WSSource.prototype.connect = function(destination) {
    this.destination = destination;
  };

  WSSource.prototype.destroy = function() {
    clearTimeout(this.reconnectTimeoutId);
    this.shouldAttemptReconnect = false;
    if (this.socket) {
      this.socket.close();
    }
  };

  WSSource.prototype.start = function() {
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

  WSSource.prototype.resume = function(secondsHeadroom) {
    // Nothing to do here
  };

  WSSource.prototype.onOpen = function() {
    this.progress = 1;
  };

  WSSource.prototype.onClose = function() {
    if (this.shouldAttemptReconnect) {
      clearTimeout(this.reconnectTimeoutId);
      this.reconnectTimeoutId = setTimeout(
        function() {
          this.start();
        }.bind(this),
        this.reconnectInterval * 1000
      );
    }
  };

  WSSource.prototype.onMessage = function(ev) {
    var isFirstChunk = !this.established;
    this.established = true;

    if (isFirstChunk && this.onEstablishedCallback) {
      this.onEstablishedCallback(this);
    }

    if (this.destination) {
      this.destination.write(ev.data);
    }
  };

  return WSSource;
})();

JSMpeg.Source.SocketIO = (function() {
  "use strict";

  var SIOSource = function(url, options) {
    this.url = url;
    this.path = options.path;
    this.options = options;
    this.socket = null;
		this.streaming = true;

    this.callbacks = { connect: [], data: [] };
    this.destination = null;

    this.reconnectInterval = options.reconnectInterval !== undefined ? options.reconnectInterval : 5;
    this.shouldAttemptReconnect = !!this.reconnectInterval;

    this.completed = false;
    this.established = false;
    this.progress = 0;

    this.reconnectTimeoutId = 0;

    this.onEstablishedCallback = options.onSourceEstablished;
    this.onCompletedCallback = options.onSourceCompleted; // Never used
  };

  SIOSource.prototype.connect = function(destination) {
    this.destination = destination;
  };

  SIOSource.prototype.destroy = function() {
    clearTimeout(this.reconnectTimeoutId);
    this.shouldAttemptReconnect = false;
    if (this.socket) {
      this.socket.close();
    }
  };

  SIOSource.prototype.start = function() {
    this.shouldAttemptReconnect = !!this.reconnectInterval;
    this.progress = 0;
    this.established = false;

    if (!this.socket) {
      this.socket = io(this.url, {
        path: this.path,
        transports: ["websocket"]
      });
      this.socket.on("connect", this.onOpen.bind(this));
      this.socket.on("disconnect", this.onClose.bind(this));
      this.socket.on("videoData", this.onMessage.bind(this));
    }
  };

  SIOSource.prototype.resume = function(secondsHeadroom) {
    // Nothing to do here
  };

  SIOSource.prototype.onOpen = function() {
    this.progress = 1;
  };

  SIOSource.prototype.onClose = function() {
    if (this.shouldAttemptReconnect) {
      clearTimeout(this.reconnectTimeoutId);
      this.reconnectTimeoutId = setTimeout(
        function() {
          this.start();
        }.bind(this),
        this.reconnectInterval * 1000
      );
    }
  };

  SIOSource.prototype.onMessage = function(ev) {
    var isFirstChunk = !this.established;
    this.established = true;

    if (isFirstChunk && this.onEstablishedCallback) {
      this.onEstablishedCallback(this);
    }

    if (this.destination) {
      this.destination.write(ev);
    }
  };

  return SIOSource;
})();
