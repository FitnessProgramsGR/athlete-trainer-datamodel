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
exports.Program = exports.ProgramSection = exports.Serial = exports.Superset = exports.Round = exports.ExerciseCategory = exports.WeeklyProgramm = void 0;
var WeeklyProgramm = /** @class */ (function () {
    function WeeklyProgramm(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    }
    WeeklyProgramm.prototype.toJSON = function () {
        return Object.assign({}, this, {
            monday: this.monday.toJSON(),
            tuesday: this.tuesday.toJSON(),
            wednesday: this.wednesday.toJSON(),
            thursday: this.thursday.toJSON(),
            friday: this.friday.toJSON(),
            saturday: this.saturday.toJSON(),
            sunday: this.sunday.toJSON(),
        });
    };
    return WeeklyProgramm;
}());
exports.WeeklyProgramm = WeeklyProgramm;
var ExerciseCategory = /** @class */ (function () {
    function ExerciseCategory(type) {
        this.type = type;
    }
    return ExerciseCategory;
}());
exports.ExerciseCategory = ExerciseCategory;
var Round = /** @class */ (function (_super) {
    __extends(Round, _super);
    function Round(exercises, rounds) {
        var _this = _super.call(this, "round") || this;
        _this.exercises = exercises;
        _this.rounds = rounds;
        return _this;
    }
    Round.prototype.toJSON = function () {
        return Object.assign({}, this, {
            exercises: this.exercises.map(function (elem) { return elem.toJSON(); }),
        });
    };
    return Round;
}(ExerciseCategory));
exports.Round = Round;
var Superset = /** @class */ (function (_super) {
    __extends(Superset, _super);
    function Superset(exercise1, exercise2, rounds) {
        var _this = _super.call(this, "superset") || this;
        _this.exercise1 = exercise1;
        _this.exercise2 = exercise2;
        _this.rounds = rounds;
        return _this;
    }
    Superset.prototype.toJSON = function () {
        return Object.assign({}, this, {
            exercises: [this.exercise1.toJSON(), this.exercise2.toJSON()],
        });
    };
    return Superset;
}(ExerciseCategory));
exports.Superset = Superset;
var Serial = /** @class */ (function (_super) {
    __extends(Serial, _super);
    function Serial(exercises) {
        var _this = _super.call(this, "serial") || this;
        _this.exercises = exercises;
        return _this;
    }
    Serial.prototype.toJSON = function () {
        return Object.assign({}, this, {
            exercises: this.exercises.map(function (elem) { return elem.toJSON(); }),
            rounds: 0,
        });
    };
    return Serial;
}(ExerciseCategory));
exports.Serial = Serial;
var ProgramSection = /** @class */ (function () {
    function ProgramSection(name, entries) {
        this.name = name;
        this.entries = entries;
    }
    ProgramSection.prototype.toJSON = function () {
        return Object.assign({}, this, {
            entries: this.entries.map(function (elem) { return elem.toJSON(); }),
        });
    };
    return ProgramSection;
}());
exports.ProgramSection = ProgramSection;
var Program = /** @class */ (function () {
    function Program(id, trainer, sections) {
        this.id = id;
        this.trainer = trainer;
        this.sections = sections;
    }
    Program.prototype.toJSON = function () {
        return Object.assign({}, this, {
            sections: this.sections.map(function (elem) { return elem.toJSON(); }),
        });
    };
    return Program;
}());
exports.Program = Program;
//# sourceMappingURL=programm.js.map