// Verificação de divisibilidade
function verficarDiv(x: unknown, y: unknown): string {
  const erro: string =
    "Não foi possivel realizar a verificação de divisibilidade, verifique os números e tente novamente.";

  if (typeof x !== "number" || typeof y !== "number") {
    return erro;
  }

  if ((x as number) % (y as number) == 0) {
    return `${x} é divisivel por ${y}.`;
  } else {
    return `${x} não é divisivel por ${y}.`;
  }
}

console.log(verficarDiv("oi", "3"));
