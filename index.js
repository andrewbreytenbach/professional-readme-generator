// These are the packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// This is the array of questions that will ask for the user input
const questions = [
{   
  type: 'input',    
  message: 'What is the title of your project?',    
  name: 'title'  
},  
{   
  type: 'input',    
  message: 'Please enter a brief description of your project:',    
  name: 'description'  
},  
{    
  type: 'input',    
  message: 'What are the installation instructions for your project?',    
  name: 'installation'  
},  
{    
  type: 'input',    
  message: 'What are the usage instructions for your project?',    
  name: 'usage'  
},  
{    
  type: 'list',   
  message: 'Which license would you like to use for your project?',    
  name: 'license',    
  choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
{
  type: 'input',
  message: 'What are the contribution guidelines for your project?',
  name: 'contributing'
},
{
  type: 'input',
  message: 'What are the test instructions for your project?',
  name: 'tests'
},
{
  type: 'input',
  message: 'What is your GitHub username?',
  name: 'github'
},
{
  type: 'input',
  message: 'What is your email address?',
  name: 'email'
}
];

// This function writes the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('newREADME.md file has been created successfully!')
  );
}

// This function will initialize the app
function init() {
    inquirer.prompt(questions)
      .then((data) => {
        const readme = `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  [![License](https://img.shields.io/badge/license-${data.license}-green)](https://opensource.org/licenses/${data.license})
  This project is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions or feedback, please contact me via email at ${data.email}. You can also follow my GitHub profile at [https://github.com/${data.github}](https://github.com/${data.github}).
  
  `;
        writeToFile('newREADME.md', readme);
      })
      .catch((err) => console.error(err));
  }
  
// Function call to initialize app
init();
