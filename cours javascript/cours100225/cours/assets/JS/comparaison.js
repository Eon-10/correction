// comparaison
// un = c'est une assignation

let nb1=123
let nb2="123"
//l'operateur de comparaisons == signifie "egal à" mais permet d'utiliser que les valeurs de deux variables$

console.log(nb1==nb2); // True

// l'opératuer de' comparaison == " signifie strictement égale à"
// il permet de verifier la valeur et le type 

console.log(nb1===nb2); // false nb1 et nb2 ne sont pas egal car différent type ( number et string)

// l'opérateur != signifie différent de ... en valeur

console.log(nb1 != nb2); 

//l'opérateur "!== " signifie stictement different de .... valeur et type

console.log( nb1 !== nb2); //true ici les variables sont effectivement différente

// exercice 

let prenom="Nassuf"

// si mon prénom indiqué dans le prompt est égal à let prenom alors alert disant au revoirs

// let loginPrenom=prompt("quel est ton prénom ?")
// let resultPrompt=loginPrenom.charAt(0).toUpperCase()+prenom

let prenom1 = prompt('quel est votre nom ?') //ont change le age qui est en string en number

if (prenom === prenom1){
    alert("Sorcellerie !")

}else {
    alert(`Warning FBI !!! ${prenom1}`)
}