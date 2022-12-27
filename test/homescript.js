window.onload = function() {
    const allowed = localStorage.getItem('pwdcorrect')
    const check = document.querySelector('.checkUser')

    if (check) {
        check.style.display = 'flex'
    }

    if (!allowed) {
        document.body.innerHTML = ''
        window.location.replace('/test')
    } else {
        document.body.style.display = 'flex'
    }
}

//show comments button
document.querySelector(".show-comments").addEventListener("click", function(event) {
    document.querySelector("#disqus_thread").classList.toggle("show")
    event.target.classList.toggle("toggled")
})