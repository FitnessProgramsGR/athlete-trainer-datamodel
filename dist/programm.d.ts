import { ExerciseJSON, MultiSetExercise, SingleSetExercise } from "./exercise";
export interface WeeklyProgrammJSON {
    monday: ProgramJSON;
    tuesday: ProgramJSON;
    wednesday: ProgramJSON;
    thursday: ProgramJSON;
    friday: ProgramJSON;
    saturday: ProgramJSON;
    sunday: ProgramJSON;
}
export declare class WeeklyProgramm {
    monday: Program;
    tuesday: Program;
    wednesday: Program;
    thursday: Program;
    friday: Program;
    saturday: Program;
    sunday: Program;
    constructor(monday: Program, tuesday: Program, wednesday: Program, thursday: Program, friday: Program, saturday: Program, sunday: Program);
    toJSON(): WeeklyProgrammJSON;
}
export declare type Categories = "round" | "superset" | "serial";
export interface ExerciseCategoryJSON {
    type: string;
    exercises: ExerciseJSON[];
    rounds: number;
}
export declare class ExerciseCategory {
    type: Categories;
    constructor(type: Categories);
}
export declare class Round extends ExerciseCategory {
    exercises: SingleSetExercise[];
    rounds: number;
    constructor(exercises: SingleSetExercise[], rounds: number);
    toJSON(): ExerciseCategoryJSON;
}
export declare class Superset extends ExerciseCategory {
    exercise1: SingleSetExercise;
    exercise2: SingleSetExercise;
    rounds: number;
    constructor(exercise1: SingleSetExercise, exercise2: SingleSetExercise, rounds: number);
    toJSON(): ExerciseCategoryJSON;
}
export declare class Serial extends ExerciseCategory {
    exercises: MultiSetExercise[];
    constructor(exercises: MultiSetExercise[]);
    toJSON(): ExerciseCategoryJSON;
}
export declare type AnyExerciseCategory = Round | Serial | Superset;
export interface ProgramSectionJSON {
    name: string;
    entries: ExerciseCategoryJSON[];
}
export interface ProgramSection {
    name: string;
    entries: AnyExerciseCategory[];
}
export declare class ProgramSection {
    name: string;
    entries: AnyExerciseCategory[];
    constructor(name: string, entries: AnyExerciseCategory[]);
    toJSON(): ProgramSectionJSON;
}
export interface ProgramJSON {
    id: string;
    trainer: string;
    sections: ProgramSectionJSON[];
}
export declare class Program {
    id: string;
    trainer: string;
    sections: ProgramSection[];
    constructor(id: string, trainer: string, sections: ProgramSection[]);
    toJSON(): ProgramJSON;
}
