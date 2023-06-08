// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
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


];
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
