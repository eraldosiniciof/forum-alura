var buscarPaciente = document.querySelector("#buscar-paciente");

buscarPaciente.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      var pacientes = JSON.parse(xhr.responseText);

      erroAjax.classList.add("invisivel");

      pacientes.forEach(function (paciente) {
        adicionarPacientes(paciente);
      });
    } else {
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});
