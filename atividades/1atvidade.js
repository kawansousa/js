/* crie um agoritimo que transforme as notas do sistema numérico para o sistema de notas tipo A B C D E F 
    - de 90 pra cima- A
    - entre 80 - 89 - B
    - entre 70 - 79 - c
    - entre 60 - 69 - d
    - menor que 60 - f
*/

function notaParaConceito(nota) {
    if (nota >= 90) {
        return 'A';
    } else if (nota >= 80 && nota < 89) {
        return 'B';
    } else if (nota >= 70 && nota < 79) {
        return 'C';
    } else if (nota >= 60 && nota < 69) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(notaParaConceito(20)); // A


