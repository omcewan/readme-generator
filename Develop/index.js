// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const { writeToFile } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project name",
    message: "What is the name of your project? (Required)",
    validate: (projectName) => {
      if (projectName) {
        return true;
      } else {
        console.log("Please enter a name for your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message:
      "Please describe your project? What is it about? Why did you make it? And how was it made? (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a basic description for your project!");
        return false;
      }
    },
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
  {
    type: "input",
    name: "link",
    message: "Enter the GitHub link to your project. (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
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
