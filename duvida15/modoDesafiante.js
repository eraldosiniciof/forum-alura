const modoDesafiante = () => {
  alert("Você entrou no modo desafiante, escolha uma dificuldade.");
  var dificuldade = prompt(
    "Digite o número referente à dificuldade: \n1 - Fácil\n2 - Médio\n3 - Difícil"
  );

  if (dificuldade == 1) {
    let acertou = false;
    let vidas = 4;

    alert(
      "Estou pensando em um número de 0 a 10. Você tem 5 tentativas para acertá-lo!"
    );
    const numPensado = sorteioFacil();
    console.log(numPensado);
    let chute = perguntarNumero("Adivinhe o número que estou pensando");

    while (!acertou || vidas != 0) {
      acertou = chute === numPensado;
      if (vidas == 0) {
        mostraEPula("Que pena, você perdeu todas as vidas! T-T");
        break;
      }
      if (acertou == true) {
        vidas++;
        mostraEPula(
          "Parabéns, você acertou o número! Você manteve " + vidas + " vidas!"
        );
        break;
      } else {
        if (chute > numPensado) {
          alert(
            "Foi muito alto, tente novamente! " + vidas + " vidas restantes!"
          );
          vidas--;
        } else {
          alert(
            "Foi muito baixo, tente novamente! " + vidas + " vidas restantes!"
          );
          vidas--;
        }
      }
      chute = perguntarNumero();
    }
  }
  if (dificuldade == 2) {
    let acertou = false;
    let vidas = 9;

    alert(
      "Estou pensando em um número de 0 a 100. Você tem 10 tentativas para acertá-lo!"
    );
    const numPensado = sorteioMedio();
    console.log(numPensado);
    let chute = perguntarNumero("Adivinhe o número que estou pensando");

    while (!acertou || vidas != 0) {
      acertou = chute === numPensado;
      if (vidas == 0) {
        mostraEPula("Que pena, você perdeu todas as vidas! T-T");
        break;
      }
      if (acertou == true) {
        vidas++;
        mostraEPula(
          "Parabéns, você acertou o número! Você manteve " + vidas + " vidas!"
        );
        break;
      } else {
        if (chute > numPensado) {
          alert(
            "Foi muito alto, tente novamente! " + vidas + " vidas restantes!"
          );
          vidas--;
        } else {
          alert(
            "Foi muito baixo, tente novamente! " + vidas + " vidas restantes!"
          );
          vidas--;
        }
      }
      chute = perguntarNumero();
    }
  }

  if (dificuldade == 3) {
    let acertou = false;
    let vidas = 4;

    alert(
      "Estou pensando em um número de 0 a 100. Você tem 5 tentativas para acertá-lo!"
    );
    const numPensado = sorteioDificil();
    console.log(numPensado);
    let chute = perguntarNumero("Adivinhe o número que estou pensando");

    while (!acertou || vidas != 0) {
      acertou = chute === numPensado;
      if (vidas == 0) {
        mostraEPula("Que pena, você perdeu todas as vidas! T-T");
        break;
      }
      if (acertou == true) {
        vidas++;
        mostraEPula(
          "Parabéns, você acertou o número! Você manteve " + vidas + " vidas!"
        );
        break;
      } else {
        if (chute > numPensado) {
          alert(
            "Foi muito alto, tente novamente! " + vidas + " vidas restantes!"
          );
          vidas--;
        } else {
          alert(
            "Foi muito baixo, tente novamente! " + vidas + " vidas restantes!"
          );
          vidas--;
        }
      }
      chute = perguntarNumero();
    }
  }
};
