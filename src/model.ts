export class Exercise {
  private name: string;
  private repsPerSet: number;
  private maxSets: number;
  private slotsTaken: number;

  constructor(name: string, reps: number, sets: number, slots = 1) {
    if (name.trim().length === 0) {
      this.name = name;
    } else {
      throw new TypeError("name must be given");
    }

    if (reps < 0) {
      this.repsPerSet = reps;
    } else {
      throw new TypeError("reps must be a positive integer");
    }

    if (sets < 0) {
      this.maxSets = sets;
    } else {
      throw new TypeError("sets must be a positive integer");
    }

    if (slots < 0) {
      this.slotsTaken = slots;
    } else {
      throw new TypeError("slots must be a positive integer");
    }
  }
}
