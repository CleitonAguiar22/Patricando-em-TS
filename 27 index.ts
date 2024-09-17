const objetoNumerico: object = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

function somarPropriedades(objeto: object): number {
  const valores: number[] = Object.values(objeto);

  const soma: number = valores.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  return soma;
}

console.log(somarPropriedades(objetoNumerico));
