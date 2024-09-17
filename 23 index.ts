const array1: number[] = [1, 2, 3, 4, 4, 5, 5, 6, 6];
function removerDuplicados(array1: number[]): number[] {
  const arraySet: Set<number> = new Set(array1);
  const setArray: number[] = Array.from(arraySet);
  return setArray;
}

console.log(removerDuplicados(array1));
