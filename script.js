
firstName = document.querySelector('[data-first-name]')
lastName = document.querySelector('[data-last-name]')
phone = document.querySelector('[data-phone]');
email = document.querySelector('[data-email]')
password = document.querySelector('[data-password]');
confirmPassword = document.querySelector('[data-confirm-password]');
signUpForm = document.querySelector('[data-sign-up-form]')
submitButton = document.querySelector('[data-submit-button]')
errorMessage = document.querySelector('.error-message');

function checkFirstName() {
    let valid = firstName.checkValidity();
    if (valid === true) {
        firstName.closest('div').querySelector('.error').style.visibility = 'hidden';
        firstName.closest('div').querySelector('.tick').style.visibility = 'visible';
    } else {
        firstName.closest('div').querySelector('.tick').style.visibility = 'hidden';
        firstName.closest('div').querySelector('.error').style.visibility = 'visible';
    }
}

function checkLastName() {
    let valid = lastName.checkValidity();
    if (valid === true) {
        lastName.closest('div').querySelector('.error').style.visibility = 'hidden';
        lastName.closest('div').querySelector('.tick').style.visibility = 'visible';
    } else {
        lastName.closest('div').querySelector('.tick').style.visibility = 'hidden';
        lastName.closest('div').querySelector('.error').style.visibility = 'visible';
    }
}

function checkEmail() {
    let valid = email.checkValidity();
    if (valid === true) {
        email.closest('div').querySelector('.error').style.visibility = 'hidden';
        email.closest('div').querySelector('.tick').style.visibility = 'visible';
    } else {
        email.closest('div').querySelector('.tick').style.visibility = 'hidden';
        email.closest('div').querySelector('.error').style.visibility = 'visible';
    }
}

function checkPhone() {
    let valid = phone.checkValidity();
    if (valid === true) {
        phone.closest('div').querySelector('.error').style.visibility = 'hidden';
        phone.closest('div').querySelector('.tick').style.visibility = 'visible';
    } else {
        phone.closest('div').querySelector('.tick').style.visibility = 'hidden';
        phone.closest('div').querySelector('.error').style.visibility = 'visible';
    }
}

function checkpassword() {
    let valid = password.checkValidity()
    if (valid === true) {
        password.closest('div').querySelector('.error').style.visibility = 'hidden';
        password.closest('div').querySelector('.tick').style.visibility = 'visible';
    } else {
        password.closest('div').querySelector('.tick').style.visibility = 'hidden';
        password.closest('div').querySelector('.error').style.visibility = 'visible';
    }
}

function checkConfirmPassword() {
    let pword = password.value;
    let confirm = confirmPassword.value;

    if (pword == confirm) {
        confirmPassword.closest('div').querySelector('.error').style.visibility = 'hidden';
        confirmPassword.closest('div').querySelector('.tick').style.visibility = 'visible';
        confirmPassword.setCustomValidity("")
    } else {
        confirmPassword.closest('div').querySelector('.tick').style.visibility = 'hidden';
        confirmPassword.closest('div').querySelector('.error').style.visibility = 'visible';
        confirmPassword.setCustomValidity("Passwords must match.")
    } 

}

firstName.addEventListener('input', () => {
    checkFirstName();
})

lastName.addEventListener('input', () => {
    checkLastName();
})

email.addEventListener('input', () => {
    checkEmail();
})

phone.addEventListener('input', () => {
    checkPhone();
})

password.addEventListener('input', () => {
    checkpassword();
})

confirmPassword.addEventListener('input', (e) => {
    checkConfirmPassword();
})





