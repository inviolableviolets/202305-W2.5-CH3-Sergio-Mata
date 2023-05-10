import { King } from "./king.js";

describe("Given a King class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with the properties of the class", () => {
      const newObject = new King("Tyrion", "Lannister", 34, 4);

      expect(newObject).toHaveProperty("name", "Tyrion");
      expect(newObject).toHaveProperty("houseName", "Lannister");
      expect(newObject).toHaveProperty("age", 34);
      expect(newObject).toHaveProperty("status", "alive");
      expect(newObject).toHaveProperty("series", "Game of Thrones");
      expect(newObject).toHaveProperty("reign", 4);
      expect(newObject).toHaveProperty("speech", "Vais a morir todos");
    });
  });
});
