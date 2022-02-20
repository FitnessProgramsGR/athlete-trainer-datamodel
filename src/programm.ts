import { MultiSetExerciseInstance, RoundExerciseInstance, SingleSetExerciseInstance } from "./exercise";

export type AnyExerciseInstance = MultiSetExerciseInstance | SingleSetExerciseInstance | RoundExerciseInstance
export interface Program {
  id:string,
  trainer: string,
  name: string,
  workouts: {
    id: string, //unique id of the workout
    days: string[], //when it is assigned
    intensity?: number, //how intense the workout is (optional)
    meta?: Record<string,any>, //metadata (anything the user wants to add)
    sections: { //sections of each work out (warm up, core, etc...)
      id: string,
      name: string,
      exercises: AnyExerciseInstance[]
    }[]
  }[]
}