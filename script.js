const number1 = prompt("Welcome to problem solver. Enter your first number");
const operator = prompt("choose operation:\n+  (Add)  \n-  (subtract)  \n/   (Divide)  \n*   (Multiply) ");
const number2 = prompt ("Enter your second Number: ");

let result;
if (operator == "*") {
    result = number1 * number2;
}
else if (operator == "-") {
    result = number1 - number2;
}
else if (operator == "/") {
    result = number1 / number2;
}
else if (operator == "+") {
    result = number1 + number2;
}
alert(result);