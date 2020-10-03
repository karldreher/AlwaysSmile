#!/bin/bash
echo $browser
cd ../firefox
cp ../icons/*.png .
cp ../*.js .
zip $browser-extension-$version *