let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

document.addEventListener("DOMContentLoaded", () => {
  const menuicn = document.getElementById("menuicn");
  menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
  });
});

function home() {   //home redirect
  document.location.href = "home.html";
}
function report() { //report page redirect
  document.location.href = "report.html";
}
function profileopen() {  //profile page redirect
  document.location.href = "profile.html";
}

//total prodcut show 
(async function(){
  let data = await fetch('https://jso-nis-live-again-git-main-abhay-dixits-projects-4f073080.vercel.app/Product');
  let res = await data.json();
  let counter = 0;
  const elem = document.querySelector('#totalproduct');
  const intervalId = setInterval(() => {
    counter++;
    elem.innerHTML = counter;
    if (counter >= res.length) {
      clearInterval(intervalId);
    }
  }, 200);
})();

//total amount of products
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch('https://jso-nis-live-again-git-main-abhay-dixits-projects-4f073080.vercel.app/Product');
    const data = await response.json();
    const totalPrice =  data.reduce((acc, current) => acc + parseInt(current.product_price), 0);

    const totalPriceElement = document.querySelector('#totalprice');
    if (totalPriceElement) {
      let counter = 0;
      const intervalId = setInterval(() => {
        counter = counter + 100;
        totalPriceElement.innerHTML = counter;
        if (counter >= totalPrice) {
          clearInterval(intervalId);
        }
      }, 1);
    } else {
      console.log("Element not found!");
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();

function products(){
  document.location.href = "products.html";
}


function loginredirect() {
  document.location.href = "index.html";
}