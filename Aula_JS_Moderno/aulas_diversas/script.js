//1 Declarar variáveis com let e const

let a = 1;
const b = 1;

a = 2;
//b = 2;

function test() {
  for (var i = 0; i < 5; i++) {
    //fazer algo
  }

  for (let j = 0; j < 5; j++) {
    //fazer algo
  }

  console.log("i: " + i + ",j: " + j);
}

//2. Usar atribuição via desestruturação
let primos = [2, 3, 5, 7, 11, 13];

let curso = {
  nome: "Pós Full Stack",
  modulos: 16,
  presencial: false,
  turma: 2,
};

let [p1, p2, ...resto] = primos;

let { nome: nomeCurso, turma, ...outrosCampos } = curso;

function imprime({ nome }) {
  console.log(nome);
}

//3. Spread Operator
let primos1 = [2, 3, 5, 7, 11, 13];

let curso1 = {
  nome: "Pós Full Stack",
  modulos: 16,
  presencial: false,
  turma: 2,
};

let primos2 = [...primos1, 17];
let primos3 = [1, ...primos1, 17];

let cursos2 = {
  ...curso1,
  descricao: "Teste descricação",
  ativo: true,
};

let curso3 = {
  ...curso1,
};

//4. Template literals

let z = 2,
  y = 3;
let soma = z + y;

console.log(a + " " + b + " = " + soma);

console.log(`${a} + ${b} = ${soma}`);
console.log(`teste
teste`);
