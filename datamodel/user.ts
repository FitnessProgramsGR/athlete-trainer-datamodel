export interface User {}

export interface UserJSON {
  id: string;
  name: string;
  surname: string;
  fullname: string;
  age: number;
  oktaId: string;
  type: string;
}

export type UserType = "trainer" | "athlete";

export class User implements User {
  public fullname: string;
  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public age: number,
    public oktaId: string,
    public type: UserType
  ) {
    this.fullname = [this.name, this.surname].join(" ");
  }
}
