/*// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
*/
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  https://github.com/${data.Github_username}/${data.project}
  # Description
  ${data.description}
  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  # Installation
  The following necessary dependencies must be installed to run the application properly: ${data.Installation}
  # Usage
  In order to use this app, ${data.usage}
  # License
  This project is licensed under the ${data.license} license. 
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  # Contributing
  ​Contributors: ${data.contribution_guidelines}
  # Tests
  The following is needed to run the test: ${data.test}
  # Questions
  If you have any questions about the repo, open an issue or contact my profile @ ${data.github_link} or contact me via email at ${data.Email}.
  
  
   

`;
}

module.exports = generateMarkdown;
