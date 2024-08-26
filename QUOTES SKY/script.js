//selecting popup-box , popup-overly ,  button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbtnn = document.getElementById("add-popup-button")

addpopupbtnn.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})


//select cancel button

var cancelpopup = document.getElementById("cancel-book")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

//select container = add-book,book-title-input,book-author-input,book-des-input

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdesinput = document.getElementById("book-des-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdesinput.value}</p>
            <button onclick="deletebtn(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

//delete button
function deletebtn(event){
    event.target.parentElement.remove()
}