export default class Character {
  constructor(
    private _name: string,
    private _energy: number,
    private _attack: number,
    private _defense: number,
  ) {}

  public get name(): string {
    return this._name;
  }

  public get energy(): number {
    return this._energy;
  }

  public set energy(energy: number) {
    if (energy > 100) {
      this._energy = 100;
    } else {
      this._energy = energy;
    }
  }

  public get attack(): number {
    return this._attack;
  }

  public set attack(attack: number) {
    this._attack = attack;
  }

  public get defense(): number {
    return this._defense;
  }

  public set defense(defense: number) {
    this._defense = defense;
  }

  public status(): string {
    return `Warrior:
  Name: ${this.name}
  Energy: ${this.energy.toFixed(1)}
  Attack: ${this.attack.toFixed(1)}
  Defense: ${this.defense.toFixed(1)}`;
  }

  public trainAttack(): void {
    this.attack += this.random(7);
    this.energy -= this.random(10);
    if (this.attack > 100) {
      this.attack = 100;
    }
  }

  public trainDefense(): void {
    this.defense += this.random(5);
    this.energy -= this.random(10);
    if (this.defense > 100) {
      this.defense = 100;
    }
  }

  public rest(hours: number): void {
    this.energy += hours * this.random(10);
  }

  public battle(): number {
    const energyCost = this.random(100);
    this.energy -= energyCost;
    return energyCost;
  }

  public isAlive(): boolean {
    return this.energy >= 0;
  }

  private random(value: number): number {
    return Math.random() * value;
  }
}
