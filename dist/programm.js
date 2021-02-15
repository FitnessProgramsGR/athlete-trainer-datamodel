export class WeeklyProgramm {
    constructor(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    }
    toJSON() {
        return Object.assign({}, this, {
            monday: this.monday.toJSON(),
            tuesday: this.tuesday.toJSON(),
            wednesday: this.wednesday.toJSON(),
            thursday: this.thursday.toJSON(),
            friday: this.friday.toJSON(),
            saturday: this.saturday.toJSON(),
            sunday: this.sunday.toJSON(),
        });
    }
}
export class ExerciseCategory {
    constructor(type) {
        this.type = type;
    }
}
export class Round extends ExerciseCategory {
    constructor(exercises, rounds) {
        super("round");
        this.exercises = exercises;
        this.rounds = rounds;
    }
    toJSON() {
        return Object.assign({}, this, {
            exercises: this.exercises.map((elem) => elem.toJSON()),
        });
    }
}
export class Superset extends ExerciseCategory {
    constructor(exercise1, exercise2, rounds) {
        super("superset");
        this.exercise1 = exercise1;
        this.exercise2 = exercise2;
        this.rounds = rounds;
    }
    toJSON() {
        return Object.assign({}, this, {
            exercises: [this.exercise1.toJSON(), this.exercise2.toJSON()],
        });
    }
}
export class Serial extends ExerciseCategory {
    constructor(exercises) {
        super("serial");
        this.exercises = exercises;
    }
    toJSON() {
        return Object.assign({}, this, {
            exercises: this.exercises.map((elem) => elem.toJSON()),
            rounds: 0,
        });
    }
}
export class ProgramSection {
    constructor(name, entries) {
        this.name = name;
        this.entries = entries;
    }
    toJSON() {
        return Object.assign({}, this, {
            entries: this.entries.map((elem) => elem.toJSON()),
        });
    }
}
export class Program {
    constructor(id, trainer, sections) {
        this.id = id;
        this.trainer = trainer;
        this.sections = sections;
    }
    toJSON() {
        return Object.assign({}, this, {
            sections: this.sections.map((elem) => elem.toJSON()),
        });
    }
}
//# sourceMappingURL=programm.js.map