const assert = require('assert');
const _ = require('lodash');

describe('rest', () => {

    /* Write a function called smallestValue which accepts a variable number of parameters and returns the smallest
     parameters passed to the function.*/
    xit('smallestValue', (done) => {

        function smallestValue() {
        }

        assert(smallestValue(4, 1, 12, 0) === 0);
        assert(smallestValue(5, 4, 1, 121) === 1);
        assert(smallestValue(4, 2) === 2);
        assert(smallestValue(99, 12321, 12.2) === 12.2);
        done();
    });

    /* Write a function called joinArrays which accepts a variable number of parameters (you can assume that each
     argument to this function will be an array) and returns an array of all of the parameters concatenated together. */
    xit('joinArrays', (done) => {

        function joinArrays() {
        }
        
        assert(_.isEqual(joinArrays([1], [2], [3]), [1, 2, 3]));
        assert(_.isEqual(joinArrays([1], [2], [3], [1], [2], [3]), [1, 2, 3, 1, 2, 3]));
        assert(_.isEqual(joinArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]));
        assert(_.isEqual(joinArrays([1], [3], [0], [7]), [1, 3, 0, 7]));
        done();
    });

    /* Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the
     sum of the even ones. */
    xit('sumEvenArgs', (done) => {

        function sumEvenArgs() {
        }

        assert(sumEvenArgs(1, 2, 3, 4) === 6);
        assert(sumEvenArgs(1, 2, 6) === 8);
        assert(sumEvenArgs(1, 2) === 2);
        done();
    });

    /* Write a function called flip which accepts a function and a value for the keyword this. Flip should return a
     new function that when invoked, will invoke the function passed to flip with the correct value of the keyword
      this and all of the parameters passed to the function REVERSED. HINT - if you pass more than two parameters to
       flip, those parameters should be included as parameters to the inner function when it is invoked. */
    xit('flip', (done) => {

        function flip() {
        }

        function personSubtract(a, b, c) {
            return this.firstName + " subtracts " + (a - b - c);
        }

        let person = {
            firstName: 'Elie'
        };

        let flipFn = flip(personSubtract, person);
        assert(flipFn(3, 2, 1) === "Elie subtracts -4");

        let flipFn2 = flip(personSubtract, person, 5, 6);
        assert(flipFn2(7, 8) === "Elie subtracts -4");

        function subtractFourNumbers(a,b,c,d){
            return a-b-c-d;
        }

        assert(flip(subtractFourNumbers, this, 1)(2, 3, 4) === -2);
        assert(flip(subtractFourNumbers, this, 1, 2)(3, 4) === -2);
        assert(flip(subtractFourNumbers, this, 1, 2, 3)(4) === -2);
        assert(flip(subtractFourNumbers, this, 1, 2, 3, 4)() === -2);
        assert(flip(subtractFourNumbers, this)(1, 2, 3, 4) === -2);
        assert(flip(subtractFourNumbers, this, 1, 2, 3)(4, 5, 6, 7) === -2);
        assert(flip(subtractFourNumbers, this)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) === -2);
        assert(flip(subtractFourNumbers, this, 11, 12, 13, 14, 15)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) === -22);
        done();
    });

});

describe('spread', () => {

    /* Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should
     return the first array with all of the values in the second array placed in the middle of the first array.*/
    xit('placeInMiddle', (done) => {

        function placeInMiddle(arr, vals) {
        }
        
        assert(_.isEqual(placeInMiddle([1, 2, 6, 7], [3, 4, 5]), [1, 2, 3, 4, 5, 6, 7]));
        assert(_.isEqual(placeInMiddle([1], [3, 4, 5]), [3, 4, 5, 1]));
        assert(_.isEqual(placeInMiddle([1, 6], [2, 3, 4, 5]), [1, 2, 3, 4, 5, 6]));
        assert(_.isEqual(placeInMiddle([], [2, 3, 4, 5]), [2, 3, 4, 5]));
        done();
    });

});

describe('rest & spread', () => {

    /* Write a function called bind which accepts a function and a value for the keyword this. Bind should return a
     new function that when invoked, will invoke the function passed to bind with the correct value of the keyword
      this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters
       to the inner function when it is invoked. */
    xit('bind', (done) => {

        function bind() {
        }

        function firstNameFavoriteColor(favoriteColor) {
            return this.firstName + "'s favorite color is " + favoriteColor;
        }

        let person = {
            firstName: 'Elie'
        };

        let bindFn = bind(firstNameFavoriteColor, person);
        assert(bindFn('green') === "Elie's favorite color is green");

        let bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
        assert(bindFn2('green') === "Elie's favorite color is blue");

        function addFourNumbers(a, b, c, d) {
            return a + b + c + d;
        }

        assert(bind(addFourNumbers, this, 1)(2, 3, 4) === 10);
        assert(bind(addFourNumbers, this, 1, 2)(3, 4) === 10);
        assert(bind(addFourNumbers, this, 1, 2, 3)(4) === 10);
        assert(bind(addFourNumbers, this, 1, 2, 3, 4)() === 10);
        assert(bind(addFourNumbers, this)(1, 2, 3, 4) === 10);
        assert(bind(addFourNumbers, this)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) === 10);
        done();
    });

});