(async function () {
    // Define the URL for the API endpoint to fetch product data
    let url = "http://localhost:4000/Product";
  
    // Use the fetch API to send a GET request to the API endpoint
    let data = await fetch(url);
  
    // Parse the response data as JSON
    let response = await data.json();
  
    // Log the response data to the console for debugging purposes
    console.log(response);
  
    // Get the HTML element to display the product data
    let showProductDataElement = document.querySelector(".container1");
  
    // Use the map() method to create an array of HTML table rows for each product
    let productRows = response.map((product) => {
      // Create a table row for each product with the product details
      return `
        <div class="box1" id="${product.id}">
                <img src="${product.product_image}" alt="Product Image">
                <h2>${product.product_name}</h2>
                <div class="product-details">
                  <p>Brand: ${product.product_brand}</p>
                  <p>Price: ${product.product_price}</p>
                  <p>Rating: ${product.product_rating}</p>
                </div>
              </div>
      `;
    });
  
    // Join the array of table rows into a single string
    let productTableHtml = productRows.join(" ");
  
    // Set the innerHTML of the showProductDataElement to the product table HTML
    showProductDataElement.innerHTML = productTableHtml;
  })();