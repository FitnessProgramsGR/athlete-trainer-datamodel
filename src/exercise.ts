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

export interface MultiSetExerciseInstance {
  id: string;
  exercise: string, //ExerciseEntry.id
  reps: number[];
  type: "multiset";
}

export interface SingleSetExerciseInstance {
  id: string;
  exercise: string, //ExerciseEntry.id
  reps: number;
  type: "singleset";
}
