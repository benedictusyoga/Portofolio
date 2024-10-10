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
    const aboutTitle = document.querySelector('.abouttitle');
    const aboutSection = document.querySelector('#about');

    // Function to check if the #about section is within the viewport (with some buffer)
    function checkVisibility() {
        const rect = aboutSection.getBoundingClientRect();
        const buffer = 500; // Adjust this value as needed for when you want the title to disappear

        if (rect.top <= buffer && rect.bottom - buffer >= 0) {
            aboutTitle.classList.add('show');
        } else {
            aboutTitle.classList.remove('show');
        }
    }

    // Trigger checkVisibility on scroll
    window.addEventListener('scroll', checkVisibility);

    // Ensure visibility is checked initially on page load
    setTimeout(checkVisibility, 50); // Small delay to ensure layout is ready
});





