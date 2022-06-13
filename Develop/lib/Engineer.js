const Employee = require("./Employee");

class Engineer extends Employee {
  //To Employee's properties and methods + github
  constructor(name, id, email, github) {
    //Call parent constructor here
    super(name, id, email);

    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  //Overridden getRole
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;