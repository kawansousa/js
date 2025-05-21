/* importação separda das funções
import { sum, multply } from "./calc.js"

//usando as funçãoes separadas
console.log(sum(4, 5));
console.log(multply(4, 5));
*/

//importado todas de uam vez só 
import * as calc from "./calc.js"
import sub, { div } from "./calc2.js";
import batata from "./calc2.js"; // é a mesma função sub, mas como a sub é defalt eu posso alterar o nome
import { sum as s } from "./calc.js" //renomeando a importação
import { Calc } from "./class.js" // as funções estão dento da classe Calc

//quando eu tenha a exportação default não preciso abrir chaves
// import sub from "./calc2.js";
// importando a padrão e algua outra função
//import sub, { div } from "./calc2.js";

console.log(calc.sum(4, 5));
console.log(calc.multply(4, 5));
console.log(sub(4, 5));
console.log(batata(4, 5));
console.log(div(4, 5));
console.log(calc.restoDivisao(4, 5));
console.log(s(4, 5));
//instanciando a classe Calc
const calculo = new Calc()
//usando as funções de dento da classe Calc
console.log(calculo.soma(10, 20));

