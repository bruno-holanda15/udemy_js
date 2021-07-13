function bhaskara(a , b , c) {
    const delta = Math.pow(b,2) - ( 4 * a * c)

    if ( delta < 0) 
        return 'Delta é negativo'

    const result1 = (-b + Math.pow(delta, 0.5))/ (2 * a)
    const result2 = (-b - Math.pow(delta, 0.5))/ (2 * a)

    return [result1, result2]
}


console.log(bhaskara(3,-15,12))
console.log(bhaskara(9,-24,16))
console.log(bhaskara(1,-2,4))

