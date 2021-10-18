function adicionarPessoa() {
  var campoNome = document.querySelector('#nome')
  var nome = campoNome.value
  if ((nome = string)) {
    listarNomesNaTela(nome)
  } else {
    alert('nome inválido')
  }
  campoNome.value = ''

  var campoCpf = document.querySelector('#cpf')
  var cpf = campoCpf.value
  if ((cpf = string)) {
    listarCpfNaTela(cpf)
  } else {
    alert('cpf inválido')
  }
  campoCpf.value = ''

  var campoComida = document.querySelector('#comida')
  var comida = campoComida.value
  if ((comida = string)) {
    listarComidaNaTela(comida)
  } else {
    alert('comida inválido')
  }
  campoComida.value = ''

  listarPessoasNaTela = listarNomesNaTela + listarCpfNaTela + listarComidaNaTela
}

function listarPessoasNaTela() {
  var listaPessoas = documet.querySelector('#listaPessoas')
  listaPessoas.innerHTML
}
