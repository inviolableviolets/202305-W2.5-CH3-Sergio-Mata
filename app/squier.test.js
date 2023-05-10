import { Squier } from "./squier.js";

describe("Given a Squier class", () => {
  describe("When we instantiate it", () => {
    test("Then it should create an object with the properties of the class", () => {
      const newObject = new Squier("Tyrion", "Lannister", 34, "Jaime", 8);

      expect(newObject).toHaveProperty("name", "Tyrion");
      expect(newObject).toHaveProperty("houseName", "Lannister");
      expect(newObject).toHaveProperty("age", 34);
      expect(newObject).toHaveProperty("squiredCharacter", "Jaime");
      expect(newObject).toHaveProperty("flatteryDegree", 8);
      expect(newObject).toHaveProperty("speech", "Soy un loser");
    });
  });
});
