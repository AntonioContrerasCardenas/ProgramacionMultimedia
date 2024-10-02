export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchile: string, hide: boolean = true) {
    this.setup = setup;
    this.punchline = punchile;
    this.hide = hide;
  }

  public toggle() {
    this.hide = !this.hide;
  }
}
