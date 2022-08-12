enum SETOR {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type colaborador = {
    nome: string,
    salário: number,
    setor: SETOR,   
    presencial: boolean,
}

const array: colaborador[] = [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
]

function pessoasMarketing(array: colaborador[]) {
    const arrayFiltrado = array.filter((item) => {
        return item.setor === SETOR.MARKETING && item.presencial === true
    })

    return arrayFiltrado
}

console.log(pessoasMarketing(array))