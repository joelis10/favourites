window.onload = function() {
    document.querySelector(".start-menu").classList.remove("show")
}

document.getElementById("start").addEventListener("click", function(event) {
    document.querySelector(".start-menu").classList.toggle("show")
    document.querySelector(".app").classList.toggle("show")
})

document.addEventListener("contextmenu", function(event) {
    document.querySelector(".context-menu").classList.toggle("show")
})

document.addEventListener("click", function() {
    document.querySelector(".context-menu").classList.remove("show")
})