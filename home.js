let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
});

(async function(){
    let url = 'http://localhost:4000/Product';
    let data =await fetch(url);
    let response =await data.json();

    console.log(response);
    document.querySelector('.report-body').innerHTML = response.map(e=>`
         <div class="items">
                        <div class="item1">
                            <h3  class="t-op-nextlvl1">${e.product_name}</h3>
                            <h3 class="t-op-nextlvl">${e.product_price}</h3>
                            <img width="50px" src="${e.product_image}" alt="Product Image">
                            <h3 class="t-op-nextlvl">${e.product_brand}</h3>
                            <h3 class="t-op-nextlvl">${e.product_review}</h3>
                            <h3 class="t-op-nextlvl">${e.product_rating}</h3>
                            <h3 class="t-op-nextlvl" onclick="del('${e.id}')"><i class="fa-solid fa-trash"></i></h3>
                            <h3 class="t-op-nextlvl" onclick="upd('${e.id}')"> <i class="fa-solid fa-pen"></i></h3>
                        </div>           
                    </div>
         `).join(" ");

})();



