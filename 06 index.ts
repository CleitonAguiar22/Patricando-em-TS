function verificarFE(idade: unknown): unknown {
  const erro: string =
    "Não foi possivel classificar sua faixa etaria, por favor verifique sua idade e tente novamente.";

  if (idade !== typeof "number") {
    return erro;
  }

  if ((idade as number) >= 0 && (idade as number) <= 12) {
    return "Criança";
  }

  if ((idade as number) >= 13 && (idade as number) <= 17) {
    return "Adolescente";
  }

  if ((idade as number) >= 18 && (idade as number) <= 59) {
    return "Adulto";
  }

  if ((idade as number) > 59) {
    return "Idoso";
  }
}
console.log(verificarFE(60));
