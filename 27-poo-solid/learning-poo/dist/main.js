"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Character_1 = __importDefault(require("./Character"));
let sansa;
sansa = new Character_1.default('Sansa Stark', 100, 20, 20);
let keyboard = (0, prompt_sync_1.default)();
let option;
do {
    console.log('+========== Character =============+');
    console.log('|1. Train attack                   |');
    console.log('|2. Train defense                  |');
    console.log('|3. Rest                           |');
    console.log('|4. Go into battle                 |');
    console.log('|8. Print attributes               |');
    console.log('|9. Leave                          |');
    console.log('+==================================+');
    option = +keyboard('Choose a action: ');
    switch (option) {
        case 1:
            sansa.trainAttack();
            console.log(sansa.status());
            break;
        case 2:
            sansa.trainDefense();
            console.log(sansa.status());
            break;
        case 3:
            sansa.rest();
            console.log(sansa.status());
            break;
        case 4:
            let energyCost = sansa.battle();
            console.log(`This battle cost you ${energyCost.toFixed(1)} of energy!`);
            console.log(sansa.status());
            break;
        case 8:
            console.log(sansa.status());
        default:
            break;
    }
} while (option != 9 && sansa.isAlive());
console.log('Oops, you died! :(');
