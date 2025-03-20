

function openCatalogueF() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    resetForm();
}

function resetForm() {
    document.getElementById('downloadForm').reset();
    hideAllErrors();
}

function hideAllErrors() {
    var errors = document.querySelectorAll('.error');
    for (var i = 0; i < errors.length; i++) {
        errors[i].style.display = 'none';
    }
}


function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validateMobile(mobile) {
    return /^\d{10}$/.test(mobile);
}

function handleSubmit(event) {
    event.preventDefault();
    hideAllErrors();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var business = document.getElementById('business').value;
    var message = document.getElementById('message').value;

    var isValid = true;

    if (!name.trim()) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    if (!validateMobile(mobile)) {
        document.getElementById('mobileError').style.display = 'block';
        isValid = false;
    }

    if (!business.trim()) {
        document.getElementById('businessError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Here you would typically send the form data to your server
        console.log('Form submitted:', { 
            name: name, 
            email: email, 
            mobile: mobile, 
            business: business, 
            message: message 
        });
        
        // Simulate PDF download
        alert('Thank you! Your download will begin shortly.');
        closePopup();
    }
}

// Close popup when clicking outside
document.getElementById('popupOverlay').onclick = function(event) {
    if (event.target === this) {
        closePopup();
    }
};
