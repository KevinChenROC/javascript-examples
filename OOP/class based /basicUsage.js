class Person {
  constructor(name) {
    this.name = name;
  }

  //instance method
  hello() {
    console.log("Say hello by " + this.name);
  }

  //class method
  static genericHello() {
    console.log("Say hello generically.");
  }
}

const person = new Person("Kevin");
person.hello();
Person.genericHello();
