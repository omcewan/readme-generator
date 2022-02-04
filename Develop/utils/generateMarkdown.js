// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateContribution(contribution) {
  if (!contribution) {
    return "";
  }
  return `## How To Contribute
${contribution}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readMeData) {
  const { title, description, languages, link, contribution } = readMeData;
  return `# ${title}

## Purpose
${description}

## Github Repo
${link}

${generateContribution(contribution)}

`;
}

module.exports = generateMarkdown;
