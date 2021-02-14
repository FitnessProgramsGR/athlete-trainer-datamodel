import { TrainerId } from "./trainer";
import { ExerciseDay, Program, ProgramJSON } from "./programm";
import { User, UserType } from "./user";

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
  program: string;
}

export class Athlete extends User {
  constructor(
    id: string,
    name: string,
    surname: string,
    age: number,
    oktaId: string,
    public trainer?: string,
    public program?: string
  ) {
    super(id, name, surname, age, oktaId, "athlete");
  }

  setTrainer(trainer: string) {
    this.trainer = trainer;
  }

  getTrainer() {
    return this.trainer;
  }

  setProgram(program: string) {
    this.program = program;
  }

  getProgram() {
    return this.program;
  }

  toJSON(): AthleteJSON {
    return Object.assign({}, this, {
      trainer: this.trainer ? this.trainer : undefined,
      program: this.program,
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
      json.program
    );
  }
}
