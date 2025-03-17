function showForm() {
    document.querySelectorAll('.partner-form').forEach(form => form.style.display = 'none');
    
    let selectedType = document.getElementById("partnerType").value;
    if (selectedType) {
        document.getElementById(selectedType + "Form").style.display = "block";
    }
}

// Form Submission
document.querySelectorAll('.partner-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        document.querySelectorAll('.partner-form').forEach(form => form.style.display = 'none');
        document.getElementById("successMessage").style.display = "block";
        
        setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
            document.getElementById("partnerType").value = "";
        }, 5000);
    });
});
