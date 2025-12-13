/* EXPRESSÕES E OPERADORES*/


/*Operadores aritméticos*/

console.log("Operadores aritméticos");

console.log("Soma (12 e 8):", 12 + 8);
console.log("Concatenação (12 e 8): ", "12" + 8); //CUIDADO!

console.log("Substração (12 e 8):", 12 - 8);

console.log("multiplicação (12 e 8):", 12 * 8);

console.log("Divisão (12 e 8):", 12 / 8);

console.log("Potenciação (12 e 8):", 12 ** 8);

console.log("Resto da divisão (12 e 8):", 12 % 8);

/*Incremento e Decremento*/

console.log("Incremento e Decremento")
let number = 12;

console.log(`Valor base: ${number}`);

// Incremento de 1

console.log("Incremento de 1")

number++;

console.log(number);

//Incrementa após aparecer no console

console.log(number++);

console.log(number);

//Incrementa antes de aparecer no console

console.log(++number);

// Decremento de 1

console.log("Decremento de 1")

console.log(`Valor base: ${number}`);

number--;

console.log(number);

//Decrementa após aparecer no console

console.log(number--);

console.log(number);

//Incrementa antes de aparecer no console

console.log(--number);

//Incrementar outros valores

console.log("Outros valores")

console.log(`Valor base: ${number}`);

number += 10;

console.log(number);

number -= 5;

console.log(number);

// Outra forma

number = number + 15;

console.log(number);


number = number - 20;

console.log(number);

// Lembrando que a linha é "lida" da direita para a esquerda

console.log("Ordem de Precedência")


/*Ordem de Precedência*/

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_precedence

console.log("Exponenciação, Multiplicação, Adição, Relacional, not, and, or")

//Exponenciação (Mais alto) (**)

//Multiplicação (*, /, //, %)

//Adição (+, -)

//Relacional (==, !=, <=, >=, <, >)

//not (Lógico)

//and (Lógico)

//or (Lógico) (Mais baixo)


/*Igual a e Diferente de*/

console.log("'Igual a'")


let one = 1;

let two = 2;

//'Igual a'

console.log(one == two); //false

console.log(one == 1); //true

console.log(one == "1"); //true porque == verifica o conteúdo, não o tipo

console.log(one === 1);

console.log(one === "1"); //Verifica conteúdo e tipo ( === Estritamente igual a)

//'Diferente de'

console.log("'Diferente de'")

console.log(one != two);

console.log(one != 1);

console.log(one != "1");

console.log(one !== 1);

console.log(one !== "1");


console.log("'Maior' e 'Menor'")

const LegalAge = 9;

let age = 20

let Daniel = `A idade é de ${age} anos`;

console.log(Daniel);

age = 10;

if (age >= LegalAge) {
  console.log("Pode tirar CNH")
}
else {
  console.log("Não pode")
}


const Diego = 40;


if (Diego >= LegalAge) {
  console.log("Pode tirar CNH")
}
else {
  console.log("Não pode")
}


/*Operadores Lógicos*/


let email = true;

let password = false;

let x = false;

console.log(email && (x || password));

console.log(email || password && x);

