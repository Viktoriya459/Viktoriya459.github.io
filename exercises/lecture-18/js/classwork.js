console.log(typeof(function(){}));
let message = hello('World'); // hoisting
console.log(message);

// let test = "I'm test";
var test = "I'm test"; // hoisting

function hello(name, test, me="me") {
    let msg = name ? null : "Enter names value";  
    if (msg) console.log(msg);
    // body function
    // local scope
   // console.log("Hello " + name + " and " + me);
    //return "Bla bla bla";
    // test = test || "I'm test";
    // if (test === undefined) {
    //     test = "Bla bla bla";
    // }
     test = test ?? "I'm test";
    return "Hello " + name + " and " + me + " " + test
}
hello();
message = hello('World', "Cats");
console.log(message);

function calc(o, x, y) {
    switch (o) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        default: return;
    }
}

let res = calc('.', 555, 555);
console.log(res);


let hi = function(msg = "Hello function") {
    console.log(msg)
}

hi(); // function
hi("Hello dogs");

// callback
function greeting(name) {
    console.log("Hello " + name);
}

function hell(cb) {
    const name = prompt('Enter Your name: ');
    cb(name);
}

// hell(greeting);

const hiYou = name => "hello " + name;
console.log(hiYou('Cat'));

const meToo = () => console.log("Hello me");
meToo();

const plus = (x, y) => console.log(x + y);
plus(55, 77);


(function(msg) {
    console.log(msg);
})("Hello IIFE");

function greet(msg, name) {
    console.log(msg + name);
}

greet("Hello ", 'Tom');
greet("Hi ", 'Tom');
greet("Hello ", 'There');

function open() {
    console.log("It's open");
}
function close() {
    console.log("It's close");
}
let sign = true;
sign ? open() : close();

// recursion

function recursive(n) {
    if (n === 0) {
        console.log("Task completed!");
        return;
    }
    console.log("Tast doin something!");
    recursive(n - 1);
}

recursive(3);