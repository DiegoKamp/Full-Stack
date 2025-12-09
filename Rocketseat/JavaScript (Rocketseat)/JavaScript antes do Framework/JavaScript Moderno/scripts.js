/*Modo Estrito*/

// Usado para identificar "erros silenciosos"

"use strict"

function showMessage() {

  //userName = "Diego"

  // Como userName não foi definido antes, seria um erro se o JS levasse ao "pé da letra", mas ele faz um hosting para o escopo global e  o usa normalmente. Em modo estrito, o erro irá aparecer. O "use strict" pode ser levado para uma função ou deixar no escopo global 

  let userName = "Diego";
  console.log(`Olá, ${userName}`)
}

showMessage();

class Student {
  get point() {
    return 7
  }
}

let student = new Student();
console.log(student.point);

//student.point = 10;
// Uncaught TypeError: Cannot set property point of #<Student> which has only a getter

/*
function sum(a, a, c) {
  console.log("Soma:", a + a + c);
}

Uncaught SyntaxError: Duplicate parameter name not allowed in this context

sum(1, 3, 2);
Sem o modo estrito, o JS deixa passar o erro, mas acaba resultando em 8.
*/




