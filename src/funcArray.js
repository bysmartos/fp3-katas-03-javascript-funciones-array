/* Encuentra el máximo */

export function maxOfTwoNumbers(num1, num2){
        let mayor = Math.max(num1, num2);
        return mayor;
}

/* Encuentra la palabra mas larga */
//Forma 1 de resolver
export function findLongestWord(arrayWords){
    if(arrayWords.length === 0) {
        return undefined;
    } else {
    let longestWord="";
        arrayWords.forEach(word => {
            if(word.length > longestWord.length) {
                longestWord= word
            }
        });
    
    return longestWord;
}
}  
//Forma 2 de resolver
// export function findLongestWord(arrayWords){
//     let longestWord = "";
//     if(arrayWords.length === 0) {
//          return undefined;
//             } else {
//             for( let i=0; i < arrayWords.length; i++) {
//                 if(arrayWords[i].length > longestWord.length) {
//                 longestWord = arrayWords[i];
//                 }
//                 } 
//       return longestWord;
//     }
// }

/* Calcula la suma */
//Forma guay de hacerlo ( con el codigo entendido, no solo copiado)
export function sumArray(nombreArray){
const initialValue = 0 
const sumWithInitial = nombreArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  initialValue );
    return  sumWithInitial
}
//Forma no  tan guay

// export function sumArray(nombreArray){
//     let total =0;
//     for( let i= 0; i<nombreArray.length; i++){
//     total += nombreArray[i]
// }
// return total

// }


/*Calcula la media aritmética*/
//Array de Números
export function averageNumbers(nombreArray){
    if(!nombreArray.length) 
        return undefined;
        return  sumArray(nombreArray)/nombreArray.length
    
}
// Array of Strings
export function averageWordLength(array){
  let largeWords = array.map(x => x.length)
  let mediaWords= averageNumbers(largeWords);
  return mediaWords;
}
//Unique Arrays
export function uniquifyArray(array){
    if(array.length === 0) {
        return undefined;
    } else { let resultado = array.reduce((palabraSinRepetir, currentValue) =>{

     if(!palabraSinRepetir.find(d => d == currentValue)) {
         palabraSinRepetir.push(currentValue)
     } 
     return palabraSinRepetir;
    }, [])

    return resultado
    
    }
}
// Busca elementos
export function doesWordExist(array,buscar){}
//Cuenta repeticiones
export function howManyTimes(){}
export function greatestProduct(){}



