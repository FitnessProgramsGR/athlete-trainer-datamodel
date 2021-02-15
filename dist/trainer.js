import { Athlete } from "./athlete";
import { User } from "./user";
export class Trainer extends User {
    constructor(id, name, surname, age, oktaId, athletes) {
        super(id, name, surname, age, oktaId, "trainer");
        this.athletes = athletes;
    }
    setAthletes(athletes) {
        this.athletes = athletes;
    }
    addAthlete(athlete) {
        this.athletes.push(athlete);
    }
    getAthletes() {
        return this.athletes;
    }
    getAthlete(id) {
        return this.athletes.find((elem) => elem.id === id);
    }
    toJSON() {
        return Object.assign({}, this, {
            athletes: this.athletes.map((elem) => elem.toJSON()),
        });
    }
    fromJSON(json) {
        const athletes = json.athletes.map((elem) => Athlete.prototype.fromJSON(elem));
        return new Trainer(json.id, json.name, json.surname, json.age, json.oktaId, athletes);
    }
}
//# sourceMappingURL=trainer.js.map