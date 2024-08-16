const registration = ()=>{
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let img = document.querySelector('#img').value;
    let mobile = document.querySelector('#mobile').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#cpassword').value;

    let obj = {
        "name":name,
        "email":email,
        "img":img,
        "mobile":mobile,
        "password":password,
        "cpassword":cpassword

    };


    let url = 'http://localhost:4000/Registration';
    let method = {
        method:"POST",
        header:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    }
    fetch(url,method);
}