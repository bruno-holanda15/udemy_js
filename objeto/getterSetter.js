const sequencia = {
    __valor: 1, //conveção de __ para variáveis privadas, acessadas apenas internamente 
    get valor() { return this.__valor++ },
    set valor(valor) {
        if (valor > this.__valor) {
            this.__valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 800
console.log(sequencia.valor, sequencia.valor)
