const N: number = 20;

function mostrarNP(n: number): void {
  let i: number = 1;
  let numeros: string = "Números primos: ";

  while (i <= n) {
    if (calcularPrimo(i)) {
      numeros += `${i.toString()} `;
    }
    i++;
  }

  console.log(numeros);
}

function calcularPrimo(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  let i: number = 1;
  let divisores: number = 0;
  while (i <= n) {
    if (n % i == 0) {
      divisores++;
    }
    i++;
  }
  return divisores == 2;
}

mostrarNP(N);
