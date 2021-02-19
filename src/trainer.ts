import { Athlete, AthleteId, AthleteJSON } from "./athlete";
import { User } from "./user";

export type TrainerId = string;

export interface TrainerJSON {
  id: string;
  name: string;
  surname: string;
  fullname: string;
  age: number;
  oktaId: string;
  type: string;
  athletes: AthleteJSON[];
}

export class Trainer extends User {
  constructor(
    id: string,
    name: string,
    surname: string,
    age: number,
    oktaId: string,
    public athletes: Athlete[]
  ) {
    super(id, name, surname, age, oktaId, "trainer");
  }

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

    return new Trainer(
      json.id,
      json.name,
      json.surname,
      json.age,
      json.oktaId,
      athletes
    );
  }
}
