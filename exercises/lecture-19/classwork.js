let quote = "It's a beautiful day";
// let str = 'He said, \"It\'s a beautiful day\"';
// let str = "He said, \"It's a beautiful day\"";
let str = `He said, "It's a beautiful day"`;
console.log(str);
console.log(str.length); // 31

console.log(str[10]); // 0 - n-1
console.log(str[0]); // H
console.log(str[str.length - 2]); // y

console.log(str.slice(-1)); // last symbol
console.log(str.charAt(str.length-3));

// concatenation

let test = "He said, ";
console.log(test + quote);
console.log(test.concat(quote));

let firstName = "James";
let lastName = "Bond";
function fullName(a, b) {
    return a + ' ' + b;
}
console.log(fullName(firstName, lastName));

let template = (
    "<div>" +
        "<h1> My name is " + fullName(firstName, lastName) + "</h1>" +
    "</div>"
)
console.log(template);

let template1 = `
<div><h1> My name is ${fullName(firstName, lastName)}</h1></div>`;
console.log(template1);

let template2 = (x, y) => `
<div><h1> My name is ${fullName(x, y)}</h1></div>`;
console.log(template2(firstName, lastName));

console.log(str.indexOf('H'));
console.log(str.indexOf('b'));
console.log(str.indexOf('i'));
console.log(str.toUpperCase());

let t1 = 'i'.toUpperCase();
console.log(str.indexOf(t1));

const chunk = 'password';
const password = '123&password!R';

console.log(password.includes(chunk));

// +044-123-456-7890
// const pattern = /^\+[0-9]{1}[0-9]{0, 2}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
function validate(number) {
    const pattern = /^\+[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    let matched = number.match(pattern);
    if (pattern.test(number)) {
        console.log("Phone number is valid",matched);
        return true;
    } else {
        console.log("phone number in not valid",matched);
        return false;
    }
}
validate('+123-456-789-1234');
validate('123-456-789-1234');
validate('+3-456-789-1234');

console.log(str.substring(5, 24));
console.log(str.substr(5, 24)); // deprecated

console.log("    test test        ".trim());

function isEmptyStr(str) {
    return (str ?? '') === '';
}
console.log("Is emty: ", isEmptyStr(""));
// ^['.ru|.su] всередині рядка  ^[xyz] /^[a-z]+[0-9]$/