export default class Character {
  constructor(
    public name: string,
    public energy: number,
    public attack: number,
    public defense: number,
  ) {}

  status(): string {
    return `Warrior:
  Name: ${this.name}
  Energy: ${this.energy.toFixed(1)}
  Attack: ${this.attack.toFixed(1)}
  Defense: ${this.defense.toFixed(1)}`;
  }

  trainAttack(): void {
    this.attack += Math.random() * 5;
    this.energy -= Math.random() * 10;
    if (this.attack > 100) {
      this.attack = 100;
    }
  }

  trainDefense(): void {
    this.defense += Math.random() * 5;
    this.energy -= Math.random() * 10;
    if (this.defense > 100) {
      this.defense = 100;
    }
  }

  rest(hours: number): void {
    this.energy += hours * Math.random() * 10;
    if (this.energy > 100) this.energy = 100;
  }

  battle(): number {
    const energyCost = Math.random() * 100;
    this.energy -= energyCost;
    return energyCost;
  }

  isAlive(): boolean {
    return this.energy >= 0;
  }
}
