"use strict";

const objDenis = { name: "denis" };
const objPaul = { name: "Paul" };

function foo(a, b) {
  console.log(this, a, b);
}

foo.call(objPaul, 5, 10);
foo.apply(objDenis, [5, "Testing"]);
