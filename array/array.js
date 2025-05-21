// List all properties and methods of an array
const array = ["a", "b", "c", "d", "e"];
//console.log(array);
//console.log(array.length);

//executando funçãoes dentro de um array
const pessoa = [
  "kawan",
  {},
  function () {
    return "oi";
  },
];
//console.log(pessoa[2]()); // kawans

//manipulando array
const fullName = "Kawan sousa dos santos ";
console.log(fullName.split(" ")); //comvertendo string em array e o seprados é " " resposta [ 'Kawan', 'sousa', 'dos', 'santos', '' ]

const array1 = ["html", "css", "js"];
console.log(array1.push("php")); // [ 'html', 'css', 'js', 'php' ] adiciona um elemento no final do array

console.log(array1.pop()); // [ 'html', 'css', 'js' ] remove o ultimo elemento do array

console.log(array1.unshift("php")); // [ 'php', 'html', 'css', 'js' ] adiciona um elemento no inicio do array

console.log(array1.shift()); // [ 'html', 'css', 'js' ] remove o primeiro elemento do array

console.log(array1.splice(0, 1)); // [ 'html' ] remove o elemento do array apartir do indice 0 e até o segundo parametro que nesse caso é o 1 (html)

console.log(array1.slice(0, 2)); // [ 'html' ] remove o elemento entre os indices 0 e 1 e retorna o elemento

console.log(array1.indexOf("css")); // [ 'js', 'css' ] retorna o indice do elemento css

console.log(array1.reverse()); // [ 'js', 'css' ] inverte o array

console.log(array1.sort()); // [ 'css', 'js' ] ordena o array

console.log(array1.join()); // css,js transforma o array em string

console.log(array1.includes("css")); // vetifica se tem esse elemento dentro do array sempre retorna true ou false

// forEach
array.forEach(function (element) {
  console.log(element); // imprime os elementos do array
}); // imprime os elementos do array
//
// forEach com arrow function
array.forEach((element) => {
  console.log(element); // imprime os elementos do array
}); // imprime os elementos do array
//
// forEach com arrow function e destructuring e template literals
array.forEach(({ name, age }) => {
  console.log(`Nome: ${name}, Idade: ${age}`); // imprime os elementos do array
}); // imprime os elementos do array
