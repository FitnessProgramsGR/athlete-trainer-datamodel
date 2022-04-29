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
    equipment: string[];
    trainer: string;
}
export interface ExerciseInstance {
}
export interface ExerciseInstance {
    id: string;
    exercise: string;
    reps: number[] | number;
    type: "multiset" | 'singleset';
}
