


const run = ()=>{

let pname=document.querySelector('#pname').value;
let pprice=document.querySelector('#pprice').value;
let pimage=document.querySelector('#pimage').value;
let pbrand=document.querySelector('#pbrand').value;
let preview=document.querySelector('#preview').value;
let prating=document.querySelector('#prating').value;


let product_data ={
    "product_name":pname,
    "product_price":pprice,
    "product_image":pimage,
    "product_brand":pbrand,
    "product_review":preview,
    "product_rating":prating
}

let url="http://localhost:4000/Product";
let method={
    method:"POST",
    header:{
        "content-type":"application/json"
    },
    body:JSON.stringify(product_data)
}
fetch(url,method);
 let selectbg = document.querySelector('#website');
     selectbg.style.filter = "none";
return false;

}

const show_form = ()=>{
    document.querySelector('#pname').value="";
document.querySelector('#pprice').value="";
document.querySelector('#pimage').value="";
document.querySelector('#pbrand').value="";
document.querySelector('#preview').value="";
document.querySelector('#prating').value="";
    let select = document.querySelector('#product_form');
    select.style.display = "block";
    select.style.marginTop="50px";

    let selectbg = document.querySelector('#website');    
    selectbg.style.filter = "blur(5px)";
    let selectclose = document.querySelector('#close');
     selectclose.style.display = "block";
     let selectadd = document.querySelector('#addbutton');
     selectadd.style.display = "block";
     let selectupdate = document.querySelector('#updatebutton');
     selectupdate.style.display = "none";
}
const Close = ()=>{
    let select = document.querySelector('#product_form');
    select.style.display = "none";
    let closebtn = document.querySelector('#close');
    closebtn.style.display="none";
    let selectbg = document.querySelector('#website');
    selectbg.style.filter = "none"
}



//IIFE
(async function(){
    let url = 'http://localhost:4000/Product';
    let data =await fetch(url);
    let response =await data.json();

    console.log(response);
    document.querySelector('#showproductdata').innerHTML = response.map(e=>`
         <tr>
         <td>${e.product_name}</td>
         <td>${e.product_price}</td>
         <td><img width="70px" src="${e.product_image}"></td>
         <td>${e.product_brand}</td>
         <td>${e.product_review}</td>
         <td>${e.product_rating}</td>
         <td onclick="del('${e.id}')"><i class="fa-solid fa-trash"></i></td>
         <td onclick="upd('${e.id}')"> <i class="fa-solid fa-pen"></i></td>
         </tr>
         `).join(" ");

         

})();


function del(arg){
    let url=`http://localhost:4000/Product/${arg}`;
    let method={
        method:"DELETE"
    }
    fetch(url,method)

    console.log(arg);

}
let storeid = null;
 async function upd(arg){
   
     storeid = arg;

     let data = await fetch(`http://localhost:4000/Product/${arg}`);
     let response = await data.json();
     console.log(response)
      
     let selectclose = document.querySelector('#close');
     selectclose.style.display = "block";
     let selectadd = document.querySelector('#addbutton');
     selectadd.style.display = "none";
     let selectupdate = document.querySelector('#updatebutton');
     selectupdate.style.display = "block";
     let selectbg = document.querySelector('#website');    
    selectbg.style.filter = "blur(5px)";


     let select = document.querySelector('#product_form');
     select.style.marginTop="50px"
     select.style.display = "block";
     document.querySelector('#pname').value = response.product_name;
     document.querySelector('#pprice').value = response.product_price;
     document.querySelector('#pimage').value = response.product_image;
     document.querySelector('#pbrand').value = response.product_brand;
     document.querySelector('#preview').value = response.product_review;
     document.querySelector('#prating').value = response.product_rating;

}




const updateproduct = ()=>{
     let product_name = document.querySelector('#pname').value;
     let product_price = document.querySelector('#pprice').value;
     let product_image = document.querySelector('#pimage').value;
     let product_brand = document.querySelector('#pbrand').value;
     let product_review = document.querySelector('#preview').value;
     let product_rating = document.querySelector('#prating').value;

     

     let product = {
      "product_name":product_name,
      "product_price":product_price,
      "product_image":product_image,
      "product_brand":product_brand,
      "product_review":product_review,
      "product_rating":product_rating
   }

     console.log(product);

     let url = `http://localhost:4000/Product/${storeid}`;
     let method = {
          method:"PUT",
          header:{
               "content-type":"application/json"
          },
          body:JSON.stringify(product)
     }
     fetch(url,method);
     let selectbg = document.querySelector('#website');
     selectbg.style.filter = "none"
     return false;
}



function loginredirect(){
    window.location.href = "login.html";
}

