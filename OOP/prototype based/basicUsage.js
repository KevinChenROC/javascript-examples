/*
  Howis an object created?
  When an object is created via "new Foo(args...)" keyword,
    1. An generic object is created as "this"
    2. Set its __proto__ property to Foo.prototype 
    3. Initialize "this" in the constructor Foo
*/

function Employee(dept = "general") {
  this.name = "";
  this.dept = dept;
}
Employee.prototype.specialty = "None";
Employee.prototype.boss = "Kevin";

function Manager() {
  Employee.call(this);
  this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.specialty = "manage"
m = new Manager();

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}

WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.workHours = 8

function SalesPerson() {
  WorkerBee.call(this);
  this.dept = "sales";
  this.quota = 100;
}

SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.specialty = "sell"

function Engineer() {
  WorkerBee.call(this);
  this.dept = "engineering";
  this.machine = "";
}

Engineer.prototype = Object.create(WorkerBee.prototype);
Engineer.prototype.specialty = "code";

eng = new Engineer();