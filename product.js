const run = () => {
  // Get the values from the HTML form elements
  let pname = document.querySelector("#pname").value;
  let pprice = document.querySelector("#pprice").value;
  let pimage = document.querySelector("#pimage").value;
  let pbrand = document.querySelector("#pbrand").value;
  let preview = document.querySelector("#preview").value;
  let prating = document.querySelector("#prating").value;

  // Create a JavaScript object to hold the product data
  let product_data = {
    product_name: pname,
    product_price: pprice,
    product_image: pimage,
    product_brand: pbrand,
    product_review: preview,
    product_rating: prating,
  };

  // Define the URL and method for the API request
  let url = "http://localhost:4000/Product";
  let method = {
    method: "POST", // Send a POST request to create a new product
    header: {
      "content-type": "application/json", // Specify the request body format as JSON
    },
    body: JSON.stringify(product_data), // Convert the product data to a JSON string
  };

  // Send the request to the API using the fetch API
  fetch(url, method);

  // Get the element with the id "website" and remove any filter effects
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "none";

  // Prevent the default form submission behavior
  return false;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to show the product form
const show_form = () => {
  // Clear the values of the form fields
  document.querySelector("#pname").value = "";
  document.querySelector("#pprice").value = "";
  document.querySelector("#pimage").value = "";
  document.querySelector("#pbrand").value = "";
  document.querySelector("#preview").value = "";
  document.querySelector("#prating").value = "";

  // Get the product form element and show it
  let select = document.querySelector("#product_form");
  select.style.display = "block";
  select.style.marginTop = "50px";

  // Get the website background element and apply a blur filter
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "blur(5px)";

  // Show the close button, add button, and hide the update button
  let selectclose = document.querySelector("#close");
  selectclose.style.display = "block";
  let selectadd = document.querySelector("#addbutton");
  selectadd.style.display = "block";
  let selectupdate = document.querySelector("#updatebutton");
  selectupdate.style.display = "none";
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to close the product form
const Close = () => {
  // Get the product form element and hide it
  let select = document.querySelector("#product_form");
  select.style.display = "none";

  // Hide the close button
  let closebtn = document.querySelector("#close");
  closebtn.style.display = "none";

  // Remove the blur filter from the website background
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "none";
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//IIFE
//function for product data show in table form
// Immediately Invoked Function Expression (IIFE) to fetch and display product data
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
  let showProductDataElement = document.querySelector("#showproductdata");

  // Use the map() method to create an array of HTML table rows for each product
  let productRows = response.map((product) => {
    // Create a table row for each product with the product details
    return `
      <tr>
        <td>${product.product_name}</td>
        <td>${product.product_price}</td>
        <td><img width="70px" src="${product.product_image}"></td>
        <td>${product.product_brand}</td>
        <td>${product.product_review}</td>
        <td>${product.product_rating}</td>
        <td onclick="del('${product.id}')"><i class="fa-solid fa-trash"></i></td>
        <td onclick="upd('${product.id}')"> <i class="fa-solid fa-pen"></i></td>
      </tr>
    `;
  });

  // Join the array of table rows into a single string
  let productTableHtml = await productRows.join(" ");

  // Set the innerHTML of the showProductDataElement to the product table HTML
  showProductDataElement.innerHTML = await productTableHtml;
})();

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to delete a product by ID
function del(arg) {
  // Construct the URL for the API endpoint to delete a product
  // The ${arg} is replaced with the actual product ID passed as an argument
  let url = `http://localhost:4000/Product/${arg}`;

  // Define the request method as DELETE
  let method = {
    method: "DELETE",
  };

  // Use the fetch API to send a DELETE request to the API endpoint
  fetch(url, method);

  // Log the product ID to the console for debugging purposes
  console.log(arg);
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// update function start
let storeid = null;

// Async function to update a product by ID
async function upd(arg) {
  // Store the product ID in a global variable
  storeid = arg;

  // Fetch the product data from the API endpoint
  let data = await fetch(`http://localhost:4000/Product/${arg}`);
  let response = await data.json();
  console.log(response);

  // Show the update form and hide the add button
  let selectclose = document.querySelector("#close");
  selectclose.style.display = "block";
  let selectadd = document.querySelector("#addbutton");
  selectadd.style.display = "none";
  let selectupdate = document.querySelector("#updatebutton");
  selectupdate.style.display = "block";
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "blur(5px)";

  // Show the product form and populate it with the product data
  let select = document.querySelector("#product_form");
  select.style.marginTop = "50px";
  select.style.display = "block";
  document.querySelector("#pname").value = response.product_name;
  document.querySelector("#pprice").value = response.product_price;
  document.querySelector("#pimage").value = response.product_image;
  document.querySelector("#pbrand").value = response.product_brand;
  document.querySelector("#preview").value = response.product_review;
  document.querySelector("#prating").value = response.product_rating;
}

const updateproduct = () => {
  // Get the updated product data from the form
  let product_name = document.querySelector("#pname").value;
  let product_price = document.querySelector("#pprice").value;
  let product_image = document.querySelector("#pimage").value;
  let product_brand = document.querySelector("#pbrand").value;
  let product_review = document.querySelector("#preview").value;
  let product_rating = document.querySelector("#prating").value;

  // Create a new product object with the updated data
  let product = {
    product_name: product_name,
    product_price: product_price,
    product_image: product_image,
    product_brand: product_brand,
    product_review: product_review,
    product_rating: product_rating,
  };

  console.log(product);

  // Construct the URL for the API endpoint to update the product
  let url = `http://localhost:4000/Product/${storeid}`;

  // Define the request method as PUT and set the request body to the updated product data
  let method = {
    method: "PUT",
    header: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  };

  // Send the update request to the API endpoint
  fetch(url, method);

  // Remove the blur effect from the website background
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "none";

  // Prevent the default form submission behavior
  return false;
};

// update function end


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// login page redirect function
function loginredirect() {
  document.location.href = "index.html";
}
