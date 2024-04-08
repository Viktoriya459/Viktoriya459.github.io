
// 1. У файлі index.html є форма з 2-ма полями. Написати асинхронну функцію, що чекає 10 секунд, поки користувач заповнює 
// поля форми. Після чого функція читає значення полів форми, зберігає їх у змінних firstName і lastName та перевіряє 
// чи вони не пусті. Якщо обидва значення пусті, функція змінює контент h1 на I'm miss You. Якщо хоча б одне зі значень 
// заповнене, функція змінює контент h1 на Hello firstName lastName!
function waitForUserInput() {
    setTimeout(function() {
        const firstNameInput = document.querySelector('input[name="firstName"]');
        const lastNameInput = document.querySelector('input[name="lastName"]');

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        if (firstName === '' && lastName === '') {
            document.getElementById('waiting').textContent = "I'm miss You";
        } else {
            document.getElementById('waiting').textContent = `Hello ${firstName} ${lastName}!`;
        }
    }, 10000);
}

waitForUserInput();


// 2. Створити новий об'єкт xhr, як екземпляр XMLHttpRequest. Надіслати запит на веб-сервер https://jsonplaceholder.typicode.
// com/posts, використовуючи методи open() і send().

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
// Використовуючи подію xhr.onload, напишіть функцію зворотного виклику, що отримує результат запиту з сервера, за 
// допомогою JSON.parse перетворює результат на об'єкт, будує за допомогою шаблона template стрічку публікацій та 
// поміщає отриманий результат всередину елемента з id="demo".

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;
xhr.onload = function() {
  const response = JSON.parse(xhr.responseText);
  let postsHTML = '';
  response.forEach(post => {
    postsHTML += template(post);
  });
  document.getElementById('demo').innerHTML = postsHTML;
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
    