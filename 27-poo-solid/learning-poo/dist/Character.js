"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(name, energy, attack, defense) {
        this.name = name;
        this.energy = energy;
        this.attack = attack;
        this.defense = defense;
    }
    status() {
        return `Warrior:
  Name: ${this.name}
  Energy: ${this.energy.toFixed(1)}
  Attack: ${this.attack.toFixed(1)}
  Defense: ${this.defense.toFixed(1)}
    `;
    }
    trainAttack() {
        this.attack += Math.random() * 5;
        this.energy -= Math.random() * 10;
        if (this.attack > 100) {
            this.attack = 100;
        }
    }
    trainDefense() {
        this.defense += Math.random() * 5;
        this.energy -= Math.random() * 10;
        if (this.defense > 100) {
            this.defense = 100;
        }
    }
    rest() {
        this.energy += Math.random() * 10;
        if (this.energy > 100) {
            this.energy = 100;
        }
    }
    battle() {
        const energyCost = Math.random() * 100;
        this.energy -= energyCost;
        return energyCost;
    }
    isAlive() {
        if (this.energy <= 0)
            return false;
        return true;
    }
}
exports.default = Character;
