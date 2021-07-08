function getLicenseKeyword(license) {
  let licenseKey = {};

  if (license === 'Apache') {
    licenseKey = {
      badgeKey: 'Apache%202.0-blue.svg',
      linkKey: 'Apache-2.0',
    }
  }
  else if (license === 'Eclipse') {
    licenseKey = {
      badgeKey: 'EPL%201.0-red.svg',
      linkKey: 'EPL-1.0',
    }
  }
  else if (license === 'IBM') {
    licenseKey = {
      badgeKey: 'IPL%201.0-blue.svg',
      linkKey: 'IPL-1.0',
    }
  }
  else if (license === 'ISC') {
    licenseKey = {
      badgeKey: 'ISC-blue.svg',
      linkKey: 'IPL',
    }
  }
  else if (license === 'MIT') {
    licenseKey = {
      badgeKey: 'MIT-yellow.svg',
      linkKey: 'MIT',
    }
  }
  else if (license === 'Mozilla') {
    licenseKey = {
      badgeKey: 'MPL%202.0-brightgreen.svg',
      linkKey: 'MPL-2.0',
    }
  }

  return licenseKey;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeLink(license) {

  if (license === '') {
    return;
  }

  const licenseKey = getLicenseKeyword(license);

  return `[![License](https://img.shields.io/badge/License-${licenseKey.badgeKey})](${licenseKey.linkKey})`;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === '') {
    return;
  }

  const licenseBlock = `
  ${renderLicenseBadgeLink(license)}  
  This application is covered by the ${license} license.
  `;

  return licenseBlock;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const readmeBlock = `
  
  # ${data.title}

  ${renderLicenseBadgeLink(data.license)}

  ## Description
  📑 ${data.description}

  ## Installation
  💾 ${data.installation} 

  ## Usage
  💻 ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  🔥 ${data.contributors}

  ## Tests
  📌 ${data.instructions}

  ## Questions
  🖐 If you have any question about me or my project, feel free to contact me!  
      - My **Github** Link: [**${data.github}**](https://github.com/${data.github})
      - My **Email**: **${data.email}**
  `;

  return readmeBlock;
}

module.exports = generateMarkdown;
