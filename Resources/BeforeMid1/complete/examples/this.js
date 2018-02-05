/* 'this' is a keyword whose value depends on the execution context at runtime */

/* Global context */
//console.log(this);

function whatIsThis() {
    return this;
}

//console.log(whatIsThis());

function variablesInThis() {
    this.person = 'John';
}

variablesInThis();
//console.log(person);

/* Object context */
let newPerson = {
    name: 'John',
    sayHi: function () {
        return this.name;
    },
    determineContext: function () {
        return this === newPerson;
    },
    dog: {
        sayHi: function () {
            return this.name;
        },
        determineContext: function () {
            return this === newPerson;
        }
    }
}

console.log(newPerson.sayHi());
console.log(newPerson.determineContext());
console.log(newPerson.dog.sayHi.apply(newPerson));
console.log(newPerson.dog.determineContext.apply(newPerson));