import inquirer from "inquirer";
import chalk from "chalk";


let answer: {
    Num1: number;
    Num2: number;
    operator: string;
  } = await inquirer.prompt([
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
  
  let {Num1, Num2, operator} = answer;

  if (Num1 && Num2 && operator){


       
    let result:number=0;

    if (operator==="*"){result=Num1*Num2}
    else if (operator==="+"){result=Num1+Num2}
    else if (operator==="-"){result=Num1-Num2}
    else if (operator==="/"){result=Num1/Num2}
    
 

    console.log("Your result is :",result);

  };

  






  