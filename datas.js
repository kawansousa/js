//obtem data e hora
console.log(new Date());

//Primeira data q o js usa como referencia
console.log(new Date(0));

//pega os milesegindos
console.log(new Date().getTime());

//mês de 0 a 11
//definindo uma data  espesifica
console.log(new Date(2024, 7, 6)); // ano, mês, dia, : e ele sempre pula um mês então essa data será 2024-08-06T03:00:00.000Z

//definindo uma data e hora espesifica
console.log(new Date(2024, 6, 3, 14, 30, 0)); // ano, mês, dia, hora, minutos, segundos e essa data será 2024-07-03T17:30:00.000Z com a conversão de horaio

//definindo de outra forma e dessa forma ele n pula o mês mas ainda tem o fuso horaio
console.log(new Date("2024-07-03T14:30:00"));

//definindo de outra forma
console.log(new Date("July 3 , 2024 14:30:00"));

//vendo o dia da semana contando de 0 a 6
let data = new Date();
console.log(data.getDay());

//dia do mês 0 a 30
console.log(data.getDate());

// mês 0 a 11
console.log(data.getMonth());

// ano
console.log(data.getFullYear());

// hora
console.log(data.getHours());

//minutos
console.log(data.getMinutes());

//segundos
console.log(data.getSeconds());

//modificando a data e hora posso usar com todas as propiedades
let data2 = new Date();
data2.setFullYear(2040);
console.log(data2);

// formatando datas e horas
let data3 = new Date("2024-07-03T01:30:00");
console.log(data3.getDate().toString().padStart(2, "0")); // transforma para string e depois se n tiver dois digitos ele coloca um o na frente

let date = new Date();
let day = date.getDate().toString().padStart(2, "0"); //pegando o dia
let month = date.getMonth().toString().padStart(2, "0"); // pegando o ano
let yer = date.getFullYear(); // pegando o mês
let hour = date.getHours(); // pegand a hora
let minute = date.getMinutes(); // pegand os minutos

console.log(`${day}/${month}/${yer} ás ${hour}h${minute}`);

let data4 = new Date("2024-07-03T01:30:00");

//Covertendo para string
console.log(data4.toString()); //retorna Wed Jul 03 2024 01:30:00 GMT-0300 (Horário Padrão de Brasília)

//retorna somente a data
console.log(data4.toDateString()); //retorna Wed Jul 03 2024

//retorna somente a hora, minutos e segundos
console.log(data4.toTimeString()); //retorna 01:30:00 GMT-0300 (Horário Padrão de Brasília)

let data5 = new Date();

//exibe data e hora no formato local
console.log(data5.toLocaleDateString()); //resposta 27/04/2025
console.log(data5.toLocaleTimeString()); //resposta 08:22:59

//exibe data e hora no formato espesifico
console.log(data5.toLocaleDateString("en")); //resposta 4/27/2025 do formato mericano
console.log(data5.toLocaleTimeString("en")); //resposta 8:25:07 AM do formato mericano

//formato brasil
console.log(data5.toLocaleDateString("pt-br")); //resposta 4/27/2025 do formato mericano
console.log(data5.toLocaleTimeString("pt-br")); //resposta 8:25:07 AM do formato mericano

//retorna o um formato para a localidade
console.log(data5.toLocaleString()); //resposta 27/04/2025, 08:27:50
console.log(
  data5.toLocaleString("pt-br", {
    dateStyle: "short",
  })
); //resposta 27/04/2025

console.log(
  data5.toLocaleString("pt-br", {
    dateStyle: "long",
  })
); //resposta 27 de abril de 2025

console.log(
  data5.toLocaleString("pt-br", {
    dateStyle: "medium",
  })
); //resposta 27 de abr. de 2025

console.log(
  data5.toLocaleString("pt-br", {
    dateStyle: "full",
  })
); //resposta domingo, 27 de abril de 2025

console.log(
  data5.toLocaleString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
); //resposta 27/04/25, 08:32

//formatando moeda com o toLocaleString
let amount = 12.5;
console.log(
  amount.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
);
//Resposta R$ 12,50
//int é um api internacional ECMAScript
const currentLocate = Intl.DateTimeFormat().resolvedOptions();
console.log(currentLocate);
//respota é as informações de data e hora
/* {
  locale: 'pt-BR',
  calendar: 'gregory',
  numberingSystem: 'latn',
  timeZone: 'America/Sao_Paulo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
} */
//Formata de acordo com a localiade
console.log(new Intl.DateTimeFormat("pt-br").format(new Date())); //resposta 27/04/2025
console.log(new Intl.DateTimeFormat("en-US").format(new Date())); //resposta 4/27/2025

//obendo diferença de horio
const date3 = new Date();
console.log(date3.getTimezoneOffset()); //resposta 180 minutos de atraso
console.log(date3.getTimezoneOffset() / 60); //resposta 3 horas de atraso

//lidando com fuso
const dateWithTinezone = new Date();
console.log(dateWithTinezone.toISOString()); //retorna o formato ISO da data 2025-04-27T11:36:35.588Z

//lidando com fuso horio
const date2 = new Date("2025-04-27T11:38:35.588+03:00"); // remode 3 horas para que podemos trabalhar com fusohorio
console.log(date2); //resposta 2025-04-27T08:38:35.588Z
