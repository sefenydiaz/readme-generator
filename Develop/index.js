// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

// console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName + ".md", data)
    console.log("File successfully written!")
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            // const questions = [
            // TITLE
            {
                type: 'input',
                message: 'What is your project title?',
                name: 'title',
            },


            // DESCRIPTION
            {
                type: 'input',
                message: 'What is your desired description for this project?',
                name: 'descr',
            },

            // INSTALLATION
            {
                type: 'input',
                message: 'What are the installation instructions for this project?',
                name: 'install',
            },

            // USAGE
            {
                type: 'input',
                message: 'What is the usage information for this project?',
                name: 'usage',
            },

            // LICENSE --> included in other js file?
            {
                type: 'list',
                message: 'What license does your project use?',
                name: 'license',
                choices: ['MIT', 'Apache', 'none']
            },
            // CONTRIBUTING
            {
                type: 'input',
                message: 'What are the contribution guidelines for this project?',
                name: 'contribute',
            },

            // TESTS
            {
                type: 'input',
                message: 'What are the test instructions for this project?',
                name: 'test',
            },


            // QUESTIONS
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
            },

            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },


        ])
        .then((answers) => {
            console.log(answers)
            const markdown = generateMarkdown(answers)
            console.log(markdown)
            writeToFile("README", markdown)
        })
}

// Function call to initialize app
init();
