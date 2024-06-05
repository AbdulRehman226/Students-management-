#!/usr/bin/env node

import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non- empty value.";
        },
    },
    {
        name: "Courses",
        type: "list",
        message: "Select the coure to enrolled",
        choices: ["MS.Office", "HTML", "Javascript", "Typescript", "Python"],
    },
]);
const tutionFee = {
    "MS.Office": 20000,
    HTML: 25000,
    Javascript: 30000,
    Typescript: 40000,
    Python: 50000,
};
console.log(`\n Tution fee ${tutionFee[answer.Courses]}-\n`);
console.log(`Balance:${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank transfer", "Easypisa", "jazzCash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== " ") {
                return true;
            }
            return "Please enter a non- empty value.";
        },
    },
]);
console.log(`\n You Select payment method: ${paymentType.payment}\n`);
const tutionfee = tutionFee[answer.Courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionfee === paymentAmount) {
    console.log(`Congratutions, you have sucessfully enrolled in ${answer.Courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"],
        },
    ]);
    if (ans.select === "View Status") {
        console.log("\n*******Status*******\n");
        console.log(`Student Name: ${answer.student}`);
        console.log(`Studen ID: ${randomNumber}`);
        console.log(`Course: ${answer.Courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${(myBalance += paymentAmount)}`);
    }
    else {
        console.log(`\nExiting Student Management System\n`);
    }
}
else {
    console.log("Invalid amount due to course\n");
}
