function myArrayFilter(arr, callback) {
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

function myArrayReduce(arr, callback, acc) {
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

function myTreeReduce(inFunc, endFunc) {

}

function myTreeSize(tree) {

}

function myTreeTraversal(type) {

}

function hangman(phrase) {

	const gameOver = "Game over!!!";
	const won = "You\'ve got it!!! Final phrase:";
	const wrong = "Incorrect guess!!!";
	const lost = "You\'ve lost!!! Correct phrase:";

}

function Person(name, age) {

}

function Student(name, age, roll) {

}

const numberList = {

};

function carRace(cars, finish) {

}

module.exports = {
	myArrayFilter,
	myArrayReduce,
	myTreeReduce,
	myTreeSize,
	myTreeTraversal,
	hangman,
	Person,
	Student,
	numberList,
	carRace
};
