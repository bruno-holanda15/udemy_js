const notas = [ 7.1, 6.7, 5.4, 8.3, 9, 4.6, 4.5, 9.3]

const notasBaixas1 = []
for (let i in notas) {
    if ( notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Utilizando callback dentro do filter
const notasBaixas2 = notas.filter( nota => nota < 7)
console.log(notasBaixas2)


