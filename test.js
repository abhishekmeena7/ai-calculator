// Select input field and all buttons
const inputField = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

// Handle input for calculator
function handleInput(value) {
    if (value === 'AC') {
        inputField.value = ''; // Clear input field
    } else if (value === '=') {
        try {
            inputField.value = eval(inputField.value); // Evaluate the expression
        } catch (error) {
            inputField.value = 'Error'; // Handle invalid expressions
        }
    } else {
        inputField.value += value; // Append value to input
    }
}

// Add click event listeners for buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'G') {
            window.open('https://gemini.google.com', '_blank'); // Open Google Gemini
        } else if (value === 'C' && inputField.value === '') {
            window.open('https://chat.openai.com', '_blank'); // Open ChatGPT
        } else {
            handleInput(value); // Handle regular calculator input
        }
    });
});

// Handle keyboard input
window.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '.', '+', '-', '*', '/', '%', '=', 'Enter', 'Backspace', 'Delete', 'c', 'C'
    ];

    if (validKeys.includes(key)) {
        if (key === 'Enter' || key === '=') {
            handleInput('=');
        } else if (key === 'Backspace' || key === 'Delete') {
            inputField.value = inputField.value.slice(0, -1); // Remove last character
        } else if (key.toLowerCase() === 'c') {
            handleInput('C');
        } else {
            handleInput(key);
        }
    }

    // Navigate to websites using keyboard shortcuts
    if (key.toLowerCase() === 'g') {
        window.open('https://gemini.google.com', '_blank'); // Open Google Gemini
    } else if (key.toLowerCase() === 'c' && inputField.value === '') {
        window.open('https://chat.openai.com', '_blank'); // Open ChatGPT
    }
});
