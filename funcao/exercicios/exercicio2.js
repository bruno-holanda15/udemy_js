// Utilizando arrow function
const classificarTriangulo = (lado1, lado2, lado3) => {
    if ( lado1 === lado2 && lado2 === lado3 ) {
        return 'Equilátero'
    } else if( lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        return 'Escaleno'
    }else {
        return 'Isósceles'
    }
}

console.log(classificarTriangulo(2,2,2))
console.log(classificarTriangulo(2,3,4))
console.log(classificarTriangulo(2,3,3))
