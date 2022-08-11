function determinarIdadeHistórica(ano: number, sigla: string) {
    if ( typeof sigla !== 'string' &&  sigla !== undefined) {
        return "Valores inválidos."
    }
    if ( typeof ano !== 'number') {
        return "Valores inválidos."
    }
    
    if ( sigla === undefined ) {
        sigla = 'DC'
    }
    
    if (sigla === 'AC') {
        ano = -ano
        if (ano < -4000) {
            return "Pré-hitória"
        } else {
            return "Idade Antiga"
        }
    }

    if ( sigla === 'DC' && ano < 476 ) {
        return "Idade Antiga"
    } else if ( sigla === 'DC' && ano >= 476 && ano < 1453) {
        return "Idade Média"
    } else if ( sigla === 'DC' && ano >= 1453 && ano < 1789) {
        return "Idade Moderna"
    } else if ( sigla === 'DC' && ano >= 1789) {
        return "Idade Contemporânea"
    }

}

console.log(determinarIdadeHistórica(2000, 'DC'))