// Employee parent class with the following properties :name,id,email
class Employee {
  //Properties 
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
}

  //Methods 
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee; 