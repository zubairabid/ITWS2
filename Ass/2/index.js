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
	if(type == 'pre') {
		var ret =  function(tree, l) {
			// ADD CONDITION FOR LEFT/RIGHT TO EXIST
			if(l == undefined) {
				var l = [];
			}
			if(tree.type == 'in') {
				//				console.log("Pushing vlr, "+ tree.value);
				l.push(tree.value);
				//				console.log(l);
				ret(tree.left, l);
				ret(tree.right, l);
			}
			else {
				//				console.log("Pushing v, "+ tree.value);
				l.push(tree.value);
				//				console.log(l);
			}
			return l;
		}
		return ret;
	}
	else if(type == 'in') {
		var ret = function(tree, l) {
			if(l == undefined) {
				var l = [];
			}
			if(tree.type == 'in') {
				//				console.log("Pushing lvr, "+ tree.value);
				ret(tree.left, l);
				l.push(tree.value);
				//				console.log(l);
				ret(tree.right, l);
			}
			else {
				//				console.log("Pushing v, "+ tree.value);
				l.push(tree.value);
				//				console.log(l);
			}
			return l;
		}
		return ret;
	}
	else if(type == 'post') {
		var ret = function(tree, l) {
			if(l == undefined) {
				var l = [];
			}
			if(tree.type == 'in') {
				//				console.log("Pushing lrv, "+ tree.value);
				ret(tree.left, l);
				ret(tree.right, l);
				l.push(tree.value);
				//				console.log(l);
			}
			else {
				//				console.log("Pushing v, "+ tree.value);
				l.push(tree.value);
				//				console.log(l);
			}
			return l;
		}
		return ret;
	}/*

	    var lis = [];
	    var func;

	    if(type == 'pre') {
	    func = function(tree) {
	    if(tree == undefined)
	    return;
	    lis.push(tree.value);
	    lis.push(func(tree.left));
	    lis.push(func(tree.right));
	    return lis;
	    }
	    }

	    else if(type == 'in') {
	    func = function(tree) {
	    if(tree == undefined)
	    return lis;
	    lis.push(func(tree.left));
	    lis.push(tree.value);
	    lis.push(func(tree.right));
	    return lis;
	    }
	    }

	    else if(type == 'post') {
	    func = function(tree) {
	    if(tree == undefined)
	    return lis;
	    lis.push(func(tree.left));
	    lis.push(func(tree.right));
	    lis.push(tree.value);
	    return lis;
	    }
	    }
	    return func;*/

}

function hangman(phrase) {

	const gameOver = "Game over!!!";
	const won = "You\'ve got it!!! Final phrase:";
	const wrong = "Incorrect guess!!!";
	const lost = "You\'ve lost!!! Correct phrase:";

	var errata = 0;
	var ans = '';
	for(var i = 0; i < phrase.length - 1; i+=1) {
		ans += '_ ';
	}
	ans+='_';

	return function game(ch) {
		if(errata >= 3) {
			return gameOver;
		}

		if(phrase.indexOf(ch) > -1) {
			var temp = '';
			for(var i = 0; i < phrase.length; i+=1) {
				if((phrase.charAt(i) != ch)) {
					temp += ans.charAt(2*i) + ans.charAt(2*i+1);
				}
				else {
					temp += ch + ' ';
				}
			}	
			ans = temp;
			if(ans.indexOf('_') == -1) {
				errata = 4;
				return won + " " + phrase;
			}
			else {
				return ans;
			}
			// remove it
		}
		else {
			errata += 1;
			if(errata >= 3) {
				return lost + " " + phrase;
			}
			else {
				return wrong;
			}
		}
	}

}

function Person(name, age) {
	this.name = name;
	this.age = age;

	this.about = function() {
		return "My name is " + name + " and I\'m " + age + " yrs old.";
	}

}

function Student(name, age, roll) {
	Person.call(this, name, age);
	this.roll = roll;

	this.id = function() {
		return "Student Id: "+this.roll;
	};
}

//Student.prototype.__proto__ = Person;

const numberList = {
numbers: [],
	 set add(num) {
		 this.numbers.push(num);
	 },
	 get sum() {
		 var sum = 0;
		 for(var i = 0; i < this.numbers.length; i+=1) {
			 sum += this.numbers[i];
		 }
		 return sum;
	 },
	 get average() {
		 return (this.sum)/this.numbers.length;
	 }
};

function carRace(cars, finish) {
	//cars is the array of promises
	var name = '';
	var time = 99999999;

	for(let i = 0; i < cars.length; i+=1) {
		cars[i].then(function(resolve, reject) {
			if(resolve.time < time) {
				time = resolve.time;
				name = resolve.name;
			}
	//		console.log("Promise for "+ i + " " + resolve.name + " resolved");
	//		console.log("Min: " + name + " " + time);
		});
	}
	//console.log("Min: " + name + " " + time);
	Promise.all(cars).then(function() {finish(name + " won in " + time + " seconds!!!")});
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
//console.log(myTreeTraversal('pre')(tr, []));
//console.log(myTreeTraversal('in')(tr, []));
//console.log(myTreeTraversal('post')(tr));

//const nl = numberList;
//nl.add = 1;
//console.log(nl.sum);
//nl.add = 2;
//console.log(nl.sum);
//console.log(nl.average);
//nl.add = 3;
//console.log(nl.average===2);
//const ferrari = new Promise(resolve => {
//		setTimeout(() => {
//				resolve({
//name: 'Ferrari',
//time: 10
//});
//				}, 10);
//		});

//const bugati = new Promise(resolve => {
//		setTimeout(() => {
//				resolve({
//name: 'Bugatti',
//time: 8
//});
//				}, 8);
//		});
//
//carRace([ferrari, bugati], win=> {
//	console.log(win);
//});
//const person = new Person('John', 20);
//console.log(person.name);
//console.log(person.age);
//console.log(person.about());
//const student = new Student('John', 20, '20171076');
//console.log(student.name);
//console.log(student.age);
//console.log(student.about());
//console.log(student.id());

let game = hangman('work');
console.log(game('w'));
console.log(game('h'));
console.log(game('r'));
console.log(game('o'));
console.log(game('d'));
console.log(game('k'));
console.log(game('s'));

game = hangman('tree');
console.log(game('r'));
console.log(game('a'));
console.log(game('s'));
console.log(game('i'));
console.log(game('t'));

