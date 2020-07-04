#!/usr/bin/env bash

openapi bundle -o dist
cp -R web/* dist/
