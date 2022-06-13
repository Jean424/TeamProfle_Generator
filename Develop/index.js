const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const teamBuilder = require("./util/generateHtml");

//to hold all the member information create a blank array
let allMembers = [];

const questions = [
  {
    type: "list",
    name: "position",
    message: "What is your role?",
    choices: ["Manager", "Engineer", "Intern", "Generate HTML"],
  },
];

//Create a function to write a html file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, teamBuilder(data), (err) =>
    err ? console.error(err) : console.log("Success!", fileName)
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);

      if (answers.position === "Intern") {
        askInternQuestions();
      } else if (answers.position === "Manager") {
        askManagerQuestions();
      } else if (answers.position === "Engineer") {
        askEngineerQuestions();
      } else {
        console.log("All member information", allMembers);
        //write to a file
        writeToFile("team.html", allMembers);
      }
    })

    .catch((error) => console.log(error));
}

// Function call to initialize app
init();

function askInternQuestions() {
  console.log("Intern questions");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "schoolname",
        message: "What is the name of your School?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      //convert into Intern Class object Instance

      const newIntern = new Intern(
        answers.ID,
        answers.name,
        answers.email,
        answers.schoolname
      );
      console.log("Intern Class obj ", newIntern);
      //add the information to the blank new array
      allMembers.push(newIntern);
      init();
    });
}

function askEngineerQuestions() {
  console.log("Engineer questions");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your github username?",
      },
    ])
    .then((answers) => {
      console.log(answers);

      const newEngineer = new Engineer(
        answers.ID,
        answers.name,
        answers.email,
        answers.github
      );
      console.log("Engineer Class obj ", newEngineer);
      //add the information to the blank new array
      allMembers.push(newEngineer);
      init();
    });
}
function askManagerQuestions() {
  console.log("Manager questions");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const newManager = new Manager(
        answers.ID,
        answers.name,
        answers.email,
        answers.officeNumber
      );
      console.log("Manager Class obj ", newManager);
      //add the information to the blank new array
      allMembers.push(newManager);

      //ask again until i exit
      init();
    });
}