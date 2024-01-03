console.log("imprimindo de 1 a 5 while");
var cont = 1;
while (cont <= 5) {
  console.log(cont);
  cont++;
}

console.log("imprimindo 1 a 5 com o do while");
var cont2 = 1;
do {
  console.log(cont);
  cont++;
} while (cont2 <= 5);

console.log("imprimindo 1 a 5 com FOR");
for (cont3 = 1; cont3 <= 5; cont3++) {
  console.log(cont3);
  //dentro do for podemos utilizar no if as condições break e  continue
  if (cont3 === 5) {
    break;
  } else if (cont3 === 4) {
    continue;
  }
}
