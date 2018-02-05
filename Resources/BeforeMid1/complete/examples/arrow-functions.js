let dog = {
    name: 'Spike',
    sayHi: () => {
        return this.name;
    },
    determineContext: () => {
        return this;
    }
}

let person = {
    name: 'John',
    sayHi: function () {
        return this.name;
    },
    determineContext: function () {
        return this;
    }
}

console.log(person.sayHi());
console.log(person.determineContext());
console.log(dog.sayHi());
console.log(dog.determineContext() === this);