import { menuArray } from "./data.js"

let bodyMenuAnchor = document.getElementById("body-menu-anchor")
let captionAnchor = document.getElementById("caption-anchor")
let orderBoxAnchor = document.getElementById("order-box-anchor")
let orderTotalPriceAnchor = document.getElementById("order-total-price-anchor")

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
       <div class = "set">
        <div  class="emoji-box">
            <p> <span class="emoji">${item.emoji}</span></p>
        </div>
        
        <div>
            <p class= "name">${item.name}</p>
            <p class="ingredients">${item.ingredients}</p>
            <p id = "price-item" class="price">${item.price}</p>
            
        </div>
        
        <div class="button">
            <button id="increment-btn" data-increment='${item.id}'>+</button>
        </div>
        </div>
        `
    })

    return bodyMenu
}

function openOrderList(number) {

    let purchaseObject = menuArray.filter(i =>
        i.id.toString() === number)[0]

    console.log("number: ", number)
    captionAnchor.style.display = "block"
    orderTotalPriceAnchor.style.display = "block"

    purchaseSet.push(purchaseObject)

    getTotalPrice()
    render()
}


function removedItemFromList(itemNumber) {
    console.log("I am removed item", itemNumber)
    let removedItem = purchaseSet.filter(function (item) {
        return item.id.toString() === itemNumber
    })[0]
    purchaseSet.splice(purchaseSet.indexOf(removedItem), 1)
    document.getElementById("removed").parentElement.remove()

    if (purchaseSet.length === 0) {
        captionAnchor.style.display = "none"
        orderTotalPriceAnchor.style.display = "none"
        orderBoxAnchor.style.display = "none"
    }

    render()
}

function getCaption() {
    let caption = ""
    return caption += `
       <div>
        <p id="caption-render" >Your order:</p>
        </div>
        `
}

function getOrderBox(purchaseSet) {
    console.log("I am purchaseSet", JSON.stringify(purchaseSet))
    let order = ''
    purchaseSet.forEach(function (it) {
        order += `
        <div id = "order-box"> 
         ${it.name}<span id="removed" data-removed="${it.id}" >remove</span>$${it.price}
        </div>
       `
    })
    orderBoxAnchor.style.display = "block"
    return order
}

function getTotalPrice() {
    let priceBox = ''
    let priceSum = 0
    //let sumItem = purchaseSet.price.flat().reduce((a,b) => a+b, 0)
    purchaseSet.forEach(function (item) {
        priceSum += Number(item.price)
    })

    return priceBox += `
    <div>
     <p id="total-price">Total price: $${priceSum}</p>
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

