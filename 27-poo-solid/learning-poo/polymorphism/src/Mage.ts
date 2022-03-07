import { Character } from './Character';
import { Util } from './util/Util';

export class Mage extends Character {
  private _intelect: number;
  private _speed: number;

  constructor(name: string) {
    super(name);
    this._maxLife = Util.randomize(20, 1_000);
    this._intelect = Util.randomize(100, 1_000);
    this._speed = Util.randomize(10, 2_000);
  }

  public attack(): string {
    return 'Magician Attack';
  }
  public defend(attacker: Character): number {
    throw new Error('Method not implemented.');
  }
}
