function calculate(num1, num2, operator) {
  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Error: Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}

// Test examples
console.log(calculate(10, 5, '+'));  // 15
console.log(calculate(10, 5, '-'));  // 5
console.log(calculate(10, 5, '*'));  // 50
console.log(calculate(10, 5, '/'));  // 2
console.log(calculate(10, 0, '/'));  // Error: Cannot divide by zero
console.log(calculate(10, 5, '%'));  // Error: Invalid operator