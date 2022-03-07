import { Character } from './src/Character';
import { Mage } from './src/Mage';
import { Priest } from './src/Priest';

let mage: Character = new Mage('Nicholas Flamel');
let priest: Character = new Priest('Anthony of Padua');

const characters: Character[] = [];
characters.push(mage);
characters.push(priest);

characters.forEach((p) => {
  console.log(p.attack());
});
