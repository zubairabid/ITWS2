egrep ".{35,}" "$1" | sed 's/\bin\b/in\ fact/g'
# the grep gets all lines >= 35, using logiv above. the sed is easy shit
