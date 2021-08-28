import { Serializable } from "./helpers";
import { AnyMediaEntry, MediaEntryJSON } from "./media";
import { TrainerId } from "./trainer";

//Exercise entry
export type ExerciseEntryId = string;
export interface MuscleJSON {
  name: string;
}

export class Muscle extends Serializable {
  constructor(public id: string, public name: string) {
    super(id);
  }

  toJSON(): MuscleJSON {
    return Object.assign({}, this);
  }
}

export interface ExerciseEntryJSON {
  id: ExerciseEntryId;
  name: string;
  description: string;
  muscles: MuscleJSON[];
  media: MediaEntryJSON[];
  trainer: TrainerId;
}

export class ExerciseEntry extends Serializable {
  constructor(
    public id: ExerciseEntryId,
    public name: string,
    public description: string,
    public muscles: Muscle[],
    public media: AnyMediaEntry[],
    public trainer: TrainerId
  ) {
    super(id);
  }

  toJSON(): ExerciseEntryJSON {
    return Object.assign({}, this, {
      muscles: this.muscles.map((elem: Muscle) => elem.toJSON()),
      media: this.media.map((elem: AnyMediaEntry) => elem.toJSON()),
    });
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
  id: ExerciseEntryId;
  reps: number[];
  type: ExerciseTypes;
}

export type ExerciseTypes = "multiset" | "singleset";

class Exercise extends Serializable {
  constructor(public id: ExerciseEntryId, public type: ExerciseTypes) {
    super(id);
  }
}

export interface SinglesetExerciseJSON {
  id: ExerciseEntryId;
  reps: number[];
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

  fromJSON(json: SinglesetExerciseJSON): SingleSetExercise {
    return new SingleSetExercise(json.id, json.reps[0]);
  }
}

export interface MultiSetExerciseJSON {
  id: ExerciseEntryId;
  reps: number[];
}

export class MultiSetExercise extends Exercise {
  constructor(public id: ExerciseEntryId, public reps: number[]) {
    super(id, "multiset");
  }

  toJSON(): ExerciseJSON {
    return Object.assign({}, this);
  }

  fromJSON(json: MultiSetExerciseJSON): MultiSetExercise {
    return new MultiSetExercise(json.id, json.reps);
  }
}

export type AnyExercise = SingleSetExercise | MultiSetExercise;

export class ExerciseInstanceParser {
  constructor() {}

  fromJSON(json: ExerciseJSON): AnyExercise {
    switch (json.type) {
      case "multiset": {
        return MultiSetExercise.prototype.fromJSON(
          json as MultiSetExerciseJSON
        );
      }
      case "singleset": {
        return SingleSetExercise.prototype.fromJSON(
          json as SinglesetExerciseJSON
        );
      }
      default: {
        throw `Not known type of set ${json.type}`;
      }
    }
  }
}
