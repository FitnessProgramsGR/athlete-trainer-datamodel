class Exercise {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}
export class SingleSetExercise extends Exercise {
    constructor(id, reps) {
        super(id, "singleset");
        this.id = id;
        this.reps = reps;
    }
    toJSON() {
        return Object.assign({}, this, {
            reps: [this.reps],
        });
    }
}
export class MultiSetExercise extends Exercise {
    constructor(id, reps) {
        super(id, "multiset");
        this.id = id;
        this.reps = reps;
    }
    toJSON() {
        return Object.assign({}, this);
    }
}
//# sourceMappingURL=exercise.js.map