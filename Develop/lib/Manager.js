const Empolyee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Empolyee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email); //setting properties from parent class
    this.officeNumber = officeNumber;
  }
  //overriding parent value
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;