#!/bin/bash
echo $browser
cd ../chrome
cp ../icons/*.png .
cp ../*.js .
zip $browser-extension-$version *