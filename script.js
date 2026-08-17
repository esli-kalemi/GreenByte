//Mobile navigation
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {

    const clickedInsideNav = event.target.closest('nav');

    if (!clickedInsideNav) {
        navLinks.classList.remove('active');
    }

});
const menuLinks = document.querySelectorAll('nav ul a');

menuLinks.forEach(link => {

    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

});

//CONTACT FORM VALIDATION
const contactForm = document.querySelector('#contact-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

const successMessage = document.querySelector('#success-message');


contactForm.addEventListener('submit', (event) => {

    event.preventDefault();

    let isValid = true;

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    nameInput.classList.remove('error', 'success');
    emailInput.classList.remove('error', 'success');
    messageInput.classList.remove('error', 'success');

    successMessage.classList.remove('show');


    // Validate name
    if (nameInput.value.trim() === '') {

        nameError.textContent = 'Please enter your name.';

        nameInput.classList.add('error');

        isValid = false;

    } else {

        nameInput.classList.add('success');
    }


    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === '') {

        emailError.textContent = 'Please enter your email.';

        emailInput.classList.add('error');

        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent = 'Please enter a valid email address.';

        emailInput.classList.add('error');

        isValid = false;

    } else {

        emailInput.classList.add('success');
    }


    // Validate message
    if (messageInput.value.trim() === '') {

        messageError.textContent = 'Please enter your message.';

        messageInput.classList.add('error');

        isValid = false;

    } else {

        messageInput.classList.add('success');
    }


    // Stop here if something is invalid
    if (!isValid) {
        return;
    }


    // Successful submission
    successMessage.textContent =
        `Thank you, ${nameInput.value.trim()}! Your message has been received.`;

    successMessage.classList.add('show');

    contactForm.reset();

});

//Navbar scroll effect
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});