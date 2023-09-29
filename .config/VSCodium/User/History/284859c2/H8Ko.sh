#!/bin/bash

for dir in $(find . -mindepth 2 -maxdepth 2 -type d -not -path '*/\.git*' -not -path '*/\.local/share*')
do
    source_dir=${dir/\.\//"$HOME/"}
    target_dir=dirname ${dir/\.\//"$(pwd)/"}

    #cp -R $source_dir $target_dir
    echo $source_dir
    echo $target_dir
done
