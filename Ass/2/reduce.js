function reduce(arr, callback, acc) {
	var ind = 0;
	if(acc == undefined) {
		acc = arr[ind];
		ind += 1;
	}
	for(ind = ind; ind < arr.length; ind++) {
		acc = callback(acc, arr[ind]);
	}
	return acc;
}
