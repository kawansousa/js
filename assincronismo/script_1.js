// a runção que retorna uma promessa de retorno
function asyncFunction() {
    //promeça 
    return new Promise((resolve, reject) => {
        // função que demora um determinaodo tempo 
        setTimeout(() => {
            const isSucess = true
            //mensagem se deu certo ou errado
            if (isSucess) {
                resolve("A função foi execultada com sucesso")
            } else {
                reject("Erro ao execultar a função")
            }
        }, 200)
    })
}
// chamdo a função e verificando os resultados
asyncFunction().then((resolve) => {
    console.log(resolve);
}).catch((error) => {
    console.log(error);
    //sempre execulta caso der certo ou errado 
}).finally(() => {
    console.log("Final do código");
})