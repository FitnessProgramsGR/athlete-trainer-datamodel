import { ExerciseInstanceParser, ExerciseJSON, MultiSetExercise, SingleSetExercise } from "./exercise";
import { DayNames, DayNamesType, Serializable } from "./helpers";
import { Trainer, TrainerId } from "./trainer";

export interface WeeklyProgrammJSON {
  monday: ProgramId;
  tuesday: ProgramId;
  wednesday: ProgramId;
  thursday: ProgramId;
  friday: ProgramId;
  saturday: ProgramId;
  sunday: ProgramId;
}

// export interface ProgramEntry {
//   id: ProgramId,
//   type: ProgramTypes
// }

export class WeeklyProgramm {

  constructor(
    public monday: ProgramId,
    public tuesday: ProgramId,
    public wednesday: ProgramId,
    public thursday: ProgramId,
    public friday: ProgramId,
    public saturday: ProgramId,
    public sunday: ProgramId
  ) {
  }

  getDay(day: DayNamesType): ProgramId {
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

  setDay(day: string, program: ProgramId) {
    console.log(day)
    if (day === "monday") {
      this.monday = program
    }
    else if (day === "tuesday") {
      this.tuesday = program
    }
    else if (day === "wednesday") {
      this.wednesday = program
    }
    else if (day === "thursday") {
      this.thursday = program
    }
    else if (day === "friday") {
      this.friday = program
    }
    else if (day === "saturday") {
      this.saturday = program
    }
    else if (day === "sunday") {
      this.sunday = program
    } else {
      throw (`Not a know day name ${day}`)
    }
  }


  toJSON(): WeeklyProgrammJSON {
    return Object.assign({}, this);
  }

  fromJSON(json: WeeklyProgrammJSON): WeeklyProgramm {
    const monday = json.monday
    const tuesday = json.tuesday
    const wednesday = json.wednesday
    const thursday = json.thursday
    const friday = json.friday
    const saturday = json.saturday
    const sunday = json.sunday

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

export type ProgramId = string
export class Program extends Serializable {
  constructor(
    id: ProgramId,
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

export const REST_DAY_ID = 'restdayId'
export class Restday extends Program {
  constructor(trainer: TrainerId, comments?: string) {
    super(REST_DAY_ID, trainer, [], 'restday', comments)
  }
}


export const EMPTY_DAY_ID = 'emptydayId'
export class EmptyDay extends Program {
  constructor(trainer: TrainerId) {
    super(EMPTY_DAY_ID, trainer, [], 'emptyday')
  }
}
