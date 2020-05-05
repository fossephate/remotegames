#!/usr/bin/env bash
while true ; do
	pulseaudio -Dv
	pactl load-module module-native-protocol-unix socket=/tmp/pulseaudio.socket
	sudo docker kill $(docker ps -q)
	sudo "$(which node)" ../server/startMachineServer.js
	sleep 1
done
