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
      expect(athlete.program?.monday.type).toBe('emptyday')
      expect(athlete.program?.tuesday.type).toBe('emptyday')
      expect(athlete.program?.wednesday.type).toBe('emptyday')
      expect(athlete.program?.thursday.type).toBe('emptyday')
      expect(athlete.program?.friday.type).toBe('emptyday')
      expect(athlete.program?.saturday.type).toBe('emptyday')
      expect(athlete.program?.sunday.type).toBe('emptyday')
    })
  });


  describe("Setters", () => {
    beforeAll(() => {
      athlete.setProgram(new WeeklyProgramm(
        new Restday('restDayRandomId1', 'testTrainerId'),
        new Restday('restDayRandomId2', 'testTrainerId'),
        new Restday('restDayRandomId3', 'testTrainerId'),
        new Restday('restDayRandomId4', 'testTrainerId'),
        new Restday('restDayRandomId5', 'testTrainerId'),
        new Restday('restDayRandomId6', 'testTrainerId'),
        new Restday('restDayRandomId7', 'testTrainerId'),
      ));
      athlete.setTrainer("testTrainerId2");
    });

    it("Trainer is updated correctly", () => {
      expect(athlete.trainer).toBe("testTrainerId2");
    });

    it("Program is set correctly", () => {
      expect(athlete.program).toBeDefined()
      expect(athlete.program?.monday.id).toBe('restDayRandomId1')
    });
  });


  describe("Getters", () => {
    it("Get Trainer is working  correctly", () => {
      expect(athlete.getTrainer()).toBe("testTrainerId2");
    });

    it("Get Program is working correctly", () => {
      expect(athlete.getProgram()?.monday.id).toBe("restDayRandomId1");
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
      athlete.updateProgram('wednesday', newProg)
    })

    it('Program is updated correctly', () => {
      expect(athlete.getProgram()?.wednesday.id).toBe('updatedId')
      expect(athlete.getProgram()?.wednesday.sections[0].name).toBe('Warm up')
    })
  })

  describe('Deletes user program day', () => {
    beforeAll(() => {
      athlete.deleteProgramDay('wednesday')
    })

    it('Program is updated correctly', () => {
      expect(athlete.getProgram()?.wednesday.id).toBe('randomGeneratedIdAlert')
      expect(athlete.getProgram()?.wednesday.type).toBe('emptyday')
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

        const array1 = days.map((elem: DayNamesType) => prog.getDay(elem).type)
          .filter((elem: string) => elem !== 'emptyday')
        expect(array1.length).toBe(0)

      } else {
        throw ('Program shouldn\'t be undefined')
      }
    })
  })
});
