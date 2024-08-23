import Activity from "./Activity";

class Running extends Activity {
  _distance: number;

  constructor(name: string, difficulty: number, distance: number) {
    super(name, difficulty);
    this._distance = distance;
  }

  private getWarmupCooldownTime(): number {
    if (this._distance >= 10) {
      return 5;
    } else if (this._distance >= 7) {
      return 4;
    } else if (this._distance >= 4.5) {
      return 3;
    } else if (this._distance >= 3) {
      return 2;
    } else {
      return 0;
    }
  }

  warumUp() {
    let time = this.getWarmupCooldownTime();
    console.log(`Warming up for ${time} minutes.`);
  }
  cooldown() {
    let time = this.getWarmupCooldownTime();
    console.log(`Cooling down for ${time} minutes.`);
  }
}

export default Running;
