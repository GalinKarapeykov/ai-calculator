// ============================================
// AI CALCULATOR - JavaScript
// Read through this code! You should understand
// most of it because you know variables, if/else,
// and switch/case.
// ============================================

// Store the current display value (what the user is typing now)
let currentValue = "0";

// Store the previous value (the first number before the operator)
let previousValue = "";

// Store the current operator (+, -, *, /)
let currentOperator = "";

// Track if we just calculated a result (to start fresh on next number)
let justCalculated = false;

// Get references to the display elements
let currentDisplay = document.getElementById("current");
let previousDisplay = document.getElementById("previous");

// ---- FUNCTION: Append a number to the display ----
// This runs when you click any number button (0-9 or .)
function appendNumber(number) {
    // If we just got a result and user types a new number, start fresh
    if (justCalculated) {
        currentValue = "";
        justCalculated = false;
    }

    // If display shows "0" and user types a number, replace the 0
    // But if user types ".", make it "0." instead
    if (currentValue === "0" && number !== ".") {
        currentValue = number;
    }
    // Don't allow two decimal points (like "3.5.2")
    else if (number === "." && currentValue.includes(".")) {
        return; // do nothing, just stop here
    }
    // Otherwise, add the number to the end
    else {
        currentValue = currentValue + number;
    }

    // Update what's shown on screen
    currentDisplay.textContent = currentValue;
}

// ---- FUNCTION: Set the operator (+, -, *, /) ----
// This runs when you click an operator button
function setOperator(operator) {
    // If there's already a previous value and operator, calculate first
    // Example: user types 5 + 3 + ... we calculate 5+3=8 first
    if (previousValue !== "" && currentOperator !== "" && !justCalculated) {
        calculate();
    }

    // Save the current number as the "previous" value
    previousValue = currentValue;
    currentOperator = operator;
    justCalculated = false;

    // Show "8 +" in the small display
    previousDisplay.textContent = previousValue + " " + currentOperator;

    // Reset current display for the next number
    currentValue = "0";
    currentDisplay.textContent = currentValue;
}

// ---- FUNCTION: Calculate the result ----
// This runs when you click the = button
function calculate() {
    // Can't calculate without two numbers and an operator
    if (previousValue === "" || currentOperator === "") {
        return;
    }

    // Convert strings to numbers for math
    // parseFloat turns "5.5" (text) into 5.5 (number)
    let prev = parseFloat(previousValue);
    let curr = parseFloat(currentValue);
    let result;

    // Use switch/case to pick the right math operation
    // THIS IS THE SWITCH/CASE YOU LEARNED!
    switch (currentOperator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            // Can't divide by zero!
            if (curr === 0) {
                result = "Error";
            } else {
                result = prev / curr;
            }
            break;
    }

    // Show the full equation in the small display: "8 + 3 ="
    previousDisplay.textContent = previousValue + " " + currentOperator + " " + currentValue + " =";

    // Round long decimals (like 0.30000000000000004) to 10 decimal places
    if (typeof result === "number") {
        result = parseFloat(result.toFixed(10));
    }

    // Update the main display with the result
    currentValue = result.toString();
    currentDisplay.textContent = currentValue;

    // Reset for next calculation
    previousValue = "";
    currentOperator = "";
    justCalculated = true;
}

// ---- FUNCTION: Clear the display ----
// This runs when you click the C button
function clearDisplay() {
    currentValue = "0";
    previousValue = "";
    currentOperator = "";
    justCalculated = false;
    currentDisplay.textContent = "0";
    previousDisplay.textContent = "";
}
