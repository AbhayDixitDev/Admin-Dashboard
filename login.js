const login = async () => {
  let data = await fetch("http://localhost:4000/Registration");
  let response = await data.json();
  console.log(response);
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  let finddata = response.find(
    (e) => e.email === email && e.password === password
  );

  if (finddata) {
    // window.alert("user exist");
    window.localStorage.setItem("logininfo", JSON.stringify(finddata));
    document.location.href = "home.html";
  } else {
    var choice = confirm(
      "Your credentials are incorrect. Click 'OK' to retry or 'Cancel' to register yourself."
    );

    if (choice) {
      // Do nothing, let the user retry
    } else {
      document.location.href = "Registration.html";
    }
  }

  console.log(finddata);
  return false;
};
function redirectRegister() {
  document.location.href = "Registration.html";
}
