const run=()=>{
    let pname=document.querySelector('#pname').value;
let pprice=document.querySelector('#pprice').value;
let pimage=document.querySelector('#pimage').value;
let pbrand=document.querySelector('#pbrand').value;
let preview=document.querySelector('#preview').value;
let prating=document.querySelector('#prating').value;
// console.log(pname);
// console.log(pprice);
// console.log(pimage);
// console.log(pbrand);
// console.log(preview);
// console.log(prating);

let product_data ={
    "product_name":pname,
    "product_price":pprice,
    "product_image":pimage,
    "product_brand":pbrand,
    "product_review":preview,
    "product_rating":prating
}
console.log(product_data);
return false;

}