/*DATA E HORA*/

// Exibir data e hora atual
console.log(new Date());

// Exibir a data e hora de referência
console.log(new Date(0));

// Exibir o tempo decorrido (em milissegundos) da data e hora de referência
console.log(new Date().getTime());

//Definir uma data

// Ano, mês (começando do 0 como janeiro e 11 como dezembro), dia
console.log(new Date(1986, 1, 11))

// Ano, mês (começando do 0 como janeiro e 11 como dezembro), dia, hora, min, seg
console.log(new Date(1986, 1, 11, 17, 55, 1))


// Por uma String (Ano-mês-diaTH:min:s) Como String, o mês vai de 1 a 12, normalmente
console.log(new Date("1986-02-11T17:55:59"))

console.log(new Date("Feb 11, 1986 17:55:30"))


// Obtendo informações de uma data

let date = new Date("Feb 11, 1986 17:55:30");

// Ano
console.log(date.getFullYear());

// Mês 0 - 11
console.log(date.getMonth());

// Dia do mês (1 - 31)?
console.log(date.getDate());

// Dia da semana 0 - 6
console.log(date.getDay());

// Hora
console.log(date.getHours());

// Minuto
console.log(date.getMinutes());

// Segundos
console.log(date.getSeconds());


// Modificar algo na data

// Mudar o ano
date.setFullYear(1962);
console.log(date);

// Mudar o mês
date.setMonth(6);
console.log(date);

// Mudar o dia
date.setDate(10);
console.log(date);

// Mudar a hora
date.setHours(14);
console.log(date);

date.setMinutes(1);
console.log(date);

date.setSeconds(26);
console.log(date);


// Configurando uma data

// Completa o zero antes do dia, caso tenha só um dígito
let day = date.getDate().toString().padStart(2, "0");

console.log(day);

let month = (date.getMonth() + 1).toString().padStart(2, "0");

console.log(month);

let year = date.getFullYear().toString();

console.log(year);

let fullDate = (`${day}/${month}/${year}`);

console.log(fullDate);


// Mostra a data como String de uma forma pré-configurada. Dia da semana, mês, dia, ano
console.log(date.toDateString());


// Mostra a hora como String de uma forma pré-configurada. Horário, fuso
console.log(date.toTimeString());

// Mostra no formato usado no local
console.log(date.toLocaleDateString());

// Mostra no formato usado no local
console.log(date.toLocaleTimeString());

// Mostra no formato usado no local escolhido
console.log(date.toLocaleDateString("en"));

// Mostra no formato usado no local escolhido
console.log(date.toLocaleTimeString("en"));


// Exibir data e hora com styles diferentes
console.log(date.toLocaleString());

console.log(date.toLocaleString("pt-BR", {
  dateStyle: "full"
}));

console.log(date.toLocaleString("pt-BR", {
  dateStyle: "medium"
}));

console.log(date.toLocaleString("pt-BR", {
  dateStyle: "short"
}));

console.log(date.toLocaleString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}));


let amount = 12.5;

console.log(amount);

console.log(
  amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
)

// Fuso horário

// Obtém informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();

console.log(currentLocale);


// Exibe no formato da localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));

console.log(new Intl.DateTimeFormat("en-US").format(new Date()));


// Data e hora no momento
const date0 = new Date();

console.log(date0);

// Deslocamento da Time Zone (em minutos)
console.log(date0.getTimezoneOffset());


// Deslocamento da Time Zone (em hora)
console.log(date0.getTimezoneOffset() / 60);

// Usando o Time Zone

/*
const dateWithTimeZone = new Date("2025-10-19T06:12:09.463+3:00");

Vai dar erro porque deveria ser +03:00
*/

const dateWithTimeZone = new Date("2025-10-19T06:12:09.463-03:00"); // Brasil é UTC-3

console.log(dateWithTimeZone.toISOString());

// Horário atual (local) sem a adição do fuso
console.log(new Date().toLocaleString());


// Horário atual com a adição do fuso, oou seja, horário no UTC 0 (Londres)
console.log(dateWithTimeZone.toLocaleString());

