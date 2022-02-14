import { Program } from "..";

export interface Athlete {
  id: string;
  name: string;
  surname: string;
  age: number;
  type?: 'athlete';
  trainer: string;
  img?: string,
  email?: string,
  tel?:string
  weight?: {
    value: number,
    metric: string
  },
  height?: {
    value: number,
    metric: string
  }
  social?: Record<string, string>
  meta?: {
    favouriteFood: string,
    [key:string]: string
  }
  program?: Program[] | undefined;
}
