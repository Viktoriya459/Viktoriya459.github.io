const alert = document.querySelector('.alert');


// 1. Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick. 
// Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення 
// властивості textContent цього елемента на "A simple primary alert—check it out!".

let btn = document.querySelector('.btn-primary');
btn.addEventListener('onclick', () => {
    
    alert.classList.add('alert-primary');
    alert.textContent = "A simple primary alert—check it out!";
});


// 2. Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click". 
// Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення 
// властивості textContent цього елемента на "A simple secondary alert—check it out!"

let btn1 = document.querySelector('.btn-secondary');
btn1.addEventListener('click', () => {
    alert.classList.add('alert-primary');
    alert.textContent = "A simple secondary alert—check it out!";
})

// 3. Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover". 
// Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з id = alert та змінює 
// значення властивості textContent цього елемента на "A simple success alert—check it out!"
// Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout, що видаляє CSS-клас 
// alert-success з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.

let btn2 = document.querySelector('.btn-success');
btn2.addEventListener('mouseover', () => {
    alert.classList.add('alert-success');
    alert.textContent = "A simple success alert—check it out!";   
})
btn2.addEventListener('mouseout', () => {
    alert.classList.remove('alert-success');
    alert.textContent = "";
});

// 4. Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus". Написати функцію 
// обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert та змінює значення властивості 
// textContent цього елемента на "A simple danger alert—check it out!" Додати до кнопки прослуховувач події "focusout". 
// Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert та змінює значення 
//властивості textContent цього елемента на пустий рядок.
let btn3 = document.querySelector('.btn-danger');
btn3.addEventListener('focus', () => {
    alert.classList.add('alert-danger');
    alert.textContent = "A simple danger alert—check it out!";   
})
btn3.addEventListener('focusout', () => {
    alert.classList.remove('alert-danger');
    alert.textContent = "";
});
// 5. Знайти на сторінці кнопки з класом btn-dark та btn-light. Написати функцію toggleMode, що перемикає клас «dark-mode» 
// елемента document.body за допомогою методу classList.toggle(). Одночасно при перемиканні класу dark-mode потрібно 
// приховувати або показувати відповідну кнопку. Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати 
// кнопку dark-mode, і навпаки, якщо вимкнено режим dark-mode, показати кнопку btn-dark та сховати кнопку btn-light
function toggleMode() {
    let btnDark = document.querySelector('.btn-dark');
    let btnLight = document.querySelector('.btn-light');

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {

        btnDark.style.display = 'none';
        btnLight.style.display = 'inline-block';
    } else {

        btnDark.style.display = 'inline-block';
        btnLight.style.display = 'none';
    }
}
document.querySelector('.btn-dark').addEventListener('click', toggleMode);
document.querySelector('.btn-light').addEventListener('click', toggleMode);

// 6. Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". Написати функцію 
// обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter". Якщо це так, типову дію події 
// потрібно скасовувати за допомогою методу event.preventDefault(). Після скасування дії за замовчуванням, додати 
// CSS-клас alert-info до елемента з id = alert та змінити значення властивості textContent цього елемента на 
// "A simple info alert—check it out!";
let btnInfo = document.querySelector('.btn-info');

btnInfo.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        alert.classList.add('alert-info');

        alert.textContent = "A simple info alert—check it out!";
    }
});
// 7. Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом 
// .card-title

let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    let cardTitle = cards[i].querySelector('.card-title');
    if (cardTitle) {
        console.log(cardTitle.textContent);
    }
}

// 8. Знайти на сторінці всі селектори .card. Використовуючи цмкл for, знайти для кожного елемента .card кнопку з класом 
// .add-to-cart, додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст 
// кожного елемента з класом .card-title
{
let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    let addToCartButton = cards[i].querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        let title = cards[i].querySelector('.card-title').textContent;
        console.log(title);
        });
    }
}