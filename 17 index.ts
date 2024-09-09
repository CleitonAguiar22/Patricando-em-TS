function maior(valor1: number, valor2: number): unknown {
  if (valor1 == valor2) {
    return "Os valores digitados são iguais.";
  }

  if (valor1 > valor2) {
    return `${valor1} é maior que ${valor2}`;
  } else {
    return `${valor1} não é maior que ${valor2} `;
  }
}

console.log(maior(1, 10));
