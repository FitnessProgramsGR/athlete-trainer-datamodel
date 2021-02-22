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
exports.ExerciseInstanceParser = exports.MultiSetExercise = exports.SingleSetExercise = exports.ExerciseEntry = exports.Muscle = void 0;
var helpers_1 = require("./helpers");
var Muscle = /** @class */ (function (_super) {
    __extends(Muscle, _super);
    function Muscle(id, name) {
        var _this = _super.call(this, id) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Muscle.prototype.toJSON = function () {
        return Object.assign({}, this);
    };
    return Muscle;
}(helpers_1.Serializable));
exports.Muscle = Muscle;
var ExerciseEntry = /** @class */ (function (_super) {
    __extends(ExerciseEntry, _super);
    function ExerciseEntry(id, name, description, muscles, media) {
        var _this = _super.call(this, id) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.muscles = muscles;
        _this.media = media;
        return _this;
    }
    ExerciseEntry.prototype.toJSON = function () {
        return Object.assign({}, this, {
            muscles: this.muscles.map(function (elem) { return elem.toJSON(); }),
            media: this.media.map(function (elem) { return elem.toJSON(); })
        });
    };
    return ExerciseEntry;
}(helpers_1.Serializable));
exports.ExerciseEntry = ExerciseEntry;
var Exercise = /** @class */ (function (_super) {
    __extends(Exercise, _super);
    function Exercise(id, type) {
        var _this = _super.call(this, id) || this;
        _this.id = id;
        _this.type = type;
        return _this;
    }
    return Exercise;
}(helpers_1.Serializable));
var SingleSetExercise = /** @class */ (function (_super) {
    __extends(SingleSetExercise, _super);
    function SingleSetExercise(id, reps) {
        var _this = _super.call(this, id, "singleset") || this;
        _this.id = id;
        _this.reps = reps;
        return _this;
    }
    SingleSetExercise.prototype.toJSON = function () {
        return Object.assign({}, this, {
            reps: [this.reps],
        });
    };
    SingleSetExercise.prototype.fromJSON = function (json) {
        return new SingleSetExercise(json.id, json.reps[0]);
    };
    return SingleSetExercise;
}(Exercise));
exports.SingleSetExercise = SingleSetExercise;
var MultiSetExercise = /** @class */ (function (_super) {
    __extends(MultiSetExercise, _super);
    function MultiSetExercise(id, reps) {
        var _this = _super.call(this, id, "multiset") || this;
        _this.id = id;
        _this.reps = reps;
        return _this;
    }
    MultiSetExercise.prototype.toJSON = function () {
        return Object.assign({}, this);
    };
    MultiSetExercise.prototype.fromJSON = function (json) {
        return new MultiSetExercise(json.id, json.reps);
    };
    return MultiSetExercise;
}(Exercise));
exports.MultiSetExercise = MultiSetExercise;
var ExerciseInstanceParser = /** @class */ (function () {
    function ExerciseInstanceParser() {
    }
    ExerciseInstanceParser.prototype.fromJSON = function (json) {
        switch (json.type) {
            case 'multiset': {
                return MultiSetExercise.prototype.fromJSON(json);
            }
            case 'singleset': {
                return SingleSetExercise.prototype.fromJSON(json);
            }
            default: {
                throw ("Not known type of set " + json.type);
            }
        }
    };
    return ExerciseInstanceParser;
}());
exports.ExerciseInstanceParser = ExerciseInstanceParser;
//# sourceMappingURL=exercise.js.map