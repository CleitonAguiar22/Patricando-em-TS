type ObjetoColecao = {
  representação: number;
  quantidade: number;
};

const arrayDeNumeros: number[] = [3, 5, 3, 7, 2, 5, 3, 5, 3];
const arrayColecao: ObjetoColecao[] = [];

arrayDeNumeros.forEach(function (valor: number): void {
  if (arrayColecao[valor] === undefined) {
    {
      arrayColecao[valor] = { representação: valor, quantidade: 1 };
    }
  } else {
    arrayColecao[valor].quantidade += 1;
  }
});
const maisFrequente = arrayColecao.reduce(function (cA, cP) {
  return cA.quantidade > cP.quantidade ? cA : cP;
});

console.log(maisFrequente);
