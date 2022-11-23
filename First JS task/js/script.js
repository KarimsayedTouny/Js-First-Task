//in puts ------------------------------------------------------
var allProducts = document.querySelectorAll(".card")
var btn = document.querySelector("#calc")
//out puts ------------------------------------------------------
var content = document.querySelector("#content")
var totalPrice = 0;



allProducts.forEach( function (item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += item.textContent + "|||"
    }
})

btn.onclick = function (){
    console.log(totalPrice);
    document.querySelector("#price1").innerHTML = (totalPrice)
}
