/*CLASS*/

// Definindo uma class
class PascalCase {
  constructor() {
    console.log("Classe instanciada")
  }
};

// Instanciando uma class
const newClass = new PascalCase();

// Definindo uma class com uso de um parâmetro
class Person0 {
  constructor(name) {
    console.log("Olá, ", name)
  }
};

// Instanciando uma class, dando um parâmetro 
const person0 = new Person0("Diego");

// Iniciando uma class sem dar o parâmetro de criação, retorna undefined no console.
const person01 = new Person0();




class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
// Atribui uma propriedade "name" (o que está do lado esquerdo) com o parâmetro "name" do lado direito. 

// Instanciando uma class com vários parâmetros
const Person001 = new Person("Diego", 39, "diegokamp@gmail.com");

// Acessando as propriedades dos objetos criados pela class
console.log(Person001.name);
console.log(Person001.age);
console.log(Person001.email);


//Adicionando métodos às classes
class PersonUser {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // Método (função) não precisa ser definida da mesma forma. Apenas usando functionName (){}, vai funcionar
  sendEmail() {
    console.log(`Confirmação enviada para ${this.name}, através do email: ${this.email}`);
  }
}

const personUser01 = new PersonUser("Diego", 39, "diegokamp@gmail.com");

// Acessando uma função na class instanciada
personUser01.sendEmail();

class StaticMethod {

  /* Como não precisamos instanciar uma class para acessar o método estático, não é necessário criar o constructor.
  constructor(name) {
    this.name = name;
  }
    */

  static showMessage01() {
    console.log("Essa é uma mensagem usando o método estático.")
  }
  static showMessage02(message) {
    console.log(message)
  }


}

// Acessando um método estático em uma class que não fora instanciada. 
StaticMethod.showMessage01();

StaticMethod.showMessage02(); // Undefined por não ter o parâmetro
StaticMethod.showMessage02("Essa também é uma mensagem usando o método estático.");


// Herança com class


class Animal {
  constructor(name) {
    this.name = name
  }
  makeNoise() {
    console.log("Algum som genérico");
  }
}

class Turtle extends Animal {
  // Nada definido ainda
}

const turtle01 = new Turtle("Wilson");

console.log(turtle01.name);
turtle01.makeNoise();


// Sobrescrevendo métodos
class Dog extends Animal {
  makeNoise() {
    console.log("Latido");
  }
}

const dog01 = new Dog("Totó");

console.log(dog01.name);
dog01.makeNoise();

class Cat extends Animal {
  makeNoise() {
    console.log("Miado");
  }

  SpecialTalent() {
    console.log("Pular para trás");
  }
}

const cat01 = new Cat("Futrica");

console.log(cat01.name);
cat01.makeNoise();
cat01.SpecialTalent();

// dog01.SpecialTalent(); Vai dar erro porque essa função está disponível apenas para a class Cat.



// Utilizar class para lidar com exceções

let obj = [42];

// Exemplo de Error:
try {

  obj.animal();

} catch (Error) {
  console.log(Error)
}
// Identifiquei no console.log que o erro é do tipo TypeError 


// Dando o tipo de erro específico
try {

  obj.animal(); // Tentando executar a mesma coisa de antes, mas analisando exatamente esse erro

} catch (Error) {
  if (Error instanceof TypeError) {
    console.log("Está tentando executar uma função que não está disponível")
  }
}

try {

  if (!obj.includes(47)) {
    throw new Error("O agente 47 não foi encontrado.") // Definindo a mensagem de erro no caso especificado. Throw é um lançamento de exceção.
  }
} catch (error) {

  console.log(error);

}

let index = 100;

try {
  if (index > 99) {
    throw new RangeError("O valor deve ser entre 0 e 99")
  }
} catch (error) {
  console.log(error);
}



// Caso ache mais de um erro, o primeiro "if" que for verdadeiro funciona como um "return" e vai pular direto para o "catch". Podemos usar o "else if" também
try {


  if (!obj.includes(45)) {
    throw new Error("O número 45 não foi encontrado.") // Definindo a mensagem de erro no caso especificado. Throw é um lançamento de exceção.
  }

  if (index > 99) {
    throw new RangeError("O valor deve ser entre 0 e 99")
  }

} catch (error) {
  console.log(error)
}


// Passando pelo primeiro "if", mas ficando no segundo. Aparecendo apenas a mensagem de error
try {
  if (!obj.includes(42)) {
    throw new Error("O número 42 não foi encontrado.") // Definindo a mensagem de erro no caso especificado. Throw é um lançamento de exceção.
  }

  if (index > 99) {
    throw new RangeError("O valor deve ser entre 0 e 99")
  }

} catch (error) {

  console.log(error.message)
  /* console.log(error) 
  Iria aparecer: 
  RangeError: O valor deve ser entre 0 e 99
  */
}

try {

  //obj.function();

  /*  if (index > 99) {
    throw new RangeError("Valor inválido. Escolha um valor entre 0 e 99");
  }*/

  if (!obj.includes(42)) {
    throw new Error("O número 42 não foi encontrado.")
  } // Seria se não tivesse esse valor no obj

  if (!obj.includes(17)) {
    throw new Error("Número não encontrado")
  }

} catch (error) {

  if (error instanceof TypeError) { // Seria no caso da linha 232
    console.log("Método indisponível")

  } else if (error instanceof RangeError) { //Seria no caso da linha 234-235
    console.log(error.message)

  } else {
    console.log(error)

  }
}

// Criar erro customizado utilizando class

class MyCustomError {
  constructor(message) {
    this.message = `Classe de erro customizada: ${message}`
  }
}

try {

  //  throw new Error("Erro genérico")

  throw new MyCustomError("Erro personalizado lançado!")
} catch (error) {

  if (error instanceof MyCustomError) {
    console.log(error.message)
  } else {
    console.log("Erro não definido") // No caso da linha 270
  }
}















