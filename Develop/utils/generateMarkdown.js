// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge
  switch (license) {
    case "MIT":
      badge = "![license badge](https://img.shields.io/badge/License-MIT-blue)"
      break
    case "Apache":
      badge = "![license badge](https://img.shields.io/badge/License-Apache-red)"
    default:
      return ""

  }
  return `[${badge}](license.md)`
}

// returns an empty string for badge if there is no license
// function noBadge() {
//   return "";
// }
// const noLicenseBadge = noBadge();
// console.log(noLicenseBadge);

// TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // returns an empty string for link if there is no license
// function noLink() {
//   return "";
// }
// const noLicenseLink = noLink();
// console.log(noLicenseLink)

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// // returns an empty string for section if there is no license
// function noSection() {
//   return "";
// }
// const noLicenseSection = noSection();
// console.log(noLicenseSection)

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  + [Description](#description)
  + [Installation](#installation)
  + [Usage](#usage)
  + [License](#license)
  + [Contributing](#contributing)
  + [Tests](#tests)
  + [Questions](#questions)


  ## Description
   ${data.descr}

  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  ${data.license}

  ## Contributing 
  ${data.contribute} 

  ## Tests
   ${data.test}

  ## Questions 
  <a href="https://github.com/${data.username}">${data.username}</a>
  <a href="mailto:${data.email}">${data.email}</a>

`;
}

module.exports = generateMarkdown;

// const puppy ={title:"boop", descr: "beep"}
// generateMarkdown(puppy)