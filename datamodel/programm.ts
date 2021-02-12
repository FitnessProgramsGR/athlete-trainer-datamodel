export enum Days {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

interface ExerciseJSON {
  id: string;
  reps: number[];
}

export class ExerciseDay {
  exercises: Exercise[] = [];
  constructor(public day: Days) {}
  addExercise(exercise: Exercise) {
    this.exercises.push(exercise);
  }

  toJSON(): ExerciseJSON[] {
    return this.exercises.map((elem: Exercise) => elem.toJSON());
  }
}

export interface ProgramJSON {
  id: string;
  trainer: string;
  programm: Record<string, ExerciseJSON[]>;
}

export class Program {
  private programm: {
    [Days.MONDAY]: ExerciseDay;
    [Days.TUESDAY]: ExerciseDay;
    [Days.WEDNESDAY]: ExerciseDay;
    [Days.THURSDAY]: ExerciseDay;
    [Days.FRIDAY]: ExerciseDay;
    [Days.SATURDAY]: ExerciseDay;
    [Days.SUNDAY]: ExerciseDay;
  };

  constructor(public id: string, public trainer?: string) {}

  toJSON(): ProgramJSON {
    let toJSONProgram: ProgramJSON;
    Object.keys(this.programm).forEach((elem: string) => {
      toJSONProgram[elem] = this.programm[elem].toJSON();
    });

    toJSONProgram.id = this.id;
    toJSONProgram.trainer = this.trainer;

    return toJSONProgram;
  }
}
