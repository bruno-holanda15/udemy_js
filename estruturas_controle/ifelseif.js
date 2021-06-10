Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(8,10) ) {
        console.log('Quadro de Honra')
    } else if (nota.entre(6, 7.99) ) {
        console.log('Parabéns')
    } else if (nota.entre(4, 5.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99) ) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }

} 

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6.7)
imprimirResultado(5.6)
imprimirResultado(4)
imprimirResultado(3.98)
imprimirResultado(3)
imprimirResultado(-1)