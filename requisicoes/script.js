
//usndo o feh com o then para requisições para a api
let dados = fetch("http://localhost:3000/products").then((respnse) => {
    respnse.json().then((data) => {
        //console.log(data);
    })
})

//fazendo requisição com async await 
async function fetchProduct() {
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()
    console.log(data);
}

async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`)
    const data = await response.json()
    console.log(data);
}


const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const from = document.getElementsByTagName("form")

addEventListener("submit", async (e) => {
    e.preventDefault()
    await fetch("http://localhost:3000/products/", {
        method: "POST",
        headers: {
            "Cuontent-Type": "application/json "
        },
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value
        })
    })

})

fetchProduct()
fetchProductById(1)
