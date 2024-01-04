function Retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = function () {
    return this.altura * this.largura;
  };
  //dessa forma poderemos perder a referência do this tendo que usar
  //o recurso .bind para fixá-lo
  //this.area = calcularArea
}
//podemos criala fora
/*function calcularArea(){
  return this.altura * this.largura;
}*/

var r1 = new Retangulo(3, 4);
var r2 = new Retangulo(2, 7);

//utilizando agora o prototype chain
function RetanguloV2(altura, largura) {
  this.altura = altura;
  this.largura = largura;
}

RetanguloV2.prototype.area = function () {
  return this.altura * this.largura;
};

var r3 = new Retangulo(3, 4);
var r4 = new Retangulo(2, 7);
