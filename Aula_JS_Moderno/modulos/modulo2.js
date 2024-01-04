//É possivel ao adiconar um importar atribuir um alias a ela
import {soma as adicionar, subtrair } from "./modulo1.js";

//posso chamar o import de todas a funções via * entretanto preciso dar um alias a ela
//import * as m1 from "./modulo1.js"

console.log(adicionar(2,2));
console.log(subtrair(2,2));