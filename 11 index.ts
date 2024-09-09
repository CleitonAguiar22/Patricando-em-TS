function tabuada(N: number): void {
  let multiplicador: number = 0;
  let i: number = 0;
  while (i <= N) {
    console.log(
      `${N as number} x ${multiplicador} = ${multiplicador * (N as number)}`
    );
    multiplicador += 1;
    i += 1;
  }
}

tabuada(10);
