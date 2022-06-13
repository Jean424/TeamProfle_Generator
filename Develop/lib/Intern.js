const Employee = require("./Employee");

//Extent Employee parent class
class Intern extends Employee {
  //To Employee's properties and methods + school
  constructor(name, id, email, school) {
    //Call parent constructor here
    super(name, id, email);

    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  //Overridden getRole
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;