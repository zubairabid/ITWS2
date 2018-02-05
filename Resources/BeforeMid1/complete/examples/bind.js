/* keyword 'this' is defined when a function is run. If there's no function running then value of 'this' does not
 change */

let person = {
    name: 'John',
    sayHi: function () {
        setTimeout(function () {
            console.log(`${this.name} says Hi !!`);
        }, 1000);
    }
}

person.sayHi();

/* using bind to change the context of 'this' */
let newPerson = {
    name: 'John',
    sayHi: function () {
        setTimeout(function () {
            console.log(`${this.name} says Hi !!`);
        }.bind(this), 1000);
    }
}

newPerson.sayHi();