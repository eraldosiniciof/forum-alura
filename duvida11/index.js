var loginCadastrado = 'Izaias'
var senhaCadastrada = 'junior123'

var primeiraChance = 1
var ultimaChance = 3

while (primeiraChance <= ultimaChance) {
  var loginInformado = prompt('Login:')
  var senhaInformada = prompt('senha:')

  if (loginCadastrado == loginInformado && senhaCadastrada == senhaInformada) {
    alert('Bem vindo ' + loginCadastrado)
    primeiraChance = ultimaChance
  } else {
    if (primeiraChance == 3) {
      alert('Numero de tentativas excedido.')
    } else {
      alert('Login ou senha icorreto.')
      primeiraChance = primeiraChance + 1
    }
  }
}
