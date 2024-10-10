export class Joke {
  public id: number;
  public setup: string;
  public punchline: string;
  public hide: boolean;
  private static nextId: number = 0;

  constructor(setup: string, punchile: string, hide: boolean = true) {
    this.setup = setup;
    this.punchline = punchile;
    this.hide = hide;
    this.id = Joke.nextId++;
  }

  public toggle() {
    this.hide = !this.hide;
  }

  public getId() {
    return this.id;
  }
}
