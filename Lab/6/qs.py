#!/usr/bin/python3

def quickSort(alist,first,last):
	splitpoint = 0
	print("Sorting in array " + str(alist) + "\nfrom " + str(first) + " to " + str(last));
	if(first<last):
		splitpoint = partition(alist,first,last)
	else:
		return
	quickSort(alist,first,splitpoint-1)
	quickSort(alist,splitpoint+1,last)


def partition(alist, first, last):
	# going with potentially performance impacting non median random value
	pivot = alist[first]
	leftmark = first+1
	rightmark = last

	flag = False

	while(not flag):

		while(leftmark <= rightmark and alist[leftmark] <= pivot):
			leftmark = leftmark + 1

		while(alist[rightmark] >= pivot and rightmark >= leftmark):
			rightmark = rightmark -1

		if(rightmark < leftmark):
			flag = True
		else:
			alist[leftmark], alist[rightmark] = alist[rightmark], alist[leftmark]
	
	alist[first], alist[rightmark] = alist[rightmark], alist[first]

	return rightmark

alist = []
for i in range(10):
	alist.append(int(input()))
	print("Input " + str(i) + " done")

quickSort(alist, 0, len(alist) - 1)
print(alist)
