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
      document.getElementById('profile-photo').src = logininfo.img;
      document.getElementById('mobile').innerHTML = logininfo.mobile;
      document.getElementById('github').href = logininfo.github;
      document.getElementById('twitter').href = logininfo.twitter;
      document.getElementById('linkedin').href = logininfo.linkedin;
      document.getElementById('facebook').href = logininfo.facebook;

    } else {
      console.log('No data found for ID', id);
    }
  })
  .catch(error => console.error('Error:', error));