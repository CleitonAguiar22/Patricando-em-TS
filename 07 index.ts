// crie um programa que receba dois valores e compare se o primeiro é maior que o segundo.
function verificarMaior(x: unknown, y: unknown): string {
  const erro: string =
    "Não foi possivel fazer a verificação do maior, verifique os numeros e tente novamente.";
  if (typeof x !== "number" || typeof y !== "number") {
    return erro;
  } else if ((x as number) === (y as number)) {
    return `${x} é igual a ${y}`;
  } else if ((x as number) > (y as number)) {
    return `${x} é maior que ${y}`;
  } else {
    return `${x} não é maior que ${y}`;
  }
}
console.log(verificarMaior(8, 9));
