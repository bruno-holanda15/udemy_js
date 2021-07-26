const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// Utilizando o destructuring no array retornado do forEach
Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Propriedade aparece nas listagens ( enumerable true) , porém não será alterada ( writable false)
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2010'
})

pessoa.dataNascimento = '01/02/2012'
console.log(pessoa)
console.log(Object.keys(pessoa))

//Object.assign 
const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c: 3 }
const o3 = { d: 3, a: 4 }

const obj = Object.assign(dest, o1, o2, o3)
console.log(dest)

Object.freeze(obj)
obj.e = 12

console.log(dest)


