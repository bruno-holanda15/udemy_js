function operacoes(a , b) {
    const soma = a + b
    const sub = a - b
    const multi = a * b
    const div = a / b

    console.log(`
        Soma = ${soma},
        Subtração = ${sub},
        Multiplicação = ${multi},
        Divisão = ${div}
    `)
}

operacoes( 2, 5)
operacoes( 3, -1)
