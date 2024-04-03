// Є проста реєстраційна форма з полями для імені користувача, електронної пошти, пароля та кнопки «Надіслати». 
// Існує також контейнер div (errorMessages) для відображення повідомлень про помилки перевірки:
// Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта

// Перевірка форми: Потрібно отримати значення імені користувача, електронної пошти та пароля.

// Виконати базову перевірку:

// ім’я користувача не може бути пустим,
// електронна адреса має бути у правильному форматі,
// пароль має містити принаймні 8 символів
// пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.
// Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку. 
// Повідомлення про помилки відображаються в розділі errorMessages.

// Скидання форми: після успішної реєстрації, потрібно скинути значення полів форми

const form = document.getElementById("registrationForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const {username, email, password} = form.elements;
    const errorMessages = document.getElementById("errorMessages");

    errorMessages.innerHTML = "";

    // Перевірка імені користувача
    if (!username.value.trim()) {
        displayError("Ім’я користувача не може бути пустим");
        return;
    }

    // Перевірка електронної пошти
    if (!email.value.trim() || !isValidEmail(email.value)) {
        displayError("Невірний формат електронної адреси");
        return;
    }

    // Перевірка пароля
    if (!containsUpperCase(password) || !containsLowerCase(password) || !containsNumber(password) || !containsSpecialChar(password)) {
        displayError("Пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.");
        return;
    }
    form.submit();

});
form.addEventListener("submit", () => {
    form.reset();
});

function displayError(message) {
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = `<div>${message}</div>`;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function containsUpperCase(str) {
    return /[A-Z]/.test(str);
}

function containsLowerCase(str) {
    return /[a-z]/.test(str);
}

function containsNumber(str) {
    return /\d/.test(str);
}

function containsSpecialChar(str) {
    return /[^\w\s]/.test(str);
}
