let str: string = "Natan".toLowerCase();
function identificar(str: string): string {
  let varA: string = str;
  let stringArray: string[] = varA.split("");
  let reverString: string[] = stringArray.reverse();
  let arrayString: string = reverString.join("").toLowerCase();

  if (arrayString == str) {
    return "Sua palavra é um Polídromo.";
  } else {
    return "Sua palavra não é um Polídromo.";
  }
}

console.log(identificar(str));
