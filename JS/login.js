function login() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email && password) {
    fetch('https://jso-nis-live-again-git-main-abhay-dixits-projects-4f073080.vercel.app/Registration')
      .then(response => response.json())
      .then(data => {
        const userData = data.find(user => user.email === email && user.password === password);
        if (userData) {
          localStorage.setItem('logininfo', JSON.stringify(userData));
          // alert('Login successful!');
          window.location.href = 'home.html'; // Redirect to home.html
        } else {
          alert('Invalid email or password');
        }
      })
      .catch(error => {
        console.error(error);
        alert('Error logging in. Please try again later.');
      });
  } else {
    alert('Please enter both email and password');
  }

  return false; // Prevent form submission
}

function redirectRegister() {
  window.location.href = 'Registration.html'; // Redirect to registration.html
}