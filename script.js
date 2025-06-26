// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navoptions a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash !== '') {
                e.preventDefault();
                const targetId = this.hash.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.formsection');
    const nameInput = document.querySelector('.name');
    const emailInput = document.querySelector('.mail');
    const messageInput = document.querySelector('.message');
    const sendButton = document.getElementById('sendmsg');

    sendButton.addEventListener('click', function (e) {
        e.preventDefault();
        let valid = true;

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            valid = false;
        }

        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            valid = false;
        }

        if (valid) {
            alert('Message sent successfully!');
            form.reset();
        }
    });

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// Scroll to top button 
document.addEventListener('DOMContentLoaded', function () {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerText = '↑';
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '20px';
    scrollBtn.style.right = '20px';
    scrollBtn.style.padding = '10px 15px';
    scrollBtn.style.backgroundColor = 'red';
    scrollBtn.style.color = 'white';
    scrollBtn.style.border = 'none';
    scrollBtn.style.borderRadius = '50%';
    scrollBtn.style.cursor = 'pointer';
    scrollBtn.style.display = 'none';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
