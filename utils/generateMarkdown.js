function titleMarkdown(data) {
  return `
# ${data.title}

`
}

function descriptionMarkdown() {
  return `
## ${"Description"}

`
}

function tableOfContentsMarkdown() {
  
return `
## ${"Table of Contents"}

* [Description](#description)
* [User Story](#user-story)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Deployed Application URL](#deployed-application-URL)
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

function licenseMarkdown() {
  return `
## ${"License"}

`
}

function contributingMarkdown() {
  return `
## ${"Contributing"}

`
}

function testsMarkdown() {
  return `
## ${"Tests"}

`
}

function questionsMarkdown() {
  return `
## ${"Questions"}

`
}

function appMarkdown() {
  return `
## ${"Deployed Application URL"}

`
}









module.exports={
  titleMarkdown: titleMarkdown,
  descriptionMarkdown: descriptionMarkdown,
  tableOfContentsMarkdown: tableOfContentsMarkdown,
  installationMarkdown: installationMarkdown,
  userStoryMarkdown: userStoryMarkdown,
  usageMarkdown: usageMarkdown,
  licenseMarkdown: licenseMarkdown,
  contributingMarkdown: contributingMarkdown,
  testsMarkdown: testsMarkdown,
  questionsMarkdown: questionsMarkdown,
  appMarkdown: appMarkdown

}

// module.exports = generateMarkdown;
