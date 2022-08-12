type cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientes: cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function clientesParaEmpréstimo(array: cliente[]) {
    const debitos = array.map((item) => {
        for (let i = 0; i < item.debitos.length; i++) {
            item.saldoTotal -= item.debitos[i]
        }
        item.debitos = []
        return item
    }).filter((item) => {
        return item.saldoTotal < 0
    })
    return debitos
}

console.log(clientesParaEmpréstimo(clientes))