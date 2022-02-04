// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
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
    type: "confirm",
    name: "confirmContribution",
    message: "Would you like to add how to contribute to the project?",
    default: true,
  },
  {
    type: "input",
    name: "contribution",
    message: "Please describe how to contribute to the porject",
    when: ({ confirmContribution }) => {
      if (confirmContribution) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
const writeToFile = (READMEmd) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", READMEmd, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

// TODO: Create a function to initialize app
const init = () => inquirer.prompt(questions);

// Function call to initialize app
init()
  .then((readMeData) => {
    return generateMarkdown(readMeData);
  })
  .then((READMEmd) => {
    console.log(READMEmd);
    return writeToFile(READMEmd);
  })
  .catch((err) => {
    throw err;
  });
