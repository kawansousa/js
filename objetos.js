//Nas propiedade o mais recomendado é uisar o camelcase nameAluno, mas dentro dos objetos usar o  sneckcase primeiro_nome: "kawan",
const user = {
  name: "Kawan",
  emial: "kawan@gmail.com",
  nameAluno: {
    primeiro_nome: "kawan",
    segundo_nome: "Sousa",
  },
  mensage: () => {
    //acessando um propiedade dentro do propio objeto
    console.log(`Olá ${user.name}`);
  },
  mensage2: function () {
    //também pode ser referenciada pelo this
    // não funciona no exemplo acima, pois é uma arrow function
    console.log(`O seu é mail é ${this.emial}`);
  },
};

user.mensage();
user.mensage2();

// outra forma de  acessar um obejto
user["nameAluno"];
user["nameAluno"]["segundo_nome"];
user["mensage"]();

const user2 = {
  id: 1,
  name: "Rodrigo",

  // pode ser opcioal o endereço
  address: {
    // street: "Avenida Brasil",
    city: "São Paulo ",
    geo: {
      latitde: 47.808,
      longetude: 17.452,
    },
  },
  mensagem: function () {
    console.log(`Olá ${this.name}`);
  },
};
//encadiamento opcional ou optional chaning : se eu for acessar uma opropiedade que n existe ele não vai me retornar um erro o maior exemplo é quando essa propiedade é opciona
console.log(user2?.address?.street); // retorna o undefined e n um erro
// também podendo ser usada com metodos
user2.mensagem?.();

//oprador de consistencia nula (??) mostra o conteudo entre "" se essa variavel for Null ou undefined
let content;

console.log(content ?? "Conteudo padrão");

/* 
    Operador Unario
    typeof: Devuelve el tipo de dato de una variable.
    delete: Elimina una propiedad de un objeto.
 */

const person = {
  name: "Lucas",
  age: 23,
  city: "São Paulo",
};
console.log(person); // object
console.log(typeof person.age); // verifica o tipo de dado da propriedade age do objeto person
console.log(delete person.name); // delete a propriedade name do objeto person
console.log(person); // object


//