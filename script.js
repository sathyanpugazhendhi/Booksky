//selection of popup items 
//Fist select "+" button then overlay and pop up window
var overlay = document.querySelector(".overLay")
var popupwindow = document.querySelector(".pop-up-window")
var plusbutton = document.getElementById("add-popup-button")

plusbutton.addEventListener("click",function(){
    overlay.style.display = "block"
    popupwindow.style.display = "block"
    
})


//selecting cancel button
var cancellingpopup = document.getElementById("Cancel-popup")
cancellingpopup.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display = "none"
    popupwindow.style.display = "none"
})

//selecting ADD-popup,bookTitle
// bookAuthor
// bookDescription
// Add-popup
var container1 = document.querySelector(".bookSection")
var addpop2 = document.getElementById("Add-popup-one")
var booktitle1 = document.getElementById("bookTitle")
var bookauthor2 = document.getElementById("bookAuthor")
var bookdescription3 = document.getElementById("bookDescription")

addpop2.addEventListener("click",function(event){
event.preventDefault()
    var div1 = document.createElement("div")
    div1.setAttribute("class","bookSection-section")
    div1.innerHTML = `<h2>${booktitle1.value}</h2>
                     <h3>${bookauthor2.value}</h3>
                     <p>${bookdescription3.value}</p>
                     <button onclick="deleting(event)">Delete</button>`
    container1.append(div1)
    
    overlay.style.display = "none"
    popupwindow.style.display = "none"
})

function deleting(event){
    event.target.parentElement.remove()

}
