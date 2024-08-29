(async function () {
    // Define the URL for the API endpoint to fetch product data
    let url = "https://jso-nis-live-again-6govfacc3-abhay-dixits-projects-4f073080.vercel.app/Product";
  
    // Use the fetch API to send a GET request to the API endpoint
    let data = await fetch(url);
  
    // Parse the response data as JSON
    let response = await data.json();
  
    // Log the response data to the console for debugging purposes
    console.log(response);
  
    // Get the HTML element to display the product data
    let showProductDataElement = document.querySelector(".container1");
  
    // Use the map() method to create an array of HTML table rows for each product
    let productRows = response.map((Product) => {
      // Create a table row for each product with the product details
      return `
        <div class="box1" id="${Product.id}">
                <img src="${Product.product_image}" alt="Product Image">
                <h2>${Product.product_name}</h2>
                <div class="product-details">
                  <p>Brand: ${Product.product_brand}</p>
                  <p>Price: ${Product.product_price}</p>
                  <p>Rating: ${Product.product_rating}</p>
                </div>
              </div>
      `;
    });
  
    // Join the array of table rows into a single string
    let productTableHtml = productRows.join(" ");
  
    // Set the innerHTML of the showProductDataElement to the product table HTML
    showProductDataElement.innerHTML = productTableHtml;
  })();


  function loginredirect() {
    document.location.href = "index.html";
  }