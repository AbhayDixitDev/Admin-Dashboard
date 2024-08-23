const login = async () => {
  // Send a GET request to the Registration endpoint on localhost:4000
  let data = await fetch("http://localhost:4000/Registration");
  
  // Parse the response as JSON
  let response = await data.json();
  
  // Log the response to the console for debugging purposes
  console.log(response);
  
  // Get the email and password values from the HTML form
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  // Find the user in the response data that matches the entered email and password
  let finddata = response.find(
    (e) => e.email === email && e.password === password
  );

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (finddata) {
    document.location.href = "home.html";

    // If a matching user is found, store their info in local storage
    window.localStorage.setItem("logininfo", JSON.stringify(finddata));
    
    // Redirect the user to the home page
  } else {
    // If no matching user is found, prompt the user to retry or register
    var choice = confirm(
      "Your credentials are incorrect. Click 'OK' to retry or 'Cancel' to register yourself."
    );
  
    if (choice) {
      // If the user clicks 'OK', do nothing and let them retry
    } else {
      // If the user clicks 'Cancel', redirect them to the registration page
      document.location.href = "Registration.html";
    }
  }

  console.log(finddata);
  return false;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function redirectRegister() {
  document.location.href = "Registration.html";
}
