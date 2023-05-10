/* eslint-disable max-params */
import { Character } from "./character.js";

export class Squier extends Character {
  constructor(name, houseName, age, squiredCharacted, flatteryDegree) {
    super(name, houseName, age);
    this.squiredCharacter = squiredCharacted;
    this.flatteryDegree = flatteryDegree;
    this.speech = "Soy un loser";
  }
}
