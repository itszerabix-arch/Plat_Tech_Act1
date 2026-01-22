// Debug message to confirm script is loading
console.log('JavaScript file loaded successfully!');

// DOM Elements
const elements = {
    greetButton: document.getElementById('greetButton'),
    calculateButton: document.getElementById('calculateButton'),
    colorButton: document.getElementById('colorButton'),
    counterButton: document.getElementById('counterButton'),
    resetButton: document.getElementById('resetButton'),
    hoverButton: document.getElementById('hoverButton'),
    doubleClickButton: document.getElementById('doubleClickButton'),
    userName: document.getElementById('userName'),
    numberInput: document.getElementById('numberInput'),
    keyInput: document.getElementById('keyInput'),
    counterValue: document.getElementById('counterValue'),
    functionOutput: document.getElementById('functionOutput'),
    eventList: document.getElementById('eventList')
};

// Debug: Log found elements
console.log('Elements found:', elements);

// State
let counter = 0;

// Utility Functions
const logEvent = (message) => {
    console.log('Logging event:', message); // Debug
    const timestamp = new Date().toLocaleTimeString();
    const eventItem = document.createElement('li');
    eventItem.className = 'list-group-item';
    eventItem.textContent = `[${timestamp}] ${message}`;
    elements.eventList.prepend(eventItem);
};

const updateOutput = (message) => {
    console.log('Updating output:', message); // Debug
    elements.functionOutput.innerHTML = message;
};

// Core Functions
const greetUser = () => {
    console.log('Greet button clicked'); // Debug
    const name = elements.userName.value.trim() || 'Guest';
    updateOutput(`<span class="text-success">Hello, ${name}! Welcome to our demo.</span>`);
    logEvent(`Greeted user: ${name}`);
};

const calculateSquare = () => {
    console.log('Calculate button clicked'); // Debug
    const num = parseFloat(elements.numberInput.value) || 0;
    const square = num * num;
    updateOutput(`<span class="text-primary">Square of ${num} is ${square}</span>`);
    logEvent(`Calculated square: ${num}² = ${square}`);
};

const changeColor = () => {
    console.log('Color button clicked'); // Debug
    const colors = ['btn-warning', 'btn-danger', 'btn-success', 'btn-primary', 'btn-info'];
    const currentClass = elements.colorButton.className;
    const btnClasses = currentClass.split(' ');
    
    // Find current color class
    let currentColorIndex = -1;
    colors.forEach((color, index) => {
        if (btnClasses.includes(color)) {
            currentColorIndex = index;
        }
    });
    
    // Get next color
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    const nextColor = colors[nextColorIndex];
    
    // Replace color class
    elements.colorButton.className = elements.colorButton.className
        .replace(/btn-\w+/g, '')
        .trim() + ' ' + nextColor + ' w-100';
    
    updateOutput(`<span class="text-warning">Button color changed to ${nextColor.replace('btn-', '')}</span>`);
    logEvent(`Color changed to: ${nextColor}`);
};

const incrementCounter = () => {
    console.log('Counter button clicked'); // Debug
    counter++;
    elements.counterValue.textContent = counter;
    updateOutput(`<span class="text-info">Counter incremented to: ${counter}</span>`);
    logEvent(`Counter incremented to: ${counter}`);
};

const resetAll = () => {
    console.log('Reset button clicked'); // Debug
    counter = 0;
    elements.counterValue.textContent = '0';
    elements.userName.value = '';
    elements.numberInput.value = '5';
    elements.keyInput.value = '';
    elements.colorButton.className = 'btn btn-warning w-100';
    updateOutput('<span class="text-danger">All values have been reset.</span>');
    logEvent('All values reset');
};

// Event Handlers
const handleHover = () => {
    console.log('Mouse entered hover button'); // Debug
    elements.hoverButton.innerHTML = '<i class="fas fa-hand-point-up me-2"></i>Hovering!';
    elements.hoverButton.classList.add('btn-success');
    elements.hoverButton.classList.remove('btn-purple');
    logEvent('Button hovered');
};

const handleHoverOut = () => {
    console.log('Mouse left hover button'); // Debug
    elements.hoverButton.innerHTML = '<i class="fas fa-hand-point-up me-2"></i>Hover Over Me';
    elements.hoverButton.classList.remove('btn-success');
    elements.hoverButton.classList.add('btn-purple');
};

const handleDoubleClick = () => {
    console.log('Double click detected'); // Debug
    elements.doubleClickButton.classList.toggle('btn-danger');
    elements.doubleClickButton.classList.toggle('btn-orange');
    updateOutput('<span class="text-danger">Double click detected!</span>');
    logEvent('Double click event fired');
};
                                                                                                                                                                                                                                                                                                                                                                                                                                            
const handleKeyEvent = (e) => {
    console.log('Key pressed:', e.key); // Debug
    if (e.key !== 'Shift' && e.key !== 'Control' && e.key !== 'Alt' && e.key !== 'Meta') {
        logEvent(`Key pressed: "${e.key}"`);
    }
};

// Setup Event Listeners
const setupEventListeners = () => {
    console.log('Setting up event listeners...'); // Debug
    
    // Function buttons
    elements.greetButton.addEventListener('click', greetUser);
    elements.calculateButton.addEventListener('click', calculateSquare);
    elements.colorButton.addEventListener('click', changeColor);
    elements.counterButton.addEventListener('click', incrementCounter);
    elements.resetButton.addEventListener('click', resetAll);
    
    // Event buttons
    elements.hoverButton.addEventListener('mouseenter', handleHover);
    elements.hoverButton.addEventListener('mouseleave', handleHoverOut);
    elements.doubleClickButton.addEventListener('dblclick', handleDoubleClick);
    
    // Input events
    elements.keyInput.addEventListener('keyup', handleKeyEvent);
    
    // Username input
    elements.userName.addEventListener('input', () => {
        if (elements.userName.value.trim()) {
            logEvent(`Username updated: ${elements.userName.value}`);
        }
    });
    
    console.log('Event listeners set up successfully!'); // Debug
};

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM fully loaded, initializing...'); // Debug
        setupEventListeners();
        logEvent('Application initialized and ready');
    });
} else {
    console.log('DOM already loaded, initializing...'); // Debug
    setupEventListeners();
    logEvent('Application initialized and ready');
}