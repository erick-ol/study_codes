import prompt from 'prompt-sync';
import Character from './Character';

let sansa: Character;
sansa = new Character('Sansa Stark', 100, 20, 20);

let keyboard = prompt();
let option: number;
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
      const hours: number = +keyboard('How much hours do you want to rest? ');
      sansa.rest(hours);
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
