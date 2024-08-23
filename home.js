let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
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
  let data = await fetch('http://localhost:4000/Product');
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
(async () => {
  try {
    const response = await fetch('http://localhost:4000/Product');
    const data = await response.json();
    const totalPrice = data.reduce((acc, current) => acc + parseInt(current.product_price), 0);

    const totalPriceElement = document.querySelector('#totalprice');
    let counter = 0;

    const intervalId = setInterval(() => {
      counter=counter+100;
      totalPriceElement.innerHTML = counter;
      if (counter >= totalPrice) {
        clearInterval(intervalId);
      }
    }, 1);
  } catch (error) {
    console.error('Error:', error);
  }
})();

function products(){
  document.location.href = "products.html";
}