var ar = [Math.random()];

function clean() {
	document.getElementById("phere").innerHTML = "To be displayed here";
}

function test() {
    console.log(Math.random());
}

function create() {
	while(ar.length > 0) {
		ar.pop();
	}
	for (var i = 4; i >= 0; i--) {
		ar.push(Math.floor(Math.random()*1000));
	}
	console.log("Created");
	console.log(ar)
	printto();
}

function sort() {
	if(ar.length !== 5) {
		document.getElementById("phere").innerHTML = "Array not created";	
		return;
	}
	ar.sort();
	console.log("sort")
	console.log(ar);
	printto();
}

function add() {
	if(ar.length !== 5) {
		document.getElementById("phere").innerHTML = "Array not created";	
		return;
	}
	var sum = 0;
	for (var i = ar.length - 1; i >= 0; i--) {
		sum = sum + ar[i];
		console.log("At "+ i);
		console.log(sum);
	}
	document.getElementById("phere").innerHTML = "Sum  = " + sum;
}

function printto() {
	document.getElementById("phere").innerHTML = ar;
}