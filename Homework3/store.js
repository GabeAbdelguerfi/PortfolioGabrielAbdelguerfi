var cartData = new Object();
var data = localStorage.getItem("cartData");
var newData = JSON.parse(data)
console.log(newData)
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    if(newData != null){
    if(newData.potatoe > 0){
       addItemToCart('Potatoes', '1.00', 'Images/Potatoe.jpg', newData.potatoe)
       updatetotal();
    }
    if(newData.tp > 0){
       addItemToCart('Toilet Papper', '14.99', 'Images/Papper.jpg', newData.tp)
       updatetotal();
    }

    if(newData.apple > 0){
       addItemToCart('Apple', '19.99', 'Images/Apple.jpg', newData.apple)
       updatetotal();
    }
    if(newData.banana > 0){
       addItemToCart('Banana', '.69', 'Images/Banana.jpg', newData.banana)
       updatetotal();
    }
    if(newData.chicken > 0){
       addItemToCart('Chicken Breast', '9.99', 'Images/Breast.png', newData.chicken)
       updatetotal();
    }
}
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
        }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove() //entire cart row which is the parent of the parent class
    updatetotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatetotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var price = shopItem.getElementsByClassName('item-price')[0].innerText
    var title = shopItem.getElementsByClassName('item-title')[0].innerText
    var image = shopItem.getElementsByClassName('item-image')[0].src
    addItemToCart(title, price, image)
    updatetotal()
}

function addItemToCart(title, price, image, quantity) {
    if(quantity == null){
        quantity = 1
    }
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item has already been added to the cart.')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${image}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value=${quantity}>
            <button class="btn button-remove" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('button-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updatetotal() {
    var cartItemContainer = document.getElementsByClassName('items')[0]
    var rows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0;
    var itemTitle = '';
    var condApple = false;
    var condBanana = false;
    var condTp = false;
    var condChicken = false;
    var condPotatoe = false;
    for (var i = 0; i < rows.length; i++) {
        var cartRow = rows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        itemTitle = cartRow.getElementsByClassName('cart-item-title')[0].innerText
        if(itemTitle == "Apple"){
            condApple = true;
            cartData.apple = quantity;
        }
        if(itemTitle == "Banana"){
            condBanana = true;
            cartData.banana = quantity;
        }
        if(itemTitle == "Toilet Papper"){
            condTp = true;
            cartData.tp = quantity;
        }
        if(itemTitle == "Chicken Breast"){
            condChicken = true;
            cartData.chicken = quantity;
        }if(itemTitle == "Potatoes"){
            condPotatoe = true;
            cartData.potatoe = quantity;
        }
        total = total + (price * quantity)
    }
    if(condApple == false){
        delete cartData.apple;
    }
    if(condBanana == false){
        delete cartData.banana;
    }
    if(condTp == false){
        delete cartData.tp;
    }
    if(condChicken == false){
        delete cartData.chicken;
    }
    if(condPotatoe == false){
        delete cartData.potatoe;
    }
    // var button = event.target
    // var shopItem = button.parentElement.parentElement;
    total = Math.round(total * 100) / 100

    cartData.totalPrice = total;
    var cartText = JSON.stringify(cartData);
    localStorage.setItem("cartData", cartText);
    localStorage.getItem("cartData");
    var cartPrice = document.getElementsByClassName('cart-total-price')[0], totalPrice
    cartPrice.innerHTML = total;
} 