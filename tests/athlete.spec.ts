import { isGetAccessor } from "typescript";
import { Athlete, AthleteDetails } from "../datamodel/athlete";

describe("Creating athlete", () => {
  let athlete: Athlete;
  beforeAll(() => {
    athlete = new Athlete(
      "testId",
      new AthleteDetails("Konstantinos", "Tsirakos", 24)
    );
  });
  it("Id is correct", () => {
    expect(athlete.id).toBe("testId");
  });

  describe("Details are correct", () => {
    it("Name is correct", () =>
      expect(athlete.details.name).toBe("Konstantinos"));
    it("Surname is correct", () =>
      expect(athlete.details.surname).toBe("Tsirakos"));
    it("Age is correct", () => expect(athlete.details.age).toBe(24));
    it("Name is correct", () =>
      expect(athlete.details.fullname).toBe("Konstantinos Tsirakos"));
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
