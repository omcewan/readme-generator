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
    if (!contribution) {
      return "";
    }
    return `
## How To Contribute
${contribution}`;
  },

  languages(languages) {
    if (!languages) {
      return "";
    }
    return `
## Built With
 * ${languages.join("\n * ")}`;
  },

  table(tableOfContents) {
    if (!tableOfContents) {
      return "";
    }
    return `
## Table of Contents
 * ${tableOfContents.join("\n * ")}`;
  },
  installation(installation) {
    if (!installation) {
      return "";
    }
    return `
## Installation
${installation}`;
  },
  usage(usage) {
    if (!usage) {
      return "";
    }
    return `
## Usage
${usage}`;
  },
  license(license) {
    if (!license) {
      return "";
    }
    return `
## License
${license}`;
  },
  contribution(contribution) {
    if (!contribution) {
      return "";
    }
    return `
## Contribution
${contribution}`;
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
    questions,
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

For additional information about the project, please find it at the following [Github Page](www.github.com/${githubUsername}).
Also if you have additional questions please contact me at [email](${email}).
`;
}

module.exports = generateMarkdown;
