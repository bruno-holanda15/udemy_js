// Função factory é aquela que retorna um objeto 

// Factory simples 
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva',
        idade: 24
    }
}

console.log(criarPessoa())

// Passando parâmetros para criação do objeto
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.15
    }
}

let produto = criarProduto('Computador', 4600)
console.log(produto)



