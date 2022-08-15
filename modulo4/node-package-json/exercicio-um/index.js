// Exercício 1
// a)process.argv[2]

// b) e c)
var fs = require('fs').promises
const nome = process.argv[2]
const idade = Number(process.argv[3])
const erro = 'São necessários dois parametros'
const novaIdade = idade + 7
const resultado = `Olá, ${nome}, Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`
const data = {
    "resultado": resultado
}

if (nome === undefined || process.argv[3] === undefined) {
    console.log("\x1b[31m", erro)
} else {
    console.log("\x1b[36m", resultado)
    const stringData = JSON.stringify(data)
    fs.appendFile('./storage.json', (stringData + "\n"))
    .then(() => {
        console.log('Resultado salvo')
    })
    .catch(() => {
        console.log('Algo deu errado')
    })
}



