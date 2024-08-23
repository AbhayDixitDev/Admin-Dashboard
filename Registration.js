const registration = () => {
  // Get the user input values from the registration form
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let img = document.querySelector("#img").value;
  let mobile = document.querySelector("#mobile").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;

  // Create a new object to hold the user input data
  let obj = {
    name: name,
    email: email,
    img: img,
    mobile: mobile,
    password: password,
    cpassword: cpassword,
  };

  // Define the URL for the API endpoint to register a new user
  let url = "http://localhost:4000/Registration";

  // Define the request method as POST and set the request body to the user input data
  let method = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };

  // Send the registration request to the API endpoint
  fetch(url, method);
};