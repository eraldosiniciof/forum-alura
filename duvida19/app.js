const custoPorKm = [];

function calcular() {
  let select = document.getElementById("combustiveis");
  let option = select.options[select.selectedIndex].text;
  let quantLitros = parseInt(document.getElementById("qtdLitros").value);
  let valorTotal = parseInt(document.getElementById("valorTotal").value);
  let valorUnit = (valorTotal / quantLitros).toFixed(2);
  let kmInicial = parseInt(document.getElementById("kmInicial").value);
  let kmFinal = parseInt(document.getElementById("kmFinal").value);
  let kmRodados = kmFinal - kmInicial;
  let mediaKm = kmRodados / quantLitros;
  let custoKm = (kmRodados / valorTotal).toFixed(2);

  let table = document.createElement("table");
  let tbody = document.createElement("tbody");

  table.appendChild(tbody);

  let linha2 = document.createElement("tr");
  let combustivel = document.createElement("td");
  combustivel.innerHTML = option;
  let inicialKm = document.createElement("td");
  inicialKm.innerHTML = kmInicial;
  let finalKm = document.createElement("td");
  finalKm.innerHTML = kmFinal;
  let litrosQtd = document.createElement("td");
  litrosQtd.innerHTML = quantLitros;
  let untValor = document.createElement("td");
  untValor.innerHTML = valorUnit;
  let totalValor = document.createElement("td");
  totalValor.innerHTML = valorTotal;
  let kmTotal = document.createElement("td");
  kmTotal.innerHTML = kmRodados;
  let kmMedia = document.createElement("td");
  kmMedia.innerHTML = mediaKm;
  let kmCusto = document.createElement("td");
  kmCusto.innerHTML = custoKm;

  linha2.appendChild(combustivel);
  linha2.appendChild(inicialKm);
  linha2.appendChild(finalKm);
  linha2.appendChild(litrosQtd);
  linha2.appendChild(untValor);
  linha2.appendChild(totalValor);
  linha2.appendChild(kmTotal);
  linha2.appendChild(kmMedia);
  linha2.appendChild(kmCusto);
  tbody.appendChild(linha2);

  document.getElementById("tabela").appendChild(tbody);
  // logo abaixo do document.getElementById("tabela").appendChild(tbody), dentro da função calcular
  custoPorKm.push(Number(custoKm));
}

document.querySelector("#btnMedia").addEventListener("click", (ev) => {
  const divMedia = document.querySelector("#mediaCustoPorKm");
  const total = custoPorKm.reduce((atual, acumulado) => atual + acumulado, 0);
  const resultado = total / custoPorKm.length;

  return (divMedia.innerHTML = resultado).toFixed(2).replace(".", ",");
});
