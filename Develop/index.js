// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your application?(Required)",
    validate: (projectName) => {
      if (projectName) {
        return true;
      } else {
        console.log(
          "Please enter a name for your application!(Required)"
        );
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmTableOfContents",
    message: "Would you like to include a Table of Contents?",
    default: false,
  },

  {
    type: "checkbox",
    name: "tableOfContents",
    message:
      "Choose what sections you would like to add to the Table of Contents",
    choices: [
      "Description",
      "Installation",
      "Usage",
      "Contribution",
      "Tests",
      "License",
      "Questions",
    ],
    when: ({ confirmTableOfContents }) => {
      if (confirmTableOfContents) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "input",
    name: "description",
    message:
      "Please briefly describe your application? What is it about? Why did you make it? (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log(
          "Please enter a basic description for your application!"
        );
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmTech",
    message:
      "Would you like to include technologies used to build the application?",
    default: false,
  },

  {
    type: "checkbox",
    name: "languages",
    message: "What did you use to build this application? (Check all that apply)",
    choices: [
      "JavaScript",
      "HTML",
      "CSS",
      "ES6",
      "jQuery",
      "Bootstrap",
      "Node",
    ],
    when: ({ confirmTech }) => {
      if (confirmTech) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmImage",
    message:
      "Would you like to include an image of the application?",
    default: false, 
  },

  {
    type: "input",
    name: "screenshot",
    message: "Please enter the relative path to the image",
    when: ({ confirmImage }) => {
      if (confirmImage) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmInstallation",
    message:
      "Would you like to add how to install the application? If you chose to add a Table of Contents with an Installation Section, please add how to install the application!",
    default: false,
  },

  {
    type: "input",
    name: "installation",
    message: "Please enter a desccription of how to install the application",
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmUsage",
    message:
      "Would you like to add how to use the application? If you chose to add a Table of Contents with an Usage Section, please add how to use the application!",
    default: false,
  },

  {
    type: "input",
    name: "usage",
    message: "Please enter a desccription of how to use the application",
    when: ({ confirmUsage }) => {
      if (confirmUsage) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmContribution",
    message:
      "Would you like to add how to contribute to the application? If you chose to add a Table of Contents with a Contribution Section, please add how to contribute the application!",
    default: false,
  },

  {
    type: "input",
    name: "contribution",
    message: "Please describe how to contribute to the application",
    when: ({ confirmContribution }) => {
      if (confirmContribution) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmTests",
    message:
      "Would you like to add what tests were done on the application? If you chose to add a Table of Contents with a Tests Section, please describe the Tests!",
    default: false,
  },

  {
    type: "checkbox",
    name: "license",
    message: "Please choose a license for the porject",
    choices: [],
    when: ({ confirmLicense }) => {
      if (confirmLicense) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "confirmLicense",
    message:
      "Would you like to add a license to the project/application? If you chose to add a Table of Contents with a license Section, please add a license to the project!",
    default: false,
  },

  {
    type: "checkbox",
    name: "license",
    message: "Please choose a license for the porject",
    choices: [],
    when: ({ confirmLicense }) => {
      if (confirmLicense) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "input",
    name: "githubUsername",
    message: "Please enter your github username.(Required)",
    validate: (githubUsername) => {
      if (githubUsername) {
        return true;
      } else {
        console.log("Please enter your github username!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "email",
    message: "Please enter your email address!(Required)",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
const writeToFile = (READMEmd) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("../README.md", READMEmd, (err) => {
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
