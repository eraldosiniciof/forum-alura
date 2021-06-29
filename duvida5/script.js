function sorteia(n) {
  return Math.round(Math.random() * n)
}

function adivinhar() {
  let numeroPensado = sorteia(1000)
  let chute = document.getElementById('chute')
  let res = document.getElementById('res')
  if (chute == numeroPensado) {
    res.innerHTML = `Você acertou!`
  } else if (chute.value.length == 0) {
    res.innerHTML = `Insira um número para "Chute"!!`
  } else if (chute.value < 0 || chute.value > 1000) {
    res.innerHTML = `Insira um número inteiro válido para "Chute" que esteja entre 0 e 1000!!`
  } else {
    res.innerHTML = `OPS! Você errou!<br>O número pensado pelo computador foi ${numeroPensado}!!`
  }
}

function tentarnovamente() {
  let res = document.getElementById('res')
  let chute = document.getElementById('chute')
  res.innerHTML = []
  chute.value = ``
  chute.focus()
}
