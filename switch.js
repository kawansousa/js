// Breack encerra o bloco de código

let option = 3;

// tem q ser verdadeiro
switch (option) {
  case 1: //verifica a  variavel
    console.log("Cadastrar");
    break; //para o código
  case 2:
    console.log("Cadastrar");
    break;
  case 3:
    console.log("Remover");
    break;
  default:
    console.log("Opção invalida");
    break;
}

//break encerra quaalquer coisa
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
// continue serve para quando vc quero pular a iteração e ir pra próxima
for (let i = 0; i < 7; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
