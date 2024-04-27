import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to the Arbab Khan - Currency Converter \n"));
//Exchange currency rates ,
let exchange_rate = {
    "USD": 1,
    "EUR": 298.52,
    "JYP": 1.76,
    "CAD": 203.99,
    "AUD": 182.35,
    "PKR": 279.90,
    "TRY": 8.59,
    "SAR": 74.41,
};
// Promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from : ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "TYR", "SAR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into : ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "TYR", "SAR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert: "
    }
]);
//Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//Formula of Conversion
let base_amount = amount / from_amount;
let conversion_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${chalk.bgGreen.bold(conversion_amount.toFixed(2))}`);
