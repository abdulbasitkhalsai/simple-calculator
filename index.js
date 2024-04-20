#! /usr/bin/env node
import inquirer from "inquirer";
//Prompt number & operator
const answer = await inquirer.prompt([
    {
        message: "Please enter first number",
        name: "firstNumber",
        type: "number",
    },
    {
        message: "Please enter second number",
        name: "secondNumber",
        type: "number"
    },
    {
        message: "Please select operator to perform Operation",
        name: "operator",
        type: "list",
        choices: ["+", "-", "*", "/"]
    }
]);
if (answer.operator === "+") {
    console.log(`Your answer is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "-") {
    console.log(`Your answer is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "*") {
    console.log(`Your answer is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "/") {
    console.log(`Your answer is ${answer.firstNumber / answer.secondNumber}`);
}
