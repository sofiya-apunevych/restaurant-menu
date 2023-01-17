!!write some code with  -- data-"name" = menuArray.id (0for of ; forEach)

import {menuArray} from "./data.js"

console.log(menuArray[0].name)
let count = 0
 let increment-btn-${arr.id} = document.getElementById("")

function increment(num){
   
    let targetMeal = menuArray.filter(meal => meal.id ===num)[0]
    targetMeal.
}

function getbodyMenu(){

let bodyMenu = ''
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
            <button id="increment-btn-${arr.id}" onclick="increment(num)">+</button>
        </div>
</div>
`
})
return bodyMenu
}

function render(){
    let bodyMenu = document.getElementById("body-menu").innerHTML = getbodyMenu()
}

render()