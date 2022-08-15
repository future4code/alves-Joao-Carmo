function converteNumero ( num: number ) {
    const algarismos = [
        {letra: 'M', valor: 1000},
        {letra: 'CM', valor: 900},
        {letra: 'D', valor: 500},
        {letra: 'CD', valor: 400},
        {letra: 'C', valor: 100},
        {letra: 'XC', valor: 90},
        {letra: 'L', valor: 50},
        {letra: 'XL', valor: 40},
        {letra: 'X', valor: 10},
        {letra: 'IX', valor: 9},
        {letra: 'V', valor: 5},
        {letra: 'IV', valor: 4},
        {letra: 'I', valor: 1}]
    let romano = ''
    for (let i = 0; i < algarismos.length; i++) {
        if ( num - algarismos[i].valor >= 0) {
            romano += algarismos[i].letra
            num -= algarismos[i].valor
        }
    }
      return romano
}

console.log(converteNumero(1500))