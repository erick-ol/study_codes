// Tipos primitivos

// boolean
let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é boleano e o valor é true
let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é boleano e o valor é false
// number
// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
let x: number;
let y: number = 0;
let z: number = 123.456;
// string
let s: string;
let empty: string = "";
let abc: string = 'abc';
// void
function sayHelloWorld(): void {
  console.log("Hello World!");
}
// null e undefined
let nullValue = null;
let undefinedValue = undefined;

// Declaração de variável com inferências de tipo
let flag = true; // o compilador irá inferir o tipo boolean
const numberPI = 3.1416; // o compilador irá inferir o tipo number
let message = "Hello World!"; // o compilador irá inferir o tipo string
