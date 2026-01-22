// Main JavaScript File

// DOM Elements
const functionOutput = document.getElementById('functionOutput');
const eventList = document.getElementById('eventList');
const counterValue = document.getElementById('counterValue');
const userNameInput = document.getElementById('userName');
const numberInput = document.getElementById('numberInput');
const keyInput = document.getElementById('keyInput');
const hoverButton = document.getElementById('hoverButton');

// Counter variable
let counter = 0;

// ========== FUNCTION DEFINITIONS ==========

/**
 * Greets the user with a personalized message
 */
function greetUser() {
    const userName = userNameInput.value.trim() || 'Guest';
    const greeting = `Hello, ${userName}! Welcome to the JavaScript Functions & Events Demo.`;
    displayOutput(greeting);
    logEvent(`Greet function called for user: ${userName}`);
}

/**
 * Calculates the square of a number
 */
function calculateSquare() {
    const number = parseFloat(numberInput.value) || 0;
    const square = number * number;
    const result = `The square of ${number} is <strong>${square}</strong>.`;
    displayOutput(result);
    logEvent(`Square calculation for number: ${number}`);
}

/**
 * Changes the output text color randomly
 */
function changeOutputColor() {
    const colors = [
        {name: 'Blue', value: '#0d6efd'},
        {name: 'Purple', value: '#9d4edd'},
        {name: 'Green', value: '#198754'},
        {name: 'Red', value: '#dc3545'},
        {name: 'Orange', value: '#fd7e14'}
    ];
    
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];
    
    functionOutput.style.color = selectedColor.value;
    displayOutput(`Output color changed to: <strong>${selectedColor.name}</strong>`);
    logEvent(`Output color changed to: ${selectedColor.name}`);
}

/**
 * Increments the counter and updates the display
 */
function incrementCounter() {
    counter++;
    counterValue.textContent = counter;
    
    // Change counter color based on value
    if (counter % 5 === 0) {
        counterValue.style.color = '#dc3545'; // Red for multiples of 5
    } else if (counter % 2 === 0) {
        counterValue.style.color = '#198754'; // Green for even numbers
    } else {
        counterValue.style.color = '#0d6efd'; // Blue for odd numbers
    }
    
    displayOutput(`Counter incremented to: <strong>${counter}</strong>`);
    logEvent(`Counter incremented to: ${counter}`);
}

/**
 * Resets the application to its initial state
 */
function resetApplication() {
    // Reset counter
    counter = 0;
    counterValue.textContent = counter;
    counterValue.style.color = '#0d6efd';
    
    // Clear inputs
    userNameInput.value = '';
    numberInput.value = '5';
    keyInput.value = '';
    
    // Reset output styling
    functionOutput.style.color = '';
    functionOutput.innerHTML = 'Application has been reset. Click buttons to interact.';
    
    // Clear event log except the first item
    while (eventList.children.length > 1) {
        eventList.removeChild(eventList.lastChild);
    }
    
    logEvent('Application reset');
}

/**
 * Displays output in the function output area
 * @param {string} message - The message to display
 */
function displayOutput(message) {
    functionOutput.innerHTML = `<i class="fas fa-arrow-right me-2"></i>${message}`;
}

/**
 * Logs events in the event log
 * @param {string} eventText - The event description to log
 */
function logEvent(eventText) {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
    const eventItem = document.createElement('li');
    eventItem.className = 'list-group-item';
    eventItem.innerHTML = `<strong>[${timeString}]</strong> ${eventText}`;
    
    // Add to the beginning of the list
    eventList.prepend(eventItem);
    
    // Keep only the last 15 events
    if (eventList.children.length > 15) {
        eventList.removeChild(eventList.lastChild);
    }
}

// ========== EVENT LISTENERS ==========

// Button click events
document.getElementById('greetButton').addEventListener('click', greetUser);
document.getElementById('calculateButton').addEventListener('click', calculateSquare);
document.getElementById('colorButton').addEventListener('click', changeOutputColor);
document.getElementById('counterButton').addEventListener('click', incrementCounter);
document.getElementById('resetButton').addEventListener('click', resetApplication);

// Hover button events
hoverButton.addEventListener('mouseenter', function() {
    this.innerHTML = '<i class="fas fa-hand-point-down me-2"></i>Mouse Entered!';
    this.classList.add('active-hover');
    logEvent('Mouse entered hover button');
});

hoverButton.addEventListener('mouseleave', function() {
    this.innerHTML = '<i class="fas fa-hand-point-up me-2"></i>Hover Over Me';
    this.classList.remove('active-hover');
    logEvent('Mouse left hover button');
});

// Double click button event
document.getElementById('doubleClickButton').addEventListener('dblclick', function() {
    displayOutput('Double click detected! <strong>Well done!</strong>');
    logEvent('Double click event triggered');
});

// Keyboard events on the input field
keyInput.addEventListener('keydown', function(event) {
    // Don't log Tab and Shift keys to reduce noise
    if (event.key !== 'Tab' && event.key !== 'Shift') {
        logEvent(`Key DOWN: "${event.key}" (Code: ${event.code})`);
    }
});

keyInput.addEventListener('keyup', function(event) {
    if (event.key !== 'Tab' && event.key !== 'Shift') {
        logEvent(`Key UP: "${event.key}"`);
    }
});

// Input event (triggers on any change)
userNameInput.addEventListener('input', function() {
    if (this.value.trim() !== '') {
        logEvent(`User name changed to: "${this.value}"`);
    }
});

numberInput.addEventListener('input', function() {
    logEvent(`Number input changed to: ${this.value}`);
});

// Page load event
window.addEventListener('load', function() {
    displayOutput('Application loaded successfully. Click buttons or interact with inputs to see functions and events in action!');
    logEvent('Page loaded successfully');
    
    // Add a welcome message to event log
    const welcomeItem = document.createElement('li');
    welcomeItem.className = 'list-group-item list-group-item-info';
    welcomeItem.innerHTML = '<strong>[Welcome]</strong> Application ready. Start interacting!';
    eventList.prepend(welcomeItem);
});

// Form submit prevention (just in case)
document.addEventListener('submit', function(event) {
    event.preventDefault();
});

// ========== INITIALIZATION ==========
// Set initial state
displayOutput('Welcome! Click any button or interact with the inputs to get started.');