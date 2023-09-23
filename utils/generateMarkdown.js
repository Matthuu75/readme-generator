// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ``;
  }
  else {
    return `![github-license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return ``;
  } else {
    return `[${license}](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ``;
  } else {
    return `## License: ${renderLicenseLink(license)} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributions](#contributions)
  [Tests](#tests)
  [GitHub](#github)
  [Email](#email)

  ## Desription
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseLink(data.license)}
  
  ## GitHub
  ${data.github}

  ## Email
  ${data.email}

`;
}

module.exports = generateMarkdown;
