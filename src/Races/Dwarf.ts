import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _instaces = 0;

  static creatRacesInstances(): number {
    this._instaces += 1;
    return this._instaces;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}

export default Dwarf;