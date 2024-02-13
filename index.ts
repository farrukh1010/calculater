

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
const sleep =()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000)
    })
}
async function welcome(){
    let rainbowTitle = chalkAnimation.rainbow('lets start calculation');
    await sleep();
    rainbowTitle.stop();
    console.log(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
                                                                          

    }
    
    `)
  
}
welcome()

async function askQuestions() {
    const answers = await inquirer.prompt([
            {
                type: "list",
                name: "operator",
                message: "Which operation you want to perform? \n",
                choices: ["Addition", "Subtraction", "Multiplication", "Division"]
            }, {
                type: "number",
                name: "num1",
                message: "Enter first number"
            }, {
                type: "number",
                name: "num2",
                message: "Enter second number "
            }

        ])

    if (answers.operator == "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    if (answers.operator == "Subtraction") {
        console.log(chalk.yellowBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`))
    }
    if (answers.operator == "Multiplication") {
        console.log(chalk.blue(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`))
    }
    if (answers.operator == "Division") {
        console.log(chalk.red(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`))
    }

};
async function startAgain() {
    do {
        await askQuestions();
        var again = await inquirer
            .prompt({
                type: "input",
                name: "restart",
                message: "Do you want to continue press y or n:"
            })
    }
    while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "Yes");
}
startAgain();