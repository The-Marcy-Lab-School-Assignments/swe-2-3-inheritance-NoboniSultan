class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}

class Rectangle extends Quadrilateral {
  constructor(length, width) {
    super(length, width, length, width)
  }
  getArea() {
    return this.side1 * this.side2;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
  getDiagonal() {
    return Math.sqrt(2) * this.side1;
  }
}

/* Be creative with this one! */
class Person {
  static #people = [];

  constructor(name, bio, job = []) {
    this.name = name;
    this.bio = bio;
    this.job = job;
    this.stamina = 100;

    Person.#people.push(this);
  }
  introduce() {
    return `Hello, I'm ${this.name}, This is my bio: ${this.bio}, My job is ${this.job}.`;
  }
  work(hours) {
    this.stamina -= hours * 10;
    if (this.stamina < 0) this.stamina = 0;
    return `${this.name} worked for ${hours} hour(s). Stamina is now ${this.stamina}.`;
  }
  rest(hours) {
    this.stamina += hours * 15;
    if (this.stamina > 100) this.stamina = 100;
    return `${this.name} rested for ${hour(s)}. Stamina restored to ${this.stamina}.`;
  }
  changeJob(newJob) {
    this.job = newJob;
    return `${this.name} switched jobs! New job: ${this.job}. `;
  }
  static list() {
    return [...Person.#people];
  }
  static findByName(name) {
    return Person.#people.find(
      person => person.name.toLowerCase() === name.toLowerCase()
    );
  }
}

const p1 = new Person("Noboni", "I love coding and cats.", "Developer");
const p2 = new Person("Rahi", "Traveler and writer.", "Journalist");

console.log(p1.introduce());
console.log(Person.findByName("rahi"));

// 404: main branch not found

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
