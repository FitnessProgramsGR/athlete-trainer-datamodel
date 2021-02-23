import { ExerciseInstanceParser, ExerciseJSON, MultiSetExercise, SingleSetExercise } from "./exercise";
import { DayNames, DayNamesType, Serializable } from "./helpers";
import { Trainer, TrainerId } from "./trainer";

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
  ) {
  }

  getDay(day: DayNamesType): Program {
    switch (day) {
      case 'monday': {
        return this.monday
      }
      case 'tuesday': {
        return this.tuesday
      }
      case 'wednesday': {
        return this.wednesday
      }
      case 'thursday': {
        return this.thursday
      }
      case 'friday': {
        return this.friday
      }
      case 'saturday': {
        return this.saturday
      }
      case 'sunday': {
        return this.sunday
      }
      default: {
        throw (`Not a know day name ${day}`)
      }
    }
  }

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

  fromJSON(json: WeeklyProgrammJSON): WeeklyProgramm {
    const monday = Program.prototype.fromJSON(json.monday)
    const tuesday = Program.prototype.fromJSON(json.tuesday)
    const wednesday = Program.prototype.fromJSON(json.wednesday)
    const thursday = Program.prototype.fromJSON(json.thursday)
    const friday = Program.prototype.fromJSON(json.friday)
    const saturday = Program.prototype.fromJSON(json.saturday)
    const sunday = Program.prototype.fromJSON(json.sunday)

    return new WeeklyProgramm(
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    )
  }
}

export type Categories = "round" | "superset" | "serial";

export interface ExerciseCategoryJSON {
  type: string;
  exercises: ExerciseJSON[];
  rounds: number;
}

export class ExerciseCategory {
  constructor(public type: Categories) { }
}

export interface RoundCategoryJSON {
  exercises: ExerciseJSON[],
  rounds: number
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

  fromJSON(json: RoundCategoryJSON) {
    const entries = json.exercises.map(
      (elem: ExerciseJSON) => ExerciseInstanceParser.prototype.fromJSON(elem)
    ) as SingleSetExercise[]

    return new Round(entries, json.rounds)
  }
}

export interface SupersetCategoryJSON {
  exercises: ExerciseJSON[],
  rounds: number
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

  fromJSON(json: SupersetCategoryJSON): Superset {
    return new Superset(
      ExerciseInstanceParser.prototype.fromJSON(json.exercises[0]) as SingleSetExercise,
      ExerciseInstanceParser.prototype.fromJSON(json.exercises[1]) as SingleSetExercise,
      json.rounds
    )
  }
}

export interface SerialCategoryJSON {
  exercises: ExerciseJSON[]
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

  fromJSON(json: SerialCategoryJSON): Serial {

    const entries: MultiSetExercise[] = json.exercises.map((
      elem: ExerciseJSON) => ExerciseInstanceParser.prototype.fromJSON(elem)
    ) as MultiSetExercise[]

    return new Serial(entries)
  }
}

export type AnyExerciseCategory = Round | Serial | Superset;

export class ExerciseCategoryArrayParser {
  constructor() { }

  fromJSON(json: ExerciseCategoryJSON): AnyExerciseCategory {
    switch (json.type) {
      case 'serial': {
        return Serial.prototype.fromJSON(json as SerialCategoryJSON)
      }
      case 'superset': {
        return Superset.prototype.fromJSON(json as SupersetCategoryJSON)
      }
      case 'round': {
        return Round.prototype.fromJSON(json as RoundCategoryJSON)
      }
      default: {
        throw (`Not known type of exercise ${json.type}`);
      }
    }
  }
}
export interface ProgramSectionJSON {
  name: string;
  entries: ExerciseCategoryJSON[];
}

export interface ProgramSection {
  name: string;
  entries: AnyExerciseCategory[];
}

export class ProgramSection {
  constructor(public name: string, public entries: AnyExerciseCategory[]) { }

  toJSON(): ProgramSectionJSON {
    return Object.assign({}, this, {
      entries: this.entries.map((elem: AnyExerciseCategory) => elem.toJSON()),
    });
  }

  fromJSON(json: ProgramSectionJSON): ProgramSection {
    const entries: AnyExerciseCategory[] = json.entries.map(
      (elem: ExerciseCategoryJSON) => ExerciseCategoryArrayParser.prototype.fromJSON(elem)
    )
    return new ProgramSection(json.name, entries)
  }
}


export type ProgramTypes = 'restday' | 'emptyday' | 'program'
export interface ProgramJSON {
  id: string;
  trainer: string;
  sections: ProgramSectionJSON[];
  type: ProgramTypes,
  comments?: string
}


export class Program extends Serializable {
  constructor(
    id: string,
    public trainer: TrainerId,
    public sections: ProgramSection[],
    public type: ProgramTypes,
    public comments?: string
  ) {
    super(id)
  }

  toJSON(): ProgramJSON {
    return Object.assign({}, this, {
      sections: this.sections.map((elem: ProgramSection) => elem.toJSON()),
    });
  }

  fromJSON(json: ProgramJSON): Program {
    const sections = json.sections.map(
      (elem: ProgramSectionJSON) => ProgramSection.prototype.fromJSON(elem)
    )

    return new Program(
      json.id,
      json.trainer,
      sections,
      json.type)
  }
}

export class BasicProgram extends Program {
  constructor(id: string, trainer: TrainerId, sections: ProgramSection[], comments?: string) {
    super(id, trainer, sections, 'program', comments)
  }
}

export class Restday extends Program {
  constructor(id: string, trainer: TrainerId, comments?: string) {
    super(id, trainer, [], 'restday', comments)
  }
}


export class EmptyDay extends Program {
  constructor(id: string, trainer: TrainerId) {
    super(id, trainer, [], 'emptyday')
  }
}
