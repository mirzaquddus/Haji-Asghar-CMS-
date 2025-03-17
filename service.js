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
