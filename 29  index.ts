type MeuObjeto = {
  nome?: string;
  idade?: number;
  cidade?: string;
  profissao?: string;
};

type MeuObjetoComplexo = {
  nome?: string[];
  idade?: number[];
  cidade?: string[];
  profissao?: string[];
};

const objeto1: MeuObjeto = {
  nome: "Cleiton",
  idade: 17,
  cidade: "Campina Grande",
};

const objeto2: MeuObjeto = {
  idade: 31,
  cidade: "João Pessoa",
  profissao: "Desenvolvedor Web",
};

function combinarObjetos(
  objeto1: MeuObjeto,
  objeto2: MeuObjeto
): MeuObjetoComplexo {
  const resultado: any = { ...objeto1 };

  for (const [chave, valor] of Object.entries(objeto2)) {
    if (resultado.hasOwnProperty(chave)) {
      if (Array.isArray(resultado[chave])) {
        resultado[chave].push(valor);
      } else {
        resultado[chave] = [resultado[chave], valor];
      }
    } else {
      resultado[chave] = valor;
    }
  }

  return resultado as MeuObjetoComplexo;
}

console.log(combinarObjetos(objeto1, objeto2));
