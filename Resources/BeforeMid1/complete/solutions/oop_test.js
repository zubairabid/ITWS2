const assert = require('assert');
const _ = require('lodash');

describe('Object Oriented Programming', () => {
    /* PART 1
     Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and
      favoriteNumber. Your function MUST be named Person.

     Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and
      the object created from the Person functions' favorite number.

      PART 2

      Given the following code - refactor the Child function to remove all the duplication from the Parent
       function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single
        line.*/
    it('Constructor Functions', (done) => {

        // noinspection FunctionNamingConventionJS
        function Person(firstName, lastName, favoriteColor, favoriteNumber) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.favoriteColor = favoriteColor;
            this.favoriteNumber = favoriteNumber;
            this.multiplyFavoriteNumber = function (x) {
                return x * this.favoriteNumber;
            };
        }

        const x = new Person('John', 'Legend', 'Blue', 7);
        assert(x.firstName === 'John');
        assert(x.lastName === 'Legend');
        assert(x.favoriteColor === 'Blue');
        assert(x.favoriteNumber === 7);
        assert(x.multiplyFavoriteNumber(3) === 21);

        // noinspection FunctionNamingConventionJS
        function Parent(firstName, lastName, favoriteColor, favoriteFood) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.favoriteColor = favoriteColor;
            this.favoriteFood = favoriteFood;
        }

        // Refactor the Child function
        // noinspection FunctionNamingConventionJS
        function Child(firstName, lastName, favoriteColor, favoriteFood) {
            Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
        }

        const child = new Child('John', 'Legend', 'Blue', 'Fish');
        assert(child.favoriteFood === 'Fish');
        assert(child.constructor === Child);
        done();
    });


    /* PART 1
    1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor,
     favoriteNumber)

    2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of
     an object created by the Person constructor concatenated together.
     
    3 -  Add a property on the object created from the Person function called family which is an empty array. This
     will involve you adding an additional line of code to your Person constructor.

    4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person
     constructor to the family array. To make sure that the object you are adding is an object constructed from the
      Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not
       include duplicates! This method should return the length of the family array.

    PART II

    1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new
     array with the result of the callback for each value in the array.

    2 - Implement a function called reverse that reverses a string and place it on the String.prototype
    */
    it('Prototypes', (done) => {

        // noinspection FunctionNamingConventionJS
        function Person(firstName, lastName, favoriteColor, favoriteNumber) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.favoriteColor = favoriteColor;
            this.favoriteNumber = favoriteNumber;
            this.family = [];
        }

        Person.prototype.fullName = function () {
            return this.firstName + " " + this.lastName;
        };

        Person.prototype.addToFamily = function (person) {
            if (!(this.family.includes(person)) && person instanceof Person) {
                this.family.push(person);
            }
            return this.family.length;
        };

        Array.prototype.map = function (callback) {
            const newArr = [];
            for (let i = 0; i < this.length; i++) {
                newArr.push(callback(this[i], i, this));
            }
            return newArr;
        };

        String.prototype.reverse = function () {
            let newStr = '';
            for (let i = this.length - 1; i >= 0; i--) {
                newStr += this[i];
            }
            return newStr;
        };

        const person = new Person("Elie", "Schoppik", "purple", 34);
        assert(person.fullName() === "Elie Schoppik");
        let anotherPerson = new Person("John", "Legend", "BLue", 45);
        assert(person.addToFamily(anotherPerson) === 1);
        assert(person.addToFamily(anotherPerson) === 1);
        assert(person.family.length === 1);
        assert(person.addToFamily({}) === 1);
        assert(person.family.length === 1);

        assert(_.isEqual([1, 2, 3, 4].map(x => 2 * x), [2, 4, 6, 8]));
        assert("test".reverse() === "tset");
        done();
    });


    /* 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.

    2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"

    3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year
     are" concatenated with the make, model and year property.

    4 - Create a constructor function for a Car. Each object created from the Car function should also have a make,
     model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the
      methods from the Vehicle prototype.

    5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also
     have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should
      inherit all of the methods from the Vehicle prototype.
    */

    it('Inheritance', (done) => {

        // noinspection FunctionNamingConventionJS
        function Vehicle(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        Vehicle.prototype.start = function () {
            return "VROOM!";
        };

        Vehicle.prototype.toString = function () {
            return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
        };

        // noinspection FunctionNamingConventionJS
        function Car(make, model, year) {
            Vehicle.apply(this, arguments);
            this.numWheels = 4;
        }

        Car.prototype = Object.create(Vehicle.prototype);
        Car.prototype.constructor = Car;

        // noinspection FunctionNamingConventionJS
        function Motorcycle(make, model, year) {
            Vehicle.apply(this, arguments);
            this.numWheels = 2;
        }

        Motorcycle.prototype = Object.create(Vehicle.prototype);
        Motorcycle.prototype.constructor = Motorcycle;

        let vehicle = new Vehicle("Tractor", "John Deere", 1999);
        assert(vehicle.toString() === 'The make, model, and year are Tractor John Deere 1999');

        let bike = new Motorcycle("Kawasaki", "Ninja", 2010);
        assert(bike.numWheels === 2);
        assert(bike.start() === 'VROOM!');
        assert(bike.toString() === 'The make, model, and year are Kawasaki Ninja 2010');

        done();
    });

});