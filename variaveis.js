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
const resposta = pessoas[0] >=65
if(resposta){
                fila.unshift(pessoas[0])
}        
else{
        fila.push(pessoas[0])
}