// TODO: Create a function that returns a license badge based on which license is passed in

const ListPrompt = require("inquirer/lib/prompts/list");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache License 2.0") {
    return "For more details about licensing,use this link: https://choosealicense.com/licenses/apache-2.0/"
  }
  if (license == "GNU GPLv3") {
    return "For more details about licensing,use this link: https://choosealicense.com/licenses/gpl-3.0/"
  }
  if (license == "MIT") {
    return "For more details about licensing,use this link: https://choosealicense.com/licenses/mit/"
  }
  if (license == "ISC License") {
    return "For more details about licensing,use this link: https://choosealicense.com/licenses/isc/"
  }
  if (!license) {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License
This application is covered under the ${license}`;
  } else {
    return ''
  }
}

let optionalSections = {
  contribution(contribution) {
    if (contribution) {
      return `
## How To Contribute
${contribution}`;
    } else {
      return ''
    }
  },

  languages(languages) {
    if (languages) {
      return `
## Built With
 * ${languages.join("\n * ")}`;
    } else {
      return ''
    }
  },

  table(tableOfContents) {
    if (tableOfContents) {
      return `
## Table of Contents
 * ${tableOfContents
   .map((element) => `[${element}](#${element})`)
   .join("\n * ")}`;
    } else {
      return ''
    }
  },

  installation(installation) {
    if (installation) {
      return `
## Installation
${installation}`;
    } else {
      return ''
    }
  },

  usage(usage) {
    if (usage) {
      return `
## Usage
${usage}`;
    } else {
      return ''
    }
  },

  contribution(contribution) {
    if (contribution) {
      return `
## Contribution
${contribution}`;
    } else {
      return ''
    }
  },

  screenshot(screenshot) {
    if (screenshot) {
      return `
## ScreenShot
![This is a screenshot](${screenshot})`
    }
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(readMeData) {
  const {
    title,
    tableOfContents,
    description,
    languages,
    screenshot,
    installation,
    usage,
    contribution,
    license,
    githubUsername,
    email,
  } = readMeData;
  return `# ${title}
${optionalSections.table(tableOfContents)}

## Description
${description}
${optionalSections.languages(languages)}
${optionalSections.screenshot(screenshot)}
${optionalSections.installation(installation)}
${optionalSections.usage(usage)}
${optionalSections.contribution(contribution)}
${renderLicenseSection(license)}
${renderLicenseLink(license)}

## Questions
For additional information about the project, please find it at the following www.github.com/${githubUsername}.
Also if you have additional questions please contact me at ${email}.
`;
}

module.exports = generateMarkdown;
