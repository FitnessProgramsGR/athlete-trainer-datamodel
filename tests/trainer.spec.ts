import { isGetAccessor, isRegularExpressionLiteral } from "typescript";
import { Athlete, AthleteDetails } from "../datamodel/athlete";
import { Trainer, TrainerDetails } from "../datamodel/trainer";

describe("Creating Trainer", () => {
  let trainer: Trainer;
  beforeAll(() => {
    trainer = new Trainer(
      "testTrainer",
      new TrainerDetails("Dimitris", "Tsirakos", 53),
      []
    );
  });

  it("Id is correct", () => {
    expect(trainer.id).toBe("testTrainer");
  });

  describe("Details are correct", () => {
    it("Name is correct", () => expect(trainer.details.name).toBe("Dimitris"));
    it("Surname is correct", () =>
      expect(trainer.details.surname).toBe("Tsirakos"));
    it("Age is correct", () => expect(trainer.details.age).toBe(53));
    it("Name is correct", () =>
      expect(trainer.details.fullname).toBe("Dimitris Tsirakos"));
  });

  describe("Set athletes as an array", () => {
    let athletes: Athlete[] = [];
    beforeAll(() => {
      athletes.push(
        new Athlete(
          "testId1",
          new AthleteDetails("Konstantinos", "Tsirakos", 24)
        )
      );
      athletes.push(
        new Athlete("testId2", new AthleteDetails("Giorgos", "Tsirakos", 24))
      );

      trainer.setAthletes(athletes);
    });

    afterAll(() => {
      trainer.setAthletes([]);
    });

    it("Length is correct", () => {
      expect(trainer.athletes.length).toBe(2);
    });

    it("Length is correct (getAthletes function)", () => {
      expect(trainer.getAthletes().length).toBe(2);
    });

    it("Getting athlete 1 back", () => {
      const athlete1 = trainer.getAthlete("testId1");
      expect(athlete1).not.toBeUndefined();
      expect(athlete1.id).toBe("testId1");
    });

    it("Getting athlete 2 back", () => {
      const athlete1 = trainer.getAthlete("testId2");
      expect(athlete1).not.toBeUndefined();
      expect(athlete1.id).toBe("testId2");
    });
  });

  describe("Set athletes individually", () => {
    let athletes: Athlete[] = [];
    beforeAll(() => {
      athletes.push(
        new Athlete(
          "testId1",
          new AthleteDetails("Konstantinos", "Tsirakos", 24)
        )
      );
      athletes.push(
        new Athlete("testId2", new AthleteDetails("Giorgos", "Tsirakos", 24))
      );

      trainer.addAthlete(athletes[0]);
      trainer.addAthlete(athletes[1]);
    });

    it("Length is correct", () => {
      expect(trainer.athletes.length).toBe(2);
    });

    it("Length is correct (getAthletes function)", () => {
      expect(trainer.getAthletes().length).toBe(2);
    });

    it("Getting athlete 1 back", () => {
      const athlete1 = trainer.getAthlete("testId1");
      expect(athlete1).not.toBeUndefined();
      expect(athlete1.id).toBe("testId1");
    });

    it("Getting athlete 2 back", () => {
      const athlete1 = trainer.getAthlete("testId2");
      expect(athlete1).not.toBeUndefined();
      expect(athlete1.id).toBe("testId2");
    });
  });
});
