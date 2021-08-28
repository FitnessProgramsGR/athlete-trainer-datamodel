import { Serializable } from "./helpers";
import { AnyMediaEntry, MediaEntryJSON } from "./media";
import { TrainerId } from "./trainer";
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
    trainer: TrainerId;
}
export declare class ExerciseEntry extends Serializable {
    id: ExerciseEntryId;
    name: string;
    description: string;
    muscles: Muscle[];
    media: AnyMediaEntry[];
    trainer: TrainerId;
    constructor(id: ExerciseEntryId, name: string, description: string, muscles: Muscle[], media: AnyMediaEntry[], trainer: TrainerId);
    toJSON(): ExerciseEntryJSON;
}
export interface ExerciseJSON {
    id: ExerciseEntryId;
    reps: number[];
    type: ExerciseTypes;
}
export declare type ExerciseTypes = "multiset" | "singleset";
declare class Exercise extends Serializable {
    id: ExerciseEntryId;
    type: ExerciseTypes;
    constructor(id: ExerciseEntryId, type: ExerciseTypes);
}
export interface SinglesetExerciseJSON {
    id: ExerciseEntryId;
    reps: number[];
}
export declare class SingleSetExercise extends Exercise {
    id: ExerciseEntryId;
    reps: number;
    constructor(id: ExerciseEntryId, reps: number);
    toJSON(): ExerciseJSON;
    fromJSON(json: SinglesetExerciseJSON): SingleSetExercise;
}
export interface MultiSetExerciseJSON {
    id: ExerciseEntryId;
    reps: number[];
}
export declare class MultiSetExercise extends Exercise {
    id: ExerciseEntryId;
    reps: number[];
    constructor(id: ExerciseEntryId, reps: number[]);
    toJSON(): ExerciseJSON;
    fromJSON(json: MultiSetExerciseJSON): MultiSetExercise;
}
export declare type AnyExercise = SingleSetExercise | MultiSetExercise;
export declare class ExerciseInstanceParser {
    constructor();
    fromJSON(json: ExerciseJSON): AnyExercise;
}
export {};
