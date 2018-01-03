n=0
while [[ ! -f folder.tar.gz ]]; do
	tar -zxvf folder.tar.gz
	cd folder
	n=$(( n + 1 ))
	echo "$n"
done
echo "$n"
cp image.jpeg $