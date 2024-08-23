class Activity {
  _name: string;
  private _difficulty: number;

  constructor(name: string, difficulty: number) {
    this._name = name;
    this._difficulty = difficulty;
  }

  get difficulty(): number {
    return this._difficulty;
  }
  set difficulty(value: number) {
    if (value >= 1 && value <= 6) {
      this._difficulty = value;
    } else {
      console.error("Ungültiger Schwierigkeitsgrad!");
    }
  }
  start() {
    console.log(`Starting ${this._name}...`);
  }
}

export default Activity;
