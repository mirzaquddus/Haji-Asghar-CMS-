// Function to Auto-Calculate Total Area
document.getElementById('length').addEventListener('input', calculateArea);
document.getElementById('width').addEventListener('input', calculateArea);

function calculateArea() {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let totalArea = length * width;
    document.getElementById('totalArea').innerText = totalArea || 0;
}

// Generate 3D Model (Mockup)
function generateModel() {
    let length = document.getElementById('length').value;
    let width = document.getElementById('width').value;
    let bedrooms = document.getElementById('bedrooms').value;
    let kitchens = document.getElementById('kitchens').value;
    let bathrooms = document.getElementById('bathrooms').value;
    let modelType = document.getElementById('modelType').value;

    if (!length || !width) {
        alert("Please enter plot size (Length & Width).");
        return;
    }

    let modelDetails = `
        📐 Plot Size: ${length} × ${width} Feet
        🛏️ Bedrooms: ${bedrooms}
        🍳 Kitchens: ${kitchens}
        🚿 Bathrooms: ${bathrooms}
        🔹 Model Type: ${modelType === "full3d" ? "Full 3D Model (Paid)" : modelType}
    `;

    document.getElementById('output').innerText = "✅ Model Generated Successfully:\n\n" + modelDetails;
}
