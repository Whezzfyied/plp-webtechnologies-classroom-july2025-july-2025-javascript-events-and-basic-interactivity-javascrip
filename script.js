 // ===============================
// Part 1: Event Handling
// ===============================
const messageBtn = document.getElementById("messageBtn");
const messageOutput = document.getElementById("messageOutput");

messageBtn.addEventListener("click", () => {
  messageOutput.textContent = "🎉 You clicked the button!";
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// Dark Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("decrementBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

// Collapsible FAQ
const faqQuestion = document.getElementById("faqQuestion");
const faqAnswer = document.getElementById("faqAnswer");
faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
});

// ===============================
// Part 3: Form Validation
// ===============================
const signupForm = document.getElementById("signupForm");
const formFeedback = document.getElementById("formFeedback");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Basic validation
  if (name.length < 2) {
    formFeedback.textContent = "❌ Name must be at least 2 characters.";
    formFeedback.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formFeedback.textContent = "❌ Please enter a valid email address.";
    formFeedback.style.color = "red";
    return;
  }

  if (password.length < 6) {
    formFeedback.textContent = "❌ Password must be at least 6 characters.";
    formFeedback.style.color = "red";
    return;
  }

  // Success
  formFeedback.textContent = "✅ Form submitted successfully!";
  formFeedback.style.color = "green";
  signupForm.reset();
});
