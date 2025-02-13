// Exercice 1 : Somme de deux nombres
// Écrire une fonction somme(a, b) qui prend deux nombres en paramètres et retourne leur somme.
 


function add(...a) {
    let sum = 0;
    for (let b of a) {
    sum += b;
    }
    return sum;
  }

  console.log(add(4,5,6,7,8,5));
  
// Écrire une fonction max(a, b) qui retourne le plus grand des deux nombres donnés.
 
function max(a,b){

    let sum = 0
    if (a<b){
        sum=b } else{
            sum=a
        }
    return sum
    }

console.log(max(1,9));


  
function verifierNombre(n) {
    if (isNaN(n)) {
        return "Ce n'est pas un nombre";
    } else if (n > 0) {
        return "positif";
    } else if (n < 0) {
        return "négatif";
    } else {
        return "nul";
    }
}

console.log(verifierNombre());


// Exercice 3 : Vérifier si un nombre est pair ou impair
// Écrire une fonction pairOuImpair(n) qui retourne "Pair" si n est un nombre pair, sinon "Impair".

 

// Exercice 4 : Comparer deux nombres
// Écrire une fonction comparer(a, b) qui prend deux nombres et affiche :
 
// "a est plus grand" si a > b
// "b est plus grand" si b > a
// "Les deux sont égaux" si a === b
 
function comparer(a,b){
    if (a > b){
        return a = "est plus grand"
    } else if (a<b){
        ret

    }
}
 
// Exercice 5 : Compter le nombre de voyelles dans une chaîne
// Écrire une fonction compterVoyelles(chaine) qui compte le nombre de voyelles (a, e, i, o, u, y) dans une chaîne de caractères.
 
 
// Exercice 6 : Calculatrice simple
// Écrire une fonction calculer(a, b, operateur) qui prend deux nombres et un opérateur (+, -, *, /) et retourne le résultat.
 
 
 
 
// Exercice 7 : Deviner un animal
// Écrire une fonction animalCri(animal) qui prend un nom d'animal ("chien", "chat", "vache", "oiseau") et retourne le son qu'il fait.

// function animalCri(animal){
//     let animal = ["chien", "chat", "vache", "oiseau"]
//     for (i=0; )
// }
