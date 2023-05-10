import { Adviser } from "./adviser.js";

describe("Given a Adviser class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with the properties of the class", () => {
      const newObject = new Adviser("Tyrion", "Lannister", 34, "Jaime");

      expect(newObject).toHaveProperty("name", "Tyrion");
      expect(newObject).toHaveProperty("houseName", "Lannister");
      expect(newObject).toHaveProperty("age", 34);
      expect(newObject).toHaveProperty("status", "alive");
      expect(newObject).toHaveProperty("series", "Game of Thrones");
      expect(newObject).toHaveProperty("advisedCharacter", "Jaime");
      expect(newObject).toHaveProperty(
        "speech",
        "No sé por qué, pero creo que voy a morir pronto"
      );
    });
  });
});
