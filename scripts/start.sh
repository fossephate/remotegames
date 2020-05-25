#!/usr/bin/env bash
while true ; do

	case "$1" in

			account)
				node ../server/AccountServer.js
				;;

			video)
				node ../server/ServerWrapper.js video 8000-8012
				;;
			
			host)
				node ../server/ServerWrapper.js host 8050-8064
				;;

			machine)
				pulseaudio -Dv
				pactl load-module module-native-protocol-unix socket=/tmp/pulseaudio.socket
				sudo docker kill $(sudo docker ps -q)
				sudo "$(which node)" ../server/ServerWrapper.js machine 0-10
				;;
			
			*)
				echo $"Usage: $0 {video|host|machine}"
				exit 1
	
	esac
	# node ../server/startVideoServer.js
	sleep 1
done
