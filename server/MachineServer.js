const socketio = require("socket.io");
const dockerCLI = require("docker-cli-js");
const DockerOptions = dockerCLI.Options;
const Docker = dockerCLI.Docker;
const exec = require("child_process").exec;

// const myShellScript = exec("sh doSomething.sh /myDir");

const AFK_TIMEOUT = 1000 * 60 * 5; // 5 min

function formatDate(dt) {
	return `${(dt.getMonth() + 1)
		.toString()
		.padStart(2, "0")}/${dt
		.getDate()
		.toString()
		.padStart(2, "0")}/${dt
		.getFullYear()
		.toString()
		.padStart(4, "0")} ${dt
		.getHours()
		.toString()
		.padStart(2, "0")}:${dt
		.getMinutes()
		.toString()
		.padStart(2, "0")}:${dt.getSeconds().toString().padStart(2, "0")}`;
}

class MachineServer {
	constructor(options) {
		this.accountConnection = options.socket;
		this.port = options.port;
		this.streamKey = options.streamKey;
		this.streamSettings = options.streamSettings;
		this.docker = null;
		this.startTime = new Date();
	}

	init = () => {
		this.docker = new Docker({
			machineName: null, // uses local docker
			currentWorkingDirectory: null, // uses current working directory
			echo: true, // echo command output to stdout/stderr
		});

		// pulseaudio -Dv
		// pactl load-module module-native-protocol-unix socket=/tmp/pulseaudio.socket
		// pacmd load-module module-null-sink sink_name=sink-$NUM
		
		// forced args:
		this.streamSettings = {
			...this.streamSettings,
			debug: false,
			streamKey: this.streamKey,
			drawMouse: true,
			keyboardEnabled: true,
			mouseEnabled: true,
			usePulse: true,
			useLocalFfmpegInstall: true,
			audioDevice: `sink-${this.port}.monitor`,
			captureRate: 60,
			capture: "desktop",
			width: 1920,
			height: 1080,
			offsetX: 0,
			offsetY: 0,
			streamTitle: null,
			description: null,
			// forfeitTime: null,
			audioRate: null,
			videoDevice: null,
			audioBufferSize: null,
			videoBufferSize: null,
			audioBitrate: null,
			windowTitle: null,
			// groupOfPictures: "default",
			// videoType: "mpeg1",
			// groupOfPictures: null,
			// videoType: null,
		};

		let streamArgs = "";

		for (let key in this.streamSettings) {
			let arg;

			let setting = this.streamSettings[key];

			if (setting == null) {
				continue;
			}

			if (setting === "true" || setting === "false") {
				setting = setting === "true";
			} else if (!isNaN(setting) && typeof setting !== "boolean") {
				setting = parseFloat(setting);
			}

			if (typeof setting === "number" || typeof setting === "boolean") {
				arg = `--${key}=${setting} `;
			} else if (typeof setting === "string") {
				setting = setting.replace(/^["']|["']$/g, "");
				arg = `--${key}=${setting} `;
			} else {
				continue;
			}

			streamArgs += arg;
		}

		streamArgs = streamArgs.substring(0, streamArgs.length - 1);

		let command = `
			docker run --memory 2048m --rm --name host-${this.port} \
			-e PULSE_SERVER=unix:/tmp/pulseaudio.socket \
			-e PULSE_COOKIE=/tmp/pulseaudio.cookie \
			-e PULSE_SINK=sink-${this.port} \
			-e STREAM_ARGS='${streamArgs}' \
			--volume /tmp/pulseaudio.socket:/tmp/pulseaudio.socket \
			--volume $(pwd)/../server/vm/pulseaudio.client.conf:/etc/pulse/client.conf \
			--user 1000:1000 \
			--security-opt seccomp=$(pwd)/../server/vm/chrome.json \
			-t rgio-host:01 /bin/bash`;

		this.docker.command(command).then((data) => {
			console.log("data = ", data);
		});
	};

	stop = () => {
		this.docker.command(`docker kill host-${this.port}`).then((data) => {
			console.log("data = ", data);
		});

		console.log(`machine stopped on port: ${this.port}`);
		let uptime = (new Date() - this.startTime) / 1000 / 60 / 60;
		console.log(`CT: ${formatDate(new Date())} Uptime: ${uptime.toFixed(2)} hours`);
	};
}

module.exports.MachineServer = MachineServer;
