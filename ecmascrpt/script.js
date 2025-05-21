/* Quando eu ativo o modo strito do js ele minimiza a possibilidades de erros  */
"use strict"

//sem s use strict daria erro mesmo com os parametros com o mesmo nome
/* function somar(a, a, b) {
    return a + a + b;
}
 */

// destruturação de array
const data = ["Rodrigo", "rodrigo@gmail.com"]

// agora o variavel nome tem o valor de Rodrigo e email tem o valor de rodrigo@gmail.com
const [nome, email] = data
console.log(nome, email);

//Desestruturando apenas o primeiro valor
const [nome2] = data
console.log(nome2);

const fruts = ["banana", "maça", "laranja"]
//Desestruturando apenas o segundo valor com virgula
const [, maça] = fruts
console.log(maça);

//Desestruturando apenas o terceiro valor com virgula
const [, , laranja] = fruts
console.log(maça);

//Desestruturando apenas o segundo valor com underline _
const [_, maca2] = fruts
console.log(maca2);


const products = {
    descripton: "Produto 1",
    price: 10,
}

//Desestruturando o objeto
const { descripton, price } = products
console.log(descripton, price);

//Desestruturando o objeto com o mesmo nome
// posso trocar a ordem dos valores que n afata o resultado se eu só recebesse os parametros
// se eu trocasse a mensagem ficaria errada
function newPodutct({ descripton, price }) {
    console.log("Novo produto");
    console.log("Decription: ", descripton);
    console.log("Price: ", price);
}
newPodutct({
    price: 20,
    descripton: "Produto 2",
})

//Rest params (...) premise representar um número indefinido de argumentos
//as vezes pode ser usando (...rest) ou (...args)
function sum(...args) {
    console.log(args); // mostra os valores em array
    console.log(args.length); // mostra a quantidade de valores
    console.log(args[0]); // mostra o primeiro valor
    console.log(...args); // mostra os valores separados
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

//Spread operator (...) é usado para espalhar os valores de um array ou objeto
const numbers = [1, 2, 3, 4, 5]
const numbers2 = [6, 7, 8, 9, 10]
const numbers3 = [...numbers, ...numbers2] // espalha os valores dos dois arrays
console.log(numbers3); // mostra os valores dos dois arrays juntos

const pessoas = [
    { nome: "Rodrigo", idade: 30 },
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 20 },
    { nome: "Ana", idade: 18 },
]

console.log(...pessoas); // mostra os valores do array de objetos


//imutabilidade
// o operador de espalhamento (...) é usado para criar uma cópia rasa de um objeto ou array
const pessoa = {
    nome: "Rodrigo",
    idade: 30,
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
}
// o operador de espalhamento (...) é usado para criar uma cópia rasa de um objeto ou array
const pessoa2 = { ...pessoa } // cria uma cópia rasa do objeto
console.log(pessoa2); // mostra os valores do objeto    

// o operador de espalhamento (...) é usado para criar uma cópia rasa de um objeto ou array
const pessoa3 = { ...pessoa, nome: "Maria" } // cria uma cópia rasa do objeto e altera o nome   
console.log(pessoa3); // mostra os valores do objeto

// deep copy 
// o operador de espalhamento (...) é usado para criar uma cópia rasa de um objeto ou array
const pessoa4 = { ...pessoa, endereco: { ...pessoa.endereco, cidade: "Rio de Janeiro" } } // cria uma cópia rasa do objeto e altera a cidade
console.log(pessoa4); // mostra os valores do objeto

//congeando o valor de um objeto
const book = {
    title: "objetos imultáveia",
    category: "javaScript",
    author: {
        name: "Rodrigo",
        email: "r@email.com"
    }
}
// o js deixa eu mudar qualquer propiedade de qualuqer objeto
//book.category = "HTML"

//Não deixa eu modificar qualuqer propiedade raza do objeto
Object.freeze(book)
//book.category = "css"

//Mas posso fazer modificações razas 
book.author.name = "kawan"

console.log(book);

//Fazendo o congelamento profundo

function deepFreezer(object) {
    //obtem um array com todas as propiedades de um objeto
    const props = Reflect.ownKeys(Object)
    //perccire cada elemento do array
    for (const prop of props) {
        const value = object[prop]
        //verifica se tem algum elemento que o tipo é objeto ou funçõa 
        if (value && typeof value === "object" || typeof value === "function") {
            //manda para o congelamento 
            deepFreezer(value)
        }

    }
    //retorna o objeto completamento congelado
    return Object.freeze(object)
}

console.log(deepFreezer(book));
