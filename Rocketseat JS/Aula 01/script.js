/* VARIÁVEIS */

/*var*/


var user = "diegokamp";

console.log(user);

var user = "DiegoKamp";

console.log(user);

user = "DKamp"

// Permite declarar novamente a mesma variável ou alterá-la



/*let*/


let name = "Diego";

console.log(name);

// let name = "Kamp"; Não deixa criar/declarar a mesma variável quando usamos let, mas deixa reutilizá-la/redefini-la/alterá-la

name = "Kamp"

console.log(name);



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







