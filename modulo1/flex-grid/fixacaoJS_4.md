```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  const novoArray = arrayDeNumeros.filter((item, index, array) => {
    return item == numeroEscolhido
  })
  
  if (novoArray.length > 0) {
    return `O número ${numeroEscolhido} aparece ${novoArray.length}x`
  } else {
    return "Número não encontrado"
  }
```