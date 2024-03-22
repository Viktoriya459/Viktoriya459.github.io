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


"use strict";

function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

const currency = total => parseFloat(Math.round(total * 100) / 100).toFixed(2); 

function Cart(tax = 0.07, shipping = 0) {
   
    this.tax = tax;
    this.shipping = shipping;


    let cart = [];

    this.saveCart = function() {
        console.log(cart);
    }

    function Item (id, price, amount) {
        this.id = id;
        this.price = price;
        this.amount = amount;
    }
    
    this.addItemToCart = function(product) {

        for (let item in cart) {
            if(cart[item].id === product.id) {
                cart[item].amount += product.amount;
                this.saveCart();
                return;
            }
        }

        let item = new Item(product.id, product.price, product.amount);
        cart.push(item);
        this.saveCart();
    }

    this.setCountForItem = function(id, amount) {
        for (let i in cart) {
            if(cart[i].id === id) {
                cart[i].amount = amount;
            }
        }
    }

    this.totalAmount = function() {
        let total = 0;
        for (let item in cart) {
            total += cart[item].amount;
        }
        return total;
    }

    this.totalInCart = function() {
        let total = 0;
        for (let item in cart) {
            total += cart[item].price * cart[item].amount;
        }
        return currency(total*(1 + this.tax) + this.shipping);
    }

    this.removeItemFromCart = function(id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart[item].amount--;
                if (cart[item].amount === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        this.saveCart();
    }

    this.removeAllItemFromCart = function(id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart.splice(item, 1);
                break;
            }
        }
        this.saveCart();
    }

    this.clearCart = function() {
        cart = [];
        this.saveCart();
    }

}

const productContainer = document.querySelector('.product-container');

// let addToCart = productContainer.querySelector('.add-to-cart');
// let showDetail = productContainer.querySelector('.show-detail');
// // console.dir(addToCart)
// addToCart.addEventListener('click', () => {
//     console.dir(addToCart)
// })
// const dialog = document.getElementById('detail');
// showDetail.addEventListener('click', () => {
//     // console.dir(showDetail)
//     dialog.showModal();
// })

// dialog.querySelector('.close').addEventListener('click', () => {
//     dialog.close();
// })

let shoppingCart = new Cart();

function CardProduct(item) {
    this.item = item;

    let addToCart = this.item.querySelector('.add-to-cart');
    addToCart.addEventListener('click', function(event) {
        // console.log(event.target)

        let parent = event.target.closest('.product');

        let price = parent.querySelector('.product-price').innerText
        let name = parent.querySelector('.product-name').innerText
        let id = parent.querySelector('.content').getAttribute('id');
        console.log(id, price, name)

        let product = new Product(id, name, price)
        product = {...product, amount: 1}

        console.log(product)
        shoppingCart.addItemToCart(product);

        console.log(shoppingCart.totalAmount())
        console.log(shoppingCart.totalInCart())

    });

}
let productCards = productContainer.querySelectorAll('.product');
for (const item of productCards) {
    new CardProduct(item);
}

// let addToCartButtons = productContainer.querySelectorAll('.add-to-cart');

// for (const item of addToCartButtons) {
//     item.addEventListener('click', () => {
//         console.log(item)
//     })
// }

function main() {

}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        main();
    })
} else {
    main();
}