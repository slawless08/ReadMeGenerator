// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "Provide your GitHub link.",
    "What is your email?",
    "What is the project title?",
    "Provide a descirption of your application.",
    "Explain how to install your application.",
    "Explain the how to use your application.",
    "Choose a license from the oprtionas below: ",
    "How can others contribute to your project?",
    "If tests were used, describe them here.",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Created!"));
}

// TODO: Create a function to initialize app
function init() {
    console.log("Hello world!")
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'GitHubUsername',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'GitHubLink',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'email',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'title',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[6],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[7],
                choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'none'],
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[8],
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[9],
            }
        ])
        .then((answers) => {
            const myReadMe = generateMarkdown(answers);
            console.log(answers);
            writeToFile("README.MD", myReadMe);
        })
        
}

// Function call to initialize app
init();
