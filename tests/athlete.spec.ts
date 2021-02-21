import { Athlete } from "../src/athlete";

describe("Creating athlete", () => {
  let athlete: Athlete;
  beforeAll(() => {
    athlete = new Athlete(
      "testId",
      "Konstantinos",
      "Tsirakos",
      24,
      "testOktaId1"
    );
    console.log(JSON.stringify(athlete.toJSON()))
  });
  it("Id is correct", () => {
    expect(athlete.id).toBe("testId");
  });

  describe("Details are correct", () => {
    it("Name is correct", () => expect(athlete.name).toBe("Konstantinos"));
    it("Surname is correct", () => expect(athlete.surname).toBe("Tsirakos"));
    it("Age is correct", () => expect(athlete.age).toBe(24));
    it("Name is correct", () =>
      expect(athlete.fullname).toBe("Konstantinos Tsirakos"));
  });

  describe("Setters", () => {
    beforeAll(() => {
      athlete.setProgram("testProgramId");
      athlete.setTrainer("testTrainerId");
    });

    it("Trainer is set correctly", () => {
      expect(athlete.trainer).toBe("testTrainerId");
    });

    it("Program is set correctly", () => {
      expect(athlete.program).toBe("testProgramId");
    });
  });

  describe("Getters", () => {
    it("Get Trainer is working  correctly", () => {
      expect(athlete.getTrainer()).toBe("testTrainerId");
    });

    it("Get Program is working correctly", () => {
      expect(athlete.getProgram()).toBe("testProgramId");
    });
  });
});
