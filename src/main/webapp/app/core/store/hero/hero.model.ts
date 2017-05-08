export interface Hero {
  id: string,
  name: string,
  clone: Function
}

export const initialHero: Hero = {
  id: null,
  name: null,
  clone: function () { return Object.assign({}, { id: this.id, name: this.name }) }
};
