import { MultiSetExerciseInstance, RoundExerciseInstance, SingleSetExerciseInstance } from "./exercise";
export declare type AnyExerciseInstance = MultiSetExerciseInstance | SingleSetExerciseInstance | RoundExerciseInstance;
export interface Workout {
    id: string;
    days: string[];
    intensity?: number;
    meta?: Record<string, any>;
    sections: Section[];
}
export interface Section {
    id: string;
    name: string;
    exercises: AnyExerciseInstance[];
}
export interface Program {
    id: string;
    trainer: string;
    name: string;
    workouts: Workout[];
}
