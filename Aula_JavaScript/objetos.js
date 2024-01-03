var aluno1 = {
  matricula: 7627364,
  nome: 'Jackeline Bellon',
  curso: 'Pos Desenvolvimento Full Stack',
  ativo: true
};

//é possivel pelo consele acessar as os campos dentro do objeto atraves do ponto
//exemplo aluno1.nome

console.log(aluno1.nome);

//esse valor passa a ser inserido automaticamente no objeto aluno1
aluno1.dataNascimento = '17/11/1989';

//com o operador delete posso excluir o campo do objeto
delete aluno1.dataNascimento;

// podemos definir uma variavel e não inicializarmos com isso ira retornar o 'undefined
var x;

// porem pode ser inicializado com null e ai o seu retorno ao tentar acessa-la sera esse
var y = null;

// Array - existe uma sintaxe para ele especifica
var frutas = ['banana', 'laranja', 'maçã'];

//É possivel adicionar novos campos no array de forma dinamica com o .push
frutas.push('abacaxi');