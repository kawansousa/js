// estruturas de repetição
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
} // imprime os numeros de 0 a 9

//Exemplo de ultilizaçõa o usuairo pode escolher se quer que a mensagem seja repitida ou n
let execute = true;
while (execute) {
  let response = window.prompt("Deseja continuar : 1 (SIM) ou 2 (Não)");
  if (response === "2") {
    execute = false;
  }
} //enquanto o usuario não clicar em 2 o código n para
// do while
do {
  console.log(i);
  i++;
} while (i < 10); // imprime os numeros de 0 a 9

// for
for (let i = 0; i < 10; i++) {
  console.log(i);
} // imprime os numeros de 0 a 9

// for in
let array = ["kawan", "Sousa "];
for (let i in array) {
  console.log(i); // imprime os indices do array
  console.log(array[i]); // mostra o valor do array
}

let objeto = {
  name: "Kawan",
  sobre_nome: "Sousa",
};
for (let i in objeto) {
  console.log(i); //imprime as propiedades desse objeto
  console.log(objeto[i]); // mostra o valor do objero
}

// for of
for (let i of array) {
  console.log(i); // imprime os elementos do array
}

let users = [
  { name: "kawan", email: "kawan@gemail.com" },
  { name: "joão", email: "joao@gmail.com" },
];

for (let user of users) {
  console.log(user.name);
}
