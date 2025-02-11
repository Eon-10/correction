// /* ---------------------------------
// Condition
// ----------------------------------*/

// // en javascript une condition permet d'executer un bloc de code seulement si certaines conditions sont vrai(true)

// //structure avec "if"

// if (true){
//     // par défault la condition à verifier veriefie si elle est vraie
// }

// // exemple 
// nb1=51

// if (nb1 < 50){
//     // si la condition dans les parenthèses est vrai alors le code à l'interieur des accolades s'execute
//     alert("je suis inférieur a 50")
// }

// if(true){
//     //si code est vrai
//     //le code s'éxécute
// } else{
//     // si la condition est fausse
//     // c'est ce code qui s'éxécute
// }

// let nb2=50
// if(nb2 < 50){
//     alert("nb2 est inférieur à 50")
// } else{
//     alert("nb2 est supérieur à 50")
// }

let maxAge=18

let age = Number(prompt('quel est votre age ?')) //ont change le age qui est en string en number
console.log(age);
// console.log(typeof age);


// if (age>maxAge){
//     console.log("Bienvenue dans la secte !");

// } else if(age=String){ // cette ligne pas sur
//     console.log("Sorcellerie !"); 
    
// }
// else {
//     console.log("Warning FBI !! "); }

if(isNaN(age)){
    alert("erreur : données invalides ecriver un numéro")
}else if (age<=maxAge){
    alert("rentre chez toi petit !")
}else{
    alert("bienvenue")
}