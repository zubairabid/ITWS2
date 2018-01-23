sed -e '/.\{35,\}/s/\ in\ /\ in\ fact\ /g' ../inputs/input1.txt 

awk '$3=="apathy"' ../inputs/input2.txt | egrep -e "apathy" | sed 's/apathy/apathy/g' | awk '$3="empathy"'
