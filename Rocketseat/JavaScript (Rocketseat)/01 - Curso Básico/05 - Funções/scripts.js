/*FUNÇÕES*/


/*Criação de funções */
function message01() {
  console.log("Olá! É bom ter você aqui!")
}

//A função foi definida, mas ainda não foi "chamada"/executada

message01();
message01();
message01();

//A função pode ser chamada mais de uma vez, sendo reaproveitada



/* Parâmetros e Argumentos*/

function message02(username) {
  console.log("Olá, " + username);

  // username é o Parâmetro do escopo da função 
}

message02("Agamenom");
message02("Daniel");

// Agamenom é um Argumento, assim como Daniel

function soma(a, b) {
  console.log(a + b)
}

soma(7, 8);
soma(9, 9);

function fullName(Nome, Sobrenomes, UltimoSobrenome) {
  console.log(Nome, Sobrenomes, UltimoSobrenome)
}

fullName("Diego", "Quelhas", "Kort - Kamp");

// Os outros argumentos ficarão como indefinidos caso não seja passado para a função
fullName("Diego")

// Podemos atribuir um valor padrão caso o argumento não seja passado
function FullName(Nome, Sobrenomes = "", UltimoSobrenome = "") {
  console.log(Nome, Sobrenomes, UltimoSobrenome)
}

FullName("Diego", "Quelhas");

// Podemos retornar o resultado de uma função para ser usada em outro lugar

function sum(a, b) {
  let sumResult = a + b

  return sumResult
}

let response = sum(7, 18) // Atribuindo o resultado (por que temos o return) da função a uma variável
console.log(response) // Exibindo a variável

console.log(sum(9, 65)); // Podemos exibir o resultado diretamente pel console.log

// É possível executar uma função antes mesmo de declará-la

showMessage01("Olá!") // Uso da função

showMessage02("Olá!!!")

function showMessage01(message) {
  console.log(message)
} // Declaração da função

function showMessage02(message) {
  console.log(message)
  endLine() // Função sendo executada dentro de outra função e antes de ser declarada


  function endLine() {
    console.log("-----------")
  }
}


/*
Comentário de documentação em JavaScript (sintaxe de JSDoc).
O JSDoc é um padrão para importar documentação no código-fonte a partir desses comentários

Etapas:
1- Fazer a função
2- Na linha imediatamente acima da função, colocamos /**
3- Escrevemos sobre detalhes dos parâmetros e resultados
*/

/**
 * Authenticates the user
 * 
 * @param {String} email user email.
 * @param {String} password more than 6 characters.
 * @returns {Number} clientID.
 */
function signIn(email, password) {
  // Fluxo de autenticação do usuário

  return 7;
}

signIn();

/*Função Anônima*/

let showMessage03 = function () {
  return "Olá, Diego"
}

console.log(showMessage03); // Vai mostrar a função

console.log(showMessage03()); // Vai executar a função

const showMessage04 = function (name) {
  return "Olá, " + name
}

console.log(showMessage04("Diego"));

/*Arrow Function*/

const showMessage05 = () => {
  console.log("Olá")
}

console.log(showMessage05);
showMessage05();

const showMessage06 = (username) => {
  console.log("Olá, " + username)
}

console.log(showMessage06);
showMessage06("Diego");


const showMessage07 = (username, email) => {
  console.log(`Olá, ${username}. Você está logado pelo email: ${email}.`)
}

console.log(showMessage07);
showMessage07("Diego", "diegokamp@gmail.com");

/*Callback function*/
//Uma função passada para outra função como argumento.

function execute(taskName, callback) {
  console.log("Executando a tarefa: ", taskName)

  callback();
}

function callback() {
  console.log("Tarefa finalizada")
}

function qualquerNome() {
  console.log("Erro na execução da tarefa")
}

// Passando para a função
execute("Download do arquivo...", callback)
execute("Download do arquivo...", qualquerNome)


// Criando uma função anônima no próprio parâmetro
execute("Upload do arquivo", function () {
  console.log("Função de callback com uma função anônima.")
})

// Criando uma arrow function no próprio parâmetro
execute("Excluindo arquivo...", () => {
  console.log("Função de callback com uma arrow function")
})

// Criando uma arrow function sem as chaves, caso a função tenha apenas uma linha de código

execute("Salvando arquivo...", () => console.log("Função de callback com uma arrow function sem chaves"))