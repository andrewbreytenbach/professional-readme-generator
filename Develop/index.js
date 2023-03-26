// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
