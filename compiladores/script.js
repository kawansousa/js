class User {
    constructor({ email }) {
        this.email = email
    }
    sendMessage() {
        console.log("mensagem enviada para o emaiil: " + this.email);

    }
}

let user = new User({ email: "kawan@gmail.com" })
user.sendMessage()