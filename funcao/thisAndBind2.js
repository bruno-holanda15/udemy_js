function Pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this),1200)
}

new Pessoa

//forma de 'declarar this da função para nao ter problema de escopo'
function Pessoa2() {
    this.idade = 100
    const self = this

    setInterval(function () {
        self.idade--
        console.log(self.idade)
    },1200)
}

new Pessoa2
