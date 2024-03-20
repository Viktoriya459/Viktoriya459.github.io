// Маємо рядок fruits:

const fruits = 'apple banana cantaloupe blueberries grapefruit';
// Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
const fruitsArray = fruits.split(' ');
console.log(fruitsArray);
// Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
for (let i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);
}
// Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
let i = 0;
while (i < fruitsArray.length) {
    console.log(fruitsArray[i]);
    i++;
}
// Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
i = 0;
do {
    console.log(fruitsArray[i]);
    i++;
}while(i<fruitsArray.length);
// Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
for (const fruit of fruitsArray) {
    console.log(fruit);
}
// Маємо масив Numbs.

const Numbs = [1,2,3,4,5,6,7,8,9,10];
// Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}
// Маємо масив names:
const names = ['Batman'];
// Додати 'Joker' в кінець масиву names:
names.push('Joker')
console.log(names)

// Маємо масив names:
const names1 = ['Batman'];
// Додати 'Joker' на початок масиву names
names1.unshift('Joker')
console.log(names1)

// Маємо масив names:
names2 = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
names2.unshift('Catwoman')
console.log(names2)

// Маємо масив names:
names3 = ['Batman', 'Joker', 'Bane'];
// Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
names3 = ['Catwoman', ...names3];
console.log(names3);

// Маємо масив names
names4 = ['Batman', 'Joker', 'Bane'];
// Додати до names елемент 'Catwoman', розмістивши його з індексом 1
names4.splice(1, 0, 'Catwoman');
console.log(names4);

// Маємо масив names
const names5 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Видалити елементи 'Catwoman' і 'Joker' з масиву names:
names5.splice(1, 2)
console.log(names5)

// Маємо масив names:
const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names
const catwomanIndex = names6.indexOf('Catwoman');
if (catwomanIndex !== -1) {
    names6.splice(catwomanIndex, 2, 'Alfred');
}
console.log(names6);

// Маємо масив names:
const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.
if (!names7.includes('Alfred')) {
    names7.push('Alfred');
}
console.log(names7);

// Маємо масив names:
const names8 = ['Batman', 'Catwoman', 'Joker', 'Bane', 'Alfred'];
// Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.
for (let i = 0; i < names8.length; i++) {
    if (names8[i] === 'Alfred') {
        names8.splice(i, 1);
        i--;
    }
}
console.log(names8); 