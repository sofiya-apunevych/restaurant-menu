import { menuArray } from "./data.js"

const captionAnchor = document.getElementById("caption-anchor")
const orderBoxAnchor = document.getElementById("order-box-anchor")
const orderTotalPriceAnchor = document.getElementById("order-total-price-anchor")
const completeOrder = document.getElementById("complete-order")
const bodyMenuAnchor = document.getElementById("body-menu-anchor")

let purchaseSet = []

document.addEventListener("click", function (e) {
    if (e.target.dataset.increment) {
        openOrderList(e.target.dataset.increment)
    }
    else if (e.target.dataset.removed) {
        removedItemFromList(e.target.dataset.removed)
    }
})

function getbodyMenu() {
    let bodyMenu = ''

    menuArray.forEach(function (item) {
        bodyMenu += `
       <div id="set" class = "set">
        <div  class="emoji-box">
            <p> <span class="emoji">${item.emoji}</span></p>
        </div>
        
        <div>
            <p class= "name">${item.name}</p>
            <p class="ingredients">${item.ingredients}</p>
            <p id = "price-item" class="price">$${item.price}</p>
            
        </div>
        
        <div class="button">
            <button class="increment-btn" id="increment-btn" data-increment='${item.id}'>+</button>
        </div>
        </div>
        `
    })

    return bodyMenu
}

function openOrderList(number) {
    let purchaseObject = menuArray.filter(i =>
        i.id.toString() === number)[0]

    //console.log("number: ", number)
    captionAnchor.style.display = "block"
    orderTotalPriceAnchor.style.display = "block"

    purchaseSet.push(purchaseObject)
    completeOrder.style.display = "block"
    orderBoxAnchor.style.borderBottom = "1px solid rgb(139, 139, 139)";

    getTotalPrice()
    render()
}

function removedItemFromList(itemNumber) {
    //console.log("I am removed item", itemNumber)
    let removedItem = purchaseSet.filter(function (item) {
        return item.id.toString() === itemNumber
    })[0]
    purchaseSet.splice(purchaseSet.indexOf(removedItem), 1)
    document.getElementById("removed").parentElement.remove()

    if (purchaseSet.length === 0) {
        captionAnchor.style.display = "none"
        orderTotalPriceAnchor.style.display = "none"
        orderBoxAnchor.style.display = "none"
        completeOrder.style.display = "none"
        orderBoxAnchor.style.borderBottom = "none"
    }

    render()
}

function getCaption() {
    let caption = ""
    return caption += `
       <div>
        <p id="caption-render" class="caption-render" >Your order:</p>
        </div>
        `
}

function getOrderBox(purchaseSet) {
    // console.log("I am purchaseSet", JSON.stringify(purchaseSet))
    let order = ''
    purchaseSet.forEach(function (it) {
        order += `
        <div id = "order-box" class="order-box"> 
        <span>
         <span>${it.name}</span>
         <span id="removed" class="removed" data-removed="${it.id}" >remove</span>
         </span>
         <span class="price-end-of-string">$${it.price}</span>
        </div>
       `
    })
    orderBoxAnchor.style.display = "block"
    return order
}

function getTotalPrice() {
    let priceBox = ''
    let priceSum = 0
    purchaseSet.forEach(function (item) {
        priceSum += Number(item.price)
    })

    return priceBox += `
     <div>
     <p id="total-price" class="total-price">
     <span>Total price:</span>
     <span class="total-price-span">$${priceSum}</span>
     </p>
     </div> 
    `
}

function render() {
    bodyMenuAnchor.innerHTML = getbodyMenu()
    captionAnchor.innerHTML = getCaption()
    orderBoxAnchor.innerHTML = getOrderBox(purchaseSet)
    orderTotalPriceAnchor.innerHTML = getTotalPrice()
}

render()

const formBox = document.getElementById("form-box")
const thanksBox = document.getElementById("thanks-box")
const formBuy = document.getElementById("form-buy")
const popUpForm = document.getElementById("pop-up-form")
const shade = document.getElementById("shade")
const bodyArea = document.getElementById("body-area")
const mainBox = document.getElementById("main-box")

completeOrder.addEventListener("click", function (e) {
    document.getElementById("pop-up-form").style.display = "inline"
    bodyArea.style.backgroundImage = "radial-gradient(#FFFFFF,#D8D7D7)";
    document.getElementById("pop-up-form").style.backgroundColor = "#FFFFFF"
    formBuy.style.display = "inline"
})

formBuy.addEventListener("click", function (e) {
    completeOrder.style.display = "none"
    popUpForm.style.display = "none"
    bodyArea.style.backgroundImage = "#FFFFFF"
    captionAnchor.style.display = "none"
    orderBoxAnchor.style.display = "none"
    orderTotalPriceAnchor.style.display = "none"


    e.preventDefault()
    const fillingFormData = new FormData(formBox)
    const nameForm = fillingFormData.get("name")

    setTimeout(function () {

        mainBox.innerHTML += `
            <div>
            <p id="thanks"  class="thanks">Thanks, ${nameForm}! Your order is on its way </p> 
            </div>
            `
    }, 2000)
})





