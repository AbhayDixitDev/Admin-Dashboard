async function showProduct() {
  try {
    const url = "https://jso-nis-live-again.vercel.app/Product";
    const response = await fetch(url);
    const data = await response.json();

    const htmlString = data.map(
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

    document.querySelector(".report-body").innerHTML = htmlString;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function
showProduct();


const run = async () => {
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
  let url = "https://jso-nis-live-again.vercel.app/Product";
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product_data),
  };

  try {
    await fetch(url, options);
    console.log("Data posted successfully!");
  } catch (error) {
    console.error("Error posting data:", error);
  }

  // Get the element with the id "website" and remove any filter effects
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "none";

  let form = document.querySelector("#product_form");
  form.style.display = "none";

  showProduct();
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




// Function to delete a product by ID
async function del(arg) {
  // Construct the URL for the API endpoint to delete a product
  // The ${arg} is replaced with the actual product ID passed as an argument
  let url = `https://jso-nis-live-again.vercel.app/Product/${arg}`;

  // Define the request method as DELETE
  let method = {
    method: "DELETE",
  };

  try {
    await fetch(url, method);
    console.log(`Product with ID ${arg} deleted successfully!`);
  } catch (error) {
    console.error(`Error deleting product with ID ${arg}:`, error);
    // Check the error response from the server
    console.error(error.response);
  }

  // Log the product ID to the console for debugging purposes
  console.log(arg);
  showProduct();
}


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// update function start
let storeid = null;

// Async function to update a product by ID
async function upd(arg) {
  // Store the product ID in a global variable
  storeid = arg;

  // Fetch the product data from the API endpoint
  let data = await fetch(`https://jso-nis-live-again.vercel.app/Product/${arg}`);
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

const updateproduct = async () => {
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
  let url = `https://jso-nis-live-again.vercel.app/Product/${storeid}`;

  // Define the request method as PUT and set the request body to the updated product data
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  // Remove the blur effect from the website background
  let selectbg = document.querySelector("#website");
  selectbg.style.filter = "none";
  let form = document.querySelector("#product_form");
  form.style.display = "none";
  // window.location.href="report.html";

  showProduct();

  // Prevent the default form submission behavior
  return false;
};


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



function loginredirect() {
  document.location.href = "index.html";
}