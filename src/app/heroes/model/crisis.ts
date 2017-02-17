export class Crisis {
  constructor(public id: number, public name: string) { }
  clone() { return new Crisis(this.id, this.name); }
}
