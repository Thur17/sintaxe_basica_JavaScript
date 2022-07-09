// tipo primitivos 

// variaveis dados que varia 

//bolean - Verdadedo ou falso 
var vOUf = false;
console.log(vOUf);
console.log(typeof(vOUf));

// number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

// string - variavel ou nome qualquer 
var nome = 'Arthur';
console.log(nome);
console.log(typeof(nome));

// função - function
var funcao = function(){}
console.log(typeof(funcao))

// como declarar 
var variavel = 'Arthur';
     //alteração
     variavel = 'Felippe';
 console.log(variavel);
 console.log(typeof(variavel));

let variavel2  = 'Arthur';
     //alteração  
     variavel2  = 'Felippe';
 console.log(variavel2);
 console.log(typeof(variavel2));

 //constante não pode ter valor alteracdo sempre com valor incial
const constante = 'arthur';
     //não aceita alteração 
     //constante = 'Felippe'--> Apresenta erro
console.log(constante);

// Escopo Global
var escopoGlobal = 'global';
console.log(escopoGlobal);

// Escopo Local - chamar a função fora 
function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuição 
var atribuicao = 'Arthur';
//comparação 
var comparacao =  '0' == 0 ;
console.log(comparacao);
//comparação indentica
var comparacaoIndentica =  '0' === 0 ;
console.log(comparacaoIndentica);


