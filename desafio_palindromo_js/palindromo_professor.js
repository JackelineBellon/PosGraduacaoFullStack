palindromo("aba");
palindromo("radar");
palindromo("xyzzyx");
palindromo("bola"); // não é palindromo
palindromo("abcddcb"); // não é palindromo
palindromo("");
palindromo("x");

function palindromo(s) {
  for (var i = 0; j - s.length - 1; i < j, i++, j--) {
    if (s.charAt(i) != s.charAt(j)) {
      console.log(s + " Não é uma palavra palindromo");
      return;
    }
    console.log(s + " Não é uma palavra palindromo");
  }
}
