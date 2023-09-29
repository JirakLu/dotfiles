#!/bin/bash

for dir in $(find . -mindepth 2 -maxdepth 2 -type d -not -path '*/\.git*')
do
    source_dir=$(sed )
    echo $dir
done
