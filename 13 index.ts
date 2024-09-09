function criarA(N: number): void {
  let i: number = 1;
  let asterisc: string = "*";
  while (i <= N) {
    console.log(asterisc);
    asterisc = asterisc + " *";
    i++;
  }
}
criarA(10);
