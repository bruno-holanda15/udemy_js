// usando a notação literal
const obj1 = { atributo: 'objeto1' }
console.log(obj1)

// Object em JS 
console.log( typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras 
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Corsa', 10000, 0.2)
const p2 = new Produto('Canete', 7, 0.1)
console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())

// Função Factory
function criarFuncionario( nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return ( salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Brunin', 10000, 0)
const f2 = criarFuncionario('Renati', 30000, 12)
console.log(f1.getSalario(), f2.getSalario())

// Uma função com JSON

const fromJson = JSON.parse('{"info":"Texto topop"}')
console.log(fromJson.info)





