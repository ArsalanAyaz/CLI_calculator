import inquirer from "inquirer";
//import chalk from "chalk";
///calculator
/*const answer: {

    num1: number;
    num2: number;
    operator: string;


}= await inquirer.prompt([


    {

        type: "number",
        name:"Num1",
        message:"please enter your first number:",
        },

{

type: "number",
name:"Num2",
message:"please enter your second number:",
},

{

type: "list",
name:"operator",
choices: ["*", "+", "-","/"]
message:"select operator:",

},



]);

console.log(answer);*/
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "Num1",
        message: "Please enter your first number:",
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select operator:",
    },
    {
        type: "number",
        name: "Num2",
        message: "Please enter your second number:",
    },
]);
let { Num1, Num2, operator } = answer;
if (Num1 && Num2 && operator) {
    let result = 0;
    if (operator === "*") {
        result = Num1 * Num2;
    }
    else if (operator === "+") {
        result = Num1 + Num2;
    }
    else if (operator === "-") {
        result = Num1 - Num2;
    }
    else if (operator === "/") {
        result = Num1 / Num2;
    }
    console.log("Your result is :", result);
}
;
