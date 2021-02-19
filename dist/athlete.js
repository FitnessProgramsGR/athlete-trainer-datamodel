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
exports.Athlete = void 0;
var user_1 = require("./user");
var Athlete = /** @class */ (function (_super) {
    __extends(Athlete, _super);
    function Athlete(id, name, surname, age, oktaId, trainer, program) {
        var _this = _super.call(this, id, name, surname, age, oktaId, "athlete") || this;
        _this.trainer = trainer;
        _this.program = program;
        return _this;
    }
    Athlete.prototype.setTrainer = function (trainer) {
        this.trainer = trainer;
    };
    Athlete.prototype.getTrainer = function () {
        return this.trainer;
    };
    Athlete.prototype.setProgram = function (program) {
        this.program = program;
    };
    Athlete.prototype.getProgram = function () {
        return this.program;
    };
    Athlete.prototype.toJSON = function () {
        return Object.assign({}, this, {
            trainer: this.trainer ? this.trainer : '',
            program: this.program ? this.program : '',
        });
    };
    Athlete.prototype.fromJSON = function (json) {
        return new Athlete(json.id, json.name, json.surname, json.age, json.oktaId, json.trainer, json.program);
    };
    return Athlete;
}(user_1.User));
exports.Athlete = Athlete;
//# sourceMappingURL=athlete.js.map