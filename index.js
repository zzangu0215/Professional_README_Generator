const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
  {
    type: 'input',
    message: 'What is your project title? ',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a brief description of your project: ',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Provide installation instructions if you have any: ',
    name: 'installation',
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

function writeREADME() {

  inquirer
    .prompt(questions)
    .then((data) => {
      const generateMD = generateMarkdown(data);
      fs.writeFile('./sample/README.md', generateMD, (err) => err ? console.log(err):console.log('Success ✔'));
    })

}

writeREADME();
