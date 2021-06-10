function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('fim')
    }
}

function tratarErroELancar(erro) {
    //throw new Error('Erro na função')
    throw 'mensagem de erro'
}

const obj = { nome: 'Rob' }
const objeto = { name: 'john'}

imprimirNomeGritado(obj)


