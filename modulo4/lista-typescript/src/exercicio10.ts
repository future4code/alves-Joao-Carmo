function validaCpf(cpf: string) {
    let arrayCpf = cpf.replace('.', '').replace('.', '').replace('-', '').split('')
    let total1: number = 0
    let fator1: number = 10
    for (let i = 0; i < arrayCpf.length - 2; i++) {
        total1 = total1 + (Number(arrayCpf[i]) * fator1)
        fator1 -= 1
    }

    let dv1 = 11 - (total1 % 11)
    if ( dv1 >= 10) {
        dv1 = 0
    }

    let total2: number = 0
    let fator2: number = 11
    for (let i = 0; i < arrayCpf.length - 1; i++) {
        total2 = total2 + (Number(arrayCpf[i]) * fator2)
        fator2 -= 1
    }

    let dv2 = 11 - (total2 % 11)
    if ( dv2 >= 10) {
        dv2 = 0
    }

    if ( dv1 === Number(arrayCpf[9]) && dv2 === Number(arrayCpf[10]) ){
        return true
    } else {
        return false
    }

}

console.log(validaCpf("167.583.227-77"))