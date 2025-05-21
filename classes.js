//criando a classe que tem como objetivo de criar objeto e definin comportamentos com construtores e métodos
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

//instnaciando meu objeto
const person = new Person("kawan", "Kawan@teste.com");
console.log(person);

const person2 = new Person("João", "joao@teste.com");
console.log(person2);

//criando metodos nas casses (funções nas classes)
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sendEmail() {
    console.log(`O emamil desse usuario é ${this.email}`);
  }
}
const user = new User("kawan", "kawan@gmil.com");
user.sendEmail();

// Métodos estáticos : dessa forma preciso instanciar o objeto para que eu possa acessar o método
class Usuario {
  showMensage() {
    console.log(`Essa é uma mensagem`);
  }
}
const usuario = new Usuario();
usuario.showMensage();

//usando o static não preciso unstanciar um objeto para acessar um método
class Usuario2 {
  static showMensage() {
    console.log(`Essa é uma mensagem`);
  }
  static showMensage2(mensagem) {
    console.log(mensagem);
  }
}
Usuario2.showMensage();
Usuario2.showMensage2("essa é a outra mensagem"); // posso passar como paramentro para o método sem usar o this e nem o contrutor

//herança com classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  mekeNoise() {
    console.log("Algum som genérico do animal");
  }
}

class Dog extends Animal { } // mesmo que n tenha nada, mas herda as pripiedades e métdos da classe Animal

const dog = new Dog("Bento");
console.log(dog.name);
dog.mekeNoise(); //resposta é Algum som genérico do animal

class Cat extends Animal {
  mekeNoise() {
    console.log("Miau...Miau...Miau...Miau..."); // sobreescrevnbdo um metodo para mudar a resposta
  }
  run() {
    console.log("correr"); // posso colocar métodos espesificos dessa classe
  }
} // mesmo que n tenha nada, mas herda as pripiedades e métdos da classe Animal

const cat = new Cat("Mel");
console.log(cat.name);
cat.mekeNoise(); //resposta é Algum som genérico do animal
cat.run();

let obj = [12, 17];

//ele temta exexutar um bloco de código
try {
  if (!obj.includes(18)) {
    throw new Error("o npumero 18 n está disponivel"); // o controle de erros e eu posso retornar um erro que ele para a execução do bloco
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.log("método indisponivel");
  }
  console.log(error); // mostra o erro no console e a mensagem
  console.log(error.mensagem); // mostra o erro no console, mas apenas a mensagem
}

//posso customizar uma clase de erro para usar nos projetos
class MayCustonError {
  constructor(mensage) {
    this.mensage = `Classe de erro customizada ${mensage}`;
  }
}

try {
  throw new Error("erro generico");

  throw new MayCustonError(`erro personalizado lançado`);
} catch (error) {
  if (error instanceof MayCustonError) {
    // só vai dar o erro MayCustonError se for a classe criada
    console.log(error.mensage);
  } else {
    console.log("Não foi possivel execuyar");
  }
  //se n der o erro criado ele vai cair no else
}
