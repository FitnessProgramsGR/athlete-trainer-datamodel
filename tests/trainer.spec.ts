import { isGetAccessor, isRegularExpressionLiteral } from "typescript";
import { Athlete } from "../src/athlete";
import { Trainer } from "../src/trainer";

describe("Creating Trainer", () => {
  let trainer: Trainer;
  beforeAll(() => {
    trainer = new Trainer(
      "testTrainer",
      "Dimitris",
      "Tsirakos",
      53,
      "oktaId1",
      []
    );
    console.log(JSON.stringify(trainer.toJSON()))
  });

  it("Id is correct", () => {
    expect(trainer.id).toBe("testTrainer");
  });

  describe("Details are correct", () => {
    it("Name is correct", () => expect(trainer.name).toBe("Dimitris"));
    it("Surname is correct", () => expect(trainer.surname).toBe("Tsirakos"));
    it("Age is correct", () => expect(trainer.age).toBe(53));
    it("Name is correct", () =>
      expect(trainer.fullname).toBe("Dimitris Tsirakos"));
  });

  describe("Set athletes as an array", () => {
    let athletes: Athlete[] = [];
    beforeAll(() => {
      athletes.push(
        new Athlete("testId1", "Konstantinos", "Tsirakos", 24, "oktaId2", 'testTrainer')
      );
      athletes.push(
        new Athlete("testId2", "Giorgos", "Tsirakos", 24, "oktaId3", 'testTrainer')
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
      expect(athlete1?.id).toBe("testId1");
    });

    it("Getting athlete 2 back", () => {
      const athlete1 = trainer.getAthlete("testId2");
      expect(athlete1).not.toBeUndefined();
      expect(athlete1?.id).toBe("testId2");
    });
  });

  describe("Set athletes individually", () => {
    let athletes: Athlete[] = [];
    beforeAll(() => {
      athletes.push(
        new Athlete("testId1", "Konstantinos", "Tsirakos", 24, "oktaIs2", 'testTrainer')
      );
      athletes.push(
        new Athlete("testId2", "Giorgos", "Tsirakos", 24, "oktaId3", 'testTrainer')
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
      expect(athlete1?.id).toBe("testId1");
    });

    it("Getting athlete 2 back", () => {
      const athlete1 = trainer.getAthlete("testId2");
      expect(athlete1).not.toBeUndefined();
      expect(athlete1?.id).toBe("testId2");
    });
  });
});
