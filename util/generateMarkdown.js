// Renders license badge image in top part of readme if there is no license returns nothing
function renderLicenseBadge(license) {
    if(license === 'none'){
        return ""
    } else if(license === "MIT"){
        return 'https://img.shields.io/badge/License-MIT-yellow.svg'
    }
    else if(license === "Apache-2.0"){
        return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    }
    else if(license === "GPL-3.0"){
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    }
    else if(license === "BSD-2-Clause"){
        return 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg'
    }
    else if(license === "BSD-3-Clause"){
        return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
    }
}



// Renders link to selected license, if there is none returns nothing
function renderLicenseLink(license) {
    if(license === 'none'){
        return ""
    } else if(license === "MIT"){
        return 'https://opensource.org/licenses/MIT'
    }
    else if(license === "Apache-2.0"){
        return 'https://opensource.org/licenses/Apache-2.0'
    }
    else if(license === "GPL-3.0"){
        return 'https://www.gnu.org/licenses/gpl-3.0'
    }
    else if(license === "BSD-2-Clause"){
        return 'https://opensource.org/licenses/BSD-2-Clause'
    }
    else if(license === "BSD-3-Clause"){
        return 'https://opensource.org/licenses/BSD-3-Clause'
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

`;
}

module.exports = generateMarkdown;



//choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause'],
/*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)


*/