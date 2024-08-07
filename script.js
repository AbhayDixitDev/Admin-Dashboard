// script.js
// Toggle sidebar
document.addEventListener("DOMContentLoaded", function() {
    const sidebarToggle = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");

    sidebarToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });
});

// Modal functionality
document.addEventListener("DOMContentLoaded", function() {
    const modals = document.querySelectorAll(".modal");
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const closeModalBtns = document.querySelectorAll(".cancel-btn");

    modalTriggers.forEach(function(trigger) {
        trigger.addEventListener("click", function() {
            const modalId = trigger.getAttribute("data-modal");
            const modal = document.querySelector(`#${modalId}`);
            modal.style.display = "flex";
        });
    });

    closeModalBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const modal = btn.closest(".modal");
            modal.style.display = "none";
        });
    });
});

// Add product functionality
document.addEventListener("DOMContentLoaded", function() {
    const addProductForm = document.querySelector("#add-product-form");
    const addProductBtn = document.querySelector("#add-product-btn");

    addProductBtn.addEventListener("click", function() {
        addProductForm.style.display = "block";
    });

    addProductForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const productName = document.querySelector("#product-name").value;
        const productPrice = document.querySelector("#product-price").value;
        const productStock = document.querySelector("#product-stock").value;

        // Add product to table
        const productTable = document.querySelector("#product-table");
        const newRow = productTable.insertRow();
        const productNameCell = newRow.insertCell();
        const productPriceCell = newRow.insertCell();
        const productStockCell = newRow.insertCell();

        productNameCell.textContent = productName;
        productPriceCell.textContent = productPrice;
        productStockCell.textContent = productStock;

        // Clear form fields
        document.querySelector("#product-name").value = "";
        document.querySelector("#product-price").value = "";
        document.querySelector("#product-stock").value = "";
    });
});