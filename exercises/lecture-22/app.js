
// 1. Отримати всі елементи з тегом h1. Вивести на консоль тип отриманого об'єкту та його розмір. 
// Використовуючи цикл for, вивести на консоль кожний елемент з отриманого об'єкту.
h1 = document.getElementsByTagName('h1')
console.log(h1);
console.log(typeof h1);
console.log(h1.length);
for (i = 0; i < h1.length; i++) {
    console.log(h1[i]);
    }
// 2. Отримати перший абзац за допомогою document.querySelector('#id') за його ідентифікатором p1. 
// Встановити для нього стиль background-color = "gold"
let p1 = document.querySelector('#p1');
console.log(p1);
p1.style.backgroundColor = "gold";
// 3. Отримати другий абзац за допомогою document.querySelector('#id') за його ідентифікатором p2. 
// Встановити для нього стилі background-color:gold; color: blue; font-size: 2rem;
let p2 = document.querySelector('#p2');
console.log(p2);
p2.style.cssText = "background-color:gold; color: blue; font-size: 2rem;"
// 4. Отримати третій абзац за допомогою document.querySelector('#id') за його ідентифікатором p3. Призначити для нього клас third
let p3 = document.querySelector('#p3');
console.log(p3);
p3.classList.add('third');
// 5. Отримати четвертий абзац за допомогою document.querySelector('#id') за його ідентифікатором p4. 
// Призначити для нього класи fourth та border
let p4 = document.querySelector('#p4');
console.log(p4);
p4.classList.add('fourth', 'border');
// 6. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль перший елемент для кожного зі знайдених елементів.
let containers = document.querySelectorAll('.container');

for (let i = 0; i < containers.length; i++) {
    console.log(containers[i].firstElementChild);
}
// 7. Знайти всі елементи з класом container. Використовуючи цикл for, вивести на консоль вміст першого елементу для кожного першого елемента 
// зі знайдених елементів.
let containers1 = document.querySelectorAll('.container');
for (let i = 0; i < containers.length; i++) {
    console.log(containers[i].firstElementChild.textContent);
}

// 8. Знайти колекцію всіх елементів з селектором '.container header', зберегти її в змінній headers. 
// Використовуючи цикл for для отриманої колекції headers, замінити заголовки h1 таким чином
// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4 зберегти початкові атрибути id та class
// Використовуючи цикл for для колекції headers та масив classes, додати до отриманих тегів-заголовків класи таким чином
// до h1 додати клас first
// до h2 додати клас second
// до h3 додати клас third
// до h4 додати клас fourth
let headers = document.querySelectorAll('.container header');
const classes = ['first', 'second', 'third', 'fourth'];
console.log(headers)
for (let i = 0; i < headers.length; i++) {
    let header = headers[i];
    let title = header.querySelector('.title');
    switch (i) {
        case 0:
            title.classList.add(classes[i]);
            break;
        case 1:
            title.outerHTML = "<h2 class='title " + classes[i] + "' id='" + title.id + "'>" + title.innerHTML + "</h2>";
            break;
        case 2:
            title.outerHTML = "<h3 class='title " + classes[i] + "' id='" + title.id + "'>" + title.innerHTML + "</h3>";
            break;
        case 3:
            title.outerHTML = "<h4 class='title " + classes[i] + "' id='" + title.id + "'>" + title.innerHTML + "</h4>";
            break;
        default:
            break;
    }
}


