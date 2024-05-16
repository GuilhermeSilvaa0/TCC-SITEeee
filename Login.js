const btnlogin = document.querySelector(".btn-user");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

btnlogin.addEventListener("click", function () {
    modal.classList.add("open-modal");
});
    closeBtn.addEventListener("click", function () {
        modal.classList.remove("open-modal");
});


const btncad = document.querySelector(".btn-nocad");
const modalNocad = document.querySelector(".modal-nocad");
const closeCad = document.querySelector(".close-btn-cad");

btncad.addEventListener("click", function(){
    modalNocad.classList.add("open-modal-cad")
    modal.classList.remove("open-modal");
});

closeCad.addEventListener("click", function(){
    modalNocad.classList.remove("open-modal-cad")
})



const password = document.getElementById("password");
const show = document.getElementById("show-pass");

show.addEventListener('click', function(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        show.classList.add('show-green');
    }

    else{
        password.setAttribute('type', 'password');
        show.classList.remove('show-green');
    }
})


const passwordCad = document.getElementById("passwordCad");
const showCad = document.getElementById("show-pass-cad");

showCad.addEventListener('click', function(){
    if(passwordCad.type === 'password'){
        passwordCad.setAttribute('type', 'text');
        showCad.classList.add('show-green');
    }

    else{
        passwordCad.setAttribute('type', 'password');
        showCad.classList.remove('show-green');
    }
})