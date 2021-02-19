export interface ExerciseJSON {
    id: string;
    reps: number[];
    type: string;
}
export declare type ExerciseTypes = "multiset" | "singleset";
declare class Exercise {
    id: string;
    type: ExerciseTypes;
    constructor(id: string, type: ExerciseTypes);
}
export declare class SingleSetExercise extends Exercise {
    id: string;
    reps: number;
    constructor(id: string, reps: number);
    toJSON(): ExerciseJSON;
}
export declare class MultiSetExercise extends Exercise {
    id: string;
    reps: number[];
    constructor(id: string, reps: number[]);
    toJSON(): ExerciseJSON;
}
export {};
