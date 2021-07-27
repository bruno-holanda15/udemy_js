// Cadeia de protótipos 
Object.prototype.attr0 = 'Raiz'

const avo = {attr1: 'A'}
const pai = {__proto__: avo ,attr2: 'B', attr3:'FE'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0)

const carro ={
    velAtual: 0,
    velMax: 200,
    acelaraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340 // shadowing
}

const volvo = {
    modelo:'V4009',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)


volvo.acelaraMais(120)
console.log(volvo.status())

ferrari.acelaraMais(222)
console.log(ferrari.status())

