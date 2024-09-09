// cauculo de IMC (Índice de massa corporal)
function calcularIMC(altura: unknown, peso: unknown): string {
  const erro: string =
    "Este  cálculo não foi possivel ser realizada, verifique a altura e  o peso e tente novamente.";
  if (typeof peso !== "number" || typeof altura !== "number") {
    return erro;
  }

  return `${Math.floor(
    (peso as number) / ((altura as number) * (altura as number))
  )}`;
}

console.log(calcularIMC(1.7, 65));
