function validaPessoa(idade: number, completo: string, horas: number, curso: string): boolean {
    let valida:boolean = false
    if (curso.toLowerCase() === 'integral') {
        if (idade >= 18 && completo.toLowerCase() === 'sim' && horas >= 40) {
            return valida = true
        } else {
            return valida
        }
    }

    if (curso.toLowerCase() === 'noturno') {
        if (idade >= 18 && completo.toLowerCase() === 'sim' && horas >= 20) {
            return valida = true
        } else {
            return false
        }
    }
    return valida
}

console.log(validaPessoa(25, 'sim', 50, 'integral'))