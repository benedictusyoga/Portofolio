const words = [
  "Web Development",
  "UI/UX Design",
  "Software Engineering",
  "Frontend Development",
];
let wordIndex = 0;
let isDeleting = false;
let text = "";
const typewriterElement = document.querySelector(".typewriter");

// Adjust the speeds (in ms)
const typingSpeed = 100; // Speed for typing
const deletingSpeed = 50; // Speed for deleting
const holdDelay = 2000; // Delay before deleting text

function typeWriter() {
  const currentWord = words[wordIndex];

  // Determine if we are typing or deleting
  if (isDeleting) {
    // Remove one character
    text = currentWord.substring(0, text.length - 1);
  } else {
    // Add one character
    text = currentWord.substring(0, text.length + 1);
  }

  // Display the current text
  typewriterElement.innerHTML = text;

  // Check if we need to switch modes
  if (!isDeleting && text === currentWord) {
    // Full word typed, switch to delete mode after hold delay
    setTimeout(() => {
      isDeleting = true;
      typeWriter(); // Call typeWriter again to start deleting
    }, holdDelay);
  } else if (isDeleting && text === "") {
    // Finished deleting, move to the next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    setTimeout(typeWriter, 500); // Delay before typing the next word
  } else {
    // Schedule the next character based on the current mode
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWriter, speed);
  }
}

// Start the typing effect
typeWriter();
