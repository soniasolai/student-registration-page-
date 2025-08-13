import { add, multiply } from './mathUtils.js';
import greet from './mathUtils.js';

// DOM Elements
const form = document.getElementById('registrationForm');
const message = document.getElementById('message');
const createCardBtn = document.getElementById('createCardBtn');
const cardContainer = document.getElementById('cardContainer');

// Display greeting in console
console.log(greet("Developer"));
console.log("Add(5,3):", add(5, 3));
console.log("Multiply(4,6):", multiply(4, 6));

// Form submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;
    const project = document.getElementById('project').value.trim();

    if (!name || !email || !department || !year || !project) {
        showMessage("All fields are required!", "red");
        return;
    }

    if (!validateEmail(email)) {
        showMessage("Invalid email format!", "red");
        return;
    }

    showMessage("Registration Successful!", "green");
    form.reset();
});

// Create card event
createCardBtn.addEventListener('click', () => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = "This is a new card.";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        cardContainer.removeChild(card);
    });

    card.appendChild(deleteBtn);
    cardContainer.appendChild(card);
});

// Utility functions
function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
