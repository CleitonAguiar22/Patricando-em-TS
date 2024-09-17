const notas: number[] = [0, 0, 0];

const media: number = calcularMedia(notas);

function calcularMedia(notas: number[]): number {
  const soma: number = notas.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  const media: number = soma / notas.length;

  return media;
}

console.log(calcularMedia(notas));
