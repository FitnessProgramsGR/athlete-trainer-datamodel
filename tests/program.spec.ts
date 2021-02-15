import { MultiSetExercise, SingleSetExercise } from "../datamodel/exercise";
import {
  Program,
  ProgramSection,
  Round,
  Serial,
  Superset,
} from "../datamodel/programm";

describe("Create Serial Program", () => {
  let programm: Program;
  beforeAll(() => {
    programm = new Program("testProgramId", "testTrainerId", [
      new ProgramSection("Lower back", [
        new Serial([
          new MultiSetExercise("exec1", [10, 8, 6, 4]),
          new MultiSetExercise("exec2", [10, 8, 6, 4]),
          new MultiSetExercise("exec3", [10, 8, 6, 4]),
          new MultiSetExercise("exec4", [10, 8, 6, 4]),
        ]),
      ]),
    ]);
  });

  it("Serialize Data", () => {
    console.log(JSON.stringify(programm.toJSON()));
    expect(true).toBe(true);
  });
});

describe("Create Program with warm up and core", () => {
  let programm: Program;
  beforeAll(() => {
    programm = new Program("testProgramId", "testTrainerId", [
      new ProgramSection("Warm up", [
        new Serial([
          new MultiSetExercise("exec1", [10, 8, 6, 4]),
          new MultiSetExercise("exec2", [10, 8, 6, 4]),
          new MultiSetExercise("exec3", [10, 8, 6, 4]),
          new MultiSetExercise("exec4", [10, 8, 6, 4]),
        ]),
      ]),
      new ProgramSection("Core", [
        new Round(
          [
            new SingleSetExercise("exec5", 10),
            new SingleSetExercise("exec6", 10),
            new SingleSetExercise("exec7", 10),
          ],
          2
        ),
        new Superset(
          new SingleSetExercise("exec8", 10),
          new SingleSetExercise("exec9", 10),
          2
        ),
      ]),
    ]);
  });

  it("Serialize Data", () => {
    console.log(JSON.stringify(programm.toJSON()));
    expect(true).toBe(true);
  });
});
