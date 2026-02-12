// Function that takes a number and returns "positive", "negative", or "zero"
function checkNumber(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

// Example usage:
console.log(checkNumber(5));   // Output: "positive"
console.log(checkNumber(-3));  // Output: "negative"
console.log(checkNumber(0));   // Output: "zero"

// Function that takes a day number (1-7) and returns the day name using switch
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day number";
    }
}

// Create an array of 5 fruits and log each one to the console
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
fruits.forEach(fruit => console.log(fruit));


function greet(name) {
    console.log("Hello, " + name)
    if (name === "Galin") {
        console.log("Welcome back, Galin!");
    }
}