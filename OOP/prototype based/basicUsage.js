function Employee(dept = "general") {
  this.name = "";
  this.dept = dept;
}
Employee.prototype.specialty = "None";

function Manager() {
  Employee.call(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);

/*
    When creating an Manager object,
    1. Create an generic object as "this"
    2. Set its __proto__ property to Manager.prototype 
    3. Initialize "this" in the constructors Manager and Employee
*/
m = new Manager();
console.log(`m.specialty is ${m.specialty}`);
console.log(`m.dept is ${m.dept}`);

// Not neccesary I think, but used in MDN.
// Manager.prototype.constructor = Manager;

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);
// Not neccesary I think, but used in MDN.
// WorkerBee.prototype.constructor = WorkerBee;

function SalesPerson() {
  WorkerBee.call(this);
  this.dept = "sales";
  this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);
// Not neccesary I think, but used in MDN.
// SalesPerson.prototype.constructor = SalesPerson;

function Engineer() {
  WorkerBee.call(this);
  this.dept = "engineering";
  this.machine = "";
}
Engineer.prototype = Object.create(WorkerBee.prototype);
Engineer.prototype.specialty = "code";

eng = new Engineer();

// the prototype chain lookup stops at Engineer.prototype
console.log(`eng.specialty is ${eng.specialty}`);
