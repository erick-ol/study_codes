"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// energy, life, attack, defense
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Character {
    constructor(name, energy, life, attack, defense) {
        this.name = name;
        this.energy = energy;
        this.life = life;
        this.attack = attack;
        this.defense = defense;
    }
}
let sansa;
sansa = new Character('Sansa Stark', 100, 100, 20, 20);
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (option != 9) {
    console.log('+========= Personagem =============+');
    console.log('|1. Train attack                   |');
    console.log('|2. Train defense                  |');
    console.log('|3. Print attributes               |');
    console.log('|9. Leave                          |');
    console.log('+==================================+');
    option = +teclado('Escolha uma ação: ');
    switch (option) {
        case 1:
            sansa.attack += 2;
            break;
        case 3:
            console.log('sansa :>> ', sansa);
            break;
        default:
            break;
    }
}
