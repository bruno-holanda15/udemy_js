const jurosSimples = (capital0, juros, duracao) => {
    return capital0 + (duracao - 1) * juros
}

console.log(jurosSimples(100, 10 , 5))

const jurosCompostos = (capital0, juros, duracao) => {
    return capital0 * Math.pow(juros,(duracao -1))
}

console.log(jurosCompostos(100, 10 , 5))
