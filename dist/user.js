"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Serializable = void 0;
var Serializable = /** @class */ (function () {
    function Serializable(id) {
        this.id = id;
    }
    return Serializable;
}());
exports.Serializable = Serializable;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, name, surname, age, oktaId, type) {
        var _this = _super.call(this, id) || this;
        _this.id = id;
        _this.name = name;
        _this.surname = surname;
        _this.age = age;
        _this.oktaId = oktaId;
        _this.type = type;
        _this.fullname = [_this.name, _this.surname].join(" ");
        return _this;
    }
    return User;
}(Serializable));
exports.User = User;
//# sourceMappingURL=user.js.map