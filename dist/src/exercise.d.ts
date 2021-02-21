import { Serializable } from "./helpers";
import { AnyMediaEntry, MediaEntryJSON } from "./media";
export declare type ExerciseEntryId = string;
export interface MuscleJSON {
    name: string;
}
export declare class Muscle extends Serializable {
    id: string;
    name: string;
    constructor(id: string, name: string);
    toJSON(): MuscleJSON;
}
export interface ExerciseEntryJSON {
    id: ExerciseEntryId;
    name: string;
    description: string;
    muscles: MuscleJSON[];
    media: MediaEntryJSON[];
}
export declare class ExerciseEntry extends Serializable {
    id: ExerciseEntryId;
    name: string;
    description: string;
    muscles: Muscle[];
    media: AnyMediaEntry[];
    constructor(id: ExerciseEntryId, name: string, description: string, muscles: Muscle[], media: AnyMediaEntry[]);
    toJSON(): ExerciseEntryJSON;
}
export interface ExerciseJSON {
    id: string;
    reps: number[];
    type: string;
}
export declare type ExerciseTypes = "multiset" | "singleset";
declare class Exercise extends Serializable {
    id: ExerciseEntryId;
    type: ExerciseTypes;
    constructor(id: ExerciseEntryId, type: ExerciseTypes);
}
export declare class SingleSetExercise extends Exercise {
    id: ExerciseEntryId;
    reps: number;
    constructor(id: ExerciseEntryId, reps: number);
    toJSON(): ExerciseJSON;
}
export declare class MultiSetExercise extends Exercise {
    id: ExerciseEntryId;
    reps: number[];
    constructor(id: ExerciseEntryId, reps: number[]);
    toJSON(): ExerciseJSON;
}
export {};
