  // function to generate markdown for README

function generateMarkdown(data) {
    return `

# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation
Here are the dependencies you need to install to run the application: ${data.Installation}
# Usage
To use this app, run it in the following locations: ${data.Usage}
# License
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributing
​Contributors: ${data.Contributing}
# Tests
To run the test, enter the following command: ${data.Tests}
# Questions
If you have any questions, open an issue or contact ${data.Username} at : ${data.Email}.
`
}

module.exports = generateMarkdown;
  