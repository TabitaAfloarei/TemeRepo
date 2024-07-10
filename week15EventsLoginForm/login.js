const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const emailFeedback = document.getElementById('email-feedback');
const passwordFeedback = document.getElementById('password-feedback');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) =>{
    //email validation
    if(!email.value.match(emailRegex)){
        e.preventDefault(); //butonul de sign in sa nu functioneze daca campul nu e valid
    }

    //password validation
    if(password.value.length <= 8 || password.value.length >= 20){
        e.preventDefault(); //butonul de sign in sa nu functioneze daca campul nu e valid
    }

});

email.addEventListener('input', (e) =>{
    if(!email.value.match(emailRegex)){
        emailFeedback.innerHTML = 'Email is required';
    }else{
        emailFeedback.innerHTML = 'Email is validated';
    }

});

password.addEventListener('input', (e) =>{
    if(password.value.length <= 8){
        passwordFeedback.innerHTML = 'Password must contain at least 8 characters';
    } else{
        passwordFeedback.innerHTML = 'Password is validated';
    }

    if(password.value.length >= 20){
        passwordFeedback.innerHTML = 'Password must contain less than 20 characters';
    } else{
        passwordFeedback.innerHTML = 'Password is validated';
    }

})