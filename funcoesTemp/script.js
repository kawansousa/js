// Função é execultada após um tempo determinado
setTimeout(() => {
    console.log("Olá mundo");

}, 200)

//essa função é exexultada a cada tempo determinado
/* setInterval(() =>{
    console.log("Olá mundo");
    
} , 200) */

let vlue = 10
//colocando o intervalo em uma variavel
const interval = setInterval(() => {
    console.log(vlue);
    vlue--

    if (vlue === 0) {
        console.log("Feliz ano novo");
        // para a loop do intervalo
        clearInterval(interval)
    }
}, 1000) 
