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
var programm_1 = require("./programm");
var helpers_1 = require("./helpers");
var Athlete = /** @class */ (function (_super) {
    __extends(Athlete, _super);
    function Athlete(id, name, surname, age, oktaId, trainer, program) {
        var _this = _super.call(this, id, name, surname, age, oktaId, "athlete") || this;
        _this.trainer = trainer;
        _this.program = program;
        if (!program) {
            _this.setProgram(new programm_1.WeeklyProgramm(new programm_1.EmptyDay(_this.trainer).id, new programm_1.EmptyDay(_this.trainer).id, new programm_1.EmptyDay(_this.trainer).id, new programm_1.EmptyDay(_this.trainer).id, new programm_1.EmptyDay(_this.trainer).id, new programm_1.EmptyDay(_this.trainer).id, new programm_1.EmptyDay(_this.trainer).id));
        }
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
    Athlete.prototype.updateProgram = function (day, program) {
        if (this.program) {
            this.program.setDay(day, program);
        }
        else {
            throw ('Program is undefined, please create a program first');
        }
    };
    Athlete.prototype.deleteProgramDay = function (day) {
        this.updateProgram(day, new programm_1.EmptyDay(this.trainer).id);
    };
    Athlete.prototype.deleteWeeklyProgram = function () {
        for (var _i = 0, _a = Object.values(helpers_1.DayNames); _i < _a.length; _i++) {
            var day = _a[_i];
            this.deleteProgramDay(day);
        }
    };
    Athlete.prototype.getProgram = function () {
        return this.program;
    };
    Athlete.prototype.toJSON = function () {
        return Object.assign({}, this, {
            trainer: this.trainer,
            program: this.program ? this.program.toJSON() : undefined,
        });
    };
    Athlete.prototype.fromJSON = function (json) {
        return new Athlete(json.id, json.name, json.surname, json.age, json.oktaId, json.trainer, json.program ? programm_1.WeeklyProgramm.prototype.fromJSON(json.program) : undefined);
    };
    return Athlete;
}(user_1.User));
exports.Athlete = Athlete;
//# sourceMappingURL=athlete.js.map