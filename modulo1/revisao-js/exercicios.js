// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let novoArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i])
    }
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let x = false
    while (!x) {
        x = true
        for (let i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                x = false
                let min = array[i - 1]
                array[i - 1] = array[i]
                array[i] = min
            }
        }
    }
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    arrayPar = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayPar.push(array[i])
        }
    }
    return arrayPar
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    arrayPar = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayPar.push(array[i] ** 2)
        }
    }
    return arrayPar

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let valorMax = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > valorMax) {
            valorMax = array[i]
        }
    }
    return valorMax
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let novoObjeto = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: false,
        diferenca: 0
    }
    if (num1 >= num2) {
        novoObjeto.maiorNumero = num1
        novoObjeto.diferenca = num1 - num2
    } else {
        novoObjeto.maiorNumero = num2
        novoObjeto.diferenca = num2 - num1
    }
    if (num1 >= num2 && num1 % num2 == 0) {
        novoObjeto.maiorDivisivelPorMenor = true
    } else if (num2 >= num1 && num2 % num1 == 0) {
        novoObjeto.maiorDivisivelPorMenor = true
    } else {
        novoObjeto.maiorDivisivelPorMenor = false
    }
    return novoObjeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    arrayPares = [0]
    for (let i = 1; i < (n * 2); i++) {
        if (i % 2 == 0) {
            arrayPares.push(i)
        }
    }
    return arrayPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        return "Equilátero"
    }
    if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
        return "Escaleno"
    }
    if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
        return "Isósceles"
    }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    valorMin = 999999
    valorMin2 = 999999
    valorMax = 0
    valorMax2 = 0
    novoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] < valorMin) {
            valorMin = array[i]
        }
        if (array[i] > valorMin && array[i] < valorMin2) {
            valorMin2 = array[i]
        }
    }
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] > valorMax) {
            valorMax = array[i]
        }
        if (array[i] < valorMax && array[i] > valorMax2) {
            valorMax2 = array[i]
        }
    }
    novoArray.push(valorMax2, valorMin2)
    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}