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

export interface ExerciseInstance {
  id: string;
  reps: number[];
  type: ExerciseTypes;
}

export type ExerciseTypes = "multiset" | "singleset";