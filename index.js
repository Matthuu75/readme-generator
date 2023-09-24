const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Title of project:',
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
        message: 'Installation instructions:',
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
        name: 'contributions',
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
        choices: ['MIT', 'Apache2.0', 'None'],
        default: ['None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub Username:',
        validate: input => approveInput(input, 'Add your GitHub username.')
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address:',
        validate: input => approveInput(input, 'Add your email address.')
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), () => {
        console.log(`Successfully wrote ${fileName}`);
        })
};

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md', data)
        })
}

init();
