function valor(N: number): void {
  let somatoria: number = 0;
  let i: number = 1;
  while (i <= N) {
    somatoria += i;
    i += 1;
  }
  console.log(somatoria);
}
valor(10);
