
var inquirer = require("inquirer")
var newFile = require("./utils/generateMarkdown.js")
const axios = require("axios")
var fs = require("fs")

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "What is your github username?",
      
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      
    },
    {
      type: "input",
      name: "project",
      message: "Paste your deployed project URL:",
      
    },
      {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
    
  },
  {
    type: "input",
    name: "story",
    message: "Write a user story:",
    
  },
  {
    type: "input",
    name: "install",
    message: "What are the steps to install your project?",
    
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions for use:",
    
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license?",
    choices: ["ISC", "MIT", "BSD-3", "BSD-2", "Unlicense"]
    
  },
  {
    type: "input",
    name: "contributing",
    message: "What does user need to know about contributing",
    
  },
  {
    type: "input",
    name: "tests",
    message: "If applicable, what command should be run to run tests?",
    
  },
  

  ]).then(function(data){
    var fileName = "README.md"
    title(fileName, data);
    profilePicture(fileName,data);
    description(fileName, data);
    tableOfContents(fileName);
    userStory(fileName,data);
    installation(fileName,data);
    usage(fileName,data);
    license(fileName,data);
    contributing(fileName,data);
    tests(fileName,data);
    questions(fileName,data);
    
  });






function title(fileName, data) {
    
    fs.appendFile(fileName, newFile.titleMarkdown(data) + '\n', function(error){
        if (error){
            console.log(error)
        }
    });
}

function profilePicture(fileName, data){
const queryUrl="https://api.github.com/users/${data.username}/repos?per_page=100"
axios
  .get(queryUrl)
  .then(function(res) {
    profileLink = (res.data[0].owner.avatar_url)
    
    fs.appendFile(fileName, "![]" + "(" + profileLink + ")" + '\n' , function(error){
      if (error){
          console.log(error)
      }
  });
  });
    
 

}

function description (fileName, data) {
    
  fs.appendFile(fileName, newFile.descriptionMarkdown() + '\n' + data.description + '\n' + '\n' , function(error){
      if (error){
          console.log(error)
      }
  });
}

function tableOfContents (fileName) {
   
  fs.appendFile(fileName, newFile.tableOfContentsMarkdown() + '\n' + '\n', function(error){
      if (error){
          console.log(error)
      }
  });
}

function userStory (fileName, data) {

  fs.appendFile(fileName, newFile.userStoryMarkdown()+ '\n'+ data.story + '\n'+ '\n', function(error) {
    if (error){
      console.log(error)
  }
});

}

function installation(fileName, data) {

  fs.appendFile(fileName, newFile.installationMarkdown()+ '\n'+ data.install + '\n'+ '\n', function(error) {
    if (error){
      console.log(error)
  }
});

}

function usage(fileName, data) {

  fs.appendFile(fileName, newFile.usageMarkdown()+ '\n'+ data.usage + '\n'+ '\n', function(error) {
    if (error){
      console.log(error)
  }
});

}


function license(fileName, data) {

  var license= data.license

  if(license==="ISC"){
  fs.appendFile(fileName, newFile.licenseMarkdown()+ '\n'+ "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)" + '\n'+ '\n', function(error) {
    if (error){
      console.log(error)
  }
});
}
if(license==="MIT"){
  fs.appendFile(fileName, newFile.licenseMarkdown()+ '\n'+ "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" + '\n'+ '\n', function(error) {
    if (error){
      console.log(error)
  }
});
}
if(license==="BSD-3"){
  fs.appendFile(fileName, newFile.licenseMarkdown()+ '\n'+ "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)" + '\n'+ '\n', function(error) {
    if (error){
      console.log(error)
  }
});
}
if(license==="BSD-2"){
  fs.appendFile(fileName, newFile.licenseMarkdown()+ '\n'+ "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)" + '\n'+ '\n', function(error) {
    if (error){
      console.log(error)
  }
});
}
if(license==="Unlicense"){
  fs.appendFile(fileName, newFile.licenseMarkdown()+ '\n'+ "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)" + '\n'+ '\n', function(error) {
    if (error){
      console.log(error)
  }
});
}
}

function contributing(fileName, data) {

  fs.appendFile(fileName, newFile.contributingMarkdown()+ '\n'+ contributing.usage + '\n'+ '\n', function(error) {
    if (error){
      console.log(error)
  }
});

}
function tests(fileName, data) {

  fs.appendFile(fileName, newFile.testsMarkdown()+ '\n'+ tests.usage + '\n'+ '\n', function(error) {
    if (error){
      console.log(error)
  }else{
    console.log("ReadMe Successfully Generated")
  }
});

}


function questions(fileName, data) {

  fs.appendFile(fileName, newFile.questionsMarkdown()+ '\n'+ "For any questions, please contact " + data.username + " at " + data.email + "." + '\n', function(error) {
    if (error){
      console.log(error)
  }
});

}






































// const questions = [

// ];






function init() {

}

init();








// function writeToFile(fileName, data) {
    
//     fs.writeFile(fileName, "# " + data , function(error){
//         if (error){
//             console.log(error)
//         }else {
//             console.log("success")
//         }
//     });
// }
