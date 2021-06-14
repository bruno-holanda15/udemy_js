const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//tomar cuidado com a utilização , pois pode desviar o fluxo do código
//break para as repetições inteiro do laço
for (let x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

//continue ele pulo a repetição do ciclo
for (let y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

