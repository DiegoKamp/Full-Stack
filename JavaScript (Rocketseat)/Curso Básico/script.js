/*Operadores Aritméticos*/
console.log("Soma: ", 17 + 8);
console.log("Concatenação: ", "17" + 8);

console.log("Subtração: ", 17 - 8);

console.log("Multiplicação: ", 17 * 8);

console.log("Divisão: ", 17 / 8);
console.log("Resto da divisão: ", 17 % 8);

console.log("Potenciação: ", 12 ** 8);


/*Comparações*/
let one = 1;
let two = 2;

// Igual a
console.log("Igual a: ", one == two);
console.log("Igual a: ", one == 1);
console.log("Igual a: ", one == "1");

// Diferente de
console.log("Diferente de: ", one != two);
console.log("Diferente de: ", one != 1);
console.log("Diferente de: ", one != "1");

// Estritamente igual a (tipo e valor)
console.log("Estritamente igual a: ", one === two);
console.log("Estritamente igual a: ", one === 1);
console.log("Estritamente igual a: ", one === "1");

// Estritamente diferente de
console.log("Estritamente diferente de: ", one !== two);
console.log("Estritamente diferente de: ", one !== 1);
console.log("Estritamente diferente de: ", one !== "1");

// Maior, menor, maior ou igual, menor ou igual
let Cinco = 5;
let Trinta = 30;

console.log("Cinco é maior que Trinta: ", Cinco > Trinta);
console.log("Cinco é menor que Trinta: ", Cinco < Trinta);
console.log("Cinco é maior ou igual a 5: ", Cinco >= 5);
console.log("Trinta é menor ou igual a 30: ", Trinta <= Trinta);

/*Conectivos Lógicos*/
let nome = true;
let email = false;

// Conectivo 'E', 'AND': (&&)
console.log(nome && email);

// Conectivo 'OU', 'OR': (||)
console.log(nome || email);

// Conectivo 'NEGAÇÃO', NOT: (!)
console.log(!nome);


/*Condicionais*/

let age = 18;

//Condicional Ternário
console.log("Se a idade for ", age, ", logo, ", age >= 16 ? "pode votar" : "não pode votar");

//Falsy
console.log("Exemplos de Falsy");
console.log(false ? "Verdadeiro" : "Falso");
console.log(0 ? "Verdadeiro" : "Falso");
console.log(-0 ? "Verdadeiro" : "Falso");
console.log("" ? "Verdadeiro" : "Falso");
console.log(null ? "Verdadeiro" : "Falso");
console.log(undefined ? "Verdadeiro" : "Falso");
console.log(NaN ? "Verdadeiro" : "Falso");

//Truthy
console.log("Exemplos de Truthy");
console.log(true ? "Verdadeiro" : "Falso");
console.log(18 ? "Verdadeiro" : "Falso");
console.log(-7.5 ? "Verdadeiro" : "Falso");
console.log(" " ? "Verdadeiro" : "Falso");
console.log("Diego" ? "Verdadeiro" : "Falso");
console.log("false" ? "Verdadeiro" : "Falso");
console.log(Infinity ? "Verdadeiro" : "Falso");
console.log(-Infinity ? "Verdadeiro" : "Falso");

//If
let hour = 13;

if (hour >= 12) {
  console.log("Boa tarde");
  console.log("Bem-vindo");
}

//If Else
let bolo = "laranja";

if (bolo === "chocolate") {
  console.log("O bolo é de chocolate");
}
else {
  console.log("O bolo não é de chocolate");
}

//If Else If
let time = 19;

if (time < 12) {
  console.log("Bom dia!");
}
else if (time < 18) {
  console.log("Boa tarde!");
}
else {
  console.log("Boa noite!");
}
console.log("Seja bem-vindo!");

//Switch

let option = 2;

switch (option) {
  case 1:
    console.log("Consultar pedido");
    break
  case 2:
    console.log("Falar com atendente");
    console.log("Aguarde ...");
    break
  case 3:
    console.log("Cancelar pedido")
    break
  default:
    console.log("Opção inválida")
} //Se não colocar o break é lido todos os cases a partir do primeiro que foi identificado.


/*Try Catch Finally*/

//Finally prossegue com o código, independentemente de erro.

//Envia a mensagem de erro de forma mais amigável

try {
  console.log(result);
} catch (error) {
  console.log(error);
} finally {
  console.log("Fim 1")
}

//Envia uma mensagem escolhida

try {
  console.log(result);
} catch (error) {
  console.log("Não foi possível executar o seu pedido. Tente novamente mais tarde!");
} finally {
  console.log("Fim 2")
}

//Lançar uma exceção personalizada

let result = 35;

try {
  if (result === 0)
    throw new Error("O valor é igual a zero!");
} catch (error) {
  console.log(error);
} finally {
  console.log("Fim da aplicação 1");
}

try {
  if (result === 35)
    throw new Error("O valor é igual a trinta e cinco");
} catch (error) {
  console.log(error);
} finally {
  console.log("Fim da aplicação 2");
}

/*Funções*/

function message() {
  console.log("Fala aí, meu povo!");
}

message();

//Parâmetros: o escopo da função que irá receber um valor em uma função.
//Argumentos: é o valor que é passado para a função.

function Initial(username) {
  console.log("Olá,", username, "!");
}

Initial("Diego");

/*console.log(username); 

Vai dar erro porque username só foi definido para ser usado dentro daquela função.*/

//Para tratar isso, usarei o try/catch, ou o restante do código não será executado por não estar tratado.

try {
  console.log(username);
} catch (error) {
}
//Não é preciso digitar o que vai acontecer no catch, é como se executasse nada e continuasse.



/*if (username == undefined) {
  console.log("O 'username' só foi definido para ser usado dentro da função");
}*/

//Confirmar as linhas anteriores com Thallys

//E mesmo que eu defina o 'username', a função será aplicado ao valor atribuído no momento que chamar a função. Caso seja atribuído uma variável, ela entrará como Argumento.
let username = "João";

Initial("Shirley");

Initial(username);

message("João"); //Neste caso, a função independe do Argumento porque é uma "função contínua".


function joinText(text1, text2, text3) {
  console.log(text1, text2, text3);
}

joinText("Diego", "Quelhas", "Kort Kamp");

joinText("Diego", "Kamp"); //Como o terceiro parâmetro não foi atribuído, aparece undefined. Para evitar isso, podemos colocar um valor padrão.

function joinText2(text1, text2 = "", text3 = "") {
  console.log(text1, text2, text3);
}

joinText2("Diego", "Kamp")

//Retorno de uma função serve para usar o retorno/resultado em outra função.

function sum(a, b) {
  let resultado = a + b;

  return resultado;
}

/*sum(7, 34);
console.log(resultado);
*/
//Vai dar erro porque o resultado está sendo usado _em local_ e não será usado fora da função. Para resolver isso:

let response = sum(7, 34);
console.log(response);

//Ou podemos apenas usar:

console.log(sum(7, 34));


/*Escopo da Função*/
//É possível usar uma função antes de declará-la porque ela é içada.

showMessage("Olá, Diego!");

function showMessage(message) {
  console.log(message);
}

//Ainda podemos colocar uma função dentro de uma função.

showMessage2("Diego Quelhas Kort Kamp")

function showMessage2(message) {
  console.log(message);
  endline();

  function endline() {
    console.log("------------------");
  }
}

/*endline();
Vai dar erro porque a função endline foi definida para ser usada dentro do escopo da função showMessage2 e não será içada para fora desse escopo*/


/*Comentário de Documentação em JavaScript (sintaxe JSDoc)*/

//O JSDoc é um padrão para incorporar documentação no código-fonte a partir desses comentários.


/**
 * Authenticates the user
 * 
 * @param {String} email user email.
 * @param {String} password more than 6 characters.
 * @returns {Number} user id.
 */
function signIn(email, password) {
  //Fluxo de autenticação do usuário.
  return 7
}

//Ao fazer isso, digitar a função irá aparecer a definição dos parâmetros e outras descrições.

/*Função Anônima*/
//Serve quando ela for "chamada" numa variável

const showMessage3 = function () {
  return "Olá, Diego!"
}

console.log(showMessage3); //Vai aparecer a função descrita no console.

console.log(showMessage3()); //Vai aparecer o return.


const showMessage4 = function (message, name) {
  return message + name
}

console.log(showMessage4("Olá,", " Diego!"))

/*Arrow Function*/

const showMessage5 = () => {
  console.log("Olá");
}

console.log(showMessage5);

showMessage5();

const showMessage6 = (username, email) => {
  console.log("Olá,", username, ". Seu email é:", email);
}

showMessage6("Diego", "diego@gmail.com");

//Fazendo a mesma função anterior com concatenação:

const showMessage7 = (username, email) => {
  console.log(`Olá, ${username}. Seu email é: ${email}`);
}

showMessage7("Diego", "diego@gmail.com");

//Repare que desta forma consigo colocar o ponto colado no username, controlando o espaçamento que antes era automático.


/*Call Back*/
//Uma função passada para outra função como Argumento.

function execute(taskName, callback) {
  console.log(`Executando a tarefa: ${taskName}`);

  callback();
}

function fim() {
  console.log("Callback com uma função externa")
}

execute("Download do arquivo...", fim);


//Neste caso, a função 'fim' está sendo usada como Argumento da função 'execute'.
// Neste caso, o segundo Argumento _DEVE_ ser uma função.
//Como o segundo argumento é uma função, também podemos criar a função no próprio parâmetro.Ex:


execute("Download do arquivo...", function () {
  console.log("Callback com uma função anônima");
});

execute("Download do arquivo...", () => {
  console.log("Callback com arrow function");
});

execute("Download do arquivo...", () => console.log("Callback com arrow function de uma linha")
);






