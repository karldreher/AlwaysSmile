#!/bin/bash

cp icons/*.png .
zip $filename *
mkdir export
cp * export