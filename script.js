function operate(firstNumber, lastNumber, operator) {
    switch (operator) {
        case "+":
            return add(firstNumber, lastNumber);

        case "-":
            return subtract(firstNumber, lastNumber);

        case "*":
            return multiply(firstNumber, lastNumber);

        case "/":
            return divide(firstNumber, lastNumber);
    }
}

let add = (n1, n2) => n1 + n2;
let subtract = (n1, n2) => n1 - n2;
let multiply = (n1, n2) => n1 * n2;
let divide = (n1, n2) => n1 / n2;

let buttons = document.querySelectorAll(".small-b");
let disply = document.querySelector(".disply h1");
console.log(disply);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        disply.textContent += button.dataset.num;
    });
});

let firstNumber = 0;
let lastNumber = 0;
let operator;
