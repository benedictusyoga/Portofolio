window.onbeforeunload = function(){
    window.scrollTo(0, 0);
};

function toggleMenu() {
    const list = document.querySelector('.list');
    list.classList.toggle('active');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('active');
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
};