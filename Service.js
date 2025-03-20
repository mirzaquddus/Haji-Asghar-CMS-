document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let service = document.getElementById("service").value;

    alert(`Booking Request Sent:\nName: ${name}\nContact: ${contact}\nService: ${service}`);

    document.getElementById("booking-form").reset();
});
