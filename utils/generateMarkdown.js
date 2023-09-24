function renderLicenseBadge(license) {
  if (license === 'None') {
    return ``;
  }
  else {
    return `![github-license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}


function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return ``;
  } else {
    return `[${license}](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
  }
}

function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [GitHub](#github)
  * [Email](#email)

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
