function resultadoDivisao(dividendo, divisor) {
    const quociente = dividendo / divisor
    const resto = dividendo % divisor
    return ` Resultado ${quociente}, resto ${resto}`
}


console.log(resultadoDivisao(4,2))
console.log(resultadoDivisao(14,3))
console.log(resultadoDivisao(14,5))
console.log(resultadoDivisao(10,3))


