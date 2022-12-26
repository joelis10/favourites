window.onload = function() {
    const allowed = localStorage.getItem('pwdcorrect')
    const check = document.querySelector('.checkUser')

    check.style.display = 'flex'

    if (!allowed) {
        document.body.innerHTML = ''
        window.location.replace('/test')
    } else {
        check.style.display = 'none'
        document.body.style.display = 'block'
    }
}