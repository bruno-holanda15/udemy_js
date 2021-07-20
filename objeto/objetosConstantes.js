// pessoa -> 123 -> {...}
// pessoa aponta pro endereço de memória 123, que nele tem realmente o objeto
const pessoa = { nome:'Brunin'}
// fazendo isso, você n muda a referencia, apenas o dado dentro do objeto
pessoa.nome = 'Arthurr'
// pessoa = { 'não funciona'} assim você tenta atribuir um novo endereço, e isso para constantes não permite,
// só pode atribuir valores para uma constante uma única vez

//com o freeze, você congela o objeto, não podendo atribuir, deletar o mudar valores dentro dele
Object.freeze(pessoa)

pessoa.nome = 'Elisabeth'
pessoa.idade = 12
delete pessoa.nome
console.log(pessoa)

// Cria o objeto constante
const pessoaFreezeada = Object.freeze({ nome:'Rei Brunin' })
pessoaFreezeada.nome = 'Nope'

console.log(pessoaFreezeada)
