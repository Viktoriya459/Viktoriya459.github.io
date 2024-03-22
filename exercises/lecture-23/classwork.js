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

// const product3 = new Product(3, 'Product 3 name', 31);
// const product4 = new Product(4, 'Product 4 name', 21);

// let shoppingCart = new Cart();

// let productItem = {...product3, amount: 4};

// shoppingCart.addItemToCart(productItem);
// productItem = {...product4, amount: 2};
// shoppingCart.addItemToCart(productItem);

// productItem = {...product4, amount: 1};
// shoppingCart.addItemToCart(productItem);

// console.log(shoppingCart.totalAmount())
// console.log(shoppingCart.totalInCart())
// shoppingCart.removeItemFromCart(3);
// shoppingCart.removeItemFromCart(3);

// shoppingCart.removeAllItemFromCart(4);

// shoppingCart.clearCart();
const productContainer = document.querySelector('.product-container');
let addToCart = productContainer.querySelector('.add-to-cart');
// console.dir(addToCart)
addToCart.addEventListener('click', () => {
    console.dir(addToCart)
});
function main() {
    
}
if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        main();
    })
} else {
    main();
}