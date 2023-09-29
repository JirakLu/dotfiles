branch="master"
name=$(whoami)
dir=$(mktemp -d)
[ ! -d "$2" ] && mkdir -p "$2"
chown "$name":wheel "$dir" "$2"
sudo -u "$name" git -C "$repodir" clone --depth 1 \
    --single-branch --no-tags -q --recursive -b "$branch" \
    --recurse-submodules "$1" "$dir"
sudo -u "$name" cp -rfT "$dir" "$2"