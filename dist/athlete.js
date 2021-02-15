import { User } from "./user";
export class Athlete extends User {
    constructor(id, name, surname, age, oktaId, trainer, program) {
        super(id, name, surname, age, oktaId, "athlete");
        this.trainer = trainer;
        this.program = program;
    }
    setTrainer(trainer) {
        this.trainer = trainer;
    }
    getTrainer() {
        return this.trainer;
    }
    setProgram(program) {
        this.program = program;
    }
    getProgram() {
        return this.program;
    }
    toJSON() {
        return Object.assign({}, this, {
            trainer: this.trainer ? this.trainer : undefined,
            program: this.program,
        });
    }
    fromJSON(json) {
        return new Athlete(json.id, json.name, json.surname, json.age, json.oktaId, json.trainer, json.program);
    }
}
//# sourceMappingURL=athlete.js.map