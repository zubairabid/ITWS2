const assert = require('assert');
const _ = require('lodash');

describe('map', () => {

    /* Write a function called doubleValues which accepts an array and returns a new array with all the values in
     the array passed to the function doubled. */
    it('doubleValues', (done) => {

        function doubleValues(arr) {
            return arr.map(v => v * 2);
        }

        assert(_.isEqual(doubleValues([1, 2, 3]), [2, 4, 6]));
        assert(_.isEqual(doubleValues([1, -2, -3]), [2, -4, -6]));
        done();
    });

    /* Write a function called valTimesIndex which accepts an array and returns a new array with each value
     multiplied by the index it is currently at in the array. */
    it('valTimesIndex', (done) => {

        function valTimesIndex(arr) {
            return arr.map((v, i) => v * i);
        }

        assert(_.isEqual(valTimesIndex([1, 2, 3]), [0, 2, 6]));
        assert(_.isEqual(valTimesIndex([1, -2, -3]), [0, -2, -6]));
        done();
    });

    /* Write a function called extractKey which accepts an array of objects and some key and returns a new array
     with the value of that key in each object. */
    it('extractKey', (done) => {

        function extractKey(arr, key) {
            return arr.map(v => v[key]);
        }

        assert(_.isEqual(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'), ['Elie', 'Tim', 'Matt', 'Colt']));
        done();
    });

    /* Write a function called extractFullName which accepts an array of objects and returns a new array with the
     value of the key with a name of "first" and the value of a key with the name of  "last" in each object,
      concatenated together with a space. */
    it('extractFullName', (done) => {

        function extractFullName(arr) {
            return arr.map(v => `${v['first']} ${v['last']}`);
        }

        assert(_.isEqual(extractFullName([
            {
                first: 'Elie',
                last: "Schoppik"
            }, {
                first: 'Tim',
                last: "Garcia"
            }, {
                first: 'Matt',
                last: "Lane"
            }, {
                first: 'Colt',
                last: "Steele"
            }
        ]), ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']));
        done();
    });

});

describe('reduce', () => {

    /* Write a function called extractValue which accepts an array of objects and a key and returns a new array with
     the value of each object at the key. */
    it('extractValue', (done) => {

        function extractValue(arr, key) {
            return arr.reduce((a, v) => {
                a.push(v[key]);
                return a;
            }, []);
        }

        let arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
        assert(_.isEqual(extractValue(arr, 'name'), ['Elie', 'Tim', 'Matt', 'Colt']));
        done();
    });

    /* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel
     and the values as the number of times the vowel appears in the string. This function should be case insensitive
      so a lowercase letter and uppercase letter should count. */
    it('vowelCount', (done) => {

        function vowelCount(str) {
            return str.toLowerCase()
                .split('')
                .reduce((a, v) => {
                    if (a[v]) a[v]++; else if ('aeiou'.includes(v)) a[v] = 1;
                    return a;
                }, {});
        }

        assert(_.isEqual(vowelCount('Elie'), {e: 2, i: 1}));
        assert(_.isEqual(vowelCount('Tim'), {i: 1}));
        assert(_.isEqual(vowelCount('Matt'), {a: 1}));
        assert(_.isEqual(vowelCount('hmmm'), {}));
        assert(_.isEqual(vowelCount('I Am awesome and so are you'), {i: 1, a: 4, e: 3, o: 3, u: 1}));
        done();
    });

    /* Write a function called partition which accepts an array and a callback and returns an array with two arrays
     inside of it. The partition function should run the callback function on each value in the array and if the
      result of the callback function at that specific value is true, the value should be placed in the first
       subarray. If the result of the callback function at that specific value is false, the value should be placed
        in the second subarray. */
    it('partition', (done) => {

        function partition(arr, callback) {
            return arr.reduce((a, v) => {
                a[callback(v) ? 0 : 1].push(v);
                return a;
            }, [[], []]);
        }

        function isEven(val) {
            return val % 2 === 0;
        }

        let arr = [1, 2, 3, 4, 5, 6, 7, 8];

        assert(_.isEqual(partition(arr, isEven), [[2, 4, 6, 8], [1, 3, 5, 7]]));

        function isLongerThanThreeCharacters(val) {
            return val.length > 3;
        }

        let names = ['Elie', 'Colt', 'Tim', 'Matt'];
        assert(_.isEqual(partition(names, isLongerThanThreeCharacters), [['Elie', 'Colt', 'Matt'], ['Tim']]));
        done();
    });

});