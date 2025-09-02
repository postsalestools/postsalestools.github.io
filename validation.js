const form = document.getElementById('form')
const firstnameInput = document.getElementById('firstname-input')
const fullnameInput = document.getElementById('fullname-input')
const emailInput = document.getElementById('email-input')
const errormessage = document.getElementById('error-message')

form.addEventListener('submit', (e) => { 
    let errors = []

    if(firstnameInput){
        errors = getSignupFormErrors(firstnameInput.value, fullnameInput.value, emailInput.value)
    }
    else{
        errors = getLoginFormErrors(emailInput.value)
    }
    if(errors.length > 0){
        e.preventDefault()
        errormessage.innerText = errors.join(". ")
    }
})

function getSignupFormErrors(firstname, fullname, email){
    let errors = []

    if(firstname === '' || firstname == null){
        errors.push('First name is required')
        firstnameInput.parentElement.classList.add('incorrect')
    }
    if(fullname === '' || fullname == null){
        errors.push('Full name is required')
        fullnameInput.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
        errors.push('Email is required')
        emailInput.parentElement.classList.add('incorrect')
    }
    return errors;
}