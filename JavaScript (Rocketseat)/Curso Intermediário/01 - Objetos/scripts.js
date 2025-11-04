/*OBJETOS*/

/*Criando um objeto*/

const empty = {}; //Objeto vazio

const obj = {
  user: "Alguém",
  number: 38,
};

console.log(empty);
console.log(typeof empty);

console.log(obj);
console.log(typeof obj);

//Objeto com propriedades, outros objetos aninhados e métodos (funções)
const user = {

  email: "diegokamp@gmail.com",
  age: 39,

  name: {
    first_name: "Diego",
    last_name: "Kamp",
  },

  address: {
    street: "Estrada dos Menezes",
    number: 400,
    postal_code: "21451-250",
  },

  message1: () => {
    console.log("Olá!")
  },

  message2: function () {
    console.log("Bem vindo!")
  },

}

//Acessando propriedades e métodos usando a notação de ponto.

console.log(user.email);

console.log(user.name.first_name);

user.message1();

// Acessando propriedades e métodos usando a notação de colchetes

console.log(user["email"]);

console.log(user["name"]["first_name"]);

user["message1"]();

const object = {
  name: "Diego",
  message: () => {
    console.log(`Olá, ${object.name}`)
  },
};


const obj2 = {
  name: "Diego",
  email: "diegokamp@gmail.com",
  message: function () {
    console.log(`Olá, ${this.email}`) //this NÃO funciona em arrow function
  },
};


object.message();

obj2.message();


const product = {
  name: "Teclado",
  quantity: 100,
};

console.log(product.quantity);

//Método de notação por ponto
product.quantity = 40;

console.log(product.quantity);


//Método de notação por colchetes
product["quantity"] = 35;

console.log(product.quantity);


/*Optional Chaining*/


// console.log(product.propriety.up); Dará erro porque não existe essa propriedade

console.log(product?.propriety?.up); //Não dá erro porque foi uma "tentativa" de acesso, usando o ponto de interrogação.

/*Operador de Coalescência nula (??)*/

let content = null;

console.log(content ?? "Conteúdo pré-definido");

content = "Conteúdo definido"

console.log(content ?? "Conteúdo pré-definido");

const user1 = {
  name: "Diego",
  picture: undefined,
};

console.log(user1.picture ?? "default.png");

user1.picture = "avatarDiego.png"

console.log(user1.picture ?? "default.png");

/*Função Construtora*/
// Função que retorna um objeto quando instanciada

/*

TEM ERRO?

function createProduct(name) {

  const product = {
    name: name,
    details: function () {
      console.log(`O nome do produto é ${this.name}`)
    },
  }

  return product;

};
*/

function createProduct(name) {

  const product = {}

  product.name = name
  product.details = function () {
    console.log(`O nome do produto é ${this.name}`)
  }

  return product;
};

// Instanciar um objeto é fazer uma cópia da estrutura do objeto, new é uma palavra reservada para fazer essa cópia.
const product1 = new createProduct("Teclado");

console.log(product1.name);
product1.details();

const product2 = new createProduct("Mouse");

console.log(product2.name);
product2.details();


// Outra forma de criar uma função construtora:

function Person(name) {
  this.name = name
  this.message = function () {
    console.log(`Olá, ${name}`)
  }
};

const person1 = new Person("Diego");
console.log(person1.name);
person1.message();




// Apenas uma observação de uma função que eu já deveria saber.
let price = "40.6".replace(".", ",");
console.log(price);

