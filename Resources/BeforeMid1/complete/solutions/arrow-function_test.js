const assert = require('assert');
const _ = require('lodash');

describe('arrow function', () => {

    /* Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an
     object with the keys of firstName and lastName with the values as the parameters passed to the function. */
    it('createStudentObj', (done) => {

        let createStudentObj = (f, l) => {
            return {firstName: f, lastName: l};
        };

        assert(createStudentObj('Elie', 'Schoppik').firstName === 'Elie');
        assert(createStudentObj('Elie', 'Schoppik').lastName === 'Schoppik');
        done();
    });

});