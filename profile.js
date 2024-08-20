// const userData = {
//   id: "2310",
//   name: "Abhay Dixit",
//   email: "Shivamdixit1st@gmail.com",
//   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmn5PuLC91pyT6UWWiddPJYp1fMKeKTxUS4A&s",
//   mobile: "7017709865"
// };

// const nameElement = document.getElementById("name");
// const emailElement = document.getElementById("email");
// const mobileElement = document.getElementById("mobile");
// const profilePhotoElement = document.getElementById("profile-photo");

// nameElement.textContent = userData.name;
// emailElement.textContent = `Email: ${userData.email}`;
// mobileElement.textContent = `Mobile: ${userData.mobile}`;
// profilePhotoElement.src = userData.img;



/////////////////////////////////////////////////

// <form>
//   <label for="name">Name:</label>
//   <input type="text" id="name" name="name"><br><br>
//   <label for="email">Email:</label>
//   <input type="email" id="email" name="email"><br><br>
// </form>

logininfo = JSON.parse(localStorage.getItem('logininfo'));
const id = logininfo.id.toString();
console.log(id);
const url = `http://localhost:4000/Registration/${id}`;

  fetch(url)
    .then(response => response.json())
    .then(logininfo => {
      if (logininfo) {
        document.getElementById('name').innerHTML = logininfo.name;
        document.getElementById('email').innerHTML = logininfo.email;
        document.getElementById('profile-photo').src=logininfo.img;
        document.getElementById('mobile').innerHTML=logininfo.mobile;
        document.getElementById('github').href=logininfo.github;
        document.getElementById('twitter').href=logininfo.twitter;
        document.getElementById('linkedin').href=logininfo.linkedin;
        document.getElementById('facebook').href=logininfo.facebook;

      } else {
        console.log('No data found for ID', id);
      }
    })
    .catch(error => console.error('Error:', error));