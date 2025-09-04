const form = document.getElementById('form')
const firstnameInput = document.getElementById('firstname-input')
const fullnameInput = document.getElementById('fullname-input')
const emailInput = document.getElementById('email-input')
const errormessage = document.getElementById('error-message')
const passwordInput = document.getElementById('password-input')
const loginemailInput = document.getElementById('loginemail-input')

form.addEventListener('submit', (e) => { 
    let errors = []

    if(firstnameInput){
        errors = getSignupFormErrors(firstnameInput.value, fullnameInput.value, emailInput.value)
    }
    else{
        errors = getLoginFormErrors(loginemailInput.value, passwordInput.value)
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

function getLoginFormErrors(loginemail, password){
    let errors = []

    if(loginemail === '' || loginemail == null){
        errors.push('Email is required')
        loginemailInput.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('Password is required')
        passwordInput.parentElement.classList.add('incorrect')
    }
    return errors;
}

const allinputs = [firstnameInput, fullnameInput, emailInput, loginemailInput, passwordInput].filter(input => input != null)

allinputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            errormessage.innerText = ''
        }   
    })
})