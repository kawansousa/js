/* crie um objeto que possuirá propiedades, ambas do tipo array:

   - receitas = []
   - despesas = []
agora, crie uma função quie irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a fámulia está com saldo positivo ou negativo, e o valor do saldo.
*/

let familia = {
    receitas: [1000, 2000, 3000],
    despesas: [500, 600, 700]
};

function suma(array) {
    let total = 0
    for (const i of array) {
        total += i;
    }
    return total;
}

function calcularSaldo(familia) {
    let totalReceitas = suma(familia.receitas);
    let totalDespesas = suma(familia.despesas);
    let saldo = totalReceitas - totalDespesas;

    if (saldo >= 0) {
        console.log(`A família está com saldo positivo de R$ ${saldo}`);
    } else {
        console.log(`A família está com saldo negativo de R$ ${Math.abs(saldo)}`);
    }
}

calcularSaldo(familia); 