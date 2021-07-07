// Renders license badge image in top part of readme if there is no license returns nothing
function renderLicenseBadge(license) {
    if(license === 'none'){
        return ""
    } else if(license === "MIT"){
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
    }
    else if(license === "Apache-2.0"){
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
    }
    else if(license === "GPL-3.0"){
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
    }
    else if(license === "BSD-2-Clause"){
        return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]'
    }
    else if(license === "BSD-3-Clause"){
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
    }
}



// Renders link to selected license, if there is none returns nothing
function renderLicenseLink(license) {
    if(license === 'none'){
        return ""
    } else if(license === "MIT"){
        return '(https://opensource.org/licenses/MIT)'
    }
    else if(license === "Apache-2.0"){
        return '(https://opensource.org/licenses/Apache-2.0)'
    }
    else if(license === "GPL-3.0"){
        return '(https://www.gnu.org/licenses/gpl-3.0)'
    }
    else if(license === "BSD-2-Clause"){
        return '(https://opensource.org/licenses/BSD-2-Clause)'
    }
    else if(license === "BSD-3-Clause"){
        return '(https://opensource.org/licenses/BSD-3-Clause)'
    }
}

function renderLicenseSection(license) {
    if(license === 'none'){
        return "";
    } else {
        return "#license"
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Questions](#questions)
  6. [License](#license)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribute}

  ## Tests 
  ${data.tests}

  ## Quesitons 
  If You have any questions, please feel free to contact me on GitHub:
  Name: ${data.GitHubUsername}
  Link: ${data.GtiHubLink}

  Or you can email me at ${data.email}

## License 

See the license badge at the top of the page and click the image link to learn more about the license
`;
}

module.exports = generateMarkdown;