import { User } from "./user";
export declare type AthleteId = string;
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
export declare class Athlete extends User {
    trainer?: string | undefined;
    program?: string | undefined;
    constructor(id: string, name: string, surname: string, age: number, oktaId: string, trainer?: string | undefined, program?: string | undefined);
    setTrainer(trainer: string): void;
    getTrainer(): string | undefined;
    setProgram(program: string): void;
    getProgram(): string | undefined;
    toJSON(): AthleteJSON;
    fromJSON(json: AthleteJSON): Athlete;
}
