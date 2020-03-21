if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
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

function addItemToCart(title, price, image) {
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
            <input class="cart-quantity-input" type="number" value="1">
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
    for (var i = 0; i < rows.length; i++) {
        var cartRow = rows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        itemTitle = cartRow.getElementsByClassName('cart-item-title')[0].innerText
    }
    var button = event.target
    var shopItem = button.parentElement.parentElement
    if(itemTitle == "Apple"){
    localStorage.setItem("appleQuantity", quantity)
    var apples = localStorage.getItem("appleQuantity");
    }

    if(itemTitle == "Toilet Papper"){
        localStorage.setItem("toiletPapperQuantity", quantity)
        var toiletPapper = localStorage.getItem("toiletPapperQuantity");
    }

    if(itemTitle == "Toilet Papper"){
        localStorage.setItem("toiletPapperQuantity", quantity)
        var toiletPapper = localStorage.getItem("toiletPapperQuantity");
    }

    if(itemTitle == "Potatoes"){
        localStorage.setItem("potatoeQuantity", quantity)
        var potatoe = localStorage.getItem("potatoeQuantity");

    }

    if(itemTitle == "Chicken Breast"){
        localStorage.setItem("chickenQuantity", quantity)
        var chicken = localStorage.getItem("chickenQuantity");

    }

    total = Math.round(total * 100) / 100
    var cartPrice = document.getElementsByClassName('cart-total-price')[0], totalPrice
    localStorage.setItem("price", JSON.stringify(total))
    var totalPrice = localStorage.getItem("price");
    cartPrice.innerHTML = totalPrice
} 