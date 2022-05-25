```javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let preco = 0
  if (quantidade < 12) {
    preco = 1.30
  } else {
    preco = 1
  }
  let custoTotal = (quantidade*preco)
  return custoTotal
}
```