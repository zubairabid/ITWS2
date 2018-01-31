function Vehicle() {
	this.speed = 100;
	this.x = 1;
}
function Car(model, colour) {
	Vehicle.call(this);
	this.make = model;
	this.colour = colour;
}
function Toy(cost) {
	this.cost = cost;
}

var myCar = new Car("Veyron", "prange")
undefined
myCar
Object { speed: 100, x: 1, make: "Veyron", colour: "prange" }
myCar.x
1
function RCCar() {
	Car.call(this, "Veyron", "Red");
}
	undefined
var myrc = new RCCar()
	undefined
	myrc
	Object { speed: 100, x: 1, make: "Veyron", colour: "Red" }
	function RCCar() {
		Car.call(this, "Veyron", "Red");
	}
undefined
function RCCar() {
	Car.call(this, "Veyron", "Red");
	Toy.call(123);
}
	undefined
var myrc = new RCCar()
	undefined
	myrc
	Object { speed: 100, x: 1, make: "Veyron", colour: "Red" }
	function RCCar() {
		Toy.call(123);
		Car.call(this, "Veyron", "Red");
	}
	undefined
var myrc = new RCCar()
	undefined
	myrc
	Object { speed: 100, x: 1, make: "Veyron", colour: "Red" }
	myrc.cost
