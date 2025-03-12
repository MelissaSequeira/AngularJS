var _a, _b, _c, _d, _e, _f;
// Cart Array to store selected medicines
var cart = [];
// Function to add an item to the cart
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    displayCart();
}
// Function to display cart items and calculate total price
function displayCart() {
    var orderSummary = document.getElementById("order-summary");
    orderSummary.innerHTML = ""; // Clear previous display
    var totalPrice = 0;
    // Loop through the cart and display each item
    cart.forEach(function (item) {
        totalPrice += item.price;
        // Create a div for each cart item
        var itemDiv = document.createElement("div");
        itemDiv.innerHTML = "<p>".concat(item.name, " | $").concat(item.price, "</p>");
        orderSummary.appendChild(itemDiv);
    });
    // Update the total price
    var totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText = "Total: $".concat(totalPrice);
}
// Add event listeners to buttons
(_a = document.getElementById("btn-med1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return addToCart("Paracetamol", 2); });
(_b = document.getElementById("btn-med2")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return addToCart("Vitamin C", 5); });
(_c = document.getElementById("btn-med3")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return addToCart("Cough Syrup", 7); });
(_d = document.getElementById("btn-med4")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () { return addToCart("Ibuprofen", 3); });
(_e = document.getElementById("btn-med5")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () { return addToCart("Antibiotic Cream", 4); });
(_f = document.getElementById("btn-med6")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () { return addToCart("Allergy Pills", 6); });
