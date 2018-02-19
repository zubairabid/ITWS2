function myArrayFilter(arr, callback) {
	var retl = [];
	var j = 0;
	for(var i = 0; i < arr.length; i+=1) {
		if(callback(arr[i], i)) {
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
	retFunc = function(tree) {
		if(tree.type == 'in') {
			//console.log("Internal Node, adding " + tree.value + " to left and right");
			var val = inFunc(tree.value, retFunc(tree.left), retFunc(tree.right));
			//console.log("Value added: " + val);
			return val;
		}
		else if(tree.type == 'end') {
			//console.log("Leaf Node, adding " + tree.value);
			var val = endFunc(tree.value);
			//console.log("Value added: " + val);
			return val;
		}
	}
	return retFunc;

}

function myTreeSize(tree) {
	var val =  myTreeReduce((a,b,c)=>1+b+c, y=>1)(tree);
	//console.log(val);
	return val;
}

function myTreeTraversal(type) {
	/*var l = []
	if(type == 'pre') {
		var ret =  function(tree) {
		// ADD CONDITION FOR LEFT/RIGHT TO EXIST
			if(tree.type == 'in') {
				console.log("Pushing vlr, "+ tree.value);
				l.push(tree.value);
				console.log(l);
				l.push(ret(tree.left));
				l.push(ret(tree.right));
			}
			else {
				console.log("Pushing v, "+ tree.value);
				l.push(tree.value);
				console.log(l);
			}
			return l;
		}
		return ret;
	}
	else if(type == 'in') {
		var ret = function(tree) {
			if(tree.type == 'in') {
				console.log("Pushing lvr, "+ tree.value);
				l.push(ret(tree.left));
				l.push(tree.value);
				console.log(l);
				l.push(ret(tree.right));
			}
			else {
				console.log("Pushing v, "+ tree.value);
				l.push(tree.value);
				console.log(l);
			}
			return l;
		}
		return ret;
	}
	else if(type == 'post') {
		var ret = function(tree) {
			if(tree.type == 'in') {
				console.log("Pushing lrv, "+ tree.value);
				l.push(ret(tree.left));
				l.push(ret(tree.right));
				l.push(tree.value);
				console.log(l);
			}
			else {
				console.log("Pushing v, "+ tree.value);
				l.push(tree.value);
				console.log(l);
			}
			return l;
		}
		return ret;
	}*/

	


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


const tr = {
type: 'in',
      value: 1,
      left: {
type: 'end',
      value: 2
      },
right: {
type: 'in',
      value: 3,
      left: {
type: 'end',
      value: 4
      },
right: {
type: 'end',
      value: 5
       }
       }
};


//console.log(myTreeReduce((a, b, c)=>a+b+c, x=>x)(tr));
//console.log(myTreeSize(tr));
console.log(myTreeTraversal('pre')(tr));
console.log(myTreeTraversal('in')(tr));
console.log(myTreeTraversal('post')(tr));
