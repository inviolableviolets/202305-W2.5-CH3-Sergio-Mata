import { Character } from "./character.js";

export class Adviser extends Character {
  constructor(name, houseName, age, advisedCharacter) {
    super(name, houseName, age);
    this.advisedCharacter = advisedCharacter;
    this.speech = "No sé por qué, pero creo que voy a morir pronto";
  }
}
