import { Util } from './Util';
export class Character {
  protected _name: string;
  protected _armor: number;
  protected _maxLife: number;
  protected _currLife: number;

  constructor(name: string) {
    this._name = name;
    this._armor = Util.randomize(100, 1_000);
    this._maxLife = Util.randomize(100, 1_000);
    this._currLife = Util.randomize(40, this._maxLife);
  }
}
