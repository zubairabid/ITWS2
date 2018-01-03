n=0
while [[ -f "folder.tar.gz" ]]; do
	tar -zxvf "folder.tar.gz"
	cd "folder"
	if [[ ! -f "folder.tar.gz" ]]; then
		cp image.jpeg ~
	fi
	n=$(( n + 1 ))
	echo "$n"
done
