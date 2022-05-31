import { Athlete} from "./athlete";
import { Section, Workout } from "./programm";
export interface Trainer {
  id: string;
  name: string;
  surname: string;
  age: number;
  type: string;
  athletes: Athlete[];
  workouts: Workout[];
  sections: Section[];
  library?: string[] //library of bought exercise packages
}