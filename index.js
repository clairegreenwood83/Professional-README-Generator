const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Provide a brief description of your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'Choose a license for your project:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README2.md", markdown);
      console.log("README2.md file created successfully!");
    })
    .catch((error) => {
      console.error(error);
    });

}

// function call to initialize program
init();


