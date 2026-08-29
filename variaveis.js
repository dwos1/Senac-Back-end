/*
const

let
regras
var 

Uma variável não pode ter espaços, começar com 
numero, acentuação, nem usar palavras chaves da 
linguagem


let nome = "Lucas"
nome = "Joao da Silva"
console.log(nome)

let idade = 35;
let idade2 = "35";
const iguais = idade === idade2;
console.log(typeof idade);
console.log(typeof idade2);
console.log(iguais);

//variáveis compostas
//array e objetos
// []  {}

const lista_de_frutas = ["Manga", 
        "Abacaxi", 
        "Uva",
        123,
        true,
        [10,50,60]
];
console.log(typeof lista_de_frutas);
console.log(lista_de_frutas[1]);
lista_de_frutas.push(banana);
*/



const pessoas = [25, 36,32,45,66,68,24,62, 53];
const fila = [];
//if = se
//else = senão
/*
loop é um ciclo de perguntas
*/

pessoas.sort()
const tamanho = pessoas.length
//1 posição 
//2 posição pergunta condicional
//3 posição incremento ou decremento
for(let i = 0; i < tamanho ; i++){
const resposta = pessoas[i] >=65
if(resposta){
                fila.unshift(pessoas[i])
}        
else{
        fila.push(pessoas[i])
}
}
console.log(fila)

//objetos
//{}
//dicionario
const pessoa = {
        "nome" : "david willians"
}

console.log(pessoa);
console.log(pessoa.nome);
pessoa.idade = 42;
console.log(pessoa);
pessoa.vivo = true;
console.log(pessoa.idade);

const pessoa2 = {
        "nome": "Mateus",
        "idade": 17,
        "vivo": true
}

console.log(pessoa2);
const pessoa3 = {
        "nome": "brenda",
        "idade": 18,
        "vivo": true
}

console.log(pessoa3)

console.log(fila)
for(let i=0; i<tamanho; i++){
        fila.pop();
}

pessoa.votos = 2;
pessoa2.votos = 5;
pessoa3.votos = 5;
fila.push(pessoa);
fila.push(pessoa2);
fila.push(pessoa3);
console.log(fila);

console.log(fila[2]);
console.log(`Quantidade de votos ${fila[2].votos}`)