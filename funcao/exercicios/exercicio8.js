function analiseJogos(jogos) {
    const arrayJogos = jogos.split(" ").map(element => {
        return parseInt(element)
    });

    let pontuacaoMax = 0
    let vezesRecorde = -1

    for (let i = 0; i < arrayJogos.length; i++) {
        if (arrayJogos[i] > pontuacaoMax) {
            pontuacaoMax = arrayJogos[i]
            vezesRecorde++
        } 
    }

    return [vezesRecorde ]
}

console.log(analiseJogos("12 14 5 0 23 142 550"))


