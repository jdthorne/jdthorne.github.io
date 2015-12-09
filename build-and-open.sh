#!/bin/bash

browserify -t coffeeify src/index.coffee -o obj/index.js || exit
lessc src/index.less > obj/index.css || exit
slimrb src/index.slim > index.html || exit

browserify -t coffeeify src/whitesky.coffee -o obj/whitesky.js || exit
lessc src/whitesky.less > obj/whitesky.css || exit
slimrb src/whitesky.slim > whitesky.html || exit

open index.html
