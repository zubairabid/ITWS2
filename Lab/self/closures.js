function a(x, y) {
  function b(z, w) {
    console.log("x, y, z, w :", x, y, z, w);
  }
  return b;
}

inner = a(1,2);
inner(3,4);
console.log(a(3,4)(5,6));