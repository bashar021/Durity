console.log('catalogue is opning')

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
    const form = event.target;
    const formData = new FormData(form)
    event.preventDefault();
    hideAllErrors();

    // var name = document.getElementById('name').value; 
    // var email = document.getElementById('email').value;
    // var mobile = document.getElementById('mobile').value;
    // var business = document.getElementById('business').value;
    // var message = document.getElementById('message').value;

    var name = form.elements['name'].value;
    var email = form.elements['email'].value;
    var mobile = form.elements['mobile'].value;
    var business = form.elements['business'].value;
    var message = form.elements['message'].value;

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
    console.log(isValid,'submitted',name,email,message,mobile,business)
    if (isValid) {
      
        const form = event.target;
        const formData = new FormData(form);
        document.getElementById('catalogue-dn-form').innerText = 'Please wait..'
      
        fetch("https://formspree.io/f/mgvzarpo", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
          .then(response => {
            if (response.ok) {
            //   successMessage.style.display = "block";
            //   alert('Message send successfully')
              form.reset();
              document.getElementById('popupOverlay').style.display = 'none';
              window.open('https://drive.google.com/file/d/13IMJyHvVRQcZ1x0dbf69iZV5O2_AE-BP/view', '_blank');
            } else {
              response.json().then(data => {
              //   document.getElementById("response").innerText =
              //     data.errors ? data.errors.map(e => e.message).join(", ") : "Oops! Something went wrong.";
            //   successMessage.innerHTML = 'Oops! Something went wrong.'
              alert('oops! something wents wrong.')
              });
            }
          })
          .catch(error => {
          //   document.getElementById("response").innerText = "Error sending message.";
        //   successMessage.innerHTML = 'Error sending message.'
           alert('Unable to send your message try again ')
            // console.error("Error:", error);
          });
          // form.reset();
          // successMessage.style.display = "block";
      
        //   setTimeout(() => {
        //     successMessage.style.display = "none";
        //   }, 3000);
        }
}

// Close popup when clicking outside
document.getElementById('popupOverlay').onclick = function(event) {
    if (event.target === this) {
        closePopup();
    }
};

console.log('catalogue is closing')