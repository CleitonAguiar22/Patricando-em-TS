function contarVogais(string: string): unknown {
  const palavra: string[] = string.split("");
  const vogais: string[] = ["a", "e", "i", "o", "u"];
  const quantidadeDeVogais: number = palavra.filter((x) =>
    vogais.includes(x)
  ).length;
  return `Sua palavra possui  ${quantidadeDeVogais} vogais`;
}

console.log(contarVogais("Paralelepipedo"));
