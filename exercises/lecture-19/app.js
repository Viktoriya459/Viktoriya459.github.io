// ex. 1 Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
let result = str1 === str2;
let result1 = str1 == str2;
console.log(result);
console.log(result1)

// ex. 2 Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.

let string5 = 'Hello World';
console.log(string5.charAt(0));
let str = string5[0];
console.log(str);

// ex. 3 повернути символ J рядка str3:

let str3 = "Hello Javascript";
console.log(str3[6]); 

// ex. 4 Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
console.log(str3.slice(-1));
console.log(str3.charAt(str3.length - 1));
// ex. 5 Напишіть три варіанти функції lastChar, що повертає останній символ рядка
function lastChar(str3) {
    console.log(str3.slice(-1));
    console.log(str3.charAt(str3.length - 1));
    console.log(str3.substring(str3.length - 1));
}
lastChar(str3)
// ex. 6 Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey

{let a = 'When candles are out,';
let b = 'all cats are grey.';
console.log(a.concat('' + b));
}

// ex. 7 Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15

let fact = "Fifteen is the same as"
let a = 5;
let b = 10;
console.log(fact + " " + (a + b));

// ex. 8 Напишіть функцію getFullName, що повертає результат: "Tom Cat"

let firstName = "Tom";
let lastName = "Cat";
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName(firstName, lastName));

// ex.9 Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!
function greeting(firstName, lastName) {
    return 'Hello, ' + getFullName(firstName, lastName) + '!';
}
console.log(greeting(firstName, lastName));
// ex.10 Використовуючи функцію greeting, створити такий шаблон:

/* <div><h1>Hello, Tom Cat!</h1></div> */
let template = `
<div><h1>${greeting(firstName, lastName)}</h1></div>`;
console.log(template);
// ex.11 Маємо наступний код:
// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"

let string1 = "  The name of our game  ";
console.log(string1.trim());
console.log(string1.trimStart());
console.log(string1.trimEnd());

// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'

const phoneNumber = '\t  555-123\n ';
console.log(phoneNumber.trim());
const phoneNumber1 = '\t  555-123 \\n ';
console.log(phoneNumber1.trim());

// ex.12 Перевірити, чи містить рядок значення 'look up'
// Перевірити, чи містить рядок значення 'look on'
// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції

let sentence = 'Always look on the bright side of life';
console.log(sentence.includes('look up'));
console.log(sentence.includes('look on'));
console.log(sentence.includes('look on', 8));

// ex.13 Знайти індекс символу 'l'
// Знайти індекс символу 'l', починаючи з 3-ї позиції
// Знайти індекс символу 'L'

let sentence1 = 'Always look on the bright side of life';
console.log(sentence1.indexOf('l'));
console.log(sentence1.indexOf('l', 3));
console.log(sentence1.indexOf('L'));

// ex.14 Отримати підрядок 'look on the bright side of life'
// Отримати підрядок 'Always'
// Отримати підрядок 'look'

let sentence2 = 'Always look on the bright side of life';
console.log(sentence2.length);
console.log(sentence2.substring(7, 38));
console.log(sentence2.substring(0,6));
console.log(sentence2.substring(7, 11));

// ex.15 Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, 
// літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.


function validate(name) {
    const pattern = /^[a-z0-9_-]{8,16}$/;
    let matched = name.match(pattern);
    if (pattern.test(name)) {
        console.log("Name is correct",matched);
        return true;
    } else {
        console.log("Name in not correct",matched);
        return false;
    }
}
validate('vikyllka');

// ex.16 Створити регулярний вираз, який призначений для перевірки email на коректність.


function validate1(email) {
    const pattern1 = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/
    let matched = email.match(pattern1);
    if (pattern1.test(email)) {
        console.log("Email is correct",matched);
        return true;
    } else {
        console.log("Email in not correct",matched);
        return false;
    }
}
validate1('example@gmail.com');

// ex.17 Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr

let sentence3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

function truncateText(sentence3) {
    return sentence3.substring(0, 50);
}
console.log(truncateText(sentence3));

function truncateText(sentence3) {
    return sentence3.substr(0, 50);
}
console.log(truncateText(sentence3));