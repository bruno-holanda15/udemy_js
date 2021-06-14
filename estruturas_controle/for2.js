const notas = [ 2.5, 9.4, 4.5, 8, 7.7]

//acessa o indice do array 
for(let i in notas) {
    console.log(i , notas[i])
}

const pessoa = {
    nome: "Brunin",
    sobrenome: "Holland",
    idade: 23,
    peso:81
}

//percorre o objeto dessa maneira
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

