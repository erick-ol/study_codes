import { Character } from './Character';
import { Util } from './Util';

export class Mage extends Character {
  private _intelect: number;
  private _speed: number;

  constructor(name: string) {
    super(name);
    this._maxLife = Util.randomize(20, 1_000);
    this._intelect = Util.randomize(100, 1_000);
    this._speed = Util.randomize(10, 2_000);
  }
}
