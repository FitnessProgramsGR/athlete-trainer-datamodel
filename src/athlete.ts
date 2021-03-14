import { User } from "./user";
import { EmptyDay, Program, WeeklyProgramm, WeeklyProgrammJSON } from "./programm"
import { DayNames, DayNamesType } from "./helpers";
export type AthleteId = string;

export interface AthleteJSON {
  id: string;
  name: string;
  surname: string;
  fullname: string;
  age: number;
  oktaId: string;
  type: string;
  trainer: string;
  program: WeeklyProgrammJSON | undefined;
}

export class Athlete extends User {
  constructor(
    id: string,
    name: string,
    surname: string,
    age: number,
    oktaId: string,
    public trainer: string,
    public program?: WeeklyProgramm
  ) {
    super(id, name, surname, age, oktaId, "athlete");
    if (!program) {
      this.setProgram(
        new WeeklyProgramm(
          new EmptyDay('', this.trainer),
          new EmptyDay('', this.trainer),
          new EmptyDay('', this.trainer),
          new EmptyDay('', this.trainer),
          new EmptyDay('', this.trainer),
          new EmptyDay('', this.trainer),
          new EmptyDay('', this.trainer),
        )
      )
    }
  }

  setTrainer(trainer: string) {
    this.trainer = trainer;
  }

  getTrainer() {
    return this.trainer;
  }

  setProgram(program: WeeklyProgramm) {
    this.program = program;
  }

  updateProgram(day: string, program: Program): void {
    if (this.program) {
      this.program.setDay(day, program)
    } else {
      throw ('Program is undefined, please create a program first')
    }
  }

  deleteProgramDay(day: string): void {
    this.updateProgram(day, new EmptyDay('randomGeneratedIdAlert', this.trainer))
  }

  deleteWeeklyProgram(): void {
    for (const day of Object.values(DayNames)) {
      this.deleteProgramDay(day)
    }
  }

  getProgram(): WeeklyProgramm | undefined {
    return this.program;
  }

  toJSON(): AthleteJSON {
    return Object.assign({}, this, {
      trainer: this.trainer,
      program: this.program ? this.program.toJSON() : undefined,
    });
  }

  fromJSON(json: AthleteJSON): Athlete {
    return new Athlete(
      json.id,
      json.name,
      json.surname,
      json.age,
      json.oktaId,
      json.trainer,
      json.program ? WeeklyProgramm.prototype.fromJSON(json.program) : undefined
    );
  }
}
