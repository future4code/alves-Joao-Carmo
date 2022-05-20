/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

function blackjack() {
   console.log("Boas vindas ao jogo de Blackjack!")
   if (window.confirm("Quer iniciar uma nova rodada ?")) {
      let maoCartasUsuario = [comprarCarta(), comprarCarta()]
      const valorUsuario = maoCartasUsuario.map((item, index, array) => {
         return item.valor
      })
      const textoUsuario = maoCartasUsuario.map((item, index, array) => {
         return item.texto
      })
      let pontuacaoUsuario = valorUsuario[0] + valorUsuario[1]

      let maoCartasComputador = [comprarCarta(), comprarCarta()]
      const valorComputador = maoCartasComputador.map((item, index, array) => {
         return item.valor
      })
      const textoComputador = maoCartasComputador.map((item, index, array) => {
         return item.texto
      })
      let pontuacaoComputador = valorComputador[0] + valorComputador[1]

      console.log(`Usuário - cartas: ${textoUsuario[0]} ${textoUsuario[1]}  - pontuação ${pontuacaoUsuario}`)
      console.log(`Computador - cartas: ${textoComputador[0]} ${textoComputador[1]}  - pontuação ${pontuacaoComputador}`)

      if (pontuacaoComputador > pontuacaoUsuario) {
         console.log("O computador ganhou!")
      } else if (pontuacaoComputador < pontuacaoUsuario) {
         console.log("O usuário ganhou!")
      } else {
         console.log("Empate!")
      }

   } else {
      console.log('O jogo acabou')
   }
}

blackjack()