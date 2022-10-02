////// THIS IS JAVASCRIPT FOR LOGIN PAGE  ///////

const login_page = document.querySelector('.login-signup-page');
const login_cross_btn = document.querySelector('.login-cross-btn');
const homeLogo = document.querySelector('.home-logo');

login_cross_btn.addEventListener('click', function () {
    window.history.back();
});

homeLogo.addEventListener('click', function () {
    login_page.style.display = 'none';
});

// This is javascript code for sign up 

const signup_link = document.querySelector('.signup-link');
const login_link = document.querySelector('.login-link');


signup_link.addEventListener('click', function () {

    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.signup-container').style.display = 'flex';
});

login_link.addEventListener('click', function () {

    document.querySelector('.login-container').style.display = 'flex';
    document.querySelector('.signup-container').style.display = 'none';
});

// This is javascript code password visibility

const showPassword = document.querySelectorAll('.show-text');
const hidePassword = document.querySelectorAll('.hide-text');
const passwordInput = document.querySelectorAll('.password-input')

for(let a=0; a<passwordInput.length; a++){
    showPassword[a].addEventListener('click', function(){
        passwordInput[a].type = 'text';
        hidePassword[a].style.display = 'block';
        showPassword[a].style.display = 'none';
    });
    
    hidePassword[a].addEventListener('click', function(){
        passwordInput[a].type = 'password';
        hidePassword[a].style.display = 'none';
        showPassword[a].style.display = 'block';
    });
}
