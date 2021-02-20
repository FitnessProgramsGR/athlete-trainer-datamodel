export interface User {
}
export interface UserJSON {
    id: string;
    name: string;
    surname: string;
    fullname: string;
    age: number;
    oktaId: string;
    type: string;
}
export declare type UserType = "trainer" | "athlete";
export declare class Serializable {
    id: string;
    constructor(id: string);
}
export declare class User extends Serializable implements User {
    id: string;
    name: string;
    surname: string;
    age: number;
    oktaId: string;
    type: UserType;
    fullname: string;
    constructor(id: string, name: string, surname: string, age: number, oktaId: string, type: UserType);
}
