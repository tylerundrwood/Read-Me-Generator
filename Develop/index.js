// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdownFile = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
// ADD VALIDATION TO QUESTIONS!!!!!!!
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("please enter a project title")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log("please enter a project description")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please list any install instructions for your projects.",
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log("please enter installation steps. if none enter none")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please list how to use your project.",
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log("please enter usage information.")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributions",
        message: "Please list any contributors to this project.",
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log("please enter any contributers. if none enter none")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Please list any tests for this project.",
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log("please enter any tests for your project. if none enter none")
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Does your project have a license?",
        choices: ["None", "MIT", "Apache"],
        validate: licenseInput => {
            if(licenseInput) {
                return true;
            } else {
                console.log("please enter a project license")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
        validate: gitInput => {
            if(gitInput) {
                return true;
            } else {
                console.log("please enter your github. if none enter none")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("please enter your email")
                return false;
            }
        }
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
