document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let firstOperand = null;
    let operator = null;

    function clearDisplay() {
        display.textContent = "0";
        currentInput = "";
        firstOperand = null;
        operator = null;
    }

    clearDisplay();

    function appendInput(value) {
        currentInput += value;
        display.textContent = currentInput;
    }

    function handleOperator(newOperator) {
        if (operator !== null) {
            calculate();
        }
        firstOperand = parseFloat(currentInput);
        operator = newOperator;
        currentInput = "";
    }

    function calculate() {
        if (operator === "+") {
            currentInput = (firstOperand + parseFloat(currentInput)).toString();
        } else if (operator === "-") {
            currentInput = (firstOperand - parseFloat(currentInput)).toString();
        } else if (operator === "*") {
            currentInput = (firstOperand * parseFloat(currentInput)).toString();
        } else if (operator === "/") {
            if (parseFloat(currentInput) === 0) {
                currentInput = "Error";
            } else {
                currentInput = (firstOperand / parseFloat(currentInput)).toString();
            }
        }
        operator = null;
        firstOperand = null;
    }

    document.querySelectorAll("button").forEach(function (button) {
        button.addEventListener("click", function () {
            const value = button.textContent;
            if (!isNaN(value) || value === ".") {
                appendInput(value);
            } else if (value === "C") {
                clearDisplay();
            } else if (value === "=") {
                if (operator !== null) {
                    calculate();
                    display.textContent = currentInput;
                }
            } else {
                handleOperator(value);
            }
        });
    });
});
