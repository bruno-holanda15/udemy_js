const a = 1
const b = 2

//Formas de declarar objeto literal

const obj1 = { a:a, b:b }
const obj2 = { a, b }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const nota = 7.9

const obj3 = {}
obj3[nomeAttr] = nota

console.log(obj3)

const obj5 = {
    funcao1: function () {
        //..
    },
    funcao2() {
        //...
    }
}

console.log(obj5)


