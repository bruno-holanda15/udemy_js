function analiseJogos(jogos) {
    const arrayJogos = jogos.split(" ")
    
    let maximaPontuacao = "";
    for (let i = 0; i <= arrayJogos.length; i++) {
        if(i == 0) {
            maximaPontuacao = arrayJogos[i]
        } else {
            arrayJogos[i] > maximaPontuacao ?  maximaPontuacao  = arrayJogos[i] : ''
        }
    }

    return maximaPontuacao
}

console.log(analiseJogos("12 141 -5 0 23 142"))


