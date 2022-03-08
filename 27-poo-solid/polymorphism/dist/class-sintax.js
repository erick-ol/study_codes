"use strict";
// class Animal {
//   constructor(public name: string) {}
//   move() {
//     console.log(`${this.name} está se movendo.`);
//   }
// }
// class Bird extends Animal {
//   move() {
//     super.move();
//     console.log(`${this.name} está voando.`);
//   }
// }
// class Mammal extends Animal {
//   move() {
//     console.log(`${this.name} está andando.`);
//   }
// }
// const a = new Animal('Tubarão');
// const b = new Bird('Papagaio');
// const m = new Mammal('Tatu');
// const myMove = (animal: Animal) => {
//   animal.move();
// };
// myMove(a);
// myMove(b);
// myMove(m);
// /*
// Saída:
// Tubarão está se movendo.
// Papagaio está se movendo.
// Papagaio está voando.
// Tatu está andando.
// */
// abstract class Animal {
//   constructor(public name: string) {}
//   abstract move(): void;
// }
// class Bird extends Animal {
//   move() {
//     console.log(`${this.name} está voando.`);
//   }
// }
// class Mammal extends Animal {
//   move() {
//     console.log(`${this.name} está andando.`);
//   }
// }
// class Fish extends Animal {
//   move() {
//     console.log(`${this.name} está nadando.`);
//   }
// }
// const a = new Fish('Tubarão');
// const b = new Bird('Papagaio');
// const m = new Mammal('Tatu');
// const myMove = (animal: Animal) => {
//   animal.move();
// };
// myMove(a);
// myMove(b);
// myMove(m);
// /*
// Saída:
// Tubarão está nadando.
// Papagaio está voando.
// Tatu está andando.
// */
class Employee {
    constructor(name) {
        this.name = name;
        Employee.addEmployee();
    }
    static addEmployee() {
        this.employeeCount += 1;
    }
    static get employees() {
        return this.employeeCount;
    }
}
Employee.employeeCount = 0;
console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);
