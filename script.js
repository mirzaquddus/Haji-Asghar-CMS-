document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded Successfully!");
});
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to cart!");
}
// Product Data (Sample Products)
const products = [
    { id: 1, name: "Cement (50kg Bag)", price: 1200, category: "cement", image: "cement.jpg" },
    { id: 2, name: "Steel Rods (10mm)", price: 180, category: "steel", image: "steel.jpg" },
    { id: 3, name: "Bricks (1000 Pcs)", price: 15000, category: "bricks", image: "bricks.jpg" },
    { id: 4, name: "PVC Pipes (10ft)", price: 600, category: "pipes", image: "pipes.jpg" },
    { id: 5, name: "Floor Tiles (Box)", price: 2200, category: "tiles", image: "tiles.jpg" },
    { id: 6, name: "Paint (1 Gallon)", price: 3500, category: "paint", image: "paint.jpg" },
    { id: 7, name: "Electrical Wire (Roll)", price: 4000, category: "electrical", image: "wire.jpg" }
];

// Function to Display Products
function displayProducts(filter = "all") {
    const container = document.getElementById("products-container");
    container.innerHTML = "";

    const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: Rs. ${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(productDiv);
    });
}

// Add to Cart Function
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = products.find(p => p.id === productId);
    
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
}

// Update Cart Count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

// Category Filter
document.getElementById("categoryFilter").addEventListener("change", function() {
    displayProducts(this.value);
});

// Initialize Page
displayProducts();
updateCartCount();
const services = {
    construction: {
        title: "Construction Service",
        description: "Complete house and building construction by expert engineers.",
        price: "PKR 500,000 - 5,000,000"
    },
    plumbing: {
        title: "Plumbing Service",
        description: "Professional plumbing for water tanks, pipe fitting, and repairs.",
        price: "PKR 10,000 - 100,000"
    },
    electrical: {
        title: "Electrical Service",
        description: "Home and office electrical wiring, panel installation, and lighting setup.",
        price: "PKR 15,000 - 200,000"
    },
    painting: {
        title: "Painting Service",
        description: "High-quality wall painting, design work, and wallpapers.",
        price: "PKR 20,000 - 300,000"
    }
};

function showServiceDetails(serviceKey) {
    const service = services[serviceKey];
    document.getElementById("service-title").innerText = service.title;
    document.getElementById("service-description").innerText = service.description;
    document.getElementById("service-price").innerText = service.price;
    document.getElementById("service-details").classList.remove("hidden");
}

document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmation-message").classList.remove("hidden");
});
