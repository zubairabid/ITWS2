awk '{if($3=="apathy")$3="empathy";print $0}' "$1" | grep "." | sed 's/ / /g'
# in case we print everything including changes. In awk, if the line contained apathy at 3 convert to empat    hy, then print the line after. Grep, sed are cosmetic
