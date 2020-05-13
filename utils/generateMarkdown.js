function titleMarkdown(data) {
  return `
# ${data.title}

`
}


function tableOfContentsMarkdown() {
  
return `
## ${"Table of Contents"}

* [Description](#description)
* [User Story](#userstory)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

`
}

function descriptionMarkdown() {
  return `
## ${"Description"}

`
}

function userStoryMarkdown() {
  return `
## ${"User Story"}

`
}
function installationMarkdown() {
  return `
## ${"Installation"}

`
}

function usageMarkdown() {
  return `
## ${"Usage"}

`
}











module.exports={
  titleMarkdown: titleMarkdown,
  descriptionMarkdown: descriptionMarkdown,
  tableOfContentsMarkdown: tableOfContentsMarkdown,
  installationMarkdown: installationMarkdown,
  userStoryMarkdown: userStoryMarkdown
}

// module.exports = generateMarkdown;
