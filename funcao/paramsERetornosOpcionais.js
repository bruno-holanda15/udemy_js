function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima de 20m² : ${area}`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,32,12,22))
console.log(area(3,9))

