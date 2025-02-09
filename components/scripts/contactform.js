const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        function showError(elementId, message) {
            const error = document.getElementById(elementId + 'Error');
            error.style.display = 'block';
            error.textContent = message;
        }

        function hideError(elementId) {
            document.getElementById(elementId + 'Error').style.display = 'none';
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('name').value.trim();
            if (name === '') {
                showError('name', 'Please enter your name');
                isValid = false;
            } else {
                hideError('name');
            }

            const email = document.getElementById('email').value.trim();
            if (!validateEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            } else {
                hideError('email');
            }

            const message = document.getElementById('message').value.trim();
            if (message === '') {
                showError('message', 'Please enter your message');
                isValid = false;
            } else {
                hideError('message');
            }

            if (isValid) {
                successMessage.style.display = 'block';
                form.reset();

                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
            }
        });

        ['name', 'email', 'message'].forEach(id => {
            document.getElementById(id).addEventListener('input', () => {
                hideError(id);
            });
        });