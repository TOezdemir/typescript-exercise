class Song {
  private _title: string = "";
  protected _artist: string = "";
  public _durationInSeconds: number = 0;

  get title() {
    return this._title;
  }
  get artist() {
    return this._artist;
  }
  set artist(value: string) {
    this._artist = value;
  }

  constructor(title: string, artist: string) {
    this._title = title;
    this._artist = artist;
    this._durationInSeconds = 0;
  }
}
export default Song;
