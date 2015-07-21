/*
  ...........YOUR MISSION...........

  Write a function that returns a function so that the
  code at the bottom runs correctly.
*/

function add(arg1) {
  return function add2(arg2) {
    return arg1 + arg2;
  }
}

var add2 = add(2);
var added = add2(3);
console.log(added);  // This should output 5
