const menu = document.querySelector(".context-menu")

window.onload = function() {
    document.querySelector(".start-menu").classList.remove("show")
    const bgCheck = localStorage.getItem("bg")

    if (bgCheck != null) {
        document.body.style.backgroundImage = "url(" + bgCheck + ")"    
    } else {
        document.body.style.backgroundImage = "bg.png"
    }
}

document.getElementById("start").addEventListener("click", function(event) {
    document.querySelector(".start-menu").classList.toggle("show")
    document.querySelectorAll(".app").forEach(item => item.classList.toggle("show"))
    document.querySelector(".start").classList.toggle("show")
})

document.onclick = hideMenu
document.oncontextmenu = rightClick

function hideMenu() {
    menu.style.height = "0px"
    menu.style.width = "0px"

    menu.style.display = "none"
}

function rightClick(e) {
    menu.style.display = "block"

    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
    
    menu.style.height = "35px"
    menu.style.width = "150px"

    e.preventDefault()
}

document.getElementById("file").addEventListener("change", readURL, true) 

function readURL() {
    var file = document.getElementById("file").files[0]
    var reader = new FileReader()

    reader.onloadend = function() {
        document.body.style.backgroundImage = "url(" + reader.result + ")"
        localStorage.setItem("bg", reader.result)
    }
    if (file) {
        reader.readAsDataURL(file)
    } else {

    }
}

function openOne() {
    document.querySelector("start-menu").classList.remove("show")
}