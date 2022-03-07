import { Character } from './Character';
import { Util } from './util/Util';

export class Priest extends Character {
  private _spirit: number;
  private _versatility: number;

  constructor(name: string) {
    super(name);
    this._maxLife = Util.randomize(20, 1_000);
    this._currLife = Util.randomize(20, this._maxLife);
    this._spirit = Util.randomize(100, 1_000);
    this._versatility = Util.randomize(100, 1_000);
  }

  public attack(): string {
    return 'Holy Attack';
  }
  public defend(attacker: Character): number {
    throw new Error('Method not implemented.');
  }
}
