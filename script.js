var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var userConfirmPassword = document.getElementById('userConfirmPassword');
var userComment = document.getElementById('userComment');
var userCountryCode = document.getElementById('userCountryCode');
var userPhoneNumber = document.getElementById('userPhoneNumber');
var submitBtn = document.getElementById('submitBtn');

var userNameError = document.getElementById('userNameError');
var userEmailError = document.getElementById('userEmailError');
var userPasswordError = document.getElementById('userPasswordError');
var userConfirmPasswordError = document.getElementById('userConfirmPasswordError');
var userCommentError = document.getElementById('userCommentError');
var userPhoneNumberError = document.getElementById('userPhoneNumberError');

function resetErrors() {
    userNameError.innerText = '';
    userEmailError.innerText = '';
    userCommentError.innerText = '';
    userPasswordError.innerText = '';
    userConfirmPasswordError.innerText = '';
}

function resetForm() {
    userName.value = '';
    userEmail.value = '';
    userComment.value = '';
    userPassword.value = '';
    userConfirmPassword.value = '';
}

userName.addEventListener('input', function (e) {
    resetErrors();
});
userEmail.addEventListener('input', function (e) {
    resetErrors();
});

// Regular expression for email validation
var mailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,20}$/;

submitBtn.addEventListener('click', function (e) {
    resetErrors();

    // debugger;
    e.preventDefault();

    let userNameVal = userName.value.trim();
    let userEmailVal = userEmail.value.trim();
    let userCommentVal = userComment.value.trim();

    // VALIDATION
    // User name validation
    if (userNameVal === '') {
        userNameError.innerText = 'Please enter your name';
        return;
    } else if (userNameVal.length > 30 || userNameVal.length < 3) {
        userNameError.innerText = 'User name must be between 3 and 30 characters';
        return;
    }
    // User email validation
    if (userEmailVal === '') {
        userEmailError.innerText = 'Please enter your email';
        return;
    } else if(!userEmailVal.match(mailFormat)) {
        userEmailError.innerText = 'Please enter a valid email';
        return;
    }
    // User password validation
    if (userPassword.value === '') {
        userPasswordError.innerText = 'Please enter your password';
        return;
    } else if (userPassword.value.length < 6) {
        userPasswordError.innerText = 'Password must be at least 6 characters';
        return;
    } else if (!userPassword.value.match(passwordFormat)) {
        userPasswordError.innerText = 'Password must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters';
        return;
    }
    // User confirm password validation
    if (userConfirmPassword.value === '') {
        userConfirmPasswordError.innerText = 'Please confirm your password';
        return;
    } else if (userConfirmPassword.value !== userPassword.value) {
        userConfirmPasswordError.innerText = 'Passwords do not match';
        return;
    }
    // User comment validation
    if (userCommentVal === '') {
        userCommentError.innerText = 'Please enter your comment';
        return;
    } else if (userCommentVal.length > 100) {
        userCommentError.innerText = 'Comment must be less than 100 characters';
        return;
    }
    // User phone number validation
    if (userPhoneNumber.value === '') {
        userPhoneNumberError.innerText = 'Please enter your phone number';
        return;
    } else if (userPhoneNumber.value.length < 10) {
        userPhoneNumberError.innerText = 'Phone number must be at least 10 characters';
        return;
    } else if (userPhoneNumber.value.length > 12) {
        userPhoneNumberError.innerText = 'Phone number must be less than 12 characters';
        return;
    }

    resetForm();
    alert('Form submitted successfully');
});