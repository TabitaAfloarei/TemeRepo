const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const emailFeedback = document.getElementById('email-feedback');
const passwordFeedback = document.getElementById('password-feedback');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) =>{
    e.preventDefault();//previn the default behavior al submit-ului, pt a ma ocupa de password
    let isValid = true;

    //email validation
    if(!email.value.match(emailRegex)){
        e.preventDefault(); //butonul de sign in sa nu functioneze daca campul nu e valid
        emailFeedback.innerHTML = 'Invalid email address';
        emailFeedback.style.color = '#BE3144';
        isValid = false;
    } else{
        emailFeedback.innerHTML = 'Email is validated';
        emailFeedback.style.color = '#519872';
    }

    //password validation
    if(password.value.length <= 8 || password.value.length >= 20){
        e.preventDefault(); //butonul de sign in sa nu functioneze daca campul nu e valid
        passwordFeedback.innerHTML = 'Password must be between 8 and 20 characters';
        passwordFeedback.style.color = '#BE3144';
        isValid = false;
    } else{
        passwordFeedback.innerHTML = 'Password is validated';
        passwordFeedback.style.color = '#519872';
    }

    if(isValid){
        emailFeedback.innerHTML = '';
        passwordFeedback.innerHTML = '';

        //homepage
        window.location.href = './homepage.html';
    }

});

email.addEventListener('input', () =>{
    if(!email.value.match(emailRegex)){
        emailFeedback.innerHTML = 'Invalid email address';
        emailFeedback.style.color = '#BE3144';
    } else{
        emailFeedback.innerHTML = 'Email is validated';
        emailFeedback.style.color = '#519872';
    }

});

password.addEventListener('input', () =>{
    if(password.value.length <= 8 || password.value.length > 20){
        passwordFeedback.innerHTML = 'Password must be between 8 and 20 characters';
        passwordFeedback.style.color = '#BE3144';
    } else{
        passwordFeedback.innerHTML = 'Password is validated';
        passwordFeedback.style.color = '#519872';
    }
});