let navbar = document.querySelector('.nav');
let menuBtn = document.getElementById('menu-btn');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

    menuBtn.classList.toggle('fa-bars');
    menuBtn.classList.toggle('fa-times');
}

