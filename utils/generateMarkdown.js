
// generate title markdown function
function titleMarkdown(data) {
  return `
# ${data.title}

`
}

// generate description markdown function
function descriptionMarkdown() {
  return `
## ${"Description"}

`
}

// generate table of contents markdown function
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


// generate user story markdown function
function userStoryMarkdown() {
  return `
## ${"User Story"}

`
}

// generate installation markdown function
function installationMarkdown() {
  return `
## ${"Installation"}

`
}

// generate usage markdown function
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

// generate contributing marldown function
function contributingMarkdown() {
  return `
## ${"Contributing"}

`
}

// generate tests markdown function
function testsMarkdown() {
  return `
## ${"Tests"}

`
}

// generate questions markdown function
function questionsMarkdown() {
  return `
## ${"Questions"}

`
}

// generate deployed app markdown
function appMarkdown() {
  return `
## ${"Deployed Application URL"}

`
}


// module exports
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

