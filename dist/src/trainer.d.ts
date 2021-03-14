import { Athlete, AthleteId, AthleteJSON } from "./athlete";
import { User } from "./user";
export declare type TrainerId = string;
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
export declare class Trainer extends User {
    athletes: Athlete[];
    constructor(id: string, name: string, surname: string, age: number, oktaId: string, athletes: Athlete[]);
    setAthletes(athletes: Athlete[]): void;
    addAthlete(athlete: Athlete): void;
    getAthletes(): Athlete[];
    getAthlete(id: AthleteId): Athlete | undefined;
    toJSON(): TrainerJSON;
    fromJSON(json: TrainerJSON): Trainer;
}
