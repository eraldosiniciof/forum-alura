const nomeDoUsuario = 'Eraldo'
const anoDeNascimentoDoUsuario = 1987
const anoAtual = new Date().getFullYear()
const idadeDoUsuario = anoAtual - anoDeNascimentoDoUsuario

console.log(
  'Olá ',
  nomeDoUsuario,
  ', verifiquei que você tem ',
  idadeDoUsuario,
  ' anos'
)
