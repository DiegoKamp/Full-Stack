// Verificando conexão
console.log("Olá, Diego aqui!")

//Recuperando os elementos do index
const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");





// Manipulando o input do amount para receber somente números
amount.addEventListener("input", () => {
  // console.log(amount.value) checando se estou vendo o evento

  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "") // Recebe o próprio amount, mas somente números
});

//Capturando o evento submit (enviar) do formulário
form.onsubmit = function (event) {
  event.preventDefault()

  console.log(currency.value)
}