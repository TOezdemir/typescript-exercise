class Alien {
  public _name: string = "";
  public _planet: string = "";
  public _galaxy: string = "";
  private _color: string = "";

  get color() {
    return this._color;
  }

  constructor(name: string, color: string) {
    this._name = name;
    this._color = color;
  }
}
export default Alien;
