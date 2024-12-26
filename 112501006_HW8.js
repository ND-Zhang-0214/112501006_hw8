function getInputs() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    return { number1, number2, operator };
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return (a / b).toFixed(2);
}

function performCalculation() {
    const { number1, number2, operator } = getInputs();
    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = "Please enter valid numbers";
    } else {
        switch (operator) {
            case '+':
                result = add(number1, number2);
                break;
            case '-':
                result = subtract(number1, number2);
                break;
            case '*':
                result = multiply(number1, number2);
                break;
            case '/':
                result = divide(number1, number2);
                break;
            default:
                result = "Invalid operator";
        }
    }

    document.getElementById('result').textContent = `Result = ${result}`;
}
