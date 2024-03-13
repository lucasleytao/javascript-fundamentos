//fundamentos de javascript

//lista-basica

// //1.Declare duas variáveis, `a` e `b`, e atribua a elas valores numéricos quaisquer. Em seguida, exiba a soma desses dois valores.
// let a = 1; b = 2
// let c = 'Lucas e '; d = 'Beatriz'
// let e = '1'; f = '4'
// console.log(a + b)
// console.log(c + d)
// console.log(e + f)

// //2.Declare uma variável `nome` e atribua a ela o seu nome. Em seguida, exiba uma mensagem de boas-vindas concatenando o valor da variável `nome`.
// let nome = 'Lucas'
// console.log('Boas vindas, ' + nome)

// //3.Crie um programa que calcule a área de um retângulo. Declare duas variáveis, `base` e `altura`, e atribua a elas valores numéricos. Em seguida, calcule e exiba a área do retângulo, que é dada pela fórmula: `área = base * altura`.
// let base = 12; altura = 15
// console.log('A área do retângulo corresponde a: ' + base * altura)

// //4.Declare uma variável `idade` e atribua a ela um valor numérico que represente sua idade. Em seguida, crie uma estrutura condicional para verificar se a pessoa é maior de idade (idade igual ou superior a 18 anos) e exiba uma mensagem correspondente.
// let idade = 17
// if (idade >= 18) {
//     console.log('Maior de idade **Liberado')
// } else {
//     console.log('Menor de idade **Bloqueado')
// }

// //5.Crie um programa que solicite ao usuário que digite um número qualquer. Em seguida, verifique se o número é par ou ímpar e exiba uma mensagem correspondente.
// let num = 2
// //let num = prompt('Digite um número inteiro qualquer: ') //input do usuario
// if (num % 2 == 0) {
//     console.log('O número é par')
// } else {
//     console.log('O número é ímpar')
// }

//-------------------------------------------------------------------------------------------------------------

//comentario 
/*comentario 
multilinha*/ 

//alert e confirm 

// alert('Isso é um alerta!'); 
// let resposta = confirm('Seus dados estão corretos?') 

//-------------------------------------------------------------------------------------------------------------

//entrada de dados 

// let nomen = prompt('Informe seu nome: ') 
// let idaden = prompt('Informe sua idade: ') 

// console.log('Seu nome é ' + nomen + ' e você tem ' + idaden +' anos') 

//saida de dados 

//saida de dados pelo console
//var nomeDaVariavel = "valor" 
let minhaVariavel = 'Olá, mundo!' 
console.log(minhaVariavel); 

//saida de dados por meio de documento HTML 
document.write('Saída de dados por meio de documento HTML utilizando javascript!'); 

//tipos de dados 

//Tipos primitivos: Number(inteiros e ponto flutuante) String (cadeia de caracteres) Boolean (true or false) Undefined (variavel declarada, mas sem valor definido) Null (ausencia de valor ou valor nulo) Symbol ES6 (propriedade de objetos) 

//Tipos de Referência: Os tipos de referência são objetos que podem conter múltiplos valores e métodos. Alguns dos principais tipos de referência em JavaScript incluem: 

//Objeto (Object): É uma coleção de pares chave-valor. Exemplo: { nome: 'Alice', idade: 30 }. 

//Array: É um tipo especial de objeto usado para armazenar uma lista de valores ordenados. Exemplo: [1, 2, 3]. 

//Função (Function): É um objeto que pode ser chamado e executado. As funções são essenciais para a programação em JavaScript. 

//Data (Date): É usado para representar datas e horários. Exemplo: new Date(). 

//RegExp (Expressões Regulares): É usado para trabalhar com padrões de texto. Exemplo: /^\d{3}-\d{2}-\d{4}$/. 

//Tipos Especiais: JavaScript também possui alguns tipos especiais: 

//NaN (Not-a-Number): Representa um valor numérico que não é um número válido. 

//Infinity e -Infinity: Representam valores infinitos positivos e negativos, respectivamente. 

//Tipagem Dinâmica: JavaScript é uma linguagem de tipagem dinâmica, o que significa que você não precisa declarar explicitamente o tipo de uma variável. O tipo é determinado automaticamente em tempo de execução com base no valor atribuído à variável.

//**coerção de tipo e **verificação de tipo 

//variaveis 

// Regras de Nomenclatura: 
// Os nomes de variáveis em JavaScript devem começar com uma letra (maiúscula ou minúscula), sublinhado (_) ou cifrão ($). 
// Os nomes de variáveis podem conter letras, números, sublinhados e cifrões. 
// Os nomes de variáveis são sensíveis a maiúsculas e minúsculas (por exemplo, nome e Nome são diferentes). 
// Palavras-chave Reservadas: 
// Você não pode usar palavras-chave reservadas como nomes de variáveis. 
let num = 10 //tipo inteiro 
let nums = '10' //tipo string 

console.log(num) 
console.log(num + nums) 
console.log(num + 10) 
console.log(num + nums + 20) 

//reatribuicao de variaveis 
let x = 10 
x = 5 
console.log(x) 

// obs* variaveis const nao podem ser reatribuidas 

//variaveis de bloco (escopo de variaveis) 

if (true) { 
    let bloco = 'Está dentro deste bloco' //variavel local 
    console.log(bloco) 
} 
// console.log(bloco) ERRO pois a variavel bloco esta fora do escopo 

//hosting (variavel) -- icamento 

//As variáveis declaradas com var são içadas (hoisted) para o topo do escopo, o que significa que você pode usar uma variável antes de declará-la no código. No entanto, seu valor inicial será undefined. 

//Variáveis declaradas com let e const não são içadas e não podem ser usadas antes de serem declaradas.

 console.log(numero) 
 var numero = 14 //undefined 
 
 //undefined e null 
 
 //O valor null em JavaScript é um valor especial que representa a ausência intencional de qualquer valor ou objeto. É frequentemente usado para indicar que uma variável ou objeto não possui um valor válido ou não está definido. 
 
 //Undefined, por outro lado, é um tipo e um valor especial que indica que uma variável foi declarada, mas não recebeu um valor.

//É importante notar que null é um valor que pode ser atribuído a uma variável, enquanto undefined é um estado que indica que a variável não foi inicializada. 

console.log(numeron) //undefined 
var numeron = 14 
let varNull = { nome: 'Lucas' } 
// varNull = null //null (limpa a variavel) 
console.log(varNull) //objeto original nao esta mais acessivel 

//verificar tipo de dado 

console.log(typeof num) 
console.log(typeof nums) 

let boolean = true //ou false 
console.log(boolean) 

console.log(typeof boolean) 

//conversor de tipo de variavel (parse) 

let converter = '10' //tipo de dado string 
let convertido = parseInt(converter) //converte para inteiro 
console.log(convertido) 
console.log(converter) 
console.log(typeof converter) 
console.log(typeof convertido) 

//objeto 

let objeto = {} //array de chave valor 
let array = [] //vetor de lista 
let meuNull = null //dados sem valor e que serao alterados dentro do programa 
let meuUndefined = undefined //variavel sem valor atribuido 
console.log(typeof objeto) 
console.log(typeof array) 
console.log(typeof meuNull) 
console.log(typeof meuUndefined) 

console.log(meuNull)

//let e const 

const b = 5 //nao permite alteracao
let a = 10 //permite alteracao 
//a = 36 //redefinicao de valor
let soma = (a >= b) ? "se condição verdadeira ...":"se condição falsa ..." //operador ternario 
console.log(typeof a) //tipo de dado
console.log(typeof b) //tipo de dado
console.log(a, b) //imprime a e b

//operadores aritmeticos

console.log(a + b) 
console.log(a - b) 
console.log(a * b) 
console.log(a / b) 
console.log(a**b) //exponenciacao 
console.log(b % 2) //resto da divisao de 5 por 2 
console.log(Math.pow(a,b)) //exponenciacao 
console.log(a ^ b) //XOR bit a bit 

//contador 

let contador = 10 
contador++ 
console.log(contador) 
contador-- 
console.log(contador) 

//operadores de atribuicao (=, +=, -=, /=, %=)

let n = 40 
n += 1 
console.log(n) 

//math -- funcao nativa para operacoes matematicas 

console.log(Math.round(3.5)) //arrendondamento 
console.log(Math.sqrt(16)) //raiz quadrada 

//operadores de comparacao 

//Os operadores de comparação são usados para comparar valores e retornar um resultado booleano (verdadeiro ou falso) com base nas condições definidas. 

console.log(a == b) //igual 
console.log('5' == b) //igual (independentemente do tipo de dado) 
console.log('5' === b) //estritamente igual (verifica se os valores sao iguais e do mesmo tipo de dado)
console.log(a != b) //diferente 
console.log('5' !== b) //estritamente diferente (verifica se os dois valores sao diferentes e de tipos diferentes) 

//operador ternario 

//let soma = (a >= b) ? "se verdadeiro (true)":"senao (false)" 
console.log('ternário: '+ soma) 

//operadores logico-relacionais 

console.log(a > b && b < a) //true 
console.log(a > b || b > a) //true 

//conversao de tipos de variaveis 

const num2 = "123" //const num2 recebe valor tipo string 
console.log(typeof num2)
//const num2c = Number(num2) //const num2c recebe o valor de num2 e converte para numero 
const num2c = + num2 

console.log(typeof num2c) //valor convertido 

//estrutura condicional -- Desvio de fluxo 

//if -- se, else -- senao, else if -- senao se

const idade = 18 

if (idade < 13) { 
    console.log('Criança') 
} else if (idade >=13 && idade < 18) { 
    console.log('Adolescente') 
} else 
    console.log('Adulto') 

// if (true) { 
//     console.log('Isso executa') 
// } else { 
//     console.log('Agora isso executa') 
// } 

//switch case -- escolha caso

const fruta = 'banana' 

switch(fruta) {
     case 'banana': 
     console.log('A fruta é uma banana') 
     break 
     case 'laranja': 
     console.log('A fruta é uma laranja') 
     break 
     default: 
     console.log('A fruta não foi encontrada') 
     break 
} 

//estruturas de repeticao -- loop -- laco

//for -- para

let i = 1 
const fim = 5 

for (let i = 1; i <= fim; i++) { //inicializacao; condicao de parada; incremento 
    console.log(i) 
} 

//while -- enquanto

let k = 1 
const final = 3 

while (k <= final) { //teste logico no inicio 
    console.log(k) //imprime 
    k++ //incrementa 
} 

//do while -- faca enquanto

let j = 1 
const c = 4 

do {
    console.log(j) //imprime 
    j++ //incrementa 
} while (j < c) //teste logico no fim 

//funcoes 

//As funções desempenham um papel fundamental na organização do código, na reutilização de lógica e na criação de abstrações. Elas são uma parte fundamental da linguagem e são usadas extensivamente no desenvolvimento JavaScript. 

//As funções são blocos de código reutilizáveis que podem ser chamados para realizar uma tarefa específica. Elas são uma parte fundamental da programação em JavaScript. 

//function nome(arg1, arg2) { bloco de comandos } 

//function (declaracao de funcao saudacao) 

function saudacao() { //sem argumento 
    console.log('Olá! Aqui estou utilizando uma função.') 
}  
saudacao() //invoca a funcao

//ou 

function cumprimento(nome) { //com argumento 
    console.log('Olá, ' + nome) 
} 
cumprimento('Lucas') //passando 'Lucas' como argumento 

//escopo de variaveis em funcoes 

let cor = 'azul' //variavel global 

function mostraCor() { 
    let cor = 'verde' //variavel local 
    console.log(cor) 
} 

console.log(cor) 
mostraCor()

//valor de retorno (return) em funcoes 

function fsoma(a,b) { //com argumentos 
    return a + b //retorna soma dos argumentos 
} 

let resultado = fsoma(100,5) 
console.log(resultado) 

//hoisting (funcao) -- icamento -- prototipo 

hoistingTeste() //pode ser utilizada antes de sua declaracao 

function hoistingTeste() { 
    console.log('Deu certo!') 
} 

//arrow function -- funciona como uma funcao com uma sintaxe mais resumida 

const arrowTeste = () => console.log('Aqui também deu certo!') 
arrowTeste() 

//truthy e falsy 

let variavel1 = '' //falso -- mesmo que nao seja booleano (vazio) 
let variavel2 = 'Algum texto' //verdadeiro -- mesmo que nao seja booleano (preenchido) 

if (variavel1) { //condicao falsa 
    console.log('Verdadeiro') 
} else { 
    console.log('Falso') //imprime a condicao falsa -- else 
} if (variavel2) { //condicao verdadeira 
    console.log('Verdadeiro') //imprime a condicao verdadeira -- if 
} else { 
    console.log('Falso') 
} 

//array (listas) 

//Listas são estruturas de dados fundamentais para armazenar e manipular coleções de valores em um programa JavaScript. Existem muitos outros métodos e técnicas avançadas para trabalhar com listas em JavaScript, mas esses são os conceitos essenciais 
//caracterizado por abertura e fechamento de colchetes e com elementos separados por virgula

const numeros = [1,2,3,4,5] 
console.log(numeros) 

let lista = [10, 20, 30, 40, 50]
console.log(lista) 

//acessar itens do array 
console.log(numeros[1]) //retorna item 2 

//metodo push() (adiciona um ou varios itens ao array) 
numeros.push('maçã', 7, 8) 
console.log(numeros) 

//metodo pop() (remove o ultimo item do array) 
numeros.pop() 
console.log(numeros) 

//metodo shift() (remove o primeiro elemento de um array) 
numeros.shift() 
console.log(numeros) 

//metodo indexOf() (encontra o indice de um elemento do array) 
let indice = numeros.indexOf("maçã") 
console.log('Indice do elemento "maçã": ' + indice)

//tamanho da lista (propriedade length) 
let tamanho = numeros.length 
console.log('Tamanho do array: ' + tamanho) 

//strings -- concatenacao 
const string1 = 'Lucas' 
const string2 = string1 + 'Leitao' //concatenacao

console.log(string2) 

//strings -- interpolacao 
const string3 = `${string1} Leitao` 
console.log(string3) 

//string -- caracteres 
console.log(string3.length) //numero total de caracteres 
console.log(string3[4]) //acesso a determinado indice da cadeia de caracteres 
console.log(string3.toUpperCase()) //transformar em caixa alta 

//date 
const dataAtual = new Date() //new -- construtor de objetos -- instanciando um novo objeto `Date` 
console.log(dataAtual) //recebe o valor atualizado do abjeto e imprime
let ano = dataAtual.getFullYear() //solicita somente o ano do objeto `Date` 
console.log(ano) 

//---------------------------- Praticando -------------------------------------- 

//imprima uma frase 
console.log('Olá, mundo!') 

//conversor de tipo 
let valor = '123' 
let nvalor = + valor 

console.log(typeof valor) 
console.log(typeof nvalor) 

//contador de palavras e caracteres 
let frase = 'javascript é incrível demais' 
console.log(frase) 
let contagem = frase.split(' ').length //split -- aspas simples com espaco -- contador de palavras 
console.log('Número de caracteres da frase: ' + frase.length)//length -- contador de caracteres 
console.log('Número de palavras na frase: ' + contagem) 

//contador de nomes 
let nome = ['Lucas', 'Beatriz', 'Fátima', 'Tatiana', 'Edimilson']

for (let i = 0; i < nome.length; i++) { 
    console.log(nome[i]) 
} 

//funcoes e strings 

function converterHora() { //funcao-nome-arg 
    const data = new Date() //instancia um novo objeto `Date` 
    const h24 = data.getHours() //extrai hora atual 
    const m24 = data.getMinutes() //extrai min atual 
    const hf = h24.toString().padStart(2,'0') //inclui o '0' na hora 
    const mf = m24.toString().padStart(2,'0') //inclui o '0' no min 
    let hora12 = hf % 12 || 12 //let hora12 resto da divisao por 12 ou 12 
    let min = mf 
    let periodo = 'AM' 
    if (hora12 > 12) {
        periodo = 'PM' 
    } 
    console.log(`${hora12}:${min} ${periodo}`) //converte e imprime hora atual 
} converterHora() //invoca a funcao

// --------------------------------- continuacao ------------------------------------ 

//selecao de elementos HTML 

//As formas mais básicas de seleção de elementos em JavaScript envolvem acessar e manipular elementos HTML em uma página da web. Aqui estão algumas das técnicas mais fundamentais para selecionar elementos: 

//getElementById: O método getElementById permite selecionar um elemento HTML com base em seu atributo id. Ele retorna uma referência para o elemento encontrado. 

let elemento = document.getElementById('meuElemento'); 

//getElementsByTagName: O método getElementsByTagName permite selecionar todos os elementos com uma determinada tag HTML. Ele retorna uma coleção de elementos. 

let paragrafos = document.getElementsByTagName('p'); 

//getElementsByClassName: O método getElementsByClassName permite selecionar elementos com base em suas classes CSS. Ele retorna uma coleção de elementos. 

let classes = document.getElementsByClassName('minhaClasse'); 

//querySelector: O método querySelector permite selecionar um elemento com base em um seletor CSS. Ele retorna a primeira correspondência encontrada. 

let seletor = document.querySelector('#meuElemento'); 

//querySelectorAll: O método querySelectorAll permite selecionar todos os elementos que correspondem a um seletor CSS. Ele retorna uma NodeList (semelhante a uma coleção). 

let todos = document.querySelectorAll('p'); 

//getElementByName (Formulários): O método getElementByName permite selecionar elementos de um formulário com base no atributo name. É útil para acessar elementos de entrada em um formulário. 

let nameForm = document.getElementsByName('nome')[0]; 

//ParentNode (Navegação no DOM): Você pode navegar no DOM usando propriedades como parentNode, childNodes, nextSibling e previousSibling para acessar elementos relacionados. 

let paragrafo = document.getElementsById('meuParagrafo'); 
let paiParagrafo = paragrafo.parentNode; 

//QuerySelector Aninhado: Você pode usar seletores aninhados para selecionar elementos dentro de outros elementos. 

let listaItens = querySelector('ul.lista > li.item');