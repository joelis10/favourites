const pwdField = document.querySelector('input')

document.getElementById('submit').addEventListener('click', function() {
    checkPwd()
})

function checkPwd() {
     if (pwdField.value == "password") {
        localStorage.setItem('pwdcorrect', true)
        redirectUser()
     } else {
        localStorage.setItem('pwdcorrect', false)
        alert("incorrect")
        pwdField.value = ''
     }
}

function redirectUser() {
    allowed = localStorage.getItem('pwdcorrect')

    if (allowed) {
        window.location.replace('/test/testlocations.html')
    }
}