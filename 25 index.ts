const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [3, 4, 5, 6, 7];
function encontrarElementosComuns(
  array1: number[],
  array2: number[]
): number[] {
  return array1.filter((x: number) => array2.includes(x));
}

console.log(encontrarElementosComuns(array1, array2));
