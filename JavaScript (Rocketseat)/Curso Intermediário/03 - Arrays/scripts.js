/*Arrays*/

// É um tipo de objeto representado com colchetes [] contendo elemento(s) com índices (posições) que variam de 0 a n-1.

// Criando um array

const newArray = new Array();

console.log(newArray);

console.log(newArray.length);

const person = new Array(10); // Definindo o tamanho do array
console.log(person);
console.log(person.length);

const fruits = ["Apple", "Banana", "Orange", "Watermelon"]

console.log(fruits);

console.log(fruits[2]);

console.log(fruits[60]); // Undefined (não há índice 60)

console.log(fruits[fruits.length - 1]);


// Converter uma String em array

let fullName = "Diego Quelhas Kort Kamp"

console.log(fullName.split(" "));

console.log(Array.from(fullName));



// Adicionando um item num array

let nameList = [];

console.log(nameList);

nameList.push("Diego");
// Adiciona no final

console.log(nameList);

nameList.push("Shirley")
console.log(nameList);

nameList.unshift("Abacate");
// Adiciona no início

nameList.push("Morango")


console.log(nameList);


//  Removendo um item de num array

nameList.shift();
// Retira do início

console.log(nameList);

nameList.pop();
// Retira do final

console.log(nameList);



// Achando um elemento específico em um Array

console.log(fruits);

console.log(fruits.indexOf("Banana")); // Retorna o índice do item

console.log(fruits.indexOf("Strawberry")); // Se não houver, retorna -1

// Remover um item de uma posição diferente

fruits.splice(2, 1); // Retira a partira do índice 2, 1 item

console.log(fruits);

// Remover um item específico pelo nome

let deleteFruitPosition = fruits.indexOf("Banana");

console.log(deleteFruitPosition); // Confirmando

fruits.splice(deleteFruitPosition, 1); // Tira na posição que foi encontrado o item

console.log(fruits);

fruits.splice(1, 0, "Banana");

console.log(fruits);

fruits.splice(fruits.indexOf("Banana"), 1);
// Retira o item diretamente 
/*CUIDADO!: Se o nome estiver digitado errado (case sensitive), será retirado o último da lista */


fruits.splice(1, 0, "Strawberry");

fruits.splice(0, 0, "Banana");


console.log(fruits);


// Tentar retirar um item específico com uma sem o risco de tirar o último


let deleteFruit = "Banana"

if (fruits.indexOf(deleteFruit) === -1) {
  console.log("Item não encontrado")
} else {
  fruits.splice(fruits.indexOf(deleteFruit), 1);
}

console.log(fruits);



// Tentar retirar um item específico sem case sensitive







// Um array pode conter qualquer tipo de informação

const myArray = [

  "Um texto qualquer",

  5,

  true,

  function () {
    console.log("Uma função dentro do array")
  },

  /*Objeto = {
    name: "Diego",
    email: "diegokamp@gmail.com"
  }
*/

]


myArray.push(
  Objeto = {
    name: "Diego",
    email: "diegokamp@gmail.com"
  }
)
//Acrescentei um Objeto inteiro dentro do Array


console.log(myArray.length);

console.log(myArray[0]);

console.log(myArray[1]);

console.log(myArray[2]);

console.log(myArray[3]);
// Não executa a função

myArray[3]();
//Executa uma função no índice 3

console.log(myArray[4]);
// Mostra todo o objeto

console.log(myArray[4].name);
// Mostra apenas a propriedade name do objeto



