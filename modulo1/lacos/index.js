/* Exercícios de interpretação de código
1.  O código utiliza de um laço para somar duas variáveis, o índice i e o "valor".
A cada loop soma-se 1 ao índice, e ele então é somado a variável "valor".
Ex: 0 + 0 -> 0 + 1 -> 1 + 2 -> 3 + 3 -> 6 + 4 -> fim do loop.
No console será impresso 10.

2. a. Serão impressos no console os números presentes na lista maiores que 18:
19, 21, 23, 25, 27 e 30

b. Basta adicionar lista.indexOf(numero).

3. Quatro linhas com o numero de asteriscos igual à "posição" das linhas.
*
**
***
****

*/

// Exercícios de escrita de código
// 1.

let pets = Number(prompt("Quantos bichinhos de estimação vc tem ?"))
let i = 0
let listaNome = []

if (pets > 0) {
    while (i < pets) {
        let nome = prompt("Digite o nome de um deles")
        listaNome.push(nome)
        i++
    }
    console.log(listaNome)
} else {
    console.log("Que pena! Você pode adotar um pet!")
}

// 2.

let arrayOriginal = [80, 2, 14, 17, 37, 88, 1, 54, 57, 9, 64]

// a.

function printArrayNumber() {
    for (const numero of arrayOriginal) {
        console.log(numero)
    }

}

printArrayNumber()

// b. 

function printArrayNumber10() {
    for (const numero of arrayOriginal) {
        console.log(numero / 10)
    }

}

printArrayNumber10()

// c.

function printArrayNumberEven() {
    let arrayEven = []
    for (i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] % 2 == 0) {
            arrayEven.push(arrayOriginal[i])
        }
    }
    console.log(arrayEven)
}

printArrayNumberEven()

// d. 

function printArrayString() {
    let arrayString = []
    for (i = 0; i < arrayOriginal.length; i++) {
        arrayString.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}.`)
    }
    console.log(arrayString)
}

printArrayString()

// e.

let valorMax = 0
let valorMin = 100

function printMinMaxNumber() {
    for (i = 0; i < arrayOriginal.length; i++) {
        if (arrayOriginal[i] < valorMin) {
            valorMin = arrayOriginal[i]
        }

        if (arrayOriginal[i] > valorMax) {
            valorMax = arrayOriginal[i]
        }


    }
    console.log(`O maior número é ${valorMax} e o menor é ${valorMin}`)
}

printMinMaxNumber()

// Desafios
// 1.

let tentativas = 0

function jogo() {
    const primeiroNumero = Number(prompt("Escolha um número"))
    console.log("Vamos jogar!")
    let segundoNumero = 0

    while (segundoNumero != primeiroNumero) {
        segundoNumero = Number(prompt("Chute um número para acertar"))
        if (segundoNumero > primeiroNumero) {
            console.log("Errou. O número escolhido é maior.")
        } else if (segundoNumero < primeiroNumero) {
            console.log("Errou. O número escolhido é menor.")
        }
        tentativas++
    }
    console.log("Acertou")
    console.log(`O número de tentativas foi: ${tentativas}`)
}

jogo()

// 2. 

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let tentativas1 = 0

function jogo2() {
    const primeiroNumero = getRandomIntInclusive(1, 100)
    console.log("Vamos jogar!")
    let segundoNumero = 0

    while (segundoNumero != primeiroNumero) {
        segundoNumero = Number(prompt("Chute um número para acertar!"))
        if (segundoNumero > primeiroNumero) {
            console.log("Errou. O número escolhido é maior.")
        } else if (segundoNumero < primeiroNumero) {
            console.log("Errou. O número escolhido é menor.")
        }
        tentativas1++
    }
    console.log("Acertou")
    console.log(`O número de tentativas foi: ${tentativas1}`)
}

jogo2()

// Como eu ja tinha conhecimento da função que gera números aleatorios, a alteração foi bem fácil.
// Só foi necessário trocar o prompt que estava atrelado ao primeiro número pela função que gera um numero inteiro aleatorio de 1 a 100.