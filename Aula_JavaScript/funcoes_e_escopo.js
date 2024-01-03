//variavel de escopo global
var m = 'Olá';

function imprimeOla() {
  //variavel de escopo local
  var nome ='Jackeline';
  console.log(m+' ' +nome);
}

//função com passagem de paramêtros;
function soma(op1, op2){
  return op1+op2;
}