const userData = {
    "id": "2310",
    "name": "Abhay Dixit",
    "email": "Shivamdixit1st@gmail.com",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmn5PuLC91pyT6UWWiddPJYp1fMKeKTxUS4A&s",
    "mobile": "7017709865",
    "password": "1234",
    "cpassword": "1234"
  };
  
  const profileBox = document.querySelector('.profile-box');
  const nameElement = document.getElementById('name');
  const emailElement = document.getElementById('email');
  const mobileElement = document.getElementById('mobile');
  const profilePhotoElement = document.getElementById('profile-photo');
  const passwordElement = document.getElementById('password');
  const cpasswordElement = document.getElementById('cpassword');
  
  nameElement.textContent = userData.name;
  emailElement.textContent = `Email: ${userData.email}`;
  mobileElement.textContent = `Mobile: ${userData.mobile}`;
  profilePhotoElement.src = userData.img;
  profileBox.style.backgroundImage = `url(${userData.img})`;
  passwordElement.textContent = `Password: ${userData.password}`;
  cpasswordElement.textContent = `Confirm Password: ${userData.cpassword}`;