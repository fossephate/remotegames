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
	}

	init = () => {
		this.docker = new Docker({
			machineName: null, // uses local docker
			currentWorkingDirectory: null, // uses current working directory
			echo: true, // echo command output to stdout/stderr
		});

		// NUM=$1
		// pulseaudio -Dv
		// pactl load-module module-native-protocol-unix socket=/tmp/pulseaudio.socket
		// pacmd load-module module-null-sink sink_name=sink-$NUM
		// sudo docker run -i --memory 4096m --rm --name host-$NUM \
		// -e PULSE_SERVER=unix:/tmp/pulseaudio.socket \
		// -e PULSE_COOKIE=/tmp/pulseaudio.cookie \
		// -e PULSE_SINK=sink-$NUM \
		// -e NUM=$NUM \
		// --volume /tmp/pulseaudio.socket:/tmp/pulseaudio.socket \
		// --volume $(pwd)/src/configs/pulseaudio.client.conf:/etc/pulse/client.conf \
		// --user $(id -u):$(id -g) \
		// --security-opt seccomp=$(pwd)/src/files/chrome.json \
		// -t box:01 /bin/bash

		// # --user="$USERNAME" \
		// # --password="$PASSWORD" \
		// # --drawMouse="true" --usePulse="true" \
		// # --useLocalFfmpegInstall="true" \
		// # --videoBitrate=6000 --combineAV="false" \
		// # --muxDelay="0.0001" \
		// # --resolution=540 --debug="true" &

		let streamArgs = `\
		--streamKey="${this.streamKey}" --usePule="true" \
		--useLocalFfmpegInstall="true" \
		--audioDevice="sink-${this.port}.monitor" --useLocalFfmpegInstall="true" `;
		for (let key in this.streamSettings) {
			let arg = `--${key}="${this.streamSettings[key]}" `;
			streamArgs += arg;
		}

		let command = `
			docker run --memory 2048m --rm --name host-${this.port} \
			-e PULSE_SERVER=unix:/tmp/pulseaudio.socket \
			-e PULSE_COOKIE=/tmp/pulseaudio.cookie \
			-e PULSE_SINK=sink-${this.port} \
			-e STREAM_ARGS=${streamArgs} \
			--volume /tmp/pulseaudio.socket:/tmp/pulseaudio.socket \
			--volume $(pwd)/../server/vm/pulseaudio.client.conf:/etc/pulse/client.conf \
			--user $(id -u):$(id -g) \
			--security-opt seccomp=$(pwd)/../server/vm/chrome.json \
			-t rgio-host:01`;

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
		console.log(`CT: ${formatDate(new Date())} Uptime: ${uptime} hours`);
	};
}

module.exports.MachineServer = MachineServer;
