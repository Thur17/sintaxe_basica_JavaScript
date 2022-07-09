// oque são vetores ou array

//como declarar uma array 
/* 
let array = ['string', 1, true];
console.log(array);
 */

//varios tipos de dados 

let array = ['string', 1, true, ['array1'], ['array2'], ['array2'], ['array3']];
console.log(array);

//Objetos 
let object = {string: 'string', Number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'} }
console.log(object);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);