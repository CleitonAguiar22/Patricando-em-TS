function calcularNum(
  x: unknown,
  y: unknown,
  operador: unknown
): string | number {
  const erro: string =
    "Não foi possivel fazer esse cálculo, verifique os números e o operador e tente novamente.";
  if (
    typeof x !== "number" ||
    typeof y !== "number" ||
    typeof operador !== "string"
  ) {
    return erro;
  } else if (operador == "+") {
    return (x as number) + (y as number);
  } else if (operador == "-") {
    return (x as number) - (y as number);
  } else if (operador == "x" || operador == "*") {
    return (x as number) * (y as number);
  } else if (operador == "/") {
    return (x as number) / (y as number);
  } else {
    return "Selecione um operador.";
  }
}
console.log(calcularNum(2, 2, "+"));
