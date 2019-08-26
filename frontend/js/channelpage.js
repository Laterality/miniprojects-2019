const channelCtx = {
    flags: {
        isInUpdate: false
    }
}

const loadVideoCards = function (page, size, sort) {
    api.requestVideos(page, size, sort)
        .then(response => response.json())
        .then(json => addVideoCardTemplates(json.content, 'dateVideoCard'))
}
loadVideoCards(0, wootubeCtx.constants.videoChannelPageSize, 'createDate')

document.querySelector('#btn-update').addEventListener('click', () => {
    channelCtx.flags.isInUpdate = changeUpdateState(channelCtx.flags.isInUpdate)
})

document.querySelector('#btn-submit').addEventListener('click', () => {
    const nameInput = document.querySelector('#update-name')
    const emailInput = document.querySelector('#update-email')

    api.retrieveLoginInfo()
    .then(res => res.json())
    .then(json => api.updateUser(json.id, JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
    })))
    .then(res => {
        if (res.status === 200) {
            window.location.reload();
            return;
        }
        console.log(res);
        res.json()
        .then(json => {
            const alertElm = document.querySelector('.alert.alert-danger')
            alertElm.innerText = json.message
            alertElm.classList.remove('d-none');
        })
    })
    .catch(err => {
        console.log(err)
    })
})

const changeUpdateState = function (flags) {
    const nameElm = document.querySelector('#user-name')
    const emailElm = document.querySelector('#user-email')
    const nameInput = document.querySelector('#update-name')
    const emailInput = document.querySelector('#update-email')
    const alertElm = document.querySelector('.alert.alert-danger');

    if (!flags) {
        nameInput.value = nameElm.innerText
        emailInput.value = emailElm.innerText
        
        nameElm.classList.add('d-none')
        emailElm.classList.add('d-none')
        nameInput.classList.remove('d-none')
        emailInput.classList.remove('d-none')

        document.querySelector('#btn-submit').classList.remove('d-none')
        document.querySelector('#btn-update').innerHTML = '<i class="ti-close"></i>'
    } else {
        nameElm.classList.remove('d-none')
        emailElm.classList.remove('d-none')
        nameInput.classList.add('d-none')
        emailInput.classList.add('d-none')
        alertElm.classList.remove('d-none')

        document.querySelector('#btn-submit').classList.add('d-none')
        document.querySelector('#btn-update').innerHTML = '<i class="ti-pencil"></i>'
    }
    return !flags
}

api.retrieveLoginInfo()
.then(res => res.json())
.then(json => api.requestUser(json.id))
.then(res => res.json())
.then(json => {
    const nameElm = document.querySelector('#user-name')
    const emailElm = document.querySelector('#user-email')

    nameElm.innerText = json.name;
    emailElm.innerText = json.email;
});