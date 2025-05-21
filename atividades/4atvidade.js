/* 
Buscndo e contando dois arrays
Baseado no array de livros por categoria abaixo, faça os seguintes desafios:
1. Contar o número de categorias e o número de livros em cada categoria
2. Contar o número de autores
3. Mostrar livros do autor Augusto Cury
4. Transformar a função acima em uma função que 
irá receber o nome do autor e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "0 homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ]
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade -Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "0s 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ]
    },
]

/* const totalCategoria = booksByCategory.length
console.log(`Total de categorias: ${totalCategoria}`)

for (let TtotalCategory of booksByCategory) {
    console.log(`Total de livros da categoria: ${TtotalCategory.category} é ${TtotalCategory.books.length}`)
}
 */

/* function countAuthorrs() {
    let authors = []
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }

        }
    }
    console.log(authors.length)
}

countAuthorrs(booksByCategory) */


/* 
function booksOfAugustoCury() {
    let boolks = []
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === 'Augusto Cury') {
                boolks.push(book.title)
            }
        }
    }
    console.log(boolks)
}

booksOfAugustoCury(booksByCategory)
 */


function booksOfAuthor(author) {
    let boolks = []
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                boolks.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author} são : ${boolks.join(', ')}`)
}

booksOfAuthor("Augusto Cury")
