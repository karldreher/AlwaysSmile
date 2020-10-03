#!/bin/bash
mkdir export
cd export
cp ..icons/*.png .
cp ../*.js* .
zip $filename *
