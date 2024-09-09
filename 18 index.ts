function inversão(string: string) {
  let stringArray = string.split("");
  let revertArray = stringArray.reverse();
  let arrayString = revertArray.join("");
  return arrayString;
}

console.log(inversão("Enaile"));
