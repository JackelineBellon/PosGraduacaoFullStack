palindromo("aba");
palindromo("radar");
palindromo("xyzzyx");
palindromo("bola"); // não é palindromo
palindromo("abcddcb"); // não é palindromo
palindromo("");
palindromo("x");

function palindromo(palavra) {
  var qtdString = 0;
  qtdString = palavra.length;

  var palavraInvertida = "";
  var contador = qtdString - 1;

  for (; contador > -1; contador--) {
    palavraInvertida += palavra.charAt(contador);
  }

  if (palavra == palavraInvertida) {
    console.log(palavra + " É uma palavra palindromo");
  } else {
    console.log(palavra + " Não é uma palavra palindromo");
  }
}
