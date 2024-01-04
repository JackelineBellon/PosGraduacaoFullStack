var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var r = document.getElementById("r");

function calcular() {
  var resultado = n1.valueAsNumber + n2.valueAsNumber;
  r.textContent = resultado;
}

//adicionado o evento pois ao mudar irá realizar a soma automaticamente.
document.addEventListener("input", calcular);

//outra forma é fazer dentro do próprio evento a função deixando um código mais limpo
document.addEventListener("input", function calcular() {
  var resultado = n1.valueAsNumber + n2.valueAsNumber;
  r.textContent = resultado;
});
