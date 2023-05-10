import { Character } from "./character.js";

describe("Given a Character class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with the properties of the class", () => {
      const newObject = new Character("Tyrion", "Lannister", 34, "vivo");

      expect(newObject).toHaveProperty("name", "Tyrion");
      expect(newObject).toHaveProperty("houseName", "Lannister");
      expect(newObject).toHaveProperty("age", 34);
      expect(newObject).toHaveProperty("series", "Game of Thrones");
      expect(newObject).toHaveProperty("status", "alive");
    });
  });
});
