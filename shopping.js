// Sample Product List
const products = [
    { id: 1, name: "Cement Bag", price: 800, category: "cement", image: "cement.jpg" },
    { id: 2, name: "Red Bricks (100 pcs)", price: 2000, category: "bricks", image: "bricks.jpg" },
    { id: 3, name: "Steel Rod 12mm", price: 3500, category: "steel", image: "steel.jpg" },
    { id: 4, name: "PVC Pipe 2 inch", price: 500, category: "plumbing", image: "pipe.jpg" }
];

// Load Products on Page
function loadProducts(category = null) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear Previous List

    products.forEach(product => {
        if (!category || product.category === category) {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: Rs. ${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        }
    });
}

// Cart System
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Update Cart Counter
function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

// Load Products on Page Load
window.onload = () => {
    loadProducts();
    updateCartCount();
};

// Filter Products by Category
function filterCategory(category) {
    loadProducts(category);
}
