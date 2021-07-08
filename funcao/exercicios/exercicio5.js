console.log(0.1+0.2)

const somaArredondada = (a , b) => {
    let resultadoSoma = a + b
    let resultadoArredondado = resultadoSoma.toFixed(2)
    let resultado =  resultadoArredondado.replace('.',',')
    return resultado
}

console.log(somaArredondada(0.1, 0.2))
console.log(somaArredondada(0.21156565, 0.78))
console.log(somaArredondada(100.21156565, 970.4478))

