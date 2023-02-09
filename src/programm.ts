import { ExerciseInstance } from "./exercise";
import { TrainingStyle } from "./trainingStyles";

export interface Workout {
  id: string; //unique id of the workout
  name: string;
  days?: string[]; //when it is assigned
  intensity?: number; //how intense the workout is (optional)
  meta?: Record<string, any>; //metadata (anything the user wants to add)
  equipment?: string[];
  sections: Section[];
}

export interface Section {
  //sections of each work out (warm up, core, etc...)
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
