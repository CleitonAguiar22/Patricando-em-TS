/* crie um programa que exibe um valor de uma tarifa dependendo do tipo de usuario 

- menor de 6 anos : gratis, tarifa zero
- estudante 50% desconto
- idoso 30% de desconto
- regular tarifa normal

*/

function valorTarif(tarifa: unknown, tipoUsuario: unknown): string {
  const erro: string =
    "Não foi possivel ver sua tarifa, verifique se a tarifa ou o Tipo do usúario está correta";

  if (typeof tarifa !== "number" || typeof tipoUsuario !== "string") {
    return erro;
  }

  if (tipoUsuario == "Menor de 6 anos") {
    return `A sua tarifa é 0.`;
  }

  if (tipoUsuario == "Estudante") {
    return `A sua tarifa é ${(tarifa as number) / 2}`;
  }

  if (tipoUsuario == "Idoso") {
    return `A sua tarifa é ${(tarifa as number) - (tarifa as number) * 0.3}`;
  } else {
    return `A sua tarifa é ${tarifa as number} `;
  }
}
console.log(valorTarif(4.3, "Idoso"));
