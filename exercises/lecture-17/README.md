# Домашні вправи до лекції 17

Exercises for lecture №17 - Розгалуження. логічний тип.
В середині exercises створіть піддиректорію lecture-17. В середині lecture-17 створіть файл index.html.
Визначити результат наступних логічних виразів:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	
</head>
<body>
   
  <script>

  let x = 3
  let y = 4

  x == 3
  x === "3"
  x!=5
  x!== "5"
  X!== 3
  y > 5
  y >= 3
  y < 5
  y <= 2
  1 == true
  null == undefined
  NaN == NaN

  </script>

</body>
</html>
Визначити результат наступних логічних виразів:
let x = 3;
let y = 4;
let z = 5;

x ||= y;
x || (y = z);
x &&= y;
x && (y = z);
x ??= y;
x ?? (y = z);
Напишіть програму, що пропонує користувачеві вгадати якесь число, наприклад 3. У разі успіху, потрібно вивести вітання користувачеві, наприклад - 'Congratulations, You did it!' Якщо число більше за 3, потрібно вивести повідомлення користувачеві, наприклад - 'The number is too long' Якщо число менше за 3, потрібно вивести повідомлення користувачеві, наприклад - 'The number is short'

Напишіть програму, що пропонує користувачеві ввести назву дня тижня, наприклад - Понеділок. Якщо користувач ввів Понеділок або Monday, вивести повідомлення "Start of the work week!" Якщо користувач ввів П'ятниця або Friday, вивести повідомлення "End of the work week!" В інших випадках вивести повідомлення "A regular day"

Напишіть версію програми, застосовуючи оператор if else

Напишіть версію програми, застосовуючи оператор switch

5.За результатами іспиту студент набирає певну кількість балів, що зберігається в змінній score. Напишіть програму, що аналізує значення score та призначає студенту ступінь grade за таким алгоритмом:

Якщо студент набрав менше 50 балів, призначити йому ступінь 'F'
Якщо студент набрав менше 70 балів, призначити йому ступінь 'D'
Якщо студент набрав менше 80 балів, призначити йому ступінь 'C'
Якщо студент набрав менше 90 балів, призначити йому ступінь 'B'
В іншому випадку призначити йому ступінь 'A'
Напишіть версію програми, застосовуючи оператор if else

Напишіть версію програми, застосовуючи тернарний оператор

Виправити помилку у наступному коді:

let firstName = null;
let lastName = undefined;
let username = firstName || lastName ?? "Guest";

console.log(username); // "Guest"