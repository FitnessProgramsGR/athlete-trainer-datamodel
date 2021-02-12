import { TrainerId } from "./trainer";
import { ExerciseDay, Program, ProgramJSON } from "./programm";

export type AthleteId = string;

export interface AthleteDetails {
  name: string;
  surname: string;
  age: number;
  fullname: string;
}

export class AthleteDetails {
  public fullname: string;
  constructor(public name: string, public surname: string, public age: number) {
    this.fullname = [this.name, this.surname].join(" ");
  }

  toJSON(): AthleteDetails {
    return Object.assign({}, this);
  }
}

export interface AthleteJSON {
  id: string;
  details: AthleteDetails;
  trainer: string;
  program: string;
}

export class Athlete {
  constructor(
    public id: AthleteId,
    public details: AthleteDetails,
    public trainer?: TrainerId,
    public program?: string
  ) {}

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
    return new Athlete(json.id, json.details, json.trainer, json.program);
  }
}
