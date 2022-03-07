import { Character } from './Character';
import { Mage } from './Mage';
import { Priest } from './Priest';
import { Warrior } from './Warrior';

let mage: Character = new Mage('Nicholas Flamel');
let warrior: Character = new Warrior('Leonidas');
let priest: Character = new Priest('Anthony of Padua');

console.log('mage: >>', mage);
console.log('warrior: >>', warrior);
console.log('priest: >>', priest);
