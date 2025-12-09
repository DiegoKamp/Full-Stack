/*Variáveis e Constantes*/

// var

var username
// Declarar uma variável sem valor

console.log(username);


var user_email = "diegokamp@gmail.com"

console.log(user_email);

username = "DiegoKamp";

console.log(username);


// Case Sensitive
// UserName !== userName !== username

var product01 = "Tênis"
var Product01 = "Calças"

console.log(product01);
console.log(Product01);


// let

let coisa; // Declara uma variável sem valor
let product02 = "Teclado"; // Declara uma variável "let" com valor

console.log(coisa);
console.log(product02);

product02 = "Mouse";

console.log(product02);


// const

const Pi = 3.14; //Valor fixo atribuído ao nome de uma "variável" const

console.log(Pi);

// Pi = 4; Vai dar erro porque uma variável do tipo const não pode ser alterada.


// Escopo
// Região onde é acessível uma variável


// Hoisting
// Possibilita usar uma variável ou função antes que esteja definida. Mas cuidado! As variáveis precisam ser atribuídas antes de usá-las, ou receberá um "undefined"



var teste_de_escopo_global1 = 36;


function test01(){
    
    console.log(teste_de_escopo_global1);
}


test01()

{
var teste_de_escopo_global2 = 50;
}


console.log(teste_de_escopo_global2);


// Nomes para Variáveis

let sneak_case = "Cobra";
let camelCase = "Camelo";
let PascalCase = "Pascal";

// Tipos de variáveis

let string = "Texto";
let number = 114;
let boolean = true;
let nulo = null;
let indefinido;

console.log(string);
console.log(typeof string);
console.log(number);
console.log(typeof number);
console.log(nulo);
console.log(typeof nulo); // Object???
console.log(indefinido);
console.log(typeof indefinido);


// Templates Literals

console.log(username, user_email, "Texto qualquer");

// Concatenação de texto

let message01 = "Olá, " + username + "." + " Você conectou com o email: " + user_email + ".";

console.log(message01);

let message02 = `Olá, ${username}. Você conectou com o email: ${user_email}.`;
// O template literals permite a concatenação de itens de forma mais simples. 
console.log(message02);



// Conversão
// Conversão é intensional e explícito



// Type casting ou type conversion (Conversão)
let value = "9";
console.log(value);
console.log(typeof(value));
console.log(typeof Number(value));

let age = 39;
console.log(age);
console.log(typeof(age));

console.log(typeof(String(age))); // Parecido com o método "Number"
console.log(typeof (age.toString())); // Diferente, mas possível

console.log(Boolean(value));
console.log(typeof(Boolean(value)));


// Coerção de tipos
// Coerção é automático e implícito

console.log("10" + 5); // Concatenação 10+5 = 105
console.log(typeof("10" + 5)); // Confirmação que transformou o número 5 em texto.











