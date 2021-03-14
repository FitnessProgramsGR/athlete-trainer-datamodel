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
exports.Trainer = void 0;
var athlete_1 = require("./athlete");
var user_1 = require("./user");
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(id, name, surname, age, oktaId, athletes) {
        var _this = _super.call(this, id, name, surname, age, oktaId, "trainer") || this;
        _this.athletes = athletes;
        return _this;
    }
    Trainer.prototype.setAthletes = function (athletes) {
        this.athletes = athletes;
    };
    Trainer.prototype.addAthlete = function (athlete) {
        this.athletes.push(athlete);
    };
    Trainer.prototype.getAthletes = function () {
        return this.athletes;
    };
    Trainer.prototype.getAthlete = function (id) {
        return this.athletes.find(function (elem) { return elem.id === id; });
    };
    Trainer.prototype.toJSON = function () {
        return Object.assign({}, this, {
            athletes: this.athletes.map(function (elem) { return elem.toJSON(); }),
        });
    };
    Trainer.prototype.fromJSON = function (json) {
        var athletes = json.athletes.map(function (elem) {
            return athlete_1.Athlete.prototype.fromJSON(elem);
        });
        return new Trainer(json.id, json.name, json.surname, json.age, json.oktaId, athletes);
    };
    return Trainer;
}(user_1.User));
exports.Trainer = Trainer;
//# sourceMappingURL=trainer.js.map