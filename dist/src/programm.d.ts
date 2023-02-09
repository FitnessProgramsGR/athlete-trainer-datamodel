import { ExerciseInstance } from "./exercise";
export interface Workout {
    id: string;
    name: string;
    days?: string[];
    intensity?: number;
    meta?: Record<string, any>;
    equipment?: string[];
    sections: Section[];
}
export interface Section {
    id: string;
    name: string;
    rounds?: number;
    type: "serial" | "rounds" | "tabata" | "combo";
    exercises: ExerciseInstance[];
    note?: string;
}
export interface Program {
    id: string;
    trainer: string;
    name: string;
    equipment: string[];
    workouts: Workout[];
}
