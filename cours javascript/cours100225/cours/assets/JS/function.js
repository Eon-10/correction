/*----------------------
Les Fonctions
----------------------*/


// Une fonction en Javascript est un bloc de code réutilisable qui éxécude une tache spécifique

// Elle peut recevoir des paramètres, effectuer des opérations et retourner un resultat

// on peut déckarer une fonction en utilisant les mot clé "function"

// function direBonjour(){
//     console.log("bonjour");
      
// }

// // ici direBonjour est une fonction qui affiche bonjour dans la console
// // pour exécuté cette fonction on doit l'appeler 

// direBonjour() // affiche "bonjour dans la console"

function clog(message){
    console.log(message);
    
}
// console("j'ecris mon message")

// let b=12

// clog(typeof b)

let c=3
let d=4

function multi(n){
    return clog(n*2)
}

multi(c)
multi(d)

// ecrire une fonction réutilisable avec paramètre qui ecris un texte dans le dom avec write

function pastc(t){
    document.write("<h3 style='color:green'>"+ t +"</h3>")
}

let texte = " je suis le texte"
let texte2 = "je suis le 2eme texte"

pastc(texte)

function add( a, b ){
    return 
}