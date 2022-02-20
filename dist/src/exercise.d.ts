import { MediaEntry } from "./media";
export interface Muscle {
    name: string;
}
export interface ExerciseEntry {
    id: string;
    name: string;
    description: string;
    muscles: Muscle[];
    media: MediaEntry[];
    trainer: string;
}
export interface MultiSetExerciseInstance {
    id: string;
    exercise: string;
    reps: number[];
    type: "multiset";
}
export interface SingleSetExerciseInstance {
    id: string;
    exercise: string;
    reps: number;
    type: "singleset";
}
export interface RoundExerciseInstance {
    id: string;
    exercises: SingleSetExerciseInstance[];
    rounds: number;
    type: "rounds";
}
