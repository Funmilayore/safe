// register.js

// Password toggle
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

// Register form submission
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!fullName || !email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Simulate saving user (can extend to localStorage or Supabase)
  alert('Registration successful!');
  window.location.href = 'login.html';
});
