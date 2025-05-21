/*
Crie um função que receba uma string em celsius ou fahrenheit, e faça a conversão de uma unidade para outra.
    C = (F - 32) * 5/9
    F = C * 9/5 + 32
 */

/* function converterTemperatura(temperatura) {
    if (temperatura.includes("C")) {
        let fahrenheit = parseFloat(temperatura.replace("C", ""));
        fahrenheit = (fahrenheit - 32) * 5 / 9;
        return `a temperatuda ${temperatura} equiva a ${fahrenheit.toFixed(2)}F`;
    } else {
        let celsius = parseFloat(temperatura.replace("F", ""));
        celsius = (celsius * 9) / 5 + 32;
        return `a temperatuda ${temperatura} equiva a ${celsius.toFixed(2)}F`;
    }

}

console.log(converterTemperatura("10F")); // 50F */



function converterTemperatura(temperatura) {
    const celsiusExiste = temperatura.toUpperCase().includes("C");
    const fahrenheitExiste = temperatura.toUpperCase().includes("F");

    if (!celsiusExiste && !fahrenheitExiste) {
        throw new Error("Escala de temperatura não reconhecida.");
    }

    if (celsiusExiste) {
        let celsius = Number(temperatura.replace("C", ""));
        let fahrenheit = (celsius * 9) / 5 + 32;
        return `A temperatura ${celsius}C equivale a ${fahrenheit.toFixed(2)}F`;
    } else if (fahrenheitExiste) {
        let fahrenheit = Number(temperatura.replace("F", ""));
        let celsius = (fahrenheit - 32) * 5 / 9;
        return `A temperatura ${fahrenheit}F equivale a ${celsius.toFixed(2)}C`;
    }
}

try {
    console.log(converterTemperatura("10C"));
} catch (error) {
    console.log(error.message);
    console.log(error);
}