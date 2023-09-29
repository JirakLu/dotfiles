branch="master"
name=$(whoami)
tmpdir=$(mktemp -d)
targetdir="/home/$name"

chown "$name":wheel "$tmpdir" "$targetdir"
sudo -u "$name" git clone --depth 1 \
    --single-branch --no-tags -q --recursive -b "$branch" \
    --recurse-submodules https://github.com/JirakLu/dotfiles.git "$tmpdir"
sudo -u "$name" cp -rfT "$tmpdir" "$targetdir"

rm -rf "/home/$name/.git/" "/home/$name/README.md"