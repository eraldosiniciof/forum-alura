function listarPessoasNaTela() {
  var listaPessoas = documet.querySelector('#listaPessoas')
  listaPessoas.innerHTML
}

document.querySelector('#listaPessoas').addEventListener('click', ev => {
  ev.preventDefault()

  var campoNome = document.querySelector('#nome')
  var nome = campoNome.value
  if (typeof nome == 'string') {
    listarNomesNaTela(nome)
  } else {
    alert('nome inválido')
  }
  campoNome.value = ''

  var campoCpf = document.querySelector('#cpf')
  var cpf = campoCpf.value
  if (typeof cpf == 'string') {
    listarCpfNaTela(cpf)
  } else {
    alert('cpf inválido')
  }
  campoCpf.value = ''

  var campoComida = document.querySelector('#comida')
  var comida = campoComida.value
  if (typeof comida == 'string') {
    listarComidaNaTela(comida)
  } else {
    alert('comida inválido')
  }
  campoComida.value = ''

  listarPessoasNaTela = listarNomesNaTela + listarCpfNaTela + listarComidaNaTela
})
