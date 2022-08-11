enum Descontos {
    VERAO = 5,
    INVERNO = 10,
    BANHO = 4,
    INTIMAS = 7
}

type produto = {
    nome: string,
    preco: number,
    classificao: string,
}

const produtos: produto[] = [
    {
        nome: 'Casaco',
        preco: 100,
        classificao: 'INVERNO',
    },
    {
        nome: 'Biquini',
        preco: 40,
        classificao: 'Banho',
    },
    {
        nome: 'Camiseta',
        preco: 20,
        classificao: 'VERAO',
    },
    {
        nome: 'Cueca',
        preco: 20,
        classificao: 'INTIMA',
    }
]

function defineDesconto(produtos: produto[]) {
    const newArr = produtos.map((item) => {
        if (item.classificao === 'INVERNO') {
            return { ...item, precoComDesconto: (item.preco * 0.9) }
        } else if (item.classificao === 'VERAO') {
            return { ...item, precoComDesconto: (item.preco * 0.95) }
        } else if (item.classificao === 'INTIMA') {
            return { ...item, precoComDesconto: (item.preco * 0.93) }
        } else if (item.classificao === 'BANHO') {
            return { ...item, precoComDesconto: (item.preco * 0.96) }
        }
    })
    console.log(newArr)
}

defineDesconto(produtos)