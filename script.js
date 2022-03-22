password = document.querySelector('[data-password]');
confirmPassword = document.querySelector('[data-confirm-password]');
signUpForm = document.querySelector('[data-sign-up-form]')
submitButton = document.querySelector('[data-submit-button]')


function checkPassword() {
    let pword = password.value;
    let confirm = confirmPassword.value;

    if (pword == confirm) {
        confirmPassword.style.border = "2px solid green";
        submitButton.disabled = false
    } else {
        confirmPassword.style.border = "2px solid red";
        submitButton.disabled = true;
    } 

}

confirmPassword.addEventListener('input', (e) => {
    checkPassword();
})

