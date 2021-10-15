//Basico
function pulaLinha() {
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

//Função IMC
function calculaImc(altura, peso) {
  return peso / (altura * altura) //volta o resultado calculado
}
var nome = prompt('Informe seu nome ')
var alturaInformada = Number(
  prompt(nome + ',Informe a sua altura').replace(',', '.')
)
var pesoInformado = Number(
  prompt(nome + ' ,Informe seu peso').replace(',', '.')
)

var imcTTL = calculaImc(alturaInformada, pesoInformado)
document.write(nome + ' , seu IMC total é ' + Math.round(imcTTL))

//mostra("IMC ULS:" + Math.round(imcUls));
//mostra("IMC PRL:" + Math.round(imcPrl));
