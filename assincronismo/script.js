// a runção que retorna uma promessa de retorno
function asyncFunction() {
    //promeça 
    return new Promise((resolve, reject) => {
        // função que demora um determinaodo tempo 
        setTimeout(() => {
            const isSucess = false
            //mensagem se deu certo ou errado
            if (isSucess) {
                resolve("A função foi execultada com sucesso")
            } else {
                reject("Erro ao execultar a função")
            }
        }, 200)
    })
}
async function fetch() {
    const response = await asyncFunction()
    console.log(response);
}

// se fosse uma arrow function
const fetch2 = async () => {
    const response = await asyncFunction()
    console.log(response);
}


// se fosse uma try catch
const fetch3 = async () => {
    try {
        const response = await asyncFunction()
        console.log(response);

    } catch (error) {
        console.log(error);
    } finally {
        console.log('Fim');

    }
}

fetch()
fetch2()
fetch3()

