const valor = "Global"

//função carrega o contexto no qual ela foi declarada, por isso o valor é exibido o Global
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "Local"
    minhaFuncao(valor)
}

exec()


