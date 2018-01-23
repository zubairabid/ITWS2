sed -e '/.\{35,\}/s/\ in\ /\ in\ fact\ /g' ../inputs/input1.txt 
# '.' matches with any character, and first match is always the beginning of the line. No matching after that because greedy. Then it matches with the next 34, total 35 minimum characters, so every line with >= 35 characters is selected. Then we execute a substituition command with in/in fact globally

egrep ".{35,}" ../inputs/input1.txt | sed 's/\ in\ /\ in\ fact\ /g'
# the grep gets all lines >= 35, using logiv above. the sed is easy shit


awk '$3=="apathy"' ../inputs/input2.txt | egrep -e "apathy" | sed 's/apathy/apathy/g' | awk '$3="empathy"'
# in case we print only changes. first awk filters out only those lines with apathy as the third word. Then the grep and sed are cosmetic, after which the next awk sets the third apathy to empathy, and prints.


awk '{if($3=="apathy")$3="empathy";print $0}' ../inputs/input2.txt | grep "." | sed 's/ / /g'
# in case we print everything including changes. In awk, if the line contained apathy at 3 convert to empathy, then print the line after. Grep, sed are cosmetic

awk '{st=substr($1,1,4);en=substr($1,5);gsub(/./,"#",en);print st en}' ../inputs/input3.txt
# get substring 1-4. And 5-forever. substitute all characters in end with *s. print start and end.

awk -F ":" '{print "USER#" NR " = " $1}' ../inputs/input4.txt
# meh. easy. So we set the delimiter to be :, because the text in input files is separated by colons. Print user, line number, and the first arg

