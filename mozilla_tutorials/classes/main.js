class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const danni = new Person("Danni");

danni.introduceSelf();

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `Hi, I'm ${this.name}, and I will be your ${this.teaches} professor.`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

const robert = new Professor("Robert", "Psychology");

robert.introduceSelf();
robert.grade(paper);

class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi, I'm ${this.name} and I'm in year ${this.#year}.`);
  }

  canStudentDoArchery() {
    return this.#year > 1;
  }
}

const viola = new Student("Viola", 2);

viola.introduceSelf();
viola.canStudentDoArchery();
// viola.#year; // error

class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod();
// myExample.#somePrivateMethod(); // error
