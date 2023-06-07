// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// returns an empty string if there is no license
function noBadge() {
  return "";
}
const noLicenseBadge = noBadge();
console.log(noLicenseBadge);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// returns an empty string if there is no license
function noLink() {
  return "";
}
const noLicenseLink = noLink();
console.log(noLicenseLink)

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// returns an empty string if there is no license
function noSection() {
  return "";
}
const noLicenseSection = noSection();
console.log(noLicenseSection)

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description ${data.description}
  ## Table of Contents ${data.table}
  ## Installation ${data.installation}
  ## Usage ${data.usage}
  ## License ${data.license}
  ## Contributing ${data.contributing} 
  ## Tests ${data.tests}
  ## Questions ${data.questions}

`;
}

module.exports = generateMarkdown;
