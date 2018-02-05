/* The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its
 resulting value. */

function count3() {
    setTimeout(function () {
        console.log(1);
        setTimeout(function () {
            console.log(2);
            setTimeout(function () {
                console.log(3);
                console.log('count done');
            }, 1000);
        }, 1000);
    }, 1000);
}

count3();

function makePromise(i) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(i);
        }, 1000)
    })
}

function newCount3() {
    makePromise(1)
        .then((x) => {
            console.log(x);
            return makePromise(2);
        })
        .then((x) => {
            console.log(x);
            return makePromise(3);
        })
        .then((x) => {
            console.log(x);
            console.log('newCount3 done');
        })
}

newCount3();