function addToCart(product, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ product, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product + " added to cart!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartSection = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartSection.innerHTML = "<p>Cart is empty.</p>";
        return;
    }

    cartSection.innerHTML = cart.map(item => `<p>${item.product} - Rs. ${item.price}</p>`).join("");
}

function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}

if (document.getElementById("cart-items")) {
    loadCart();
}
