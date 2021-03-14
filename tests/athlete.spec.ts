import { Athlete } from "../src/athlete";
import { MultiSetExercise } from "../src/exercise";
import { DayNames, DayNamesType } from "../src/helpers";
import {
  BasicProgram,
  Program,
  ProgramSection,
  Restday,
  Serial,
  WeeklyProgramm
} from "../src/programm";

describe("Creating athlete", () => {
  let athlete: Athlete;
  beforeAll(() => {
    athlete = new Athlete(
      "testId",
      "Konstantinos",
      "Tsirakos",
      24,
      "testOktaId1",
      'testTrainerId'
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
    it('Trainer id is correct', () => expect(athlete.trainer).toBe('testTrainerId'))
    it('Program is full of empty programs', () => {
      expect(athlete.program?.monday).toBe('emptyDayId')
      expect(athlete.program?.tuesday).toBe('emptyDayId')
      expect(athlete.program?.wednesday).toBe('emptyDayId')
      expect(athlete.program?.thursday).toBe('emptyDayId')
      expect(athlete.program?.friday).toBe('emptyDayId')
      expect(athlete.program?.saturday).toBe('emptyDayId')
      expect(athlete.program?.sunday).toBe('emptyDayId')
    })
  });


  describe("Setters", () => {
    beforeAll(() => {
      athlete.setProgram(new WeeklyProgramm(
        new Restday('testTrainerId').id,
        new Restday('testTrainerId').id,
        new Restday('testTrainerId').id,
        new Restday('testTrainerId').id,
        new Restday('testTrainerId').id,
        new Restday('testTrainerId').id,
        new Restday('testTrainerId').id,
      ));
      athlete.setTrainer("testTrainerId2");
    });

    it("Trainer is updated correctly", () => {
      expect(athlete.trainer).toBe("testTrainerId2");
    });

    it("Program is set correctly", () => {
      expect(athlete.program).toBeDefined()
      expect(athlete.program?.monday).toBe('restdayId')
    });
  });


  describe("Getters", () => {
    it("Get Trainer is working  correctly", () => {
      expect(athlete.getTrainer()).toBe("testTrainerId2");
    });

    it("Get Program is working correctly", () => {
      expect(athlete.getProgram()?.monday).toBe("restdayId");
    });
  });

  describe('Appends user program', () => {
    let newProg: Program = new BasicProgram(
      'updatedId',
      'testTrainerId',
      [
        new ProgramSection(
          'Warm up',
          [new Serial(
            [new MultiSetExercise('id1', [10, 4, 5, 6])]
          )
          ]
        )])

    beforeAll(() => {
      const day = "wednesday"
      athlete.updateProgram(day, newProg.id)
    })

    it('Program is updated correctly', () => {
      expect(athlete.getProgram()?.wednesday).toBe('updatedId')
    })
  })

  describe('Deletes user program day', () => {
    beforeAll(() => {
      const day: DayNamesType = "wednesday"
      athlete.deleteProgramDay(day)
    })

    it('Program is updated correctly', () => {
      expect(athlete.getProgram()?.wednesday).toBe('emptyDayId')
    })
  })

  describe('Deletes user weekly program ', () => {
    beforeAll(() => {
      athlete.deleteWeeklyProgram()
    })

    it('Program is deleted correctly', () => {
      const prog = athlete.getProgram()
      const days: DayNamesType[] = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ]

      if (prog) {

        const array1 = days.map((elem: DayNamesType) => prog.getDay(elem))
          .filter((elem: string) => elem !== 'emptyDayId')
        expect(array1.length).toBe(0)

      } else {
        throw ("Program shouldn't be undefined")
      }
    })
  })
});
