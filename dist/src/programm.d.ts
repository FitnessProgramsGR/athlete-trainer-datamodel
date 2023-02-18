import { ExerciseInstance } from "./exercise";
import { TrainingStyle } from "./trainingStyles";
export interface Workout {
    id: string;
    name: string;
    intensity?: number;
    equipment?: string[];
    sections: Section[];
}
export interface Section {
    id: string;
    name: string;
    rounds?: number;
    trainingStyle: TrainingStyle;
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
