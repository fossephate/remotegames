#!/usr/bin/env bash
mkdir -p ../server/db
mongo admin --eval "db.shutdownServer()" > /dev/null
mongod --dbpath ../server/db --fork --logpath /dev/null
