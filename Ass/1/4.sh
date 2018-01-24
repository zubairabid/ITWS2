awk -F ":" '{print "USER#" NR "=" $1}' "$1"
# meh. easy. So we set the delimiter to be :, because the text in input files is separated by colons. Print     user, line number, and the first arg
