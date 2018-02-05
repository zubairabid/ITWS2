const assert = require('assert');
const _ = require('lodash');

// The let statement declares a block scope local variable
describe('Let', () => {

    xit('why is var bad?', (done) => {
        const counts = [];

        function count() {
            // noinspection ES6ConvertVarToLetConst
            for (var i = 1; i <= 5; i++) {
                counts.push(new Promise((res) => {
                    setTimeout(function () {
                        // noinspection JSReferencingMutableVariableFromClosure
                        res(i);
                    }, 10);
                }));
            }
        }

        count();
        Promise.all(counts)
            .then((counts) => {
                // assert(counts.every(x => x === 6));
                assert(_.isEqual(counts, [6, 6, 6, 6, 6]));
                done();
            });
    });

    xit('why is let good?', (done) => {
        const counts = [];

        function count() {
            for (let i = 1; i <= 5; i++) {
                counts.push(new Promise((res) => {
                    setTimeout(function () {
                        res(i);
                    }, 10);
                }));
            }
        }

        count();
        Promise.all(counts)
            .then((counts) => {
                // assert(!counts.every(x => x === 6));
                assert(_.isEqual(counts, [1, 2, 3, 4, 5]));
                done();
            });
    });

});