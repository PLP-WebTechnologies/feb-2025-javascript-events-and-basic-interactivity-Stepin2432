// script.js

// Event Handling
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeTextButton');
    const hoverElement = document.getElementById('hoverElement');
    const inputField = document.getElementById('inputField');

    // Button click event
    button.addEventListener('click', () => {
        button.textContent = 'Clicked!';
        button.style.backgroundColor = 'lightblue';
    });

    // Hover effect
    hoverElement.addEventListener('mouseover', () => {
        hoverElement.style.color = 'red';
    });

    hoverElement.addEventListener('mouseout', () => {
        hoverElement.style.color = 'black';
    });

    // Keypress detection
    inputField.addEventListener('keypress', (event) => {
        console.log(`Key pressed: ${event.key}`);
    });

    // Bonus: Double-click or long press
    button.addEventListener('dblclick', () => {
        alert('Button double-clicked!');
    });

    let pressTimer;
    button.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
            alert('Button long pressed!');
        }, 1000);
    });

    button.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
    });
});

// Interactive Elements
const galleryImages = document.querySelectorAll('.gallery img');
let currentImageIndex = 0;

function showImage(index) {
    galleryImages.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('nextImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
});

document.getElementById('prevImage').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentImageIndex);
});

// Tabs functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');

        tab.classList.add('active');
        tabContents[index].style.display = 'block';
    });
});

// Form Validation
const form = document.getElementById('myForm');
const emailField = document.getElementById('emailField');
const passwordField = document.getElementById('passwordField');

form.addEventListener('submit', (event) => {
    let valid = true;

    // Required field checks
    if (!emailField.value) {
        valid = false;
        alert('Email is required');
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
        valid = false;
        alert('Invalid email format');
    }

    // Password rules
    if (passwordField.value.length < 8) {
        valid = false;
        alert('Password must be at least 8 characters long');
    }

    if (!valid) {
        event.preventDefault();
    }
});

// Real-time feedback while typing
inputField.addEventListener('input', () => {
    const feedback = document.getElementById('feedback');
    feedback.textContent = `You typed: ${inputField.value}`;
});