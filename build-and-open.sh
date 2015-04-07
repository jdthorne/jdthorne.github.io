#!/bin/bash

browserify -t coffeeify src/index.coffee -o obj/index.js || exit
lessc src/index.less > obj/index.css || exit
slimrb src/index.slim > index.html || exit

open index.html
