// Tabela de conversão (No futuro, as informações podem vir de outro lugar)
// Cotação referente à data 14/01/2026
USD = 5.40;
EUR = 6.29;
GBP = 7.25;



// Verificando conexão
console.log("Olá, Diego aqui!")


//Recuperando os elementos do index
const form = document.querySelector("form")
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer"); //footer dentro da main (só existe esse, não precisava disso)
const description = document.getElementById("description");
const result = document.getElementById("result");


// Manipulando o input do amount para receber somente números
amount.addEventListener("input", () => {
  // console.log(amount.value) checando se estou vendo o evento

  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "") // Recebe o próprio amount, mas somente números
});


//Capturando o evento submit (enviar) do formulário
form.onsubmit = function (event) {
  event.preventDefault() // Impedindo a página de recarregar

  let total

  switch (currency.value) {
    case ("USD"):
      convertCurrency(amount.value, USD, "US$");
      break

    case ("EUR"):
      total = convertCurrency(amount.value, EUR, "€");
      break

    case ("GBP"):
      total = convertCurrency(amount.value, GBP, "£");
      break
  }
}


//Função para conversão (executada dentro do form.onsubmit)
function convertCurrency(amount, price, symbol) {
  try {
    // Cotação atual da moeda selecionada e formatação do valor para leitura pt-BR
    totalAmount = (price * amount)

    // console.log(convert(totalAmount))

    result.textContent = "R$ " + convert(totalAmount);

    priceTrade = convert(price);
    description.textContent = (`${symbol} 1 = R$ ${priceTrade}`)

    //Aplica a classe que exibe o footer
    footer.classList.add("show-result");
  } catch (error) {
    //Em caso de erro, remove o que seria exibido
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

// Configuração da moeda
function convert(value) {
  let result
  result = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2
  })
  return result
}