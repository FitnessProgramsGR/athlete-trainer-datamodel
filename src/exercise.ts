import { MediaEntry } from "./media";
import { TrainingStyle } from "./trainingStyles";

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
  id: string;
  exercise: string; //ExerciseEntry.id
  reps: number[] | number;
  weight?: number[] | number;
}