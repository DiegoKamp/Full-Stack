
/*Repetição e Iteração*/


//Loop While


/*
let result = true;

while (result) {

  let response = window.prompt("Se responder 1 vai repetir, se responder 2 vai continuar")

  if (response === "2") {
    result = false;
  }

}

console.log("Segue o fluxo...")
*/


// Loop infinito

/*
let vAiDarMERd4 = true;

while (vAiDarMERd4){
  console.log("Deu merda!");
}
*/

// Do While


let value = 0;

do {
  value++
  console.log(value)

} while (value < 10);
// Executa enquanto o value é menor que 10, porém o valor está sendo incrementado antes do console.log, ou  seja, o último valor apresentado já está fora do estipulado.

console.log("Segue o fluxo...");

do {
  value++
  console.log(value)
} while (value < 10);
// O método do while faz a condição executar pelo menos uma vez, já que a verificação do valor é feita depois.

console.log("Segue o fluxo...");

// For


for (step = 0; step < 10; step++) {
  console.log(step)
};
// Executa primeiro e depois faz o incremento/ decremento

for (i = 20; i > 16; i--) {
  console.log(i)
};
// Executa primeiro e depois faz o decremento

let number = 7;
console.log("Tabuada de 7")
for (i = 0; i <= 10; i++) {
  console.log(`${i} x ${number} = ${i * number}`)
}

for (i = 2; i < 1024; i = i * 2) {
  console.log(i)
}

// For In
console.log("for in")

let person = {
  name: "Diego",
  surname: "Kamp",
  age: 39,
  email: "diegokamp@gmail.com",
}


for (let property in person) {

  // Mostra os nomes das propriedades
  console.log(property)

  // Mostra os conteúdos das propriedades
  console.log(person[property])
}
// Executa enquanto houver propriedades a percorrer


for (let searchItem in person) {
  console.log(`${searchItem} = ${person[searchItem]}`)

}

for (let blaBlaBla in person) {
  console.log("Vai repetir quantas vezes?")
}

let children = [
  "Amanda",
  "Davi",
  "Daniel",
  "Camille Vitória",
  "Salomão",
]

for (index in children) {
  console.log(index)

  console.log(children[index])
}

// For Of

console.log("for of")

for (let child of children) {
  console.log(child)
}
// Percorre uma lista iterável ex: array
// Cuidado! Um objeto não é iterável


let user = {
  name: "Diego",
  surname: "Quelhas",
  email: "diegokamp@gmail.com",
}
// Esse objeto não é iterável

/*
for (let userPropriety of user) {
  console.log(userPropriety[surname])
}
Esse comando dará erro!
*/

let userArray = [ // Apenas transformei um objeto num array
  {
    name: "Diego",
    surname: "Quelhas",
    email: "diegokamp@gmail.com",
  },
]

for (let userPropriety of userArray) {
  console.log(userPropriety.surname)
}

// Break no for
console.log("Sem break")
for (let i = 0; i < 10; i++) {
  console.log(i)
}

console.log("Com break de 5 antes do console.log")
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break
  }
  console.log(i)
}

console.log("Com break de 5 depois do console.log")
for (let i = 0; i < 10; i++) {
  console.log(i)
  if (i == 5) {
    break
  }
}

// Continue
console.log("Continue no 5 antes do console.log")
for (let i = 0; i < 10; i++) {

  if (i == 5) {
    continue
  }
  console.log(i)
}
// Quando o i foi igual a 5, a função recomeçou do ponto continue, ou seja, não executou o restante do comando


console.log("Continue no 5 depois do console.log")
for (let i = 0; i < 10; i++) {
  console.log(i)

  if (i == 5) {
    continue
  }
}
// Pelo continue estar depois do console.log (no final do for), quando o i foi = 5, a função recomeçou após já ter executado tudo, ou seja,, NÃO FAZ SENTIDO COLOCAR NO FINAL


