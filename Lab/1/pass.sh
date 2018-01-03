#!/bin/bash
i=1
for (( i=1; i <=10000; i++ )); do

hash=$(echo -n $i | md5sum | awk '{print $1}')
if [ $hash == "1cfead9959b76ce44a847c850b61c587" ]
then
echo "$i\\Congrats !! You completed all the tasks, tell password to TA"
fi

done
