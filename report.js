(async function () {
  // Define the URL for the API endpoint to fetch products
  let url = "http://localhost:4000/Product";

  // Fetch the products data from the API endpoint
  let data = await fetch(url);

  // Parse the response data as JSON
  let response = await data.json();

  // Log the response data to the console
  console.log(response);

  // Create an HTML string to display the products
  let htmlString = response.map(
    (e) => `
      <div class="items">
        <div class="item1">
          <h3 class="t-op-nextlvl1">${e.product_name}</h3>
          <h3 class="t-op-nextlvl">${e.product_price}</h3>
          <img width="50px" src="${e.product_image}" alt="Product Image">
          <h3 class="t-op-nextlvl">${e.product_brand}</h3>
          <h3 class="t-op-nextlvl">${e.product_review}</h3>
          <h3 class="t-op-nextlvl">${e.product_rating}</h3>
          <h3 class="t-op-nextlvl" onclick="del('${e.id}')"><i class="fa-solid fa-trash"></i></h3>
          <h3 class="t-op-nextlvl" onclick="upd('${e.id}')"> <i class="fa-solid fa-pen"></i></h3>
        </div>           
      </div>
    `
  ).join(" ");

  // Set the innerHTML of the report body element to the generated HTML string
  document.querySelector(".report-body").innerHTML = htmlString;
})();