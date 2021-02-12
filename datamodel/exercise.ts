interface ExerciseJSON {
  id: string;
  reps: number[];
}

class Exercise {
  constructor(public id: string, public reps: number[]) {}

  toJSON(): ExerciseJSON {
    return {
      id: this.id,
      reps: this.reps,
    };
  }
}
