
let cart: { name: string; price: number }[] = [];

function addToCart(name: string, price: number): void {
    cart.push({ name, price });
    displayCart();
}
function displayCart(): void {
    const orderSummary = document.getElementById("order-summary") as HTMLElement;
    orderSummary.innerHTML = ""; 

    let totalPrice: number = 0;

    cart.forEach((item) => {
        totalPrice += item.price;

        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<p>${item.name} | $${item.price}</p>`;
        orderSummary.appendChild(itemDiv);
    });

    const totalPriceElement = document.getElementById("total-price") as HTMLElement;
    totalPriceElement.innerText = `Total: $${totalPrice}`;
}
document.getElementById("btn-med1")?.addEventListener("click", () => addToCart("Paracetamol", 2));
document.getElementById("btn-med2")?.addEventListener("click", () => addToCart("Vitamin C", 5));
document.getElementById("btn-med3")?.addEventListener("click", () => addToCart("Cough Syrup", 7));
document.getElementById("btn-med4")?.addEventListener("click", () => addToCart("Ibuprofen", 3));
document.getElementById("btn-med5")?.addEventListener("click", () => addToCart("Antibiotic Cream", 4));
document.getElementById("btn-med6")?.addEventListener("click", () => addToCart("Allergy Pills", 6));
