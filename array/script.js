// o método map retorna um novo array com os valores
const products = [
    { name: "Produto 1", price: 10 },
    { name: "Produto 2", price: 20 },
    { name: "Produto 3", price: 30 },
    { name: "Produto 4", price: 40 },
    { name: "Produto 5", price: 50 },
]

//execulta essa função para cada item do array
//retorna um novo array com os valores
console.log(products.map((product) => {
    console.log(product);
}));


// o método map retorna um novo array com os valores
//     { nome: "Maria", idade: 25 },
//Ele pega o array e transforma em um novo array e atribui novos pametros
const newProducts = products.map((product) => {
    return {
        id: Math.random().toFixed(1) * 10,
        name: product.name,
        price: product.price * 2,
    }
})

console.log(newProducts);


// o método filter retorna um novo array com os valores
//execulta essa função para cada item do array
//retorna um novo array com os valores
const filteredProducts = products.filter((product) => {
    return product.price > 20;
});
console.log(filteredProducts);

// o método findIndex retorna o índice do primeiro elemento que satisfaz a condição
//quando não encontra o elemento, retorna -1
const findProduct = products.findIndex((product) => {
    return product.name === "Produto 3";
});
console.log(findProduct);
console.log(products[findProduct]);

// o método find retorna o primeiro elemento que satisfaz a condição      
// se não encontrar o elemento, retorna undefined  
const findProduct2 = products.find((product) => {
    return product.name === "Produto 3";
});
console.log(findProduct2);

// o método every retorna true se todos os elementos satisfazem a condição
// se não encontrar o elemento, retorna false
const everyProduct = products.every((product) => {
    return product.price > 20;
});
console.log(everyProduct);

// o método some retorna true se pelo menos um elemento satisfaz a condição 
// se não encontrar o elemento, retorna false
const someProduct = products.some((product) => {
    return product.price > 20;
});
console.log(someProduct);

// o método includes retorna true se o elemento existe no array
// o método reduce retorna um único valor
const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
}, 0);
console.log(totalPrice);


// o método forEach executa uma função para cada elemento do array
// o método forEach não retorna nada    
products.forEach((product) => {
    console.log(product);
});
// o método forEach executa uma função para cada elemento do array
// o método forEach não retorna nada
products.forEach((product) => {
    console.log(product.name);
});

// o método forEach executa uma função para cada elemento do array
// o método forEach não retorna nada    
products.forEach((product, index) => {
    console.log(product);
    console.log(index);
    console.log(product.price);
});