// The let statement declares a block scope local variable

// var example
function count1() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
count1();

// let example

function count2() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
count2();
