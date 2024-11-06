const scriptURL =
  "https://script.google.com/macros/s/AKfycbxYCU79kKzt0qjfEZuNuVuFjDztyorhnuaX82S5lgQy5MfEqPcihqgOsXoAduOwBGQE/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validation checks
  const nameField = document.querySelector('input[name="name"]');
  const emailField = document.querySelector('input[name="email"]');
  const messageField = document.querySelector('textarea[name="message"]');

  // Clear previous messages and placeholders
  msg.innerHTML = "";
  nameField.placeholder = "Your Name";
  emailField.placeholder = "Your Email";
  messageField.placeholder = "Your Message";

  let isValid = true;

  // Check if each field is filled, adding errors if any are empty
  if (!nameField.value.trim()) {
    nameField.placeholder = "Please enter your name!";
    isValid = false;
  }
  if (!emailField.value.trim()) {
    emailField.placeholder = "Please enter your email!";
    isValid = false;
  }
  if (!messageField.value.trim()) {
    messageField.placeholder = "Please type out your messages!";
    isValid = false;
  }

  // If any field is empty, display error in msg span and prevent submission
  if (!isValid) {
    msg.innerHTML = "Please fill out all the fields above!";
    msg.style.color = "red";
    submitButton.classList.add("wiggle");
    submitButton.style.backgroundColor = "red";

    setTimeout(() => (submitButton.style.backgroundColor = ""), 600);
    setTimeout(() => submitButton.classList.remove("wiggle"), 300);
    return;
  }

  // Change button color when clicked and set cursor to "progress"
  submitButton.style.backgroundColor = "#363636";
  submitButton.style.color = "white";
  document.body.style.cursor = "progress"; // Change cursor to progress

  // Proceed with form submission
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully! Thank You!";
      submitButton.style.backgroundColor = "green";
      submitButton.style.color = "white";
      msg.style.color = "green";
      setTimeout(function () {
        msg.innerHTML = "";
        submitButton.style.backgroundColor = ""; // Reset button color after delay
        submitButton.style.color = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "Error! Please try again.";
      msg.style.color = "red";
      submitButton.style.backgroundColor = ""; // Reset button color on error
      console.error("Error!", error.message);
    })
    .finally(() => {
      document.body.style.cursor = ""; // Reset cursor to default
    });
});
