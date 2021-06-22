let comparaComThis = function (param) {
    console.log(this === param)    
}

comparaComThis(global)

// this dentro da arrow se comporta diferente
// this da função arrow é o this associado ao contexto em q ela foi escrita
// mesmo se utilizar o bind para tentar alterar isso
let comparaComArrow = param => {
    console.log(this === param)
}

comparaComArrow(global)
comparaComArrow(module.exports)


