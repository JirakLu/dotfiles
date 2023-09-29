branch="master"
name=$(whoami)
tmpdir=$(mktemp -d)
[ ! -d "$2" ] && mkdir -p "$2"
chown "$name":wheel "$tmpdir" "$2"
sudo -u "$name" git clone https://github.com/JirakLu/dotfiles.git --depth 1 \
    --single-branch --no-tags -q --recursive -b "$branch" \
    --recurse-submodules "$1" "$tmpdir"
sudo -u "$name" cp -rfT "$tmpdir" "$2"