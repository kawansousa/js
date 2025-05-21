//função contrutora sempre retorna um objeto
function createProdut(name) {
  const produt = {};
  //Atribuindo valores para esse objeto
  produt.name = name;
  produt.datais = function () {
    console.log(`O nome do produto é ${this.name}`);
  };
  //retornnado o objeto
  return produt;
}

//instanciando um novo objeto,e ele cria um novo objeto com a mesma estrutura
const product1 = new createProdut("teclado");
//pegando as propiedaddes nesse novo objeto
console.log(product1.name); 
product1.datais();

//criando um novo objeto e instanciando com a função que cira objetos
const product2 = new createProdut("Mouse");
console.log(product2.name);
product2.datais();

/* Funções contrutoras disponiveis no js  */
let mayName = new String("Kawan"); // cria um objeto com uma string dentro resposta [String: 'Kawan']
console.log(mayName);

let price = "20.32".replace(".", ""); // um metodo de função que troca . por nada resposta 2032
console.log(price);

let data = new Date(); // retorna a data 2025-04-26T16:40:22.905Z
let data2 = new Date("2024-1-1"); // retorna a data conmvertida 2024-01-01T03:00:00.000Z
console.log(data);
console.log(data2);

let number = new Number(23);
console.log(number); // [Number: 23]

let boolean = new Boolean(true);
console.log(boolean); // [Boolean: true]

let array = new Array(1, 2, 3, 4, 5);
console.log(array); // [ 1, 2, 3, 4, 5 ]

let object = new Object({ name: "Lucas", age: 23 });
console.log(object); // { name: 'Lucas', age: 23 }

// outra forma de criar uma função contrutora
function Person(name) {
  // sempre com o nome maiusculo
  this.name = name; // falanfo que o nome vai ser o nome desse objeto
  this.mensage = function () {
    // metodos dessa função construtira para o objeto
    console.log(`Olá  ${this.name}`);
  };
}
/* retorno 
Person { name: 'Kawan', mensage: [Function (anonymous)] } */
const person1 = new Person("Kawan");
console.log(person1);
person1.mensage();
// o melhor jeito de criar uma função construtora
