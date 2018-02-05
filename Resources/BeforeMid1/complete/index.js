var add = (x, y) => x+y;
//console.log(add(1, 2));

var arr = [1, 2, 3, 4];
/*console.log(arr.reduce(function (acc, val) {
    return acc + val;
}, 0));*/

var myReduce = function (arr, func, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i]);
    }
    return acc;
};
//console.log(myReduce(arr, add, 0));

let y = 1;

if (true){
    let y = 2;
    console.log(y);
}

console.log(y);