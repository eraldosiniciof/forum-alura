var buscarPaciente = document.querySelector("#buscar-paciente");

function adicionarPacientes(paciente) {
  const tabela = document.querySelector("#tabela-corpo");
  const trElement = document.createElement("tr");
  trElement.classList.add("paciente");

  const nome = document.createElement("td");
  nome.innerHTML = paciente.nome;
  nome.classList.add("nome");
  trElement.appendChild(nome);

  const altura = document.createElement("td");
  altura.innerHTML = paciente.altura;
  altura.classList.add("altura");
  trElement.appendChild(altura);

  const peso = document.createElement("td");
  peso.innerHTML = paciente.peso;
  peso.classList.add("peso");
  trElement.appendChild(peso);

  const imc = document.createElement("td");
  imc.innerHTML = paciente.imc;
  imc.classList.add("info_imc");
  trElement.appendChild(imc);

  tabela.appendChild(trElement);
}

buscarPaciente.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      var pacientes = JSON.parse(xhr.responseText);

      erroAjax.classList.add("invisivel");

      pacientes.forEach((paciente) => adicionarPacientes(paciente));
    } else {
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});
