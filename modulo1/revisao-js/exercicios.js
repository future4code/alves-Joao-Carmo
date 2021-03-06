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
    let arrayPar = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayPar.push(array[i])
        }
    }
    return arrayPar
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPar = []
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
    let arrayPares = [0]
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
    let valorMin = 999999
    let valorMin2 = 999999
    let valorMax = 0
    let valorMax2 = 0
    let novoArray = []
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
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novoObjeto = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((item, index, array) => {
        return (item.altura > 1.5) && (item.idade > 14) && (item.idade < 60)
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((item, index, array) => {
        return (item.altura <= 1.5) || (item.idade <= 14) || (item.idade >= 60)
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++) {
        let atualTotalCompras = 0
        for (let x = 0; x < contas[i].compras.length; x++) {
            atualTotalCompras += contas[i].compras[x]
        }
        contas[i].saldoTotal -= atualTotalCompras
        contas[i].compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort((a, b) => {
        let nome1 = a.nome.toLowerCase()
        let nome2 = b.nome.toLowerCase()

        if (nome1 < nome2) {
            return -1;
        }
        if (nome1 > nome2) {
            return 1;
        }
        return 0;
    });
    return consultas

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort((a, b) => {
        let data1 = new Date(a.dataDaConsulta.slice(6, 10), a.dataDaConsulta.slice(3, 5), a.dataDaConsulta.slice(0, 2))
        let data2 = new Date(b.dataDaConsulta.slice(6, 10), b.dataDaConsulta.slice(3, 5), b.dataDaConsulta.slice(0, 2))

        return data1 - data2
    });

    return consultas
}