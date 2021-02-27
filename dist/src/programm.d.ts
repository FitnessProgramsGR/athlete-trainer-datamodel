import { ExerciseJSON, MultiSetExercise, SingleSetExercise } from "./exercise";
import { DayNamesType, Serializable } from "./helpers";
import { TrainerId } from "./trainer";
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
    getDay(day: DayNamesType): Program;
    toJSON(): WeeklyProgrammJSON;
    fromJSON(json: WeeklyProgrammJSON): WeeklyProgramm;
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
export interface RoundCategoryJSON {
    exercises: ExerciseJSON[];
    rounds: number;
}
export declare class Round extends ExerciseCategory {
    exercises: SingleSetExercise[];
    rounds: number;
    constructor(exercises: SingleSetExercise[], rounds: number);
    toJSON(): ExerciseCategoryJSON;
    fromJSON(json: RoundCategoryJSON): Round;
}
export interface SupersetCategoryJSON {
    exercises: ExerciseJSON[];
    rounds: number;
}
export declare class Superset extends ExerciseCategory {
    exercise1: SingleSetExercise;
    exercise2: SingleSetExercise;
    rounds: number;
    constructor(exercise1: SingleSetExercise, exercise2: SingleSetExercise, rounds: number);
    toJSON(): ExerciseCategoryJSON;
    fromJSON(json: SupersetCategoryJSON): Superset;
}
export interface SerialCategoryJSON {
    exercises: ExerciseJSON[];
}
export declare class Serial extends ExerciseCategory {
    exercises: MultiSetExercise[];
    constructor(exercises: MultiSetExercise[]);
    toJSON(): ExerciseCategoryJSON;
    fromJSON(json: SerialCategoryJSON): Serial;
}
export declare type AnyExerciseCategory = Round | Serial | Superset;
export declare class ExerciseCategoryArrayParser {
    constructor();
    fromJSON(json: ExerciseCategoryJSON): AnyExerciseCategory;
}
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
    fromJSON(json: ProgramSectionJSON): ProgramSection;
}
export declare type ProgramTypes = 'restday' | 'emptyday' | 'program';
export interface ProgramJSON {
    id: string;
    trainer: string;
    sections: ProgramSectionJSON[];
    type: ProgramTypes;
    comments?: string;
}
export declare class Program extends Serializable {
    trainer: TrainerId;
    sections: ProgramSection[];
    type: ProgramTypes;
    comments?: string | undefined;
    constructor(id: string, trainer: TrainerId, sections: ProgramSection[], type: ProgramTypes, comments?: string | undefined);
    toJSON(): ProgramJSON;
    fromJSON(json: ProgramJSON): Program;
}
export declare class BasicProgram extends Program {
    constructor(id: string, trainer: TrainerId, sections: ProgramSection[], comments?: string);
}
export declare class Restday extends Program {
    constructor(id: string, trainer: TrainerId, comments?: string);
}
export declare class EmptyDay extends Program {
    constructor(id: string, trainer: TrainerId);
}
