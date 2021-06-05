#!/usr/bin/env bash
# Generate JavaScript Fiddle Folder

if [ ${1:-NOCONFIG} = "NOCONFIG" ]; then
  echo "Please assign a folder name."
  exit 1
fi

mkdir -p $1 && cd $1
touch index.html index.css index.js README.md
