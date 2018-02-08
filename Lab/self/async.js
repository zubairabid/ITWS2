var x = 4;
function change(func) {
  setTimeout(func, 2000); 
}
var f = function() {
  x = x + 12;
  console.log("x is now " + x);
}
change(f);
x = x+3;
console.log("x is "+x);