function titleMarkdown(data) {
  return `
# ${data.title}

`
}


function tableOfContentsMarkdown() {
  
return `
## ${"Table of Contents"}

* [Description](#description)
* [UserStory](#userstory)
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











module.exports={
  titleMarkdown: titleMarkdown,
  descriptionMarkdown: descriptionMarkdown,
  tableOfContentsMarkdown: tableOfContentsMarkdown
}

// module.exports = generateMarkdown;
