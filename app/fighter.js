/* eslint-disable max-params */
import { Character } from "./character.js";

export class Fighter extends Character {
  constructor(name, houseName, age, weapon, skill) {
    super(name, houseName, age);
    this.weapon = weapon;
    this.skill = skill;
    this.speech = "Primero pego y luego pregunto";
  }
}
