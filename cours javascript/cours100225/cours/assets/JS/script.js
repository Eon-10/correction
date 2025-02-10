console.log("Hello")

//Syntaxe de base 

// commentaire sur une ligne avec 2 "//"

/* commentaire sur plusieurs ligne

dsdf
gfgh
cxvn

*/

// -- 1 : déclarer ybe variable en JS

// En JS il y a DEUX variables let et const 
// pour déclarer une variable : 

let nom;

// -- 2 : affecter une valeur à une variable

nom="Mohamed";

let ville="Paris"; //on déclare une variable et on lui affecte une valeur en même temps

console.log(ville);

ville="Londre";

console.log(ville);

// avec une variable cont on doit la déclarer et lui affecter une valeur sinon il y a une erreur 
// const prenom; une erreur s'affiche

const prenom="néo";

console.log(prenom);

// on ne peut pas changer une variable const, une erreur vas s'afficher

//prenom="Oussmane"

// -- 03 : afficher une boite de dialogue

// alert("je suis une boite de dialogue");

// afficher dans la console avec la console.log()

console.log("const prenom :", prenom);


/*------------------------------------- LES TYPES DE VARIABLES --------------------------------------------- */


// 1-- : Les chaine de caractères (string)
// un string est entourer de guillemet obligatoirement

let vacances="2017"; 
let destination="Pantin";


// -- 2 : les nombre entier (integer === int)
// pas de guillemets 

let annee= 2017;

// -- 3 : les nombres décimaux avec "." (float)

const nombre_a_virgule=5.32;


// -- 4 les booléen true et false

let boolean_false=false;
let boolean_true=true;

// -- 5 typeof permet de connaitre le type de la variable

console.log("année :",annee);
console.log("type of year :", typeof annee);
console.log("boolean :",typeof boolean_false);
console.log("type de vacance :", typeof vacances)
console.log("vacances", parseInt(vacances))


let vacances_number=parseInt(vacances)

console.log("vacances_number to string",

    vacances_number.toString())

console.log("boolean to string", boolean_false.toString())

// string to float

let unChiffre="3.45"
console.log("string to number,", parseInt(unChiffre))
console.log("sting to float", parseFloat(unChiffre))

const tableau=["truc1", "truc2"]
console.log(typeof tableau)
