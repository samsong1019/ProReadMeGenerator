// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");
const path = require("path");
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
    name: "github",
    message: "What is your GitHub User?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Common don't be shy share your GitHub!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What about your email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Email. Now.");
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
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["APACHE2.0", "BOOST1.0", "BSD2", "BSD3", "None"],
  },
  {
    type: "input",
    name: "installation",
    message:
      "Do you need to install anything to use your project? if so how do you install it?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this going to be used for?(better not leave this blank)",
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
    name: "ContributionGuidelines",
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
    name: "TestInstructions",
    message: "How do you test your poject?",
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
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerAnswers) => {
    console.log("Generating.... Please wait....");
    writeToFile("./README.md", generateMarkDown({ ...inquirerAnswers }));
  });
}

// Function call to initialize app
init();
