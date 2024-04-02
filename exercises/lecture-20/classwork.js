"use strict";

const contacts = {
    address: {
        icon: "fas fa-globe-europe",
        street: "1/2 New Street",
        city: "Kyiv",
        zip: "001 001",
        country: "Ukraine",
        info() {
            return `
            <li class="mb-2"><a href="/contacts.html"><i class="${this.icon}"></i><span>${this.zip}, ${this.street}, ${this.city}, ${this.country}</span></a></li>
            `
        }
    },
    callCenter: {
        icon: "fas fa-phone",
        phone: "+038 123 456 6789",
        info() {
            return `
            <li class="mb-2"><a href="tel:+${this.phone}"><i class="${this.icon}"></i><span>${this.phone}: This number is to all free if calling from ${contacts.address.country}, otherwise we advice you to use the electronic form of communication.</span></a></li>
            `
        }
    },
    support: {
        icon: "far fa-envelope",
        email: "info@gmail.com",
        info() {
            return `
            <li class="mb-2"><a href="maillto:+${this.email}"><i class="${this.icon}"></i><span>Please feel free to write on email to ${this.email}, or to use our electronic ticketing system.</span></a></li>
            `
        }
    }
};
console.dir(contacts);
console.log(contacts.address.info());
console.log(contacts.support.info());
console.log(contacts.callCenter.info());

console.dir(Object.keys(contacts));
console.dir(Object.values(contacts));
console.dir(Object.entries(contacts));


const product = {
    id: 1,
    name: "Air Pads",
    price: 11,
    description: "Product description",
    cover: "product-1.jpg",
    badge: {
        title: "Sale",
        color: "white",
        bg: "red",
    },
    stars: 4,
    category_id: 1,
    brand_id: 2,
};

function createProduct(id, name, price) {
    const obj = {};
    obj.id = id;
    obj.name = name;
    obj.price = price;
    return obj;
}
const product1 = createProduct(1, 'Product 1', 12);
const product2 = createProduct(2, 'Product 2', 22);

function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}
const product3 = new Product(3, 'Product 3', 31);
const product4 = new Product(4, 'Product 4', 41);

const currency = total => parseFloat(Math.round(total * 100 / 100)).toFixed(2);

function cartItem(item, tax = 0.07, shipping = 0) {
    this.item = item;
    this.tax = tax;
    this.shipping = shipping;
    this.total = function() {
        return currency((this.item.price * this.item.amount) * (1 + this.tax) + this.shipping);
    }
}
let productItem = {...product3, amount: 4};
let cart = new cartItem(productItem);
console.dir(cart);
console.log(cart.total());

// console.dir(document.body)
// console.dir(document.title)

// console.dir(document.body.childElementCount)
// console.dir(document.body.firstElementChild)
// console.dir(document.body.lastElementChild)

// console.dir(document.body.firstChild)
// console.dir(document.body.childNodes)
// console.dir(document.body.children)

// for (const child of document.body.children) {
//     console.dir(child)
// }

// section

// console.dir(document.getElementById('hero'))
// const hero = document.getElementById('hero')

// let h1 = hero.querySelector('h1');
// console.log(h1)

// h1 = hero.getElementsByTagName('h1')
// console.dir(h1)
// h1 = hero.getElementsByTagName('h1')
// console.log(h1[0])

// h1 = hero.getElementsByTagName('h1')
// console.log(h1[0].innerText)

// h1[0].innerText = "Hello h1"

// h1.innerText = "Hello element h1"

// h1.style.color = "white"
// h1.style.backgroundColor = "blue" // background-color

// float - cssFloat

// h1.style.cssText = "color:red; font: 600 2.5rem/1.7; padding: 1.5rem 2rem; text-align: center; background-color: gold;"

// hero.innerHTML = "<h1>Hero Section</h1>"

// document.body.innerHTML = "<h1>Hello world</h1>"

// h1.className = "test-css"

// h1.classList.add("test-css", "test-css2")
// // h1.classList.remove("test-css")
// h1.classList.toggle("test-css")
// h1.classList.toggle("test-css")

// let imgs = document.getElementsByClassName('image')
// console.log(imgs)
// console.log(imgs[0])

// let imgs1 = document.querySelectorAll('.image img')
// console.log(imgs1[0])

// imgs1[0].setAttribute('src', '/images/product-5.jpg')
// imgs1[3].setAttribute('src', '/images/product-4.jpg')
