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
    let select = document.querySelector('#product_form');
    select.style.display = "block";
    let closebtn = document.querySelector('#close');
    closebtn.style.display="block";
    let selectbg = document.querySelector('#website');
    selectbg.style.filter = "blur(5px)"
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
         </tr>
         `).join(" ");

})();

