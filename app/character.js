export class Character {
  name;
  houseName;
  age;
  series;

  constructor(name, houseName, age) {
    this.name = name;
    this.houseName = houseName;
    this.age = age;
    this.series = "Game of Thrones";
    this.status = "alive";
  }

  die() {
    this.status = "dead";
    return this.status;
  }

  talk() {
    return `${this.speech}`;
  }
}
