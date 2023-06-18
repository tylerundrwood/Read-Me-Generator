// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdownFile = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
// ADD VALIDATION TO QUESTIONS!!!!!!!
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "installInstructions",
        message: "Please list any install instructions for your projects."
    },
    {
        type: "input",
        name: "projectUsage",
        message: "Please list how to use your project."
    },
    {
        type: "input",
        name: "projectContributors",
        message: "Please list any contributors to this project."
    },
    {
        type: "input",
        name: "projectTests",
        message: "Please list any tests for this project."
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Does your project have a license?",
        choices: ["None", "MIT", "Apache"]
    },
    {
        type: "input",
        name: "gitHubUserName",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('generatedReadMe.MD', data, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('Success!')
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
    let fileName = generateMarkdownFile(data);   
    writeToFile(fileName);
    })
}
// Function call to initialize app
init();
