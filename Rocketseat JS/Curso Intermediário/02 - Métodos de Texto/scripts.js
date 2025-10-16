
/*Métodos de Texto*/

/*MAIÚSCULO e minúsculo*/

let message001 = "Estou aprendendo mais um pouco de JavaScript."

console.log(message001.toUpperCase());

console.log(message001.toLowerCase());

/*Comprimento de um a String*/
console.log(message001.length);

let password001 = "1a3f5"

if (password001.length < 6) {
  console.log("A senha precisa ter no mínimo 6 caracteres")
};

// Número de dígitos em um número
// Converter para string e contar normalmente

let password002 = 18574;

console.log(String(password002));

console.log(typeof (String(password002)));

console.log(String(password002).length); // Usa só esse

console.log(password002.toString().length); // Ou usa esse

/*Substituindo partes do texto*/

console.log(message001.replace("JavaScript", "HTML"))

/*Pegar parte de uma String*/

// Partindo do início

console.log(message001.slice(0, 5)); // Os 5 primeiros caracteres

console.log(message001.slice(6, 30)); // Os caracteres 6º ao 30º do texto inicial, ou seja, ele só mostrará 24 caracteres

console.log(message001.slice(6, 30).length); // Confirmação de quantidade de caracteres

// Partindo do final

console.log(message001.slice(-11)); //Vai pegar os últimos 11 caracteres

console.log(message001.slice(-14, -12)); //Vai pegar os 2 caracteres partindo do 14º carácter contado de trás para frente 

// Retirar espaços vazios antes e depois

let message002 = "    Olá     ";

console.log(message002);
console.log(message002.length);

console.log(message002.trim());
console.log(message002.trim().length);

// Completar uma String no Início

let credCardNumber = "1254684512980635"; //16 números já transformados em String

console.log(credCardNumber.length); // Confirmando

let credCardLastNumber = credCardNumber.slice(-4); //Pegar os 4 últimos dígitos

console.log(credCardLastNumber); // Confirmando

/* 
let maskedCredCardNumber = credCardLastNumber.padStart(16, "X");

Considerando que todos os cartões têm 16 dígitos
*/

let maskedCredCardFirstNumber = credCardLastNumber.padStart(credCardNumber.length, "X");
//Considerando um possível cartão com menos ou mais dígitos.

console.log(maskedCredCardFirstNumber);

console.log(maskedCredCardFirstNumber.length);


// Completar uma String no Final

let credCardFirstNumber = credCardNumber.slice(0, 4);

console.log(credCardFirstNumber); //Confirmando

/*
let maskedCredCardLastNumber = credCardFirstNumber.padEnd(16, "X");
Considerando que todos os cartões têm 16 dígitos
*/

let maskedCredCardLastNumber = credCardFirstNumber.padEnd(credCardNumber.length, "X");
//Considerando um possível cartão com menos ou mais dígitos.

console.log(maskedCredCardLastNumber); //Confirmando

console.log(maskedCredCardLastNumber.length);

// Separar um texto em partes

let message003 = "Estudar - Aprender - Praticar";

console.log(message003);

let separateMessage003 = message003.split("-");

console.log(separateMessage003); // Retorna um array

// Juntar um texto separado

/*
let joinMessage003 = separateMessage003.join();

console.log(joinMessage003);

Por padrão, junta o texto separado por vírgulas
*/

let joinMessage003 = separateMessage003.join("e");

console.log(joinMessage003);

// Encontrando um conteúdo no texto

console.log(message001);

console.log(message001.indexOf("JavaScript"));
// Retorna a posição que começa o primeiro carácter do String definido

let message004 = "Estou aprendendo HTML e também estou aprendendo CSS"

console.log(message004.indexOf("aprendendo"));
// Retorna apenas a posição do primeiro que encontrar


console.log(message001.indexOf("Javascript"));
// Retorna -1 se não for encontrado (é case sensitive)


console.log(message001.includes("JavaScript"));

console.log(message001.includes("javascript"));

console.log(message001.toLowerCase().includes("javascript"));

console.log(message001.includes("Estou ap"));

























