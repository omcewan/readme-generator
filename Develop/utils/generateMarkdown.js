// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache License 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache%20License%202.0-brightgreen)";
  }
  if (license == "GNU GPLv3") {
    return "![License](https://img.shields.io/badge/License-GNU%20GPLv3-yellowgreen)";
  }
  if (license == "MIT") {
    return "![License](https://img.shields.io/badge/License-MIT-blue)";
  }
  if (license == "ISC License") {
    return "![License](https://img.shields.io/badge/License-ISC%20License-red)";
  }
  if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache License 2.0") {
    return "For more details about licensing, use this link: https://choosealicense.com/licenses/apache-2.0/.";
  }
  if (license == "GNU GPLv3") {
    return "For more details about licensing, use this link: https://choosealicense.com/licenses/gpl-3.0/.";
  }
  if (license == "MIT") {
    return "For more details about licensing, use this link: https://choosealicense.com/licenses/mit/.";
  }
  if (license == "ISC License") {
    return "For more details about licensing, use this link: https://choosealicense.com/licenses/isc/.";
  }
  if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License
This application is covered under the ${license}.`;
  } else {
    return "";
  }
}

function renderLanguageSection(languages) {
  if (languages) {
    return `
## Built With
 * ${languages.join("\n * ")}`;
  } else {
    return "";
  }
}

function renderTableSection(tableOfContents) {
  if (tableOfContents) {
    return `
## Table of Contents
 * ${tableOfContents
   .map((element) => `[${element}](#${element})`)
   .join("\n * ")}`;
  } else {
    return "";
  }
}

function renderInstallationSection(installation) {
  if (installation) {
    return `
## Installation
${installation}`;
  } else {
    return "";
  }
}

function renderUsageSection(usage) {
  if (usage) {
    return `
## Usage
${usage}`;
  } else {
    return "";
  }
}

function renderContributionSection(contribution) {
  if (contribution) {
    return `
## Contribution
${contribution}`;
  } else {
    return "";
  }
}

function renderScreenshotSection(screenshot) {
  if (screenshot) {
    return `
## ScreenShot
![This is a screenshot](${screenshot})`;
  } else {
    return "";
  }
}

function renderTestsSection(tests) {
  if (tests) {
    return `
## Tests
${tests}`;
  } else {
    return "";
  }
}

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
    tests,
    license,
    githubUsername,
    email,
  } = readMeData;
  return `# ${title}
${renderLicenseBadge(license)}
${renderTableSection(tableOfContents)}

## Description
${description}
${renderLanguageSection(languages)}
${renderScreenshotSection(screenshot)}
${renderInstallationSection(installation)}
${renderUsageSection(usage)}
${renderContributionSection(contribution)}
${renderTestsSection(tests)}
${renderLicenseSection(license)}
${renderLicenseLink(license)}

## Questions
For additional information about the project, please find it at the following www.github.com/${githubUsername}.
Also if you have additional questions please contact me at ${email}.
`;
}

module.exports = generateMarkdown;
