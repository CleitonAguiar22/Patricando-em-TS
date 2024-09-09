// Caucular de °F para °C e vice versa
const temperatura: readonly [unknown /*graus*/, unknown /*escala*/] = [
  10,
  "oi",
];

function calcularTemp(temperatura: readonly [unknown, unknown]): string {
  let resultado: number = 0;
  const erro: string =
    "Não foi possivel realizar o cálculo pedido, verifique a temperatura ou a escala e tente novamente.";

  if (
    typeof temperatura[0] !== "number" ||
    typeof temperatura[1] !== "string"
  ) {
    return erro;
  }

  if (temperatura[1] == "C" || temperatura[1] == "c") {
    resultado = (temperatura[0] as number) * (9 / 5) + 32;
    return `${resultado} °F`;
  }

  if (temperatura[1] == "F" || temperatura[1] == "f") {
    resultado = ((temperatura[0] as number) - 32) * (5 / 9);
    return `${resultado} °C`;
  }

  // Verificar outros tipos de entrada:
  if (
    temperatura[1] != "c" &&
    temperatura[1] != "C" &&
    temperatura[1] != "F" &&
    temperatura[1] != "f"
  ) {
    return erro;
  }

  return erro;
}
console.log(calcularTemp(temperatura));
