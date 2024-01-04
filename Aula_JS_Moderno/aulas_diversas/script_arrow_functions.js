function soma(a, b) {
  return a + b;
}

function Retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = function () {
    return this.altura * this.largura;
  };
}

// Código com arrow function

var somaV2 = (a, b) => a + b;

function Retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = () => this.altura * this.largura;
}

var r1 = new Retangulo(5, 6);

//Quando há apenas um paramêtro não é preciso colocar parenteses.
var imprimeMessagem = (m) => console.log(m);

//Quando há um paramêtro é obrigatório abrir e fechar parenteses.
var imprimeMessagem2 = () => console.log("teste");
