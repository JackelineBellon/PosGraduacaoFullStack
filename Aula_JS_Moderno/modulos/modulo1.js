//utilziando a palavra export não precisa exportar no final a função
export function somar(a, b){
  return a + b;
}

export function subtrair(a, b){
  return a + b;
}

export const PI = 3.14;

console.log("Carregou o modulo 1")

//pode ser exportada ao final 
//export {somar, subtrair};

//para declarar a função de forma global
//window.soma = soma;
