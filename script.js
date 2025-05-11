function calculate(){
    const number1 = parseFloat(document.getElementById('number1').value);
    if (isNaN(number1) || number1 <= 0) {
        document.getElementById('result').innerText = "Please enter a valid number for the first input.";
        return;
    }
    const number2 = parseFloat(document.getElementById('number2').value);
    if (isNaN(number2) || number2 <= 0) {
        document.getElementById('result').innerText = "Please enter a valid number for the second input.";
        return;
    }
    const operation = document.getElementById('operation').value;
    const resultElement = document.getElementById('result');
    let result;
    
    switch (operation) {
        case "add":
            result = number1 + number2;
            break;
        case "subtract":
            result = number1 - number2;
            break;
        case "multiply":
            result = number1 * number2;
            break;
        case "divide":
            if (number2 == 0 || number1 == 0) {
                result = "Cannot divide by zero";
            } else {
                result = number1 / number2;
            }
            break;
        default:
            break;
    }
    resultElement.innerText = `Result: ${result}`;
    resultElement.style.display = "block";
}