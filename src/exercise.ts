import { Serializable } from "./helpers";
import { AnyMediaEntry, MediaEntryJSON } from "./media";

//Exercise entry
export type ExerciseEntryId = string
export interface MuscleJSON {
  name: string
}

export class Muscle extends Serializable {
  constructor(public id: string, public name: string) {
    super(id)
  }

  toJSON(): MuscleJSON {
    return Object.assign({}, this)
  }
}

export interface ExerciseEntryJSON {
  id: ExerciseEntryId,
  name: string,
  description: string,
  muscles: MuscleJSON[],
  media: MediaEntryJSON[]
}

export class ExerciseEntry extends Serializable {
  constructor(
    public id: ExerciseEntryId,
    public name: string,
    public description: string,
    public muscles: Muscle[],
    public media: AnyMediaEntry[]) {
    super(id)
  }


  toJSON(): ExerciseEntryJSON {
    return Object.assign({}, this, {
      muscles: this.muscles.map((elem: Muscle) => elem.toJSON()),
      media: this.media.map((elem: AnyMediaEntry) => elem.toJSON())
    })
  }
}

///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////
//Program exercises
///////////////////
///////////////////
///////////////////
///////////////////
///////////////////

export interface ExerciseJSON {
  id: string;
  reps: number[];
  type: string;
}



export type ExerciseTypes = "multiset" | "singleset";

class Exercise extends Serializable {
  constructor(public id: ExerciseEntryId, public type: ExerciseTypes) {
    super(id)
  }
}

export class SingleSetExercise extends Exercise {
  constructor(public id: ExerciseEntryId, public reps: number) {
    super(id, "singleset");
  }

  toJSON(): ExerciseJSON {
    return Object.assign({}, this, {
      reps: [this.reps],
    });
  }
}

export class MultiSetExercise extends Exercise {
  constructor(public id: ExerciseEntryId, public reps: number[]) {
    super(id, "multiset");
  }

  toJSON(): ExerciseJSON {
    return Object.assign({}, this);
  }
}
