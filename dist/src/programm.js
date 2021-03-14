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
exports.EmptyDay = exports.Restday = exports.BasicProgram = exports.Program = exports.ProgramSection = exports.ExerciseCategoryArrayParser = exports.Serial = exports.Superset = exports.Round = exports.ExerciseCategory = exports.WeeklyProgramm = void 0;
var exercise_1 = require("./exercise");
var helpers_1 = require("./helpers");
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
    WeeklyProgramm.prototype.getDay = function (day) {
        switch (day) {
            case 'monday': {
                return this.monday;
            }
            case 'tuesday': {
                return this.tuesday;
            }
            case 'wednesday': {
                return this.wednesday;
            }
            case 'thursday': {
                return this.thursday;
            }
            case 'friday': {
                return this.friday;
            }
            case 'saturday': {
                return this.saturday;
            }
            case 'sunday': {
                return this.sunday;
            }
            default: {
                throw ("Not a know day name " + day);
            }
        }
    };
    WeeklyProgramm.prototype.setDay = function (day, program) {
        console.log(day);
        if (day === "monday") {
            this.monday = program;
        }
        else if (day === "tuesday") {
            this.tuesday = program;
        }
        else if (day === "wednesday") {
            this.wednesday = program;
        }
        else if (day === "thursday") {
            this.thursday = program;
        }
        else if (day === "friday") {
            this.friday = program;
        }
        else if (day === "saturday") {
            this.saturday = program;
        }
        else if (day === "sunday") {
            this.sunday = program;
        }
        else {
            throw ("Not a know day name " + day);
        }
    };
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
    WeeklyProgramm.prototype.fromJSON = function (json) {
        var monday = Program.prototype.fromJSON(json.monday);
        var tuesday = Program.prototype.fromJSON(json.tuesday);
        var wednesday = Program.prototype.fromJSON(json.wednesday);
        var thursday = Program.prototype.fromJSON(json.thursday);
        var friday = Program.prototype.fromJSON(json.friday);
        var saturday = Program.prototype.fromJSON(json.saturday);
        var sunday = Program.prototype.fromJSON(json.sunday);
        return new WeeklyProgramm(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
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
    Round.prototype.fromJSON = function (json) {
        var entries = json.exercises.map(function (elem) { return exercise_1.ExerciseInstanceParser.prototype.fromJSON(elem); });
        return new Round(entries, json.rounds);
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
    Superset.prototype.fromJSON = function (json) {
        return new Superset(exercise_1.ExerciseInstanceParser.prototype.fromJSON(json.exercises[0]), exercise_1.ExerciseInstanceParser.prototype.fromJSON(json.exercises[1]), json.rounds);
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
    Serial.prototype.fromJSON = function (json) {
        var entries = json.exercises.map(function (elem) { return exercise_1.ExerciseInstanceParser.prototype.fromJSON(elem); });
        return new Serial(entries);
    };
    return Serial;
}(ExerciseCategory));
exports.Serial = Serial;
var ExerciseCategoryArrayParser = /** @class */ (function () {
    function ExerciseCategoryArrayParser() {
    }
    ExerciseCategoryArrayParser.prototype.fromJSON = function (json) {
        switch (json.type) {
            case 'serial': {
                return Serial.prototype.fromJSON(json);
            }
            case 'superset': {
                return Superset.prototype.fromJSON(json);
            }
            case 'round': {
                return Round.prototype.fromJSON(json);
            }
            default: {
                throw ("Not known type of exercise " + json.type);
            }
        }
    };
    return ExerciseCategoryArrayParser;
}());
exports.ExerciseCategoryArrayParser = ExerciseCategoryArrayParser;
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
    ProgramSection.prototype.fromJSON = function (json) {
        var entries = json.entries.map(function (elem) { return ExerciseCategoryArrayParser.prototype.fromJSON(elem); });
        return new ProgramSection(json.name, entries);
    };
    return ProgramSection;
}());
exports.ProgramSection = ProgramSection;
var Program = /** @class */ (function (_super) {
    __extends(Program, _super);
    function Program(id, trainer, sections, type, comments) {
        var _this = _super.call(this, id) || this;
        _this.trainer = trainer;
        _this.sections = sections;
        _this.type = type;
        _this.comments = comments;
        return _this;
    }
    Program.prototype.toJSON = function () {
        return Object.assign({}, this, {
            sections: this.sections.map(function (elem) { return elem.toJSON(); }),
        });
    };
    Program.prototype.fromJSON = function (json) {
        var sections = json.sections.map(function (elem) { return ProgramSection.prototype.fromJSON(elem); });
        return new Program(json.id, json.trainer, sections, json.type);
    };
    return Program;
}(helpers_1.Serializable));
exports.Program = Program;
var BasicProgram = /** @class */ (function (_super) {
    __extends(BasicProgram, _super);
    function BasicProgram(id, trainer, sections, comments) {
        return _super.call(this, id, trainer, sections, 'program', comments) || this;
    }
    return BasicProgram;
}(Program));
exports.BasicProgram = BasicProgram;
var Restday = /** @class */ (function (_super) {
    __extends(Restday, _super);
    function Restday(id, trainer, comments) {
        return _super.call(this, id, trainer, [], 'restday', comments) || this;
    }
    return Restday;
}(Program));
exports.Restday = Restday;
var EmptyDay = /** @class */ (function (_super) {
    __extends(EmptyDay, _super);
    function EmptyDay(id, trainer) {
        return _super.call(this, id, trainer, [], 'emptyday') || this;
    }
    return EmptyDay;
}(Program));
exports.EmptyDay = EmptyDay;
//# sourceMappingURL=programm.js.map