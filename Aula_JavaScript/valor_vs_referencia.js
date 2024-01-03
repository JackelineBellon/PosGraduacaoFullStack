console.log('copia por valor vs referencia');

var primitivo1 = 1;
var primitivo2 = primitivo1;//copia por valor
primitivo2 = 2;

console.log(primitivo1);//imprime valor como 1
console.log(primitivo2);//imprime valor como 2

// quando se trata de um objeto todas as copias são feitas por referencia.
var objeto1 = {x: 1};
var objeto2 = objeto1; //copia por referencia
objeto2.x = 2;

console.log(objeto1); // imprime o valor como 2
console.log(objeto2); // imprime o valor como 2
