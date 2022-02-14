import { Athlete} from "./athlete";
export interface Trainer {
  id: string;
  name: string;
  surname: string;
  fullname: string;
  age: number;
  oktaId: string;
  type: string;
  athletes: Athlete[];
  library?: string[] //library of bought exercise packages
}