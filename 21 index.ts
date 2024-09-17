function gerarNumeroR(
  valorMin: number,
  valorMax: number,
  quantidadeDeN: number
): number[] {
  if ((quantidadeDeN as number) <= 0) {
    throw new Error("O tamanho do array deve ser um número positivo.");
  }
  if ((valorMin as number) > (valorMax as number)) {
    throw new Error("O valor mínimo não pode ser maior que o valor máximo.");
  }

  let i: number = 1;
  const listadenumeros: number[] = [];

  while (i <= quantidadeDeN) {
    const numeroAleatorio: number =
      Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
    listadenumeros.push(numeroAleatorio);
    i++;
  }
  return listadenumeros;
}

console.log(gerarNumeroR(90, 100, 2));
