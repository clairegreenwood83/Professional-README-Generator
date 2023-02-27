# Professional-README-Generator

  ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Description
  
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project. This project created a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.

### User Story

As a developer, I want a README generator so that I can quickly create a professional README for a new project


### The acceptance criteria for this project were:

- Create a command-line application that accepts user input.
- When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    - The title of my project
    - Sections entitled: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions 

- When a user enters the project title then it is displayed as the title of the README
- When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is     added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice   is added to the section of the README entitled License that explains which license the application is covered under
- When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
- When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with     additional questions
- When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README
  
## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
 
## Installation

- Clone the repository to your remote editor. 
- Install the inquirer and added it to the list of dependencies by running `npm i inquirer --save`.

## Usage

- The application can be invoked by using the command node index.js in the terminal. 
- Answer the prompts that follow. The prompts appear as shown in the following image of a terminal running the application:
![screenshot of terminal](https://user-images.githubusercontent.com/118351853/221629473-89938be6-ada7-4c3e-8042-50d4fc0bf9cc.jpeg)

- A README file will be created on success. 
- The README file will be generated in mark down syntax so you can copy and paste that code into your project.
- The following video shows how to use the application:



## License

MIT

## Questions

My GitHub profile can be accessed here: https://github.com/clairegreenwood83.  
For additional instructions please contact me at cg.clairegreenwood@gmail.com.
 
