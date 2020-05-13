
var inquirer = require("inquirer")
var newFile = require("./utils/generateMarkdown.js")
var fs = require("fs")

inquirer
  .prompt([
      {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project",
    
  },
  {
    type: "input",
    name: "story",
    message: "Write a user story",
    
  },
  {
    type: "input",
    name: "install",
    message: "What are the steps to install your project",
    
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions for use",
    
  },
  

  ]).then(function(data){
    var fileName = "README.md"
    title(fileName, data)
    description(fileName, data)
    tableOfContents(fileName)
    description(fileName, data)
    userStory(fileName,data)
    installation(fileName,data)
    usage(fileName,data)
    
  });


function title(fileName, data) {
    
    fs.appendFile(fileName, newFile.titleMarkdown(data) + '\n', function(error){
        if (error){
            console.log(error)
        }
    });
}

function tableOfContents (fileName) {
   
  fs.appendFile(fileName, newFile.tableOfContentsMarkdown() + '\n', function(error){
      if (error){
          console.log(error)
      }
  });
}

function description (fileName, data) {
    
    fs.appendFile(fileName, newFile.descriptionMarkdown() + '\n' + data.description + '\n' , function(error){
        if (error){
            console.log(error)
        }
    });
}

function userStory (fileName, data) {

  fs.appendFile(fileName, newFile.userStoryMarkdown()+ '\n'+ data.story + '\n', function(error) {
    if (error){
      console.log(error)
  }
});

}

function installation(fileName, data) {

  fs.appendFile(fileName, newFile.installationMarkdown()+ '\n'+ data.install + '\n', function(error) {
    if (error){
      console.log(error)
  }
});

}

function usage(fileName, data) {

  fs.appendFile(fileName, newFile.usageMarkdown()+ '\n'+ data.usage + '\n', function(error) {
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
