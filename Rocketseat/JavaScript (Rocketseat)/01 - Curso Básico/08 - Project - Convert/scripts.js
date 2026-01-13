// Verificando conexão
console.log("Olá, Diego aqui!")

/*Recuperando os elementos do index*/
const amount = document.getElementById("amount");





// Manipulando o input do amount para receber somente números
amount.addEventListener("input", () => {
  // console.log(amount.value) checando se estou vendo o evento

  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "") // Recebe o próprio amount, mas somente números

});

