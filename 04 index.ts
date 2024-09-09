// Área ou Perimetro do retangulo
function calcularAouP(
  base: unknown,
  altura: unknown,
  calculo: unknown
): string {
  const erro: string =
    "Não foi possivel realizar o cálculo, verifique a base, altura ou o calculo pedido e tente novamente.";

  if (
    typeof base !== "number" ||
    typeof altura !== "number" ||
    typeof calculo !== "string"
  ) {
    return erro;
  }

  if ((calculo = "Área")) {
    return `${(base as number) * (altura as number)}`;
  }

  if ((calculo = "Perímetro")) {
    return `${2 * ((base as number) + (altura as number))}`;
  }
  return erro;
}
console.log(calcularAouP(10, 10, "Área"));
