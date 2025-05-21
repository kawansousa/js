# Guia Completo de Estudos para Desenvolvimento JavaScript

## Sumário

1. [Fundamentos do JavaScript](#1-fundamentos-do-javascript)
2. [Funções](#2-funções)
3. [Arrays e Objetos](#3-arrays-e-objetos)
4. [ES6+ (JavaScript Moderno)](#4-es6-javascript-moderno)
5. [DOM (Document Object Model)](#5-dom-document-object-model)
6. [Requisições Assíncronas](#6-requisições-assíncronas)
7. [Frameworks e Bibliotecas Populares](#7-frameworks-e-bibliotecas-populares)
8. [Ferramentas de Desenvolvimento](#8-ferramentas-de-desenvolvimento)
9. [Testes](#9-testes)
10. [Boas Práticas e Padrões](#10-boas-práticas-e-padrões)
11. [Roteiro de Estudos Sugerido](#roteiro-de-estudos-sugerido)

## 1. Fundamentos do JavaScript

### Variáveis e Tipos de Dados

```javascript
// Declaração de variáveis
let nome = "Maria"; // String
const idade = 25; // Number
var ativo = true; // Boolean
let lista = [1, 2, 3]; // Array
let pessoa = {
  // Object
  nome: "João",
  idade: 30,
};
let indefinido = undefined; // Undefined
let nulo = null; // Null
```

### Operadores

```javascript
// Aritméticos
let soma = 5 + 3; // 8
let subtracao = 10 - 5; // 5
let multiplicacao = 3 * 4; // 12
let divisao = 10 / 2; // 5
let modulo = 10 % 3; // 1

// Comparação
let igual = 5 === "5"; // false (comparação estrita)
let igualSemTipo = 5 == "5"; // true (comparação solta)
let maior = 10 > 5; // true

// Lógicos
let e = true && false; // false
let ou = true || false; // true
let nao = !true; // false
```

### Estruturas de Controle

```javascript
// Condicionais
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// Switch
switch (diaDaSemana) {
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  default:
    console.log("Outro dia");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}
```

## 2. Funções

### Declaração de Funções

```javascript
// Função tradicional
function somar(a, b) {
  return a + b;
}

// Arrow function
const multiplicar = (a, b) => a * b;

// Função anônima
const array = [1, 2, 3];
array.forEach(function (item) {
  console.log(item);
});

// Função com parâmetros padrão
function saudar(nome = "visitante") {
  return `Olá, ${nome}!`;
}
```

### Escopo e Closures

```javascript
// Closure
function criarContador() {
  let contador = 0;

  return function () {
    contador++;
    return contador;
  };
}

const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
```

## 3. Arrays e Objetos

### Manipulação de Arrays

```javascript
const frutas = ["maçã", "banana", "laranja"];

// Adicionando elementos
frutas.push("uva"); // ["maçã", "banana", "laranja", "uva"]
frutas.unshift("morango"); // ["morango", "maçã", "banana", "laranja", "uva"]

// Removendo elementos
frutas.pop(); // Remove o último: ["morango", "maçã", "banana", "laranja"]
frutas.shift(); // Remove o primeiro: ["maçã", "banana", "laranja"]

// Métodos de iteração
const numeros = [1, 2, 3, 4, 5];

// map - cria um novo array transformando cada elemento
const dobrados = numeros.map((num) => num * 2); // [2, 4, 6, 8, 10]

// filter - cria um novo array com elementos que passam no teste
const pares = numeros.filter((num) => num % 2 === 0); // [2, 4]

// reduce - reduz o array a um único valor
const soma = numeros.reduce((total, num) => total + num, 0); // 15
```

### Objetos e JSON

```javascript
// Criando e acessando objetos
const pessoa = {
  nome: "Ana",
  idade: 28,
  profissao: "Desenvolvedora",
};

console.log(pessoa.nome); // "Ana"
console.log(pessoa["profissao"]); // "Desenvolvedora"

// Adicionando e modificando propriedades
pessoa.cidade = "São Paulo";
pessoa.idade = 29;

// Desestruturação
const { nome, idade } = pessoa;
console.log(nome); // "Ana"

// Convertendo para JSON e vice-versa
const pessoaJSON = JSON.stringify(pessoa);
const pessoaObjeto = JSON.parse(pessoaJSON);
```

## 4. ES6+ (JavaScript Moderno)

### let e const

```javascript
// Antes (var)
var x = 10;
if (true) {
  var x = 20; // Mesma variável!
}
console.log(x); // 20

// Depois (let)
let y = 10;
if (true) {
  let y = 20; // Variável diferente, escopo de bloco
}
console.log(y); // 10
```

### Template Literals

```javascript
const nome = "João";
const idade = 30;

// Antes
console.log("Meu nome é " + nome + " e tenho " + idade + " anos");

// Depois
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
```

### Desestruturação

```javascript
// Array
const coordenadas = [10, 20, 30];
const [x, y, z] = coordenadas;

// Objeto
const usuario = { nome: "Pedro", email: "pedro@email.com" };
const { nome, email } = usuario;
```

### Spread/Rest Operator

```javascript
// Spread
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest
function soma(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(soma(1, 2, 3, 4)); // 10
```

### Classes

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    return `Olá, meu nome é ${this.nome}`;
  }
}

const joao = new Pessoa("João", 25);
console.log(joao.saudacao()); // "Olá, meu nome é João"
```

### Promises e Async/Await

```javascript
// Promise
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dados = { id: 1, nome: "Produto" };
      resolve(dados);
      // Em caso de erro: reject("Erro ao buscar dados");
    }, 2000);
  });
}

buscarDados()
  .then((dados) => console.log(dados))
  .catch((erro) => console.error(erro));

// Async/Await
async function buscarUsuario() {
  try {
    const dados = await buscarDados();
    console.log(dados);
  } catch (erro) {
    console.error(erro);
  }
}
```

## 5. DOM (Document Object Model)

### Seleção de Elementos

```javascript
// Métodos de seleção
const titulo = document.getElementById("titulo");
const paragrafos = document.getElementsByClassName("paragrafo");
const botoes = document.getElementsByTagName("button");
const item = document.querySelector(".item");
const itens = document.querySelectorAll(".item");
```

### Manipulação de Elementos

```javascript
// Modificando conteúdo
elemento.textContent = "Novo texto";
elemento.innerHTML = "<strong>Texto em negrito</strong>";

// Alterando estilos
elemento.style.color = "red";
elemento.style.fontSize = "20px";

// Adicionando/removendo classes
elemento.classList.add("destaque");
elemento.classList.remove("inativo");
elemento.classList.toggle("selecionado");

// Atributos
elemento.setAttribute("disabled", "true");
const valor = elemento.getAttribute("data-id");
elemento.removeAttribute("hidden");
```

### Eventos

```javascript
// Adicionando eventos
botao.addEventListener("click", function (evento) {
  console.log("Botão clicado");
  evento.preventDefault(); // Evita comportamento padrão
});

// Delegação de eventos
lista.addEventListener("click", function (evento) {
  if (evento.target.classList.contains("item")) {
    console.log("Item clicado:", evento.target.textContent);
  }
});
```

### Criação e Manipulação de Elementos

```javascript
// Criando elementos
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Novo parágrafo";
novoParagrafo.classList.add("destaque");

// Adicionando no DOM
container.appendChild(novoParagrafo);
container.insertBefore(novoParagrafo, referencia);

// Removendo elementos
elemento.remove();
container.removeChild(elemento);
```

## 6. Requisições Assíncronas

### Fetch API

```javascript
// GET request
fetch("https://api.exemplo.com/dados")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro na resposta da rede");
    }
    return response.json();
  })
  .then((dados) => {
    console.log(dados);
  })
  .catch((erro) => {
    console.error("Problema na requisição:", erro);
  });

// POST request
fetch("https://api.exemplo.com/usuarios", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nome: "Maria",
    email: "maria@email.com",
  }),
})
  .then((response) => response.json())
  .then((dados) => console.log(dados));
```

### Async/Await com Fetch

```javascript
async function buscarDados() {
  try {
    const response = await fetch("https://api.exemplo.com/dados");
    if (!response.ok) {
      throw new Error("Erro na resposta da rede");
    }
    const dados = await response.json();
    return dados;
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
    throw erro;
  }
}

// Usando a função
buscarDados()
  .then((dados) => console.log(dados))
  .catch((erro) => console.error(erro));
```

## 7. Frameworks e Bibliotecas Populares

### React

```javascript
// Componente funcional com hooks
import React, { useState, useEffect } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contagem: ${contador}`;
  }, [contador]);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}

export default Contador;
```

### Vue.js

```javascript
// Componente Vue.js
Vue.component("contador", {
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    incrementar() {
      this.contador += 1;
    },
  },
  template: `
    <div>
      <p>Você clicou {{ contador }} vezes</p>
      <button @click="incrementar">Clique aqui</button>
    </div>
  `,
});
```

### Node.js (Back-end JavaScript)

```javascript
// Servidor HTTP básico
const http = require("http");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Olá, mundo!");
});

servidor.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

// Express.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Olá do Express!");
});

app.listen(3000, () => {
  console.log("Servidor Express rodando na porta 3000");
});
```

## 8. Ferramentas de Desenvolvimento

### Bundlers (Webpack, Vite)

```javascript
// webpack.config.js básico
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
```

### Gerenciadores de Pacotes (npm, yarn)

```bash
# Iniciar um novo projeto
npm init

# Instalar pacotes
npm install react react-dom

# Dependências de desenvolvimento
npm install --save-dev webpack webpack-cli

# Scripts no package.json
{
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development"
  }
}
```

## 9. Testes

### Jest

```javascript
// função a ser testada
function somar(a, b) {
  return a + b;
}

// teste
test("soma 1 + 2 para resultar em 3", () => {
  expect(somar(1, 2)).toBe(3);
});

// teste com mock
test("chama callback após concluir", () => {
  const mockCallback = jest.fn();

  function processarDados(callback) {
    // faz algo
    callback();
  }

  processarDados(mockCallback);
  expect(mockCallback).toHaveBeenCalled();
});
```

## 10. Boas Práticas e Padrões

### Clean Code

```javascript
// Ruim
function prc(d) {
  let r = 0;
  for (let i = 0; i < d.length; i++) {
    r += d[i].p;
  }
  return r;
}

// Bom
function calcularPrecoTotal(produtos) {
  return produtos.reduce((total, produto) => total + produto.preco, 0);
}
```

### Design Patterns

```javascript
// Singleton
class ConfiguracaoApp {
  constructor() {
    if (ConfiguracaoApp.instancia) {
      return ConfiguracaoApp.instancia;
    }

    this.configuracao = {
      tema: "claro",
      notificacoes: true,
    };

    ConfiguracaoApp.instancia = this;
  }

  getConfig() {
    return this.configuracao;
  }
}

const config1 = new ConfiguracaoApp();
const config2 = new ConfiguracaoApp();
console.log(config1 === config2); // true
```

## Roteiro de Estudos Sugerido

1. **Semana 1-2**: Fundamentos do JavaScript

   - Variáveis, tipos de dados e operadores
   - Estruturas de controle (if, switch, loops)
   - Funções básicas

2. **Semana 3-4**: Manipulação de Dados

   - Arrays e seus métodos
   - Objetos e JSON
   - Funções avançadas e closures

3. **Semana 5-6**: JavaScript Moderno (ES6+)

   - let e const
   - Arrow functions
   - Template literals
   - Desestruturação
   - Spread/Rest operator
   - Classes
   - Módulos

4. **Semana 7-8**: DOM e Eventos

   - Seleção e manipulação de elementos
   - Eventos e listeners
   - Manipulação de formulários
   - Projeto prático: Todo List

5. **Semana 9-10**: Assincronicidade

   - Callbacks
   - Promises
   - Async/Await
   - Fetch API
   - Projeto prático: API de clima

6. **Semana 11-14**: Frameworks/Bibliotecas

   - Escolha entre React, Vue ou Angular
   - Componentes
   - Gerenciamento de estado
   - Roteamento
   - Projeto prático: Aplicação SPA

7. **Semana 15-16**: Desenvolvimento Full Stack

   - Node.js básico
   - Express.js
   - Banco de dados (MongoDB ou SQL)
   - Autenticação
   - Projeto prático: API REST

8. **Semana 17-18**: Ferramentas e Práticas Profissionais
   - Git e GitHub
   - Webpack/Vite
   - Testes (Jest)
   - Clean code
   - Design patterns
   - Projeto final: Aplicação full stack completa

### Dicas Adicionais

1. **Pratique Diariamente**: Codifique pelo menos 1 hora por dia
2. **Projetos Reais**: Construa projetos pessoais para aplicar o conhecimento
3. **Leia Código**: Estude códigos de projetos open source para aprender boas práticas
4. **Comunidade**: Participe de comunidades como Stack Overflow, GitHub e fóruns
5. **Documentação**: Consulte a documentação oficial do JavaScript (MDN Web Docs)

---

_Este guia foi elaborado para ajudar desenvolvedores a dominar o JavaScript de forma estruturada e progressiva. Adapte conforme suas necessidades e ritmo de aprendizado._
