// const login = async () => {
//   // Get the email and password values from the HTML form
//   const email = await (async () => document.querySelector("#email").value)();
//   const password = await (async () => document.querySelector("#password").value)();

//   // Fetch the registration data from the API endpoint
//   const url = "https://jso-nis-live-again.vercel.app/Registration";
//   const response = await fetch(url);
//   const data = await response.json();

//   // Loop through the registration data and compare with input field values
//   let userFound = false;
//   for (const user of await data) {
//     if (await (async () => user.email === email)() && await (async () => user.password === password)()) {
//       userFound = true;
//       break;
//     }
//   }

//   if (await (async () => userFound)()) {
//     // If a match is found, redirect to home.html
//     await (async () => document.location.href = "home.html")();
//   } else {
//     // If no match is found, prompt the user to retry or register
//     const choice = await confirm(
//       "Your credentials are incorrect. Click 'OK' to retry or 'Cancel' to register yourself."
//     );

//     if (await (async () => choice)()) {
//       // If the user clicks 'OK', do nothing and let them retry
//       await (async () => false)(); // prevent form submission
//     } else {
//       // If the user clicks 'Cancel', redirect them to the registration page
//       await (async () => document.location.href = "Registration.html")();
//       await (async () => false)(); // prevent form submission
//     }
//   }
// };


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const redirectRegister = () => {
//   document.location.href = "Registration.html";
// };



function login() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email && password) {
    fetch('https://jso-nis-live-again.vercel.app/Registration')
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
  window.location.href = 'registration.html'; // Redirect to registration.html
}