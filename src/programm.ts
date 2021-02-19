import { ExerciseJSON, MultiSetExercise, SingleSetExercise } from "./exercise";

export interface WeeklyProgrammJSON {
  monday: ProgramJSON;
  tuesday: ProgramJSON;
  wednesday: ProgramJSON;
  thursday: ProgramJSON;
  friday: ProgramJSON;
  saturday: ProgramJSON;
  sunday: ProgramJSON;
}
export class WeeklyProgramm {
  constructor(
    public monday: Program,
    public tuesday: Program,
    public wednesday: Program,
    public thursday: Program,
    public friday: Program,
    public saturday: Program,
    public sunday: Program
  ) {}

  toJSON(): WeeklyProgrammJSON {
    return Object.assign({}, this, {
      monday: this.monday.toJSON(),
      tuesday: this.tuesday.toJSON(),
      wednesday: this.wednesday.toJSON(),
      thursday: this.thursday.toJSON(),
      friday: this.friday.toJSON(),
      saturday: this.saturday.toJSON(),
      sunday: this.sunday.toJSON(),
    });
  }
}

export type Categories = "round" | "superset" | "serial";

export interface ExerciseCategoryJSON {
  type: string;
  exercises: ExerciseJSON[];
  rounds: number;
}

export class ExerciseCategory {
  constructor(public type: Categories) {}
}

export class Round extends ExerciseCategory {
  constructor(public exercises: SingleSetExercise[], public rounds: number) {
    super("round");
  }

  toJSON(): ExerciseCategoryJSON {
    return Object.assign({}, this, {
      exercises: this.exercises.map((elem: SingleSetExercise) => elem.toJSON()),
    });
  }
}

export class Superset extends ExerciseCategory {
  constructor(
    public exercise1: SingleSetExercise,
    public exercise2: SingleSetExercise,
    public rounds: number
  ) {
    super("superset");
  }

  toJSON(): ExerciseCategoryJSON {
    return Object.assign({}, this, {
      exercises: [this.exercise1.toJSON(), this.exercise2.toJSON()],
    });
  }
}

export class Serial extends ExerciseCategory {
  constructor(public exercises: MultiSetExercise[]) {
    super("serial");
  }

  toJSON(): ExerciseCategoryJSON {
    return Object.assign({}, this, {
      exercises: this.exercises.map((elem: MultiSetExercise) => elem.toJSON()),
      rounds: 0,
    });
  }
}
export type AnyExerciseCategory = Round | Serial | Superset;

export interface ProgramSectionJSON {
  name: string;
  entries: ExerciseCategoryJSON[];
}

export interface ProgramSection {
  name: string;
  entries: AnyExerciseCategory[];
}

export class ProgramSection {
  constructor(public name: string, public entries: AnyExerciseCategory[]) {}

  toJSON(): ProgramSectionJSON {
    return Object.assign({}, this, {
      entries: this.entries.map((elem: AnyExerciseCategory) => elem.toJSON()),
    });
  }
}

export interface ProgramJSON {
  id: string;
  trainer: string;
  sections: ProgramSectionJSON[];
}

export class Program {
  constructor(
    public id: string,
    public trainer: string,
    public sections: ProgramSection[]
  ) {}

  toJSON(): ProgramJSON {
    return Object.assign({}, this, {
      sections: this.sections.map((elem: ProgramSection) => elem.toJSON()),
    });
  }
}
