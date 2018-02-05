const assert = require('assert');
const _ = require('lodash');

describe('closures', () => {

    /* Write a function called specialMultiply which accepts two parameters. If the function is passed both
     parameters, it should return the product of the two. If the function is only passed one parameter - it should
      return a function which can later be passed another parameter to return the product. You will have to use
       closure and arguments to solve this. */
    xit('specialMultiply', (done) => {

        function specialMultiply(a, b) {
        }

        assert(specialMultiply(3, 4) === 12);
        assert(specialMultiply(3)(4) === 12);
        assert(_.isFunction(specialMultiply(3)));
        done();
    });

    /* Write a function called guessingGame which takes in one parameter amount. The function should return another
    function that takes in a parameter called guess. In the outer function, you should create a variable called
    answer which is the result of a random number between 0 and 10 as well as a variable called guesses which
    should be set to 0.

    In the inner function, if the guess passed in is the same as the random number (defined in the outer
    function) - you should return the string "You got it!". If the guess is too high return "You're too
    high!" and if it is too low, return "You're too low!". You should stop the user from guessing if the
    amount of guesses they have made is greater than the initial amount passed to the outer function.

    You will have to make use of closure to solve this problem.

    Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You're all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You're all done playing!" */
    xit('guessingGame', (done) => {

        const won = 'You got it!';
        const low = 'You\'re too low!';
        const high = 'You\'re too high!';
        const lost = 'No more guesses the answer was';
        const end = 'You\'re all done playing!';

        function guessingGame(amount) {
        }

        const guesses = [];
        for (let i = 0; i < 500; i++) guesses.push(_.random(0, 10));
        for (let x of guesses) {
            let game = guessingGame(x);
            let flag = 0;
            for (let i = 0; i <= x; i++) {
                let response = game(_.random(0, 10));
                if (flag === 0 && response === won) flag = 1;
                else if (flag === 1) assert(response === end);
                else if (flag === 0 && i === x - 1) {
                    flag = 1;
                    assert(response.includes(lost));
                } else assert(response === high || response === low);
            }
        }
        done();
    });

});