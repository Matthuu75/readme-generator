// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ``;
  }
  else {
    return `(https://img.shields.io/badge/license-${license}-green)`
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ``;
  } else {
    return `https://choosealicense.com/licenses/${license}/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ``;
  } else {
    return `## License: ${renderLicenseBadge}${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Desription
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}

  ## License
  ${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

  ## GitHub
  ${data.github}

  ## Email
  ${data.email}

`;
}

export default generateMarkdown;
