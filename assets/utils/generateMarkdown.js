// Function to render badge
function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// Function to render link
function renderLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// Function to render section
function renderSection(license) {
  if (license !== "None") {
    return `## License 
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`;
  }
  return "";
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderBadge(data.license)}
## Github URL 

https://github.com/${data.github}

## Description 
\`\`\`
${data.description}
\`\`\`
## Table of Contents 
* [Installations](#Installations(Requirments))
* [Usage](#usage)
${renderLink(data.license)}
* [Contributors](#ContributionGuidelines)
* [Test](#Tests)
## Installations(Requirments) 
To install dependencies, run these commands:
\`\`\`
${data.installation}
\`\`\`

## Usage 
\`\`\`
${data.usage}
\`\`\`
${renderSection(data.license)}
## ContributionGuidelines
\`\`\`
${data.ContributionGuidelines}
You can also contact me at ${data.email}!
\`\`\`

## Tests 
To use test the application:
\`\`\`
${data.TestInstructions}
\`\`\`
`;
}

module.exports = generateMarkdown;
