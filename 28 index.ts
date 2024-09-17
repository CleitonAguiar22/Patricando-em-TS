type MeuObjeto = {
  nome?: string;
  idade?: number;
  cidade?: string;
  profissao?: string;
};

function filtraPropriedades(
  objeto: MeuObjeto,
  propriedades: string[]
): Partial<MeuObjeto> {
  if (!Array.isArray(propriedades)) {
    throw new Error("O segundo argumento deve ser um array.");
  }

  const resultado: any = {};

  propriedades.forEach((propriedade) => {
    const chave = propriedade as keyof MeuObjeto;
    if (objeto.hasOwnProperty(propriedade) && chave in objeto) {
      resultado[chave] = objeto[chave];
    } else {
      console.log(`A propriedade ${propriedade} não encontrada no objeto`);
    }
  });

  return resultado;
}

const objeto: MeuObjeto = {
  nome: "Cleiton",
  idade: 17,
  cidade: "Campina Grande",
  profissao: "Desenvolvedor Backend",
};

const propriedadeDesejadas = ["nome", "idade", "salario"];

console.log(filtraPropriedades(objeto, propriedadeDesejadas));
