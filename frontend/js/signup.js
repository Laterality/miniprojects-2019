const handleSignUpEvent = function (event) {
    const nameElm  = document.querySelector('input[type=name]')
    const emailElm = document.querySelector('input[type=email]')
    const passwordElm = document.querySelector('input[type=password]')

    const data = {
        name : nameElm.value,
        email : emailElm.value,
        password : passwordElm.value
    }
    const body = JSON.stringify(data)
    api.signup(body)
    .then(res => {
        if (res.status === 201) {
            window.location.href = '/login.html'
            return
        }
    })
    .then(res => {
        if (res.message || res.error) {
            alert(res.message)
            return false
        }
    })
}

document.querySelector('.btn-signup')
.addEventListener('click', handleSignUpEvent)
