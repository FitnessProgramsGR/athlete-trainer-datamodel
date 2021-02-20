export interface User { }

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

export class Serializable {
  constructor(public id: string) {}
}

export class User extends Serializable implements User {
  public fullname: string;
  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public age: number,
    public oktaId: string,
    public type: UserType
  ) {
    super(id)
    this.fullname = [this.name, this.surname].join(" ");
  }
}

