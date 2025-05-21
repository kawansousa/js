let message = "Estou estudando os fundamentos do js";

console.log(message);
//não modificando o valor da viavel
console.log(message.toLocaleUpperCase()); //Transforma toda a mensagem em maiuscula ESTOU ESTUDANDO OS FUNDAMENTOS DO JS

console.log(message.toLocaleLowerCase()); //Transforma toda a mensagem em mnuscula  estou estudando os fundamentos do js

//qual o comprimento da string
console.log(message.length); // retorna a quantidade de caracteres contando com os espaços

//exemplo da validações de minimo de caracteres para senha
if (message.length < 2) {
  console.log("Digite uma senha maior ");
}

//Quantos dígitos tem um número
let numero = 1343;
console.log(String(numero).length);
console.log(numero.toString().length);

//subistituir parte de um texto
console.log(message.replace(" ", ".")); //troca os espaços por pontos resposta Estou.estudando os fundamentos do js
console.log(message.replace("os fundamentos do js", "js")); //troca os espaços por pontos resposta Estou estudandojs

//pegando parte especifica do texto da esquerda para a direita
console.log(message.slice(0, 5)); // a resposta foi Estou porque são os caracteres da posição 0 até a 5

//pegando parte especifica do texto da direita para a  esquerda2
console.log(message.slice(-11));

// removendos espaços desnecessarios de uma string no inicio e no final
let text = "           estou estudnado o php    ";
console.log(text.trim());

// execicio do cartão
const credCard = "1234567812344928";
const lasDigits = credCard.slice(-4);
// adicoinando os carecteres q faltam com o x no incio
const markedNumber = lasDigits.padStart(credCard.length, "x");

// adicoinando os carecteres q faltam com o x no final
const markedNumber1 = lasDigits.padEnd(credCard.length, "x");
console.log(markedNumber);

// como obter a posição da palavra tem q ser exatamente a palavra escrita se fosse Estudando o retorno no método seria -1
console.log(message.indexOf("estudando"));

// quero saber se tem ou não a palavra js o retorbo é  true ou false
console.log(message.includes("js")); //resposta true
console.log(message.includes("css")); //resposta false

//