document.querySelector("#btn").addEventListener("click", () => {
  const qtde = Number(document.querySelector("#qtde").value);

  alert(
    `Agora você pode usar a quantidade obtida no input para pedir os ingredientes no prompt\nVocê digitou o número ${qtde}`
  );
});
