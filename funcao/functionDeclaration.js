function Carro (velocidadeMaxima = 200, delta = 5){
    //atributo privado por não usar o this
    let velocidadeAtual = 0

    //function para acesso público
    this.acelerar = function() {
        if (velocidadeAtual + delta < velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //function para acessar p atributo privado
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const corsa = new Carro

corsa.acelerar()
corsa.acelerar()
corsa.acelerar()


console.log(corsa.getVelocidadeAtual())

const mclaren = new Carro(330,50)
mclaren.acelerar()
mclaren.acelerar()
mclaren.acelerar()
mclaren.acelerar()

console.log(mclaren.getVelocidadeAtual())



