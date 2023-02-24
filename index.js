import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
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
])
  
.then ((answers) => {
    
    const readme =

  `# ${answers.title}

  ${
    answers.license !== 'None'
      ? `![License: ${answers.license}](https://img.shields.io/badge/License-${encodeURIComponent(
          answers.license
        )}-green.svg)`
      : ''
  }

  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ${
    answers.license !== 'None'
      ? `- [License](#license)`
      : ''
  }`

  fs.writeFile('README.md', readme, (err) => {
    if (err) throw err;
    console.log('README.md file created successfully!');
  });

//.catch((err) => {
  //console.error(err);

//});

});

