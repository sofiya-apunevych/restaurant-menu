

import {menuArray} from "./data.js"

//console.log(menuArray[0].name)
//let count = 0
 
document.addEventListener("click", function(e){
    if(e.target.dataset.increment){
     increment(e.target.dataset.increment)   
    }})

function increment(num){
    document.getElementById(`order-box-${num}`).classList.toggle("hidden")
    
    
/*    let incrementBtn= document.getElementById(`increment-btn-${num}`)
   let targetMeal = menuArray.filter(meal => meal.id === num)[0]
console.log(`I am ${meal.id}`) */
console.log(num)
}

function getbodyMenu(){

let bodyMenu = ''
let orderList = ''
menuArray.forEach(function(arr){
    
bodyMenu += `
<div class = "set">
       <div  class="emoji-box">
            <p> <span class="emoji">${arr.emoji}</span></p>
        </div>
        
        <div>
            <p class= "name">${arr.name}</p>
            <p class="ingredients">${arr.ingredients}</p>
            <p class="price">${arr.price}</p>
            
        </div>
        
        <div class="button">
            <button id="increment-btn-${arr.id}" data-increment="${arr.id}">+</button>
        </div>
</div>
`
orderList +=`
        <div id ="order-box-${arr.id}" class="order-box hidden">
        <p id = "order-list">Your order ${arr.id}</p>   
        </div>
 
`
})
return [bodyMenu, orderList]
}

function render(){
    let bodyMenu = document.getElementById("body-menu").innerHTML = getbodyMenu()
}

render()