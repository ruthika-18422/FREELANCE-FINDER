// Highlight current nav link
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = '#00b88d';
    link.style.borderBottom = '2px solid #00b88d';
  }
});

// "Get Started" button functionality
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    alert("Redirecting you to the Join page!");
    window.location.href = "join.html";
  });
}

// Basic Form Validation for Join / Sign In Pages
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const email = form.querySelector("input[type='email']");
    const password = form.querySelector("input[type='password']");

    if (!email.value || !password.value) {
      alert("Please fill out all fields.");
      e.preventDefault();
    } else if (!email.value.includes("@")) {
      alert("Please enter a valid email.");
      e.preventDefault();
    } else if (password.value.length < 6) {
      alert("Password should be at least 6 characters.");
      e.preventDefault();
    }
  });
}
