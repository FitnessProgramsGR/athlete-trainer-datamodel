export interface ExerciseJSON {
  id: string;
  reps: number[];
  type: string;
}

export type ExerciseTypes = "multiset" | "singleset";

class Exercise {
  constructor(public id: string, public type: ExerciseTypes) {}
}

export class SingleSetExercise extends Exercise {
  constructor(public id: string, public reps: number) {
    super(id, "singleset");
  }

  toJSON(): ExerciseJSON {
    return Object.assign({}, this, {
      reps: [this.reps],
    });
  }
}

export class MultiSetExercise extends Exercise {
  constructor(public id: string, public reps: number[]) {
    super(id, "multiset");
  }

  toJSON(): ExerciseJSON {
    return Object.assign({}, this);
  }
}
