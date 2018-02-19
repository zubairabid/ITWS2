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
var temp = filter([1, 2, 3, 4, 5], a=>a%2==1);
var temp1 = [1, 3, 5];
console.log(temp + " and " + temp1)
console.log(temp == temp1)
