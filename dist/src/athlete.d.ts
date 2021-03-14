import { User } from "./user";
import { ProgramId, WeeklyProgramm, WeeklyProgrammJSON } from "./programm";
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
    program: WeeklyProgrammJSON | undefined;
}
export declare class Athlete extends User {
    trainer: string;
    program?: WeeklyProgramm | undefined;
    constructor(id: string, name: string, surname: string, age: number, oktaId: string, trainer: string, program?: WeeklyProgramm | undefined);
    setTrainer(trainer: string): void;
    getTrainer(): string;
    setProgram(program: WeeklyProgramm): void;
    updateProgram(day: string, program: ProgramId): void;
    deleteProgramDay(day: string): void;
    deleteWeeklyProgram(): void;
    getProgram(): WeeklyProgramm | undefined;
    toJSON(): AthleteJSON;
    fromJSON(json: AthleteJSON): Athlete;
}
