// Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. 
// Вивести значення властивостей об'єкту на консоль
const person = {
    name: "John",
    age: 25     
};
console.log("Name:", person.name);
console.log("Age:", person.age);
// Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
person.name = {
    firstName: "John",
    lastName: "Doe"
};

console.log("First Name:", person.name.firstName);
console.log("Last Name:", person.name.lastName);
// Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.
const person = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 25,
    bio: function() {
        console.log("First Name:", this.name.firstName);
        console.log("Last Name:", this.name.lastName);
        console.log("Age:", this.age);
    }
};

person.bio();
// Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
const person = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 25,
    introduceSelf: function() {
        console.log("Hi! I'm " + this.name.firstName);
    }
};

person.introduceSelf();
// Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта.

function createPerson(name) {
    return {
        name: name,
        introduceSelf: function() {
            console.log("Hi! I'm " + this.name);
        }
    };
}

const person1 = createPerson("John");
person1.introduceSelf();

const person2 = createPerson("Alice");
person2.introduceSelf();

// Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.

function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
        console.log("Hi! I'm " + this.name);
    };
}

const mary = new Person("Mary");
mary.introduceSelf();

const tom = new Person("Tom");
tom.introduceSelf();

// визначити, чи містить об'єкт mary властивість під назвою prop.
if ('prop' in mary) {
    console.log('Об\'єкт mary містить властивість prop.');
} else {
    console.log('Об\'єкт mary не містить властивості prop.');
}
// Брудний мартіні – ідеальний коктейль для любителів оливкового. Його можна приготувати на горілці чи джині за таким рецептом.
//     ingredients:
//         6 fluid ounces gin
//         1 dash dry vermouth
//         1 fluid ounce brine from olive jar
//         4 stuffed green olives
// fluid ounces - одиниця ваги avoirdupois - одна шістнадцята фунта (28.4131 грамів). Офіційно dash становить приблизно 1 мл, 10 крапель або 1/5 чайної ложки.

// Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() При виклику методу excuse_my_french(), на консоль виводиться:

//       ingrédients:  
//         170.4786 ml de gin
//         1 trait de vermouth sec (0.0351951ml) 
//         28.4131 ml de saumure du pot d'olive
//         4 olives vertes farcies

// При виклику методу english_please(), на консоль виводиться:

//       ingredients:
//         6 fluid ounces gin
//         1 dash dry vermouth (0.0351951ml) 
//         1 fluid ounce brine from olive jar
//         4 stuffed green olives

const DirtyMartini = {
    english_please: function() {
        console.log("ingredients:");
        console.log("6 fluid ounces gin");
        console.log("1 dash dry vermouth (0.0351951ml)");
        console.log("1 fluid ounce brine from olive jar");
        console.log("4 stuffed green olives");
    },
    excuse_my_french: function() {
        console.log("ingrédients:");
        console.log("170.4786 ml de gin");
        console.log("1 trait de vermouth sec (0.0351951ml)");
        console.log("28.4131 ml de saumure du pot d'olive");
        console.log("4 olives vertes farcies");
    }
};

DirtyMartini.english_please();
DirtyMartini.excuse_my_french();
