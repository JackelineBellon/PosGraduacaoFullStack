<H1>Aulas Pós Gradução Full Stack Node.js e React.</H1>
Nessa sessão você encontrará os commits das aulas desde o nivelamento da pós e módulo a módulo, códigos desenvolvidos em aula e desafios. Os desafios contarão com um documento dentro da pasta com o texto e arquivos necessários para execução do mesmo.

<b>1. Aula de HTML</b>

- Foi realizado uma página html com o famoso HELLO WORD e um script basico para a configuração do modo debug na IDE VSCode.S

<b>2. Aula JavaScript</b>
Nas aulas foram apresentados
 - os tipos primitivos de dados onde é importante destacar que em javascript o tipo number pode receber tanto números inerios como numeros decimais, entretando como se trata de variáveis dinamicas, podemos inserir uma string durante a execução ou a codificação e essa variavel passara a assumir com o tipo string.
 - declaração de objetos onde podemos destacar que pode ser criado um novo campo desse objeto a qualquer momento durante a execução utilizando o nomedoobjeto.nomedonovoatributo. e deletar qualquer campo a partir do comando delete, exemplificando serie a sintaxe: delete nomedoobjeto.nomedoatributo.
 - Cópia por valor e referência, onde todos os tipos primitivos são copiados por valor diretamente e os objetos por referência de memoria, ou seja, se um tipo primitivo for copiado de a para b e depois b for alterado, a exibição de a permanecerá identiica enquanto a varialvel b ira exibir conforme alteração, já o objeto ambos tem alteração no valor apresentado.

<b>Operadores logicos:</b>
- ! negação
- && e lógico
- || ou lógico

Em javascript pode ser utilizado mesmo em coparações não booleanas, onde zero será sempre falso

Operadores aritiméticos onde vale destacar que o +x converte para numero caso não for. Exemplo +'24' retornará 24 de forma numérica. Caso eu utilize o + em uma string irá realizar a concatenação.
Podemos utilizar o = junto ao operador aritimético eu irei realizar a operação acrescido do próximo valor, exemplo x = 5 ao realizar a operação x +=2 o resultado será 7.

Na comparação de >, <, >= e <= vale destacar que ao realizar uma comparação por string é feito uma comparação lexicografa

Na igualdade vale destacar que ao utilizar == pordemos comparar tipos diferentes mas ao utilziar === somente permite comparar de mesmo tipo.

Nas funções independente se ela foi declarada antes ou depois de uma chamada ela será executada. 
Nas declarações de variaveis globais importante frizar que é possivel utiliza-la em arquivos .js distintos.

Foi apresentado o if e else e switch assim como os laços de repetição, porém não é nada distinto do que já é visto em outras linguagens por isso sem ressalvas.

<b> 2.1 Desafio aulas JS </b>

- Fazer uma função palindromo, ou seja, diz-se de ou frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa.


<b>3. Interação com DOM</b>

Ele é uma documento estruturado em forma de árvore
Nesta aula foi apresentado um HTML simples onde é inputado campos para soma e utilizado o id no imput para que seja possivel ser capturado pelo DOM ElementById.
Uma ressalva importante da aula foi que documento HTML o script deve ser chamado após a execução dos inputs ou ao final antes de fechar o body pois ele é interpretado na ordem em que foram inseridos os elementos.
Outras formas de utilizar o DOM é o document.querySelector ele pega uma string do tipo seletor especificado, caso tenha mais de um seletor na pagina pode ser utilizado o document.querySelectorAll que devolve em um formato array todos os seletores de mesmo tipo contidos na pagina HTML

O evento stop.Propagation interrompe a propogação do evento no momento que esta.
Outro evento é o preventDefault, impede que o navegador execute a função padrão, por exemplo, submeter um formulário

Eventos comuns:
- <b>focus:</b> para dar foco no elemento
- <b>blur:</b> para tirar o foco
- <b>input:</b> para inserir valor em um campo texto
- <b>submit:</b> para submeter o formulário
- <b>keydown</b> quando uma tecla é pressionada
- <b>keyup:</b> quando uma tecla é liberada
- <b>click:</b> quando o botão do mouse é acionado
- <b>mousemove:</b> quando o mouse é movimentado sobre o elemento

Para criar elementos dinamicamente podemos utilizar o <b>appendChild, remove e insertBefore</b>

<b>4. Orientação a Objetos JavaScript</b>

Em javaScript qualquer função pode usada para instanciar um objeto utilizando o <new>
O this em js vai depender muito de como foi chamado, e não de como foi escrito, ou seja, se eu tenho um objeto this dentro de uma function e ela recebe uma funcition de forma externa para calculo, caso eu armaze ela em uma variável e para depois utilizar, caso não tenha paramêtros passa enviar os valores this para a função eu irei perder a referência.
Existe um recurso para poder contornar isso sem precisar de referencia, sera a <b> .bind </b> e nesse caso sempre sera fixado o objeto this do objeto.

<b>Prototype chain</b> é uma forma de herdar em cadeia a propriedade do objeto, seja dos explicitos ou implicitos até que não haja mais nenhum prototype e retorne nulo

<b>Herança e classes</b> Foi disponibilizado a partir do ES6(ou 2015) facilitando então a orientação a objetos, um pouco diferente do Java eles apresentam as classes de modo publico.
