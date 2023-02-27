// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

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

  
  ${
 `- [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  `
   }
 
  ## Installation

   ${answers.installation}

  ## Usage

   ${answers.usage}

  ## License

   ${answers.license}

  ## Contribution

   ${answers.contribution}

  ## Tests

   ${answers.tests}

   ## Questions

   ${`My GitHub profile can be accessed here: https://github.com/ + ${answers.github}`}
   ${`For additional instructions please contact me at ${answers.email}`}
 `
}

module.exports = generateMarkdown;

