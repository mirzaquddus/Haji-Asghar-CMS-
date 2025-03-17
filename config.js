const routes = {
    home: "index.html",
    shopping: "shopping.html",
    cart: "cart.html",
    service: "service.html",
    partner: "patner.html",
    model3D: "3d.html",
    adminDashboard: "Admin-dashboard.html",
    adminProducts: "Admin-products.html"
};

// Function to navigate between pages
function navigateTo(page) {
    if (routes[page]) {
        window.location.href = routes[page];
    } else {
        console.error("Page not found:", page);
    }
}

// Example Usage:
// navigateTo("shopping");
