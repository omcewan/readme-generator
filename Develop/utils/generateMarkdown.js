// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function builtWith(languages) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, languages, link } = data;
  return `# ${title}
  
## Purpose
${description}

## Built With

## Github Repo
${link}
`;
}

module.exports = generateMarkdown;
