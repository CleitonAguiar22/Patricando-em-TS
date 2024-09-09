function concatSrings(nome: unknown, cidade: unknown, idade: unknown): string {
  const erro: string =
    "Não foi possivel realizar essa concatenação, verifique o nome, cidade ou idade e tente novamente.";
  if (
    typeof nome !== "string" ||
    typeof cidade !== "string" ||
    typeof idade !== "number"
  ) {
    return erro;
  }
  return `Olá meu nome é ${nome}, tenho ${idade} anos e sou da cidade ${cidade}, é um prazer lhe conhecer.`;
}

console.log(concatSrings("Cleiton", "Campina Grande", 17));
