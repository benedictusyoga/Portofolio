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

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const aboutTitle = document.querySelector('.abouttitle');
    observer.observe(aboutTitle);
});
