//displaying form
let formOpen = false;
const model = document.querySelector('.modal');
const bodyButton = document.querySelector('.bodyBtn');
const closeBtn = document.querySelector('.close-btn');
bodyButton.addEventListener('click', () => {
    if (!formOpen) {
        formOpen = true;
        model.style.display = 'block';
    } else {
        formOpen = false;
        model.style.display = 'none';
    }
    console.log(formOpen);
});
window.addEventListener('click', (e) => {
    if (e.target === model) {
        model.style.display = 'none';
    }
});
closeBtn.addEventListener('click', () => {
    model.style.display = 'none';
});



//Form validation
const form = document.getElementById('form');
const nam = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
//Function error message



//Event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired(nam, email, password, passwordConfirm);
})
//Shows error
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';
    
    const errorMsg = formValidation.querySelector('p');
    errorMsg.innerText = message;
}
//Show valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFiledName(input)} is required `);
        } else {
            showValid(input);
       }
    })
}

function getFiledName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//Function Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFiledName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFiledName(input)} must be less than ${max} characters`);
    } else {
        showValid(input);
    }
}

//checking password
function passwordMatch(input1, input2) {
    if (input1.value != input2.value) {
        showError(input2, 'Password do not match');
    }
}

//Event listner
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkRequired([nam, email, password, passwordConfirm]);
    checkLength(nam, 3, 30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);
});