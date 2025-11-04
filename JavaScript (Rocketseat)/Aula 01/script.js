/* VARIÁVEIS */

/*var*/


var user = "diegokamp";

console.log(user);

var user = "DiegoKamp";

console.log(user);

user = "DKamp"

// Permite declarar novamente a mesma variável ou alterá-la



/*let*/


let useremail = "diego@email.com";

console.log(useremail);

// let useremail = "Kamp"; Não deixa criar/declarar a mesma variável quando usamos let, mas deixa reutilizá-la/redefini-la/alterá-la

useremail = "kamp@email.com"

console.log(useremail);



/*const*/


const number = 47;

console.log(number);

// number = 55;

// console.log(number);

// Não deixa criar/declarar a mesma variável quando usamos let, nem deixa reutilizá-la/redefini-la/alterá-la 


let numberTest = 10;

numberTest += 20;

console.log(numberTest);

numberTest /= 3;

console.log(numberTest);


/*Observações*/

//Embora existem três tipos de variáveis, é preferível usar apenas duas: let e const, já que o var é de escopo global e acaba dando erro em algumas situações.


/*Template Literal*/

console.log("Método 1:");

let message1 = "Olá, " + user + ". Você conectou com o email: " + useremail;

console.log(message1);

//Método mais retrógrado/ultrapassado, mais difícil de escrever e ler


console.log("Método 2:");

let message2 = `Olá, ${user}. Você conectou com o email: ${useremail}`;

console.log(message2);

//Método mais usual, mais fluida
