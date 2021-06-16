// caso o mesmo não passe os parâmetros, 
// adota como default os passados na descrição da função
function soma1(a = 1, b = 1, c = 1) {
return a + b + c
}


console.log(soma1(), soma1(2,1), soma1(3,2,4))


// outras maneiras de setar 
function soma2(a , b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    
    return a + b + c
}

console.log(soma2(), soma2(2,1), soma2(3,2,4))
