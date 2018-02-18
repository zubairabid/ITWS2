function filter(arr, callback) {
	var retl = [];
	var j = 0;
	for(var i = 0; i < arr.length; i+=1) {
		if(callback(arr[i])) {
			retl[j] = arr[i];
			j+=1;
		}
	}

	return retl;
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], a=>a%2==0));
