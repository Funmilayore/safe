// ✅ Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// ✅ Close Menu When Link Is Clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// ✅ Password Visibility Toggle
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

// ✅ Login Form Handling
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const rememberMe = document.querySelector('input[type="checkbox"]').checked;

  // 🔐 Fake credentials for testing (you can replace this with real auth later)
  const demoEmail = 'test@safeher.com';
  const demoPassword = 'password123';

  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // ✅ Basic hardcoded credential check
  if (email === demoEmail && password === demoPassword) {
    if (rememberMe) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userEmail', email);
    } else {
      sessionStorage.setItem('loggedIn', 'true');
      sessionStorage.setItem('userEmail', email);
    }

    alert('Login successful!');
    window.location.href = 'dashboard.html'; // ✅ redirect
  } else {
    alert('Invalid email or password.');
  }
});
