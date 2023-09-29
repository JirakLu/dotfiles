#!/bin/bash

for dir in $(find . -mindepth 2 -maxdepth 2 -type d -not -path '*/\.git*')
do
    source_dir=${dir/\.\//"$HOME/"}
    target_dir=${dir/\.\//"$(pwd)/"}

    cp -R $source_dir $target_dir
done
