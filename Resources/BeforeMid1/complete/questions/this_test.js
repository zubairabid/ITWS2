const assert = require('assert');
const _ = require('lodash');

describe('this', () => {

    xit('Context of this', done => {
        assert(_.isEqual(this, {}));

        let person = {
            name: 'John',
            sayHi: function () {
                return `${this.name} says Hi`;
            },
            dog: {
                ownerSayHi: function () {
                    return `${this.name} says Hi`;
                }
            }
        };

        assert(person.sayHi() === 'John says Hi');
        assert(person.dog.sayHi() === 'undefined says Hi');
        assert(person.dog.ownerSayHi.apply(person) === 'John says Hi');

        done();
    });

});