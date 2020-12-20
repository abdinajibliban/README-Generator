const inquirer = require("inquirer");
const fs = require('fs');

const generateMarkdown = require('./develop/generateMarkdown');

// array of questions for user

const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "Title"
}, {
    type: "input",
    message: "How would you describe this project?",
    name: "Description"
}, {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What do you need to install in order to run this app?",
    name: "Installation"
}, {
    type: "input",
    message: "How do I use the app? Where do I type commands?",
    name: "Usage"
}, {
    type: "input",
    message: "Which license do you want to use?",
    name: "License"
}, {
    type: "input",
    message: "Enter contributing guidelines",
    name: "Contributing"
}, {
    type: "input",
    message: "Enter the command to test this app?",
    name: "Tests"
}, {
    type: "input",
    message: "Provide contact info for inquiries by pressing enter.",
    name: "Questions"
}, {
    type: 'input',
    message: 'What is your Github username?',
    name: 'Username'
}, {
    type: 'input',
    message: 'What is your email address?',
    name: 'Email'
},

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)

        })

}

// function call to initialize program
init();
