import { ExerciseInstance } from "./exercise";
export interface Program {
    id: string;
    trainer: string;
    workouts: {
        id: string;
        days: string[];
        intensity?: number;
        meta?: Record<string, any>;
        sections: {
            id: string;
            name: string;
            exercises: ExerciseInstance[];
        }[];
    }[];
}
