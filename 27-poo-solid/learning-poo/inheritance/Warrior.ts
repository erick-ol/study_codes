import { Character } from './Character';
import { Util } from './Util';

export class Warrior extends Character {
  private _strength: number;
  private _agility: number;

  constructor(name: string) {
    super(name);
    this._armor = Util.randomize(1_000, 10_000);
    this._maxLife = Util.randomize(200, 10_000);
    this._currLife = Util.randomize(20, this._maxLife);
    this._strength = Util.randomize(100, 1_000);
    this._agility = Util.randomize(100, 1_000);
  }
}
