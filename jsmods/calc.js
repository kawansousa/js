function sum(a, b) {
    return a + b
}

function multply(a, b) {
    return a * b
}

function rest(a, b) {
    return a % b
}
/*
posso colocar o export do lado da função ou posso exportar tudo no final
export function multply(a, b) {
    return a * b
}
    */
export {
    sum,
    multply,
    rest as restoDivisao // posso renomar o nome da exportação
}