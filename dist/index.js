"use strict";
/**
 * Exports for using the Datamodel
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = exports.Program = exports.ProgramSection = exports.Serial = exports.Superset = exports.Round = exports.ExerciseCategory = exports.WeeklyProgramm = exports.MultiSetExercise = exports.SingleSetExercise = exports.Athlete = exports.Serializable = void 0;
var user_1 = require("./src/user");
Object.defineProperty(exports, "Serializable", { enumerable: true, get: function () { return user_1.Serializable; } });
var athlete_1 = require("./src/athlete");
Object.defineProperty(exports, "Athlete", { enumerable: true, get: function () { return athlete_1.Athlete; } });
var exercise_1 = require("./src/exercise");
Object.defineProperty(exports, "SingleSetExercise", { enumerable: true, get: function () { return exercise_1.SingleSetExercise; } });
Object.defineProperty(exports, "MultiSetExercise", { enumerable: true, get: function () { return exercise_1.MultiSetExercise; } });
var programm_1 = require("./src/programm");
Object.defineProperty(exports, "WeeklyProgramm", { enumerable: true, get: function () { return programm_1.WeeklyProgramm; } });
Object.defineProperty(exports, "ExerciseCategory", { enumerable: true, get: function () { return programm_1.ExerciseCategory; } });
Object.defineProperty(exports, "Round", { enumerable: true, get: function () { return programm_1.Round; } });
Object.defineProperty(exports, "Superset", { enumerable: true, get: function () { return programm_1.Superset; } });
Object.defineProperty(exports, "Serial", { enumerable: true, get: function () { return programm_1.Serial; } });
Object.defineProperty(exports, "ProgramSection", { enumerable: true, get: function () { return programm_1.ProgramSection; } });
Object.defineProperty(exports, "Program", { enumerable: true, get: function () { return programm_1.Program; } });
var trainer_1 = require("./src/trainer");
Object.defineProperty(exports, "Trainer", { enumerable: true, get: function () { return trainer_1.Trainer; } });
//# sourceMappingURL=index.js.map