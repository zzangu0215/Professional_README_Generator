// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your project title? ',
    name: 'project-title',
  },
  {
    type: 'input',
    message: 'Provide a brief description of your project: ',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Provide installation instructions if you have any: ',
    name: 'installation-instructions',
  },
  {
    type: 'input',
    message: 'What is the usage of your project? ',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Provide contributors of your project if you have any: ',
    name: 'contributors',
  },
  {
    type: 'input',
    message: 'Provide test instructions of your project if you have any: ',
    name: 'instructions',
  },
  {
    type: 'list',
    message: 'Choose the appropriate license for your project: ',
    name: 'license',
    choices: ['MIT', 'Mozilla', 'ISC', 'IBM', 'Eclipse', 'Apache'],
  },
  {
    type: 'input',
    message: 'What is your GitHub username? ',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your primary email? ',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
