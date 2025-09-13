/*CONDICIONAIS E CONTROLE DE FLUXO*/

/*Operador Lógico*/

let age = 21;

console.log(age >= 18

  ? "OK"

  : "KO")

// Falsy e Truthy


console.log("Valores Falsos");

console.log(0 ? "Verdadeiro" : "falso");
console.log(-0 ? "Verdadeiro" : "falso");
console.log("" ? "Verdadeiro" : "falso");
console.log(null ? "Verdadeiro" : "falso");
console.log(undefined ? "Verdadeiro" : "falso");
console.log(NaN ? "Verdadeiro" : "falso");


console.log("Valores Verdadeiros");

console.log(5 ? "Verdadeiro" : "falso");
console.log(-5 ? "Verdadeiro" : "falso");
console.log(3.5 ? "Verdadeiro" : "falso");
console.log(" " ? "Verdadeiro" : "falso");
console.log("0" ? "Verdadeiro" : "falso");
console.log("Nome qualquer" ? "Verdadeiro" : "falso");
console.log("false" ? "Verdadeiro" : "falso");
console.log(Infinity ? "Verdadeiro" : "falso");
console.log(-Infinity ? "Verdadeiro" : "falso");

/*Condicional*/

// if

age = 19;

if (age >= 18) {
  console.log("Pode dirigir");
}

// else

age = 15;

if (age >= 18) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

// else if

let hour = 21;

if (hour < 12) {
  console.log("Bom dia!");
}
else if (hour < 18) {
  console.log("Boa tarde!");
}
else if (hour < 24) {
  console.log("Boa noite!");
}
else {
  console.log("Defina um horário entre 0 e 23");
}


/*Switch*/

// De acordo com as alternativas


console.log("Switch");

let option = 1;

switch (option) {
  case 1:
    console.log("Falar com setor de vendas");
  case 2:
    console.log("Falar com outro setor");
}

// Aparecerá o console.log dos dois casos, mesmo o option = 1.

// Para isso não acontecer, devemos usar o BREAK para parar o switch


switch (option) {
  case 1:
    console.log("Falar com setor de vendas");
    break
  case 2:
    console.log("Falar com outro setor");
    break
}


option = 3;

switch (option) {
  case 1:
    console.log("Falar com setor de vendas");
    break;
  case 2:
    console.log("Falar com outro setor");
    break;
}

// Não irá executar nenhuma das opções

option = 6;

switch (option) {
  case 1:
    console.log("Falar com setor de vendas");
    break;
  case 2:
    console.log("Falar com outro setor");
    break;
  case 3:
    console.log("Cancelar matrícula");
    break;
  default:
    console.log("Opção inválida");
}

/*Tratamento de Exceções*/

// Try Catch Finally


// Exemplo: Tentar apresentar uma variável que não existe

// console.log(result);

try { //Tenta executar algo
  console.log(result);
} catch (error) { // Captura o erro (neste caso definido como error, mas pode ser outra palavra) para tratar (execução do catch)
  console.log(error); //Apresenta a mensagem de erro capturado (pode ser uma outra mensagem definida)
  console.log("Está vacilando aí, hein!");
}

try { //Tenta executar algo
  console.log(result);
} catch (error) { // Captura o erro (neste caso definido como error, mas pode ser outra palavra) para tratar (execução do catch)
  console.log(error); //Apresenta a mensagem de erro capturado (pode ser uma outra mensagem definida)
  console.log("Está vacilando aí, hein!");
} finally { // Executa, independentemente do erro
  console.log("Fim da aplicação");
}

// Exemplo de uma situação real: Tenta receber um arquivo de um servidor; o arquivo foi deletado e por isso IRIA dar erro, mas retorna ao usuário a mensagem que o arquivo não foi encontrado. No final, o usuário é enviado para a página inicial.

// Exemplo: Inicia a conexão com um banco de dados e, independentemente de ter o arquivo, fecha a conexão com o banco de dados

// Podemos "lançar" exceções personalizadas

let result = 0;

try {
  if (result === 0) {
    throw new Error("Que isso? Não pode digitar 0")
  }
} catch (error) {
  console.log(error)
} finally {
  console.log("Fim");
}























