awk '{st=substr($1,1,4);en=substr($1,5);gsub(/./,"#",en);print st en}' "$1"
# get substring 1-4. And 5-forever. substitute all characters in end with *s. print start and end.
