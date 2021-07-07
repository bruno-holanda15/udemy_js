function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * ( 1 - this.desc) * ( 1 + imposto)}`
}

//Criando um objeto passando a função dentro do mesmo
const produto = {
    nome: 'Carro',
    preco: 16000,
    desc: 0.15,
    getPreco
}

//Setando atributs globais para ser reconhecidos no this dentro da função
global.preco = 1000
global.desc = 0.15

console.log(getPreco()) 
console.log(produto.getPreco())


const computador = { preco: 1500, desc: 0.25}
// diferentes maneiras de chamar uma função
console.log(getPreco.call(computador, 0.3, '&&')) 
console.log(getPreco.apply(global, [0.4, "$"]))






