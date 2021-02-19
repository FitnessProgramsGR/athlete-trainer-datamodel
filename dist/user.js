"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, name, surname, age, oktaId, type) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.oktaId = oktaId;
        this.type = type;
        this.fullname = [this.name, this.surname].join(" ");
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map