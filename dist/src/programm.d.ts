import { MultiSetExerciseInstance, SingleSetExerciseInstance } from "./exercise";
export declare type AnyExerciseInstance = MultiSetExerciseInstance | SingleSetExerciseInstance;
export interface Workout {
    id: string;
    name: string;
    days: string[];
    intensity?: number;
    meta?: Record<string, any>;
    sections: Section[];
}
export interface Section {
    id: string;
    name: string;
    rounds?: number;
    exercises: AnyExerciseInstance[];
}
export interface Program {
    id: string;
    trainer: string;
    name: string;
    equipment: string[];
    workouts: Workout[];
}
