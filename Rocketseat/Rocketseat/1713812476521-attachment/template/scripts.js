/*Visualizar o conteúdo do document.*/
console.log("Visualizar o conteúdo do document.")
console.log(document)

console.log("")

//Obter o title da página
console.log("Obter o title da página")
console.log(document.title)

console.log("")

//Acessar elemento pelo id
console.log("Acessar elemento pelo id")
const guest = document.getElementById("guest-2")
console.log(guest)

console.log("")

//Ver as propriedades do objeto
console.log("Ver as propriedades do objeto")
console.dir(guest)

console.log("")

//Acessar elementos de uma classe
console.log("Acessar elementos de uma classe")
const guestClass = document.getElementsByClassName("guest")
console.log(guestClass)

console.log(guestClass.item(0)) //Acessa o primeiro item dessa classe (a contagem começa do 0)

console.log(guestClass[0]) //Também acessa o primeiro item dessa classe

console.log("")

//Selecionar lista de elementos pela tag
console.log("Selecionar lista de elementos pela tag")
const guestTag = document.getElementsByTagName("li")
console.log(guestTag)

console.log("")

//Query Selector (Tem que identificar se é pelo id(#) ou class(.))
console.log("Query Selector")
const guestAlfa = document.querySelector("#guest-1");
console.log(guestAlfa);

const guestBeta = document.querySelector(".guest") //Mostra apenas o primeiro elemento
console.log(guestBeta)

const guestGama = document.querySelectorAll(".guest") //Mostra todos os elementos
console.log(guestGama)


console.log("")





