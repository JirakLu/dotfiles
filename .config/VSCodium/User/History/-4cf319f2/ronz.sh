branch="master"
name=$(whoami)
tmpdir=$(mktemp -d)
targetdir="/home/$name"

chown "$name":wheel "$tmpdir" "$targetdir"
sudo -u "$name" git clone https://github.com/JirakLu/dotfiles.git --depth 1 \
    --single-branch --no-tags -q --recursive -b "$branch" \
    --recurse-submodules "$1" "$tmpdir"
sudo -u "$name" cp -rfT "$tmpdir" "$targetdir"