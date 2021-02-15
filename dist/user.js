export class User {
    constructor(id, name, surname, age, oktaId, type) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.oktaId = oktaId;
        this.type = type;
        this.fullname = [this.name, this.surname].join(" ");
    }
}
//# sourceMappingURL=user.js.map