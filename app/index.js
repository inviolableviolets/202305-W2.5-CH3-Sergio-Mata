import { Fighter } from "./fighter.js";
import { Adviser } from "./adviser.js";
import { Squier } from "./squier.js";
import { King } from "./king.js";

const character1 = new Fighter("Jaime", "Lannister", 40, "sword", 9);
const character2 = new Fighter("Daenerys", "Targaryen", 20, "dragon", 6);
const character3 = new Adviser("Tyrion", "Lannister", 33, "Daenerys");
const character4 = new Squier("Bronn", "Lannister", 42, "Tyrion", 2);
const character5 = new King("Jeoffrey", "Baratheon", 16, "sword", 9);

character1.die();
character3.die();

const characters = [character1, character2, character3, character4, character5];

const printCharactersSpeech = (charactersList) => [
  character1.talk(),
  character2.talk(),
];

console.log(printCharactersSpeech(characters));
