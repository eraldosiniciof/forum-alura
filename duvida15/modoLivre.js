const modoLivre = () => {
  const n = perguntarNumero("Escolha o número limite do sorteio");
  const numPensado = sorteioLivre(n);
  console.log(numPensado);

  let chute = perguntarNumero(
    `Adivinhe o número que estou pensando de 0 a ${n}`
  );
  let acertou = false;
  let tentativas = 1;

  while (!acertou) {
    acertou = chute === numPensado;
    if (acertou) {
      mostraEPula(
        `Parabéns, você acertou o número!\nVocê tentou ${tentativas} vezes.`
      );
      break;
    } else {
      if (chute > numPensado) {
        alert("Foi muito alto, tente novamente!");
        tentativas++;
      } else {
        alert("Foi muito baixo, tente novamente!");
        tentativas++;
      }
    }
    chute = perguntarNumero(`Adivinhe o número que estou pensando de 0 a ${n}`);
  }
};
