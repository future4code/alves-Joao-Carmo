// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let x = Number(prompt("Digite um lado do retângulo"))
  let y = Number(prompt("Digite o outro lado do retângulo"))
  let area = x * y
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Em que ano estamos ?"))
  let anoNasc = Number(prompt("Em que ano você nasceu ?"))
  let idade = anoAtual - anoNasc
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual é o seu nome ?")
  let idade = prompt("Qual é a sua idade ?")
  let email = prompt("Qual é o seu email ?")
  
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Cite uma cor favorita")
  let cor2 = prompt("Cite outra cor favorita")
  let cor3 = prompt("Cite outra cor favorita")
  console.log(array = [cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}  

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let x = array.length
  return array[x-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let x = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = x
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() == string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual1 = Number(prompt("Em que ano estamos ?"))
  let anoNasc1 = Number(prompt("Em que ano você nasceu ?"))
  let anoCart = Number(prompt("Em que ano sua carteira foi emitida ?"))
  let x = anoAtual1 - anoNasc1 <= 20 && anoAtual1 - anoCart >= 5
  let y = 20 < anoAtual1 - anoNasc1 && anoAtual1 - anoNasc1 <= 50 && anoAtual1 - anoCart >= 10
  let z = anoAtual1 - anoNasc1 > 50 && anoAtual1 - anoCart > 15
  console.log(y || x || z)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let x = ano % 400 == 0
  let y = ano % 4 == 0 && (ano % 100 == 0 && ano % 400 == 0) 
  let z = ano % 4 == 0 && (ano % 100 != 0 && ano % 400 == 0)
  let w = ano % 4 == 0 && (ano % 100 != 0 && ano % 400 != 0)

  return (x || y || z || w)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  x = prompt("Você tem mais de 18 anos")
  y = prompt("Você possui ensino médio completo?")
  z = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  w = (x === "sim") && (y === "sim") && (z === "sim")

  console.log(w)
}