// Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. 
// Вивести значення властивостей об'єкту на консоль
const person = {
    name: "Viktoriya",
    age: 35     
};
console.log("Name:", person.name);
console.log("Age:", person.age);

// Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.
const person1 = {
    name: {
        firstName: "Viktoriya",
        lastName: "Cherednichenko"
    }
};
console.log("First Name:", person1.name.firstName);
console.log("Last Name:", person1.name.lastName);

// Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.
const person2 = {
    name: {
        firstName: "Viktoriya",
        lastName: "Cherednichenko"
    },
    age: 35,
    bio() {
        return `First Name: ${this.name.firstName}\nLast Name: ${this.name.lastName}\nAge: ${this.age}`;
    }

};
console.log(person2.bio());

// Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.
const person3 = {
    name: {
        firstName: "Viktoriya",
        lastName: "Cherednichenko"
    },
    age: 25,
    introduceSelf() {
        console.log("Hi! I'm " + this.name.firstName);
    }
};
person3.introduceSelf();

// Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта.

function createPerson(name) {
    return {
        name: name,
        introduceSelf() {
            console.log("Hi! I'm " + this.name);
        }
    };
}

const person4 = new createPerson("Michael");
person4.introduceSelf();

const person5 = new createPerson("Kate");
person5.introduceSelf();

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
console.log(Person.hasOwnProperty('prop'));
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
    english_please() {
        return `
            ingredients:
            6 fluid ounces gin
            1 dash dry vermouth (0.0351951ml) 
            1 fluid ounce brine from olive jar
            4 stuffed green olives
            `
    },
    excuse_my_french() {
        return `     
            ingrédients:  
            170.4786 ml de gin
            1 trait de vermouth sec (0.0351951ml) 
            28.4131 ml de saumure du pot d'olive
            4 olives vertes farcies
            `
    }
};
console.log(DirtyMartini.english_please());
console.log(DirtyMartini.excuse_my_french());
