const registration = async () => {
  // Get the values from the HTML form elements
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let img = document.querySelector("#img").value;
  let mobile = document.querySelector("#mobile").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;
  let github = document.querySelector("#github").value;
  let linkedin = document.querySelector("#linkedin").value;
  let twitter = document.querySelector("#twitter").value;
  let facebook = document.querySelector("#facebook").value;

  // Basic validation
  if (password !== cpassword) {
    console.error("Error: Passwords do not match");
    return;
  }

  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    console.error("Error: Invalid email address");
    return;
  }

  // Create a JavaScript object to hold the user data
  let userData = {
    name: name,
    email: email,
    img: img,
    mobile: mobile,
    password: password,
    github: github,
    linkedin: linkedin,
    twitter: twitter,
    facebook: facebook,
  };

  // Define the URL and method for the API request
  let url = "https://jso-nis-live-again-git-main-abhay-dixits-projects-4f073080.vercel.app/Registration";
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  try {
    await fetch(url, options);
    console.log("Registration successful!");
    window.location.href = "index.html"; // Redirect to index.html
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

function loginredirect() {
  document.location.href = "index.html";
}