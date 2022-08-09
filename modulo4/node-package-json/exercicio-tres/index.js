// Exercício 3
var fs = require('fs')
var listaTarefas = fs.readFileSync("./storage.json")
console.log(listaTarefas)
const tarefa = process.argv[2]
var data = JSON.parse(listaTarefas)

if ( tarefa === undefined ) {
    console.log('É necessário pelo menos um parâmetro')
} else {
    data.push(tarefa)
    console.log(data)
    let novaListaTarefas = JSON.stringify(data)
    fs.promises.writeFile('./storage.json', novaListaTarefas)
    .then(() => {
        console.log('Resultado salvo')
    })
    .catch(() => {
        console.log('Algo deu errado')
    })
}