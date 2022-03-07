// energy, life, attack, defense
import prompt from 'prompt-sync';

class Character {
  constructor(
    public name: string,
    public energy: number,
    public life: number,
    public attack: number,
    public defense: number,
  ) {}
}

let sansa: Character;
sansa = new Character('Sansa Stark', 100, 100, 20, 20);

let teclado = prompt();
let option: number = 0;
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
