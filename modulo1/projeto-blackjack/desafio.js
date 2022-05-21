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


function printMao(arrayTextoUsuario) {
   let textoFinalUsuario = ""
   for (i = 0; i < arrayTextoUsuario.length; i++) {
      textoFinalUsuario += arrayTextoUsuario[i] + " "
   }
   return textoFinalUsuario.trim()
}

function blackjack() {
   console.log()
   if (confirm("Boas vindas ao jogo de Blackjack!\nQuer iniciar uma nova rodada ?")) {
      let maoValida = false
      let maoCartasUsuario = []
      let maoCartasComputador = []
      let valorUsuario = []
      let valorComputador = []
      let textoUsuario = []
      let textoComputador = []
      let pontuacaoUsuario = 0
      let pontuacaoComputador = 0

      while (maoValida == false) {
         maoCartasUsuario = [comprarCarta(), comprarCarta()]
         valorUsuario = maoCartasUsuario.map((item, index, array) => {
            return item.valor
         })
         textoUsuario = maoCartasUsuario.map((item, index, array) => {
            return item.texto
         })
         pontuacaoUsuario = valorUsuario[0] + valorUsuario[1]

         maoCartasComputador = [comprarCarta(), comprarCarta()]
         valorComputador = maoCartasComputador.map((item, index, array) => {
            return item.valor
         })
         textoComputador = maoCartasComputador.map((item, index, array) => {
            return item.texto
         })
         pontuacaoComputador = valorComputador[0] + valorComputador[1]

         if (textoUsuario[0].includes("A") && textoUsuario[1].includes("A") || textoComputador[0].includes("A") && textoComputador[1].includes("A")) {
            maoValida = false
            alert("2 Ases! Compre outra mão.")
         } else {
            maoValida = true
         }
      }


      while (pontuacaoUsuario <= 21) {
         if (confirm(`Suas cartas são ${printMao(textoUsuario)}. A carta revelada do computador é ${textoComputador[0]}.\nDeseja comprar mais uma carta?`)) {
            const novaCartaUsuario = comprarCarta()
            textoUsuario.push(novaCartaUsuario.texto)
            pontuacaoUsuario += novaCartaUsuario.valor
         } else {
            break
         }
      }

      if (pontuacaoUsuario > 21) {
         alert(`Suas cartas são ${printMao(textoUsuario)}. Sua pontuação é ${pontuacaoUsuario}.\nAs cartas do computador são ${printMao(textoComputador)}. A pontuação do computador é ${pontuacaoComputador}.\nO computador ganhou!`)
         return
      }

      while (pontuacaoComputador < pontuacaoUsuario) {
         const novaCartaComputador = comprarCarta()
         pontuacaoComputador += novaCartaComputador.valor
         textoComputador.push(novaCartaComputador.texto)
      }

      if (pontuacaoComputador > 21) {
         alert(`Suas cartas são ${printMao(textoUsuario)}. Sua pontuação é ${pontuacaoUsuario}.\nAs cartas do computador são ${printMao(textoComputador)}. A pontuação do computador é ${pontuacaoComputador}.\nO usuario ganhou!`)
         return
      } else if (pontuacaoComputador > pontuacaoUsuario) {
         alert(`Suas cartas são ${printMao(textoUsuario)}. Sua pontuação é ${pontuacaoUsuario}.\nAs cartas do computador são ${printMao(textoComputador)}. A pontuação do computador é ${pontuacaoComputador}.\nO computador ganhou!`)
         return
      } else {
         alert(`Suas cartas são ${printMao(textoUsuario)}. Sua pontuação é ${pontuacaoUsuario}.\nAs cartas do computador são ${printMao(textoComputador)}. A pontuação do computador é ${pontuacaoComputador}.\nEmpate!`)
         return

      }
   }
}

// blackjack()
