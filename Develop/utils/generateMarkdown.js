// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

let optionalSections = {
  contribution(contribution) {
    if (contribution) {
      return `
## How To Contribute
${contribution}`;
    }
  },

  languages(languages) {
    if (languages) {
      return `
## Built With
 * ${languages.join("\n * ")}`;
    }
  },

  table(tableOfContents) {
    if (tableOfContents) {
      return `
## Table of Contents
 * ${tableOfContents
   .map((element) => `[${element}](#${element})`)
   .join("\n * ")}`;
    }
  },

  installation(installation) {
    if (installation) {
      return `
## Installation
${installation}`;
    }
  },

  usage(usage) {
    if (usage) {
      return `
## Usage
${usage}`;
    }
  },

  license(license) {
    if (license) {
      return `
## License
${license}`;
    }
  },

  contribution(contribution) {
    if (contribution) {
      return `
## Contribution
${contribution}`;
    }
  },
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(readMeData) {
  const {
    title,
    description,
    languages,
    tableOfContents,
    installation,
    usage,
    license,
    contribution,
    githubUsername,
    email,
  } = readMeData;
  return `# ${title}

## Description
${description}
${optionalSections.languages(languages)}
${optionalSections.table(tableOfContents)}
${optionalSections.installation(installation)}
${optionalSections.usage(usage)}
${optionalSections.license(license)}
${optionalSections.contribution(contribution)}

## Questions
For additional information about the project, please find it at the following www.github.com/${githubUsername}.
Also if you have additional questions please contact me at ${email}.
`;
}

module.exports = generateMarkdown;
