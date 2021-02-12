import { Athlete, AthleteId, AthleteJSON } from "./athlete";

export type TrainerId = string;
export interface TrainerDetails {
  name: string;
  surname: string;
  fullname: string;
  age: number;
}

export class TrainerDetails {
  public fullname: string;
  constructor(public name: string, public surname: string, public age: number) {
    this.fullname = [this.name, this.surname].join(" ");
  }
}

export interface TrainerJSON {
  id: string;
  details: TrainerDetails;
  athletes: AthleteJSON[];
}

export class Trainer {
  constructor(
    public id: TrainerId,
    public details: TrainerDetails,
    public athletes: Athlete[]
  ) {}

  setAthletes(athletes: Athlete[]) {
    this.athletes = athletes;
  }

  addAthlete(athlete: Athlete) {
    this.athletes.push(athlete);
  }

  getAthletes() {
    return this.athletes;
  }

  getAthlete(id: AthleteId) {
    return this.athletes.find((elem: Athlete) => elem.id === id);
  }

  toJSON(): TrainerJSON {
    return Object.assign({}, this, {
      athletes: this.athletes.map((elem: Athlete) => elem.toJSON()),
    });
  }

  fromJSON(json: TrainerJSON): Trainer {
    const athletes = json.athletes.map((elem: AthleteJSON) =>
      Athlete.prototype.fromJSON(elem)
    );

    return new Trainer(json.id, json.details, athletes);
  }
}
