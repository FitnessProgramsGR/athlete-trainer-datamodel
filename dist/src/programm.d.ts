import { MultiSetExerciseInstance, RoundExerciseInstance, SingleSetExerciseInstance } from "./exercise";
export declare type AnyExerciseInstance = MultiSetExerciseInstance | SingleSetExerciseInstance | RoundExerciseInstance;
export interface Program {
    id: string;
    trainer: string;
    name: string;
    workouts: {
        id: string;
        days: string[];
        intensity?: number;
        meta?: Record<string, any>;
        sections: {
            id: string;
            name: string;
            exercises: AnyExerciseInstance[];
        }[];
    }[];
}
