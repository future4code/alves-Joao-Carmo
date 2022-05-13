/* Exercícios de interpretação de código
1.
a. 10
50

b. não apareceria nada

2.
a. A função recebe uma variável que armazena um input de texto do usuário,
passa tudo para letra minúscula e indica se a palavra "cenoura" está incluída na variável.
Sua possível utilidade é filtar pela palavra cenoura em qualquer input.

b. true
true
true

*/
// Exercícios de escrita de código
// 1.
// a.

function mensagem(){ 
    console.log("Eu sou João, tenho 24 anos, moro no Rio de Janeiro e sou estudante.")
}

mensagem()

// b.

function mensagem2(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

mensagem2("João", 24, "RJ", "estudante")

// 2.
// a.

function soma(x, y){
    return x + y
}

console.log(soma(5, 10)) // 15

// b.

function boolean(x, y){
    return x >= y
}

console.log(boolean(5, 10)) // false

// c.

function boolean2(x){
    return x % 2 == 0
}

console.log(boolean2(6)) // true
console.log(boolean2(5)) // false

// d.

function mensagem3(str){
    console.log(str.length, str.toUpperCase())
}

mensagem3("Eu sou João, tenho 24 anos, moro no Rio de Janeiro e sou estudante.")

// 3.
const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))

function soma1(x, y){
    return x + y
}

function subtracao(x, y){
    return x - y
}

function multiplicacao(x, y){
    return x * y
}

function divisao(x, y){
    return x / y
}

console.log(soma(num1, num2))
console.log(subtracao(num1, num2))
console.log(multiplicacao(num1, num2))
console.log(divisao(num1, num2))

// Desafios
// 1.
func1 = (z) => console.log(z)
func2 = (x, y) => x + y

func1(func2(1, 8)) // 9

// OU

func3 = (x,y) => {
    let z = x + y
    func4 = z => console.log(z)
    func4(z)
}

func3(6, 8) // 14

// 2.

pitagoras = (b,c) => {

    let a = Math.sqrt(b**2 + c**2)
    console.log(a)
}

pitagoras(3,4) // 5