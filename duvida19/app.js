const custoPorKm = [];

function criarTabela(...params) {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  table.appendChild(tbody);

  const trElement = document.createElement("tr");

  params.forEach((item) => {
    const tdElement = document.createElement("td");
    tdElement.innerHTML = item;
    trElement.appendChild(tdElement);
    tbody.appendChild(trElement);
    document.getElementById("tabela").appendChild(tbody);
  });
}

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

  criarTabela(
    option,
    kmInicial,
    kmFinal,
    quantLitros,
    valorUnit,
    valorTotal,
    kmRodados,
    mediaKm,
    custoKm
  );

  custoPorKm.push(Number(custoKm));
}

document.querySelector("#btnMedia").addEventListener("click", (ev) => {
  const divMedia = document.querySelector("#mediaCustoPorKm");
  const total = custoPorKm.reduce((atual, acumulado) => atual + acumulado, 0);
  const resultado = total / custoPorKm.length;

  return (divMedia.innerHTML = resultado).toFixed(2).replace(".", ",");
});
