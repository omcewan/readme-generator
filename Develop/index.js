// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project name",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please describe your project? What is it about? Why did you make? And how was it made?",
  },
  {
    type: "checkbox",
    name: "languages",
    message: "What did you build this project with? (Check all that apply)",
    choices: [
      "JavaScript",
      "HTML",
      "CSS",
      "ES6",
      "jQuery",
      "Bootstrap",
      "Node",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const promptUser = () => inquirer.prompt(questions);
promptUser(questions).then((data) => console.log(data));
