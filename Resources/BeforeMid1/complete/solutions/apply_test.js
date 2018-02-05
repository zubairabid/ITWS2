const assert = require('assert');
const _ = require('lodash');

describe('apply', () => {

    /* Write a function called once which accepts two parameters, a function and a value for the keyword 'this'.
     Once should return a new function that can only be invoked once, with the value of the keyword this in the
      function set to be the second parameter. */
    it('once', (done) => {

        function once(fn, thisArg) {
            let done = false;
            return function () {
                if (!done) {
                    done = true;
                    return fn.apply(thisArg, arguments);
                } else return undefined;
            };
        }

        // noinspection FunctionNamingConventionJS
        function add(a, b) {
            return a + b;
        }

        let addOnce = once(add, this);
        assert(addOnce(2, 2) === 4);
        assert(addOnce(2, 2) === undefined);
        assert(addOnce(1, 1) === undefined);

        function doMath(a, b, c) {
            return `${this.firstName} adds ${a + b + c}`;
        }

        let instructor = {firstName: "Elie"};
        let doMathOnce = once(doMath, instructor);
        assert(doMathOnce(1, 2, 3) === "Elie adds 6");
        assert(doMathOnce(4, 5, 6) === undefined);
        done();
    });

    /* Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a
     function that when called increments a counter. If the counter is greater than the maximum amount, the inner
      function should return "Maxed Out1". */
    it('invokeMax', (done) => {

        function invokeMax(fn, num) {
            let count = 0;
            return function () {
                if (count++ < num) {
                    return fn.apply(this, arguments);
                } else {
                    return "Maxed Out!";
                }
            };
        }

        // noinspection FunctionNamingConventionJS
        function add(a, b) {
            return a + b;
        }

        let addOnlyThreeTimes = invokeMax(add, 3);
        assert(addOnlyThreeTimes(1, 2) === 3);
        assert(addOnlyThreeTimes(2, 2) === 4);
        assert(addOnlyThreeTimes(1, 2) === 3);
        assert(addOnlyThreeTimes(1, 2) === "Maxed Out!");
        done();
    });

});