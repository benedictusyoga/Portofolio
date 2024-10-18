// Scroll to the top when the page is loaded or refreshed
window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});

function toggleMenu() {
  const list = document.querySelector(".list");
  list.classList.toggle("active");
  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("active");
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  // Function to check if a section is within the viewport (heading animation)
  function checkVisibility(titleElement, sectionElement, buffer = 500) {
    const rect = sectionElement.getBoundingClientRect();
    if (rect.top <= buffer && rect.bottom - buffer >= 0) {
      titleElement.classList.add("show");
    } else {
      titleElement.classList.remove("show");
    }
  }

  // Function to initialize the scroll trigger for each section
  function initScrollTrigger(titleSelector, sectionSelector, buffer) {
    const titleElement = document.querySelector(titleSelector);
    const sectionElement = document.querySelector(sectionSelector);

    if (titleElement && sectionElement) {
      const throttledCheck = throttle(
        () => checkVisibility(titleElement, sectionElement, buffer),
        100
      );
      window.addEventListener("scroll", throttledCheck);
      setTimeout(
        () => checkVisibility(titleElement, sectionElement, buffer),
        50
      );
    }
  }

  // Throttle function to limit scroll event calls
  function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall >= limit) {
        lastCall = now;
        fn(...args);
      }
    };
  }

  // Initialize scroll triggers for About and Projects headings
  initScrollTrigger(".abouttitle", "#about", 500);
  initScrollTrigger(".projectstitle", "#projects", 500);

  // Function to handle GIF hover effect for individual project images
  const projectImages = document.querySelectorAll(".projectcontainer img");

  projectImages.forEach((img) => {
    // Check if the image has the 'logo' class, skip the GIF effect for those
    if (!img.classList.contains("logo")) {
      const staticSrc = img.getAttribute("src");
      const gifSrc = img.getAttribute("data-gif");

      // Add event listener for mouse hover on individual image
      img.addEventListener("mouseenter", () => {
        img.setAttribute("src", gifSrc); // Switch to GIF when the specific image is hovered
      });

      // Add event listener for mouse leave on individual image
      img.addEventListener("mouseleave", () => {
        img.setAttribute("src", staticSrc); // Revert to static image when mouse leaves the specific image
      });

      // Preload GIFs to avoid delay on hover
      const preloadGif = new Image();
      preloadGif.src = gifSrc;
    }
  });
});
