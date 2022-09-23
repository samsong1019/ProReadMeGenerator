// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  //project name
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (You need a title btw)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("What are you doing, yOu NeEd a TiTlE bRo! smh my head");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message:
      "Describe your project! (You also need to decribe your project or you get points off!)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log(
          "I AM NOT LETTING YOU GET POINTS OFF FOR THIS EASY STUFF BRO! DESCRIBE YOUR PROJECT!!!!!!!!!!!!!!!!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation instructions",
    message:
      "Do you need to install anything to use your project? if so how do you install it?",
  },
  {
    type: "input",
    name: "usage input",
    message: "What is this going to be used for?(better not leave this blanl)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("... try again");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Contribution Guidelines",
    message:
      "Add any information on how to contribute to the project!(yes add here to)",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("bruv accepting help is okay");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Test Instructions",
    message: "How do you test your poject?(you already know so do it)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("okay you failed bye have a good day");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("LETS GOOOOO!!!!! EASY README!!!!!!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.createPromptModule(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkDown(userInput));
  });
}

// Function call to initialize app
init();
