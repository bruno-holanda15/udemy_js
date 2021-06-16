function soma() {
    
    let soma = 0;
    for (let i in arguments) {
        soma += arguments[i];
    }

    console.log(soma) 
}

soma()
soma(2)
soma(2,4,5)
soma(10, "eita")
soma('ola', 'tudo bene?')

