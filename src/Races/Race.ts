abstract class Race {
  private _name: string;
  private _dexterity:number;

  constructor(name:string, dexterity:number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name():string {
    return this._name;
  }

  get dexterity():number {
    return this._dexterity;
  }

  static creatRacesInstances():number {
    const erro = new Error('Not implemented');
    throw erro;
  }

  abstract get maxLifePoints():number;
}
export default Race;