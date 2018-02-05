function Person(fn, ln) {
    this.first = fn;
    this.last = ln;
}

var person = new Person('John', 'Legend');

console.log(person);
console.log(person.constructor);
console.log(person.__proto__ === Person.prototype);