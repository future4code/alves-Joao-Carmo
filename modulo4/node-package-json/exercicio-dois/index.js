// Exercício 2
var fs = require('fs').promises
const operacao = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])
const erro = 'São necessários três parametros'

switch (operacao) {
    case 'soma':
        resultado = valor1 + valor2
        break;
    case 'sub':
        resultado = valor1 - valor2
        break;
    case 'mult':
        resultado = valor1 * valor2
        break;
    case 'div':
        resultado = valor1 / valor2
        break;
}

var data = {
    "valor1": valor1,
    "valor2": valor2,
    "resultado": resultado,
    "operacao": operacao,
}

if (process.argv[3] === undefined || process.argv[4] === undefined || operacao === undefined) {
    console.log("\x1b[31m", erro)
} else {
    var newData = JSON.stringify(data)
    console.log("\x1b[36m", `${resultado}`)
    fs.appendFile('./storage.json', (newData + "\n"))
    .then(() => {
        console.log('Resultado salvo')
    })
    .catch(() => {
        console.log('Algo deu errado')
    })
}