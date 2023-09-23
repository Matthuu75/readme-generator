// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

function approveInput(input, message) {
    if (input) {
        return true;
    } else {
        console.log(message)
        return false;
    }
}

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of project?:',
        validate: input => approveInput(input, 'Add a title to your project')
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of project:',
        validate: input => approveInput(input, 'Add a description of your project')
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install:',
        validate: input => approveInput(input, 'Add installation instructions for your project')
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use:',
        validate: input => approveInput(input, 'Add usage instructions project')
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributions:',
        validate: input => approveInput(input, 'Add any contributions to your project')
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Testing the project:',
        validate: input => approveInput(input, 'Add testing procedures for your project')
    },
    {
        type: 'list',
        name: 'license',
        message: 'Project License:',
        choices: ['MIT', 'Apache 2.0', 'None'],
        default: ['None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub Username:',
        validate: input => approveInput(input, 'Add your GitHub username.')
    }



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
