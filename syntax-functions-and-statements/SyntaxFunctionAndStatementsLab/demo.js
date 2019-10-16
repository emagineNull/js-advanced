console.log(1 == '1');
console.log(1 === '1');

var val = "text";

console.log(typeof val);
console.log(0.1 + 0.2);

function printStars(count) {
    console.log("*".repeat(count));
}

var count = 4;

printStars(count);

function walk() {
    console.log("walking");
}

let walking = function() {
    console.log("walking");
}

walk();

walking();

function foo(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

foo(1, 2, 3);
foo(1, 2, 3, 4, 5, 6);

console.log("Hoisting");

console.log(num1); // Returns undefined
var num1;
num1 = 6;

num2 = 6;
console.log(num2); // returns 6
var num2;

function hypotenuse(m, n) {
    function square(num) {
        return num * num;
    }
    return Math.sqrt(square(m) + square(n));
}

console.log(hypotenuse(3, 4));
